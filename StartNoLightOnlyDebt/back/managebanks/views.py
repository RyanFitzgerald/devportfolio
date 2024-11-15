import requests
from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView
from .models import FinancialProduct, MortgageOption, JeonseOption, CreditLoanOption
from .serializers import (
    FinancialProductSerializer,
    MortgageOptionSerializer,
    JeonseOptionSerializer,
    CreditLoanOptionSerializer,
)

class FetchFinancialData(APIView):
    def get(self, request):
        # 금융감독원 API 호출
        url = 'https://api.fss.or.kr/financial-products'
        headers = {'Authorization': 'Bearer a9151a31e6015873973e2a2402878959'}
        
        try:
            response = requests.get(url, headers=headers)
            if response.status_code == 200:
                data = response.json()
                
                # 필요한 데이터를 추출하여 데이터베이스에 저장
                for product_data in data.get('baseList', []):
                    # FinancialProduct 생성 또는 업데이트
                    product, created = FinancialProduct.objects.update_or_create(
                        product_id=product_data['fin_prdt_cd'],
                        defaults={
                            'product_name': product_data['fin_prdt_nm'],
                            'join_way': product_data['join_way'],
                            'loan_inci_expn': product_data['loan_inci_expn'],
                            'erly_rpay_fee': product_data['erly_rpay_fee'],
                            'dly_rate': product_data['dly_rate'],
                            'loan_lmt': product_data['loan_lmt'],
                            'dcls_month': product_data['dcls_month'],
                            'dcls_strt_day': product_data['dcls_strt_day'],
                            'dcls_end_day': product_data.get('dcls_end_day'),
                            'fin_co_subm_day': product_data['fin_co_subm_day'],
                            'prdt_div': product_data['prdt_div']
                        }
                    )

                    # MortgageOption, JeonseOption, CreditLoanOption 데이터 처리
                    for option_data in data.get('optionList', []):
                        if product_data['prdt_div'] == 'M':  # 주택담보대출
                            MortgageOption.objects.update_or_create(
                                option_id=option_data['dcls_month'],
                                defaults={
                                    'dcls_month': option_data['dcls_month'],
                                    'mrtg_type': option_data['mrtg_type'],
                                    'mrtg_type_nm': option_data['mrtg_type_nm'],
                                    'rpay_type': option_data['rpay_type'],
                                    'rpay_type_nm': option_data['rpay_type_nm'],
                                    'lend_rate_type': option_data['lend_rate_type'],
                                    'lend_rate_type_nm': option_data['lend_rate_type_nm'],
                                    'lend_rate_min': option_data['lend_rate_min'],
                                    'lend_rate_max': option_data['lend_rate_max'],
                                    'lend_rate_avg': option_data['lend_rate_avg'],
                                    'fin_prdt_cd': product
                                }
                            )
                        elif product_data['prdt_div'] == 'R':  # 전세자금대출
                            JeonseOption.objects.update_or_create(
                                option_id=option_data['dcls_month'],
                                defaults={
                                    'dcls_month': option_data['dcls_month'],
                                    'rpay_type': option_data['rpay_type'],
                                    'rpay_type_nm': option_data['rpay_type_nm'],
                                    'lend_rate_type': option_data['lend_rate_type'],
                                    'lend_rate_type_nm': option_data['lend_rate_type_nm'],
                                    'lend_rate_min': option_data['lend_rate_min'],
                                    'lend_rate_max': option_data['lend_rate_max'],
                                    'lend_rate_avg': option_data['lend_rate_avg'],
                                    'fin_prdt_cd': product
                                }
                            )
                        elif product_data['prdt_div'] == 'C':  # 개인신용대출
                            CreditLoanOption.objects.update_or_create(
                                option_id=option_data['dcls_month'],
                                defaults={
                                    'dcls_month': option_data['dcls_month'],
                                    'crdt_prdt_type': option_data['crdt_prdt_type'],
                                    'crdt_lend_rate_type': option_data['crdt_lend_rate_type'],
                                    'crdt_lend_rate_type_nm': option_data['crdt_lend_rate_type_nm'],
                                    'crdt_grad_1': option_data.get('crdt_grad_1'),
                                    'crdt_grad_4': option_data.get('crdt_grad_4'),
                                    'crdt_grad_5': option_data.get('crdt_grad_5'),
                                    'crdt_grad_6': option_data.get('crdt_grad_6'),
                                    'crdt_grad_10': option_data.get('crdt_grad_10'),
                                    'crdt_grad_11': option_data.get('crdt_grad_11'),
                                    'crdt_grad_12': option_data.get('crdt_grad_12'),
                                    'crdt_grad_13': option_data.get('crdt_grad_13'),
                                    'crdt_grad_avg': option_data['crdt_grad_avg'],
                                    'fin_prdt_cd': product
                                }
                            )
                
                return Response({"message": "Data fetched and saved successfully"}, status=status.HTTP_200_OK)
            else:
                return Response({"error": "Failed to fetch data from API"}, status=status.HTTP_400_BAD_REQUEST)
        
        except requests.RequestException as e:
            return Response({"error": str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
