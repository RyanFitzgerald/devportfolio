from django.contrib.auth.models import AbstractUser
from django.db import models
from managebanks.models import FinancialCompany


class User(AbstractUser):
    name = models.CharField(max_length=100)
    credit_grade = models.IntegerField(null=True, blank=True)     # 신용 등급
    email = models.EmailField(unique=True)
    date_joined = models.DateTimeField(auto_now_add=True)

    # 다대다 관계 필드: 선호 은행
    preferred_banks = models.ManyToManyField(
        FinancialCompany, related_name="preferred_by_users")

    def __str__(self):
        return self.username
