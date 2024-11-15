from django.db import models
from django.conf import settings


class FinancialCompany(models.Model):
    company_id = models.CharField(max_length=255, primary_key=True)  # 'pk'를 'company_id'로 변경
    company_name = models.CharField(max_length=255, null=True)      # 회사명

    def __str__(self):
        return self.company_name


class FinancialProduct(models.Model):
    product_id = models.CharField(max_length=255, primary_key=True)  # 'pk'를 'product_id'로 변경
    user = models.ForeignKey(settings.AUTH_USER_MODEL,on_delete=models.CASCADE)  # 사용자와의 연결
    product_name = models.CharField(max_length=255, null=True)           # 상품명
    join_way = models.CharField(max_length=255, null=True)               # 가입 방법
    loan_inci_expn = models.TextField(null=True)                         # 부대 비용
    erly_rpay_fee = models.TextField(null=True)                          # 중도상환수수료
    dly_rate = models.TextField(null=True)                               # 연체 이자율
    loan_lmt = models.CharField(max_length=255, null=True)               # 대출 한도
    dcls_month = models.CharField(max_length=6, null=True)               # 공시 제출 월
    dcls_strt_day = models.DateField(null=True)                          # 공시 시작일
    dcls_end_day = models.DateField(null=True)                           # 공시 종료일
    fin_co_subm_day = models.DateTimeField(null=True)                    # 금융회사 제출일
    prdt_div = models.CharField(max_length=1, null=True)                 # 상품 구분
    fin_co_no = models.ForeignKey(FinancialCompany, on_delete=models.CASCADE)

    def __str__(self):
        return self.product_name


class MortgageOption(models.Model):
    option_id = models.CharField(max_length=255, primary_key=True)  # 'pk'를 'option_id'로 변경
    dcls_month = models.CharField(max_length=6, null=True)          # 공시 제출 월
    mrtg_type = models.CharField(max_length=1, null=True)           # 담보 종류 코드
    mrtg_type_nm = models.CharField(max_length=255, null=True)      # 담보 종류명
    rpay_type = models.CharField(max_length=1, null=True)           # 상환 방식 코드
    rpay_type_nm = models.CharField(max_length=255, null=True)      # 상환 방식명
    lend_rate_type = models.CharField(max_length=1, null=True)      # 금리 유형 코드
    lend_rate_type_nm = models.CharField(max_length=255, null=True)  # 금리 유형명
    lend_rate_min = models.DecimalField(max_digits=5, decimal_places=2, null=True)  # 최소 금리
    lend_rate_max = models.DecimalField(max_digits=5, decimal_places=2, null=True)  # 최대 금리
    lend_rate_avg = models.DecimalField(max_digits=5, decimal_places=2, null=True)  # 평균 금리
    fin_prdt_cd = models.ForeignKey(FinancialProduct, on_delete=models.CASCADE)

    def __str__(self):
        return f"Option {self.option_id} for {self.fin_prdt_cd}"


class JeonseOption(models.Model):
    option_id = models.CharField(max_length=255, primary_key=True)  # 'pk'를 'option_id'로 변경
    dcls_month = models.DateField(null=True)                        # 공시 제출 월
    rpay_type = models.CharField(max_length=1, null=True)           # 상환 방식 코드
    rpay_type_nm = models.CharField(max_length=255, null=True)      # 상환 방식명
    lend_rate_type = models.CharField(max_length=1, null=True)      # 금리 유형 코드
    lend_rate_type_nm = models.CharField(max_length=255, null=True)  # 금리 유형명
    lend_rate_min = models.DecimalField(max_digits=5, decimal_places=2, null=True)  # 최소 금리
    lend_rate_max = models.DecimalField(max_digits=5, decimal_places=2, null=True)  # 최대 금리
    lend_rate_avg = models.DecimalField(max_digits=5, decimal_places=2, null=True)  # 평균 금리
    fin_prdt_cd = models.ForeignKey(FinancialProduct, on_delete=models.CASCADE)

    def __str__(self):
        return f"Option {self.option_id} for {self.fin_prdt_cd}"
