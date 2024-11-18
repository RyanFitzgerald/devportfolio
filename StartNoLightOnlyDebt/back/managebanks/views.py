import requests
from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView
from .models import FinancialProduct, MortgageOption, JeonseOption, CreditLoanOption

class FetchFinancialData(APIView):
    def get(self, request):
        # API 엔드포인트와 인증키
        endpoints = {
            'credit': 'https://finlife.fss.or.kr/finlifeapi/creditLoanProductsSearch.json',
            'jeonse': 'https://finlife.fss.or.kr/finlifeapi/jeonseLoanProductsSearch.json',
            'mortgage': 'https://finlife.fss.or.kr/finlifeapi/mortgageLoanProductsSearch.json',
        }
        auth_key = 'a9151a31e6015873973e2a2402878959'  # 발급받은 인증키
        params = {
            'auth': auth_key,
            'topFinGrpNo': '020000',  # 금융업권별 코드 (은행)
            'pageNo': 1
        }

        all_responses = {}
        
        for key, url in endpoints.items():
            try:
                response = requests.get(url, params=params)
                if response.status_code == 200:
                    data = response.json()
                    all_responses[key] = data  # 데이터를 저장
                    self.process_data(key, data)  # 데이터 처리
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
        금융상품 데이터를 처리하여 데이터베이스에 저장
        """
        base_list = data.get('baseList', [])
        option_list = data.get('optionList', [])

        # 공통 FinancialProduct 데이터 처리
        for product_data in base_list:
            product, created = FinancialProduct.objects.update_or_create(
                product_id=product_data['fin_prdt_cd'],
                defaults={
                    'product_name': product_data['fin_prdt_nm'],
                    'join_way': product_data.get('join_way'),
                    'loan_inci_expn': product_data.get('loan_inci_expn'),
                    'erly_rpay_fee': product_data.get('erly_rpay_fee'),
                    'dly_rate': product_data.get('dly_rate'),
                    'loan_lmt': product_data.get('loan_lmt'),
                    'dcls_month': product_data.get('dcls_month'),
                    'dcls_strt_day': product_data.get('dcls_strt_day'),
                    'dcls_end_day': product_data.get('dcls_end_day'),
                    'fin_co_subm_day': product_data.get('fin_co_subm_day'),
                    'prdt_div': product_data.get('prdt_div'),
                }
            )

        # 상품별 옵션 처리
        for option_data in option_list:
            product = FinancialProduct.objects.filter(
                product_id=option_data.get('fin_prdt_cd')
            ).first()
            if not product:
                continue

            if key == 'credit':  # 개인신용대출
                CreditLoanOption.objects.update_or_create(
                    option_id=option_data['dcls_month'],
                    defaults={
                        'dcls_month': option_data.get('dcls_month'),
                        'crdt_prdt_type': option_data.get('crdt_prdt_type'),
                        'crdt_lend_rate_type': option_data.get('crdt_lend_rate_type'),
                        'crdt_lend_rate_type_nm': option_data.get('crdt_lend_rate_type_nm'),
                        'crdt_grad_1': option_data.get('crdt_grad_1'),
                        'crdt_grad_4': option_data.get('crdt_grad_4'),
                        'crdt_grad_5': option_data.get('crdt_grad_5'),
                        'crdt_grad_6': option_data.get('crdt_grad_6'),
                        'crdt_grad_10': option_data.get('crdt_grad_10'),
                        'crdt_grad_11': option_data.get('crdt_grad_11'),
                        'crdt_grad_12': option_data.get('crdt_grad_12'),
                        'crdt_grad_13': option_data.get('crdt_grad_13'),
                        'crdt_grad_avg': option_data.get('crdt_grad_avg'),
                        'fin_prdt_cd': product
                    }
                )
            elif key == 'jeonse':  # 전세자금대출
                JeonseOption.objects.update_or_create(
                    option_id=option_data['dcls_month'],
                    defaults={
                        'dcls_month': option_data.get('dcls_month'),
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
            elif key == 'mortgage':  # 주택담보대출
                MortgageOption.objects.update_or_create(
                    option_id=option_data['dcls_month'],
                    defaults={
                        'dcls_month': option_data['dcls_month'],
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
