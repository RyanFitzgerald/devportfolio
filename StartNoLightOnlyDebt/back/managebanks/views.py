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

class FetchFinancialData(APIView):
    def get(self, request):
        # 로그인 확인
        # if not request.user.is_authenticated:
        #     return Response(
        #         {"error": "Authentication required to fetch financial data."},
        #         status=status.HTTP_403_FORBIDDEN
        #     )

        # API 엔드포인트와 인증키
        endpoints = {
            'credit': 'https://finlife.fss.or.kr/finlifeapi/creditLoanProductsSearch.json',
            'jeonse': 'https://finlife.fss.or.kr/finlifeapi/rentHouseLoanProductsSearch.json',
            'mortgage': 'https://finlife.fss.or.kr/finlifeapi/mortgageLoanProductsSearch.json',
        }
        auth_key = 'a9151a31e6015873973e2a2402878959'
        params = {
            'auth': auth_key,
            'topFinGrpNo': '020000',
            'pageNo': 1
        }

        all_responses = {}
        for key, url in endpoints.items():
            try:
                response = requests.get(url, params=params)
                if response.status_code == 200:
                    data = response.json()
                    all_responses[key] = data
                    self.process_data(key, data)  # self를 사용하여 메서드 호출
                else:
                    all_responses[key] = {
                        "error": f"Failed to fetch data: {response.status_code}",
                        "details": response.text
                    }
            except requests.RequestException as e:
                all_responses[key] = {"error": str(e)}

        return Response(all_responses, status=status.HTTP_200_OK)

    def process_data(self, key, data):
        result = data.get('result', {})
        base_list = result.get('baseList', [])
        option_list = result.get('optionList', [])
        
        for product_data in base_list:
            fin_co_no = product_data.get('fin_co_no')
            fin_co_name = product_data.get('kor_co_nm')
            if not fin_co_no:
                print(f"Missing fin_co_no for product {product_data.get('fin_prdt_cd')}")
                continue

            financial_company, _ = FinancialCompany.objects.get_or_create(
                company_id=fin_co_no,
                defaults={'company_name': fin_co_name}
            )

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
        for option_data in option_list:
            product = FinancialProduct.objects.filter(
                product_id=option_data.get('fin_prdt_cd')
            ).first()
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
