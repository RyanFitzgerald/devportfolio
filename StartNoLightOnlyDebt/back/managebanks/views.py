import requests
from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView
from .models import FinancialProduct, MortgageOption, JeonseOption, CreditLoanOption, FinancialCompany
from datetime import datetime

def parse_date(date_str):
    try:
        return datetime.strptime(date_str, "%Y%m%d").date()
    except (ValueError, TypeError):
        return None


class FetchFinancialCompanyData(APIView):
    """
    금융회사 API를 통해 회사 데이터를 가져오고 저장합니다.
    """
    def get(self, request):
        url = "https://finlife.fss.or.kr/finlifeapi/companySearch.json"
        auth_key = 'a9151a31e6015873973e2a2402878959'
        params = {'auth': auth_key}

        try:
            # API 호출
            response = requests.get(url, params=params)
            if response.status_code != 200:
                return Response(
                    {"error": f"Failed to fetch data: {response.status_code}", "details": response.text},
                    status=response.status_code
                )
            
            # JSON 데이터 파싱
            data = response.json()
            base_list = data.get('result', {}).get('baseList', [])
            if not base_list:
                return Response({"message": "No company data found in API response."}, status=status.HTTP_200_OK)

            # 데이터 저장
            for company_data in base_list:
                fin_co_no = company_data.get('fin_co_no')
                kor_co_nm = company_data.get('kor_co_nm')
                homp_url = company_data.get('homp_url', None)  # 홈페이지 주소
                if not fin_co_no or not kor_co_nm:
                    continue  # 필수 데이터가 없으면 건너뜀

                # 데이터베이스에 저장 또는 업데이트
                FinancialCompany.objects.update_or_create(
                    company_id=fin_co_no,
                    defaults={
                        'company_name': kor_co_nm,
                        'homepage': homp_url  # null 값도 허용
                    }
                )

            return Response({"message": "Financial company data saved successfully."}, status=status.HTTP_200_OK)

        except requests.RequestException as e:
            # 요청 오류 처리
            return Response({"error": str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)


class FetchFinancialData(APIView):
    """
    대출 API를 통해 금융상품과 옵션 데이터를 가져오고 저장합니다.
    """
    def get(self, request):
        # 대출 API 엔드포인트
        endpoints = {
            'credit': 'https://finlife.fss.or.kr/finlifeapi/creditLoanProductsSearch.json',
            'jeonse': 'https://finlife.fss.or.kr/finlifeapi/rentHouseLoanProductsSearch.json',
            'mortgage': 'https://finlife.fss.or.kr/finlifeapi/mortgageLoanProductsSearch.json',
        }
        auth_key = 'a9151a31e6015873973e2a2402878959'
        params = {'auth': auth_key, 'topFinGrpNo': '020000', 'pageNo': 1}

        all_responses = {}
        for key, url in endpoints.items():
            try:
                response = requests.get(url, params=params)
                if response.status_code == 200:
                    data = response.json()
                    all_responses[key] = data
                    self.process_data(key, data)
                else:
                    all_responses[key] = {
                        "error": f"Failed to fetch data: {response.status_code}",
                        "details": response.text
                    }
            except requests.RequestException as e:
                all_responses[key] = {"error": str(e)}

        return Response(all_responses, status=status.HTTP_200_OK)

    def process_data(self, key, data):
        """
        대출 API 데이터를 처리합니다.
        """
        result = data.get('result', {})
        base_list = result.get('baseList', [])
        option_list = result.get('optionList', [])

        for product_data in base_list:
            fin_co_no = product_data.get('fin_co_no')
            fin_co_name = product_data.get('kor_co_nm')
            if not fin_co_no:
                continue

            financial_company = FinancialCompany.objects.filter(company_id=fin_co_no).first()
            if not financial_company:
                print(f"Financial company with ID {fin_co_no} not found.")
                continue

            FinancialProduct.objects.update_or_create(
                product_id=product_data['fin_prdt_cd'],
                defaults={
                    'fin_co_no': financial_company,
                    'product_name': product_data.get('fin_prdt_nm'),
                    'join_way': product_data.get('join_way'),
                    'loan_inci_expn': product_data.get('loan_inci_expn'),
                    'erly_rpay_fee': product_data.get('erly_rpay_fee'),
                    'dly_rate': product_data.get('dly_rate'),
                    'loan_lmt': product_data.get('loan_lmt'),
                    'dcls_month': parse_date(product_data.get('dcls_month')),
                    'dcls_strt_day': parse_date(product_data.get('dcls_strt_day')),
                    'dcls_end_day': parse_date(product_data.get('dcls_end_day')),
                    'fin_co_subm_day': parse_date(product_data.get('fin_co_subm_day')),
                    'prdt_div': product_data.get('prdt_div'),
                }
            )

        self.process_options(key, option_list)

    def process_options(self, key, option_list):
        """
        대출 옵션 데이터를 처리합니다.
        """
        for option_data in option_list:
            product = FinancialProduct.objects.filter(product_id=option_data.get('fin_prdt_cd')).first()
            if not product:
                continue

            if key == 'credit':
                CreditLoanOption.objects.update_or_create(
                    option_id=option_data['fin_prdt_cd'],
                    defaults={
                        'dcls_month': parse_date(option_data.get('dcls_month')),
                        'crdt_prdt_type': option_data.get('crdt_prdt_type'),
                        'crdt_lend_rate_type': option_data.get('crdt_lend_rate_type'),
                        'crdt_lend_rate_type_nm': option_data.get('crdt_lend_rate_type_nm'),
                        'crdt_grad_1': option_data.get('crdt_grad_1'),
                        'crdt_grad_4': option_data.get('crdt_grad_4'),
                        'crdt_grad_5': option_data.get('crdt_grad_5'),
                        'crdt_grad_6': option_data.get('crdt_grad_6'),
                        'crdt_grad_avg': option_data.get('crdt_grad_avg'),
                        'fin_prdt_cd': product
                    }
                )
            elif key == 'jeonse':
                JeonseOption.objects.update_or_create(
                    option_id=option_data['fin_prdt_cd'],
                    defaults={
                        'dcls_month': parse_date(option_data.get('dcls_month')),
                        'rpay_type': option_data.get('rpay_type'),
                        'rpay_type_nm': option_data.get('rpay_type_nm'),
                        'lend_rate_type': option_data.get('lend_rate_type'),
                        'lend_rate_type_nm': option_data.get('lend_rate_type_nm'),
                        'lend_rate_min': option_data.get('lend_rate_min'),
                        'lend_rate_max': option_data.get('lend_rate_max'),
                        'lend_rate_avg': option_data.get('lend_rate_avg'),
                        'fin_prdt_cd': product
                    }
                )
            elif key == 'mortgage':
                MortgageOption.objects.update_or_create(
                    option_id=option_data['fin_prdt_cd'],
                    defaults={
                        'dcls_month': parse_date(option_data['dcls_month']),
                        'mrtg_type': option_data.get('mrtg_type'),
                        'mrtg_type_nm': option_data.get('mrtg_type_nm'),
                        'rpay_type': option_data.get('rpay_type'),
                        'rpay_type_nm': option_data.get('rpay_type_nm'),
                        'lend_rate_type': option_data.get('lend_rate_type'),
                        'lend_rate_type_nm': option_data.get('lend_rate_type_nm'),
                        'lend_rate_min': option_data.get('lend_rate_min'),
                        'lend_rate_max': option_data.get('lend_rate_max'),
                        'lend_rate_avg': option_data.get('lend_rate_avg'),
                        'fin_prdt_cd': product
                    }
                )
