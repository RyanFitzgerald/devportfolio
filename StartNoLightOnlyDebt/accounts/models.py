from django.contrib.auth.models import AbstractUser
from django.db import models
from managebanks.models import FinancialCompany 

class User(AbstractUser):
    name = models.CharField(max_length=100)
    kcb_score = models.IntegerField(null=True, blank=True)        # KCB 신용 점수
    nice_score = models.IntegerField(null=True, blank=True)       # NICE 신용 점수
    credit_grade = models.IntegerField(null=True, blank=True)     # 신용 등급
    region_code = models.CharField(max_length=10)                 # 지역 코드
    email = models.EmailField(unique=True)
    date_joined = models.DateTimeField(auto_now_add=True)

    # 다대다 관계 필드 추가
    preferred_banks = models.ManyToManyField(FinancialCompany, related_name="preferred_by_users")
    
    def __str__(self):
        return self.username

class UserPreferredBank(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    financial_company = models.ForeignKey(FinancialCompany, on_delete=models.CASCADE)
    
    class Meta:
        unique_together = ('user', 'financial_company')  # 동일 은행 중복 저장 방지

    def __str__(self):
        return f"{self.user.username} - {self.financial_company.kor_co_nm}"
