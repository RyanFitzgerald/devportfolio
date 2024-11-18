from allauth.account.adapter import get_adapter
from allauth.account.utils import setup_user_email
from dj_rest_auth.registration.serializers import RegisterSerializer
from rest_framework import serializers
from django.contrib.auth import get_user_model
from managebanks.models import FinancialCompany

User = get_user_model()


class CustomRegisterSerializer(RegisterSerializer):
    username = serializers.CharField(required=True)  # 추가 필드
    preferred_banks = serializers.PrimaryKeyRelatedField(
        queryset=FinancialCompany.objects.all(), many=True, required=False
    )

    def get_cleaned_data(self):
        data = super().get_cleaned_data()
        data['name'] = self.validated_data.get('name', '')
        data['preferred_banks'] = self.validated_data.get(
            'preferred_banks', [])
        return data

    def save(self, request):
        user = super().save(request)
        user.name = self.cleaned_data.get('name')
        user.save()

        # 선호 은행 저장
        preferred_banks = self.cleaned_data.get('preferred_banks')
        if preferred_banks:
            user.preferred_banks.set(preferred_banks)

        return user
