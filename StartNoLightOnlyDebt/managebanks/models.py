from django.db import models

class FinancialCompany(models.Model):
    pk = models.CharField(max_length=255, primary_key=True)  # 금융회사 번호
    field = models.CharField(max_length=255, null=True)      # 회사명

    def __str__(self):
        return self.field

class FinancialProduct(models.Model):
    pk = models.CharField(max_length=255, primary_key=True)       # 금융상품 코드
    field = models.CharField(max_length=255, null=True)           # 상품명
    field2 = models.CharField(max_length=255, null=True)          # 가입 방법
    field3 = models.TextField(null=True)                          # 부대 비용
    field4 = models.TextField(null=True)                          # 중도상환수수료
    field5 = models.TextField(null=True)                          # 연체 이자율
    field6 = models.CharField(max_length=255, null=True)          # 대출 한도
    field7 = models.CharField(max_length=6, null=True)            # 공시 제출 월
    field8 = models.DateField(null=True)                          # 공시 시작일
    field9 = models.DateField(null=True)                          # 공시 종료일
    field10 = models.DateTimeField(null=True)                     # 금융회사 제출일
    field11 = models.CharField(max_length=1, null=True)           # 상품 구분
    fk = models.ForeignKey(FinancialCompany, on_delete=models.CASCADE)

    def __str__(self):
        return self.field

class MortgageOption(models.Model):
    pk = models.CharField(max_length=255, primary_key=True)       # 옵션 ID
    field = models.CharField(max_length=6, null=True)             # 공시 제출 월
    field2 = models.CharField(max_length=1, null=True)            # 담보 종류 코드
    field3 = models.CharField(max_length=255, null=True)          # 담보 종류명
    field4 = models.CharField(max_length=1, null=True)            # 상환 방식 코드
    field5 = models.CharField(max_length=255, null=True)          # 상환 방식명
    field6 = models.CharField(max_length=1, null=True)            # 금리 유형 코드
    field7 = models.CharField(max_length=255, null=True)          # 금리 유형명
    field8 = models.DecimalField(max_digits=5, decimal_places=2, null=True)  # 최소 금리
    field9 = models.DecimalField(max_digits=5, decimal_places=2, null=True)  # 최대 금리
    field10 = models.DecimalField(max_digits=5, decimal_places=2, null=True) # 평균 금리
    fk = models.ForeignKey(FinancialProduct, on_delete=models.CASCADE)

    def __str__(self):
        return f"Option {self.pk} for {self.fk}"

class JeonseOption(models.Model):
    pk = models.CharField(max_length=255, primary_key=True)       # 옵션 ID
    field = models.DateField(null=True)                           # 공시 제출 월
    field2 = models.CharField(max_length=1, null=True)            # 상환 방식 코드
    field3 = models.CharField(max_length=255, null=True)          # 상환 방식명
    field4 = models.CharField(max_length=1, null=True)            # 금리 유형 코드
    field5 = models.CharField(max_length=255, null=True)          # 금리 유형명
    field6 = models.DecimalField(max_digits=5, decimal_places=2, null=True)  # 최소 금리
    field7 = models.DecimalField(max_digits=5, decimal_places=2, null=True)  # 최대 금리
    field8 = models.DecimalField(max_digits=5, decimal_places=2, null=True)  # 평균 금리
    fk = models.ForeignKey(FinancialProduct, on_delete=models.CASCADE)

    def __str__(self):
        return f"Option {self.pk} for {self.fk}"
