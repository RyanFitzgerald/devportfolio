from rest_framework import serializers
from .models import FinancialCompany, FinancialProduct, MortgageOption, JeonseOption


class FinancialCompanySerializer(serializers.ModelSerializer):
    class Meta:
        model = FinancialCompany
        fields = ['pk', 'field']


class FinancialProductSerializer(serializers.ModelSerializer):
    class FinancialProductSerializer(serializers.ModelSerializer):
        user = serializers.StringRelatedField(
            read_only=True)  # 사용자 필드를 읽기 전용으로 설정
        financial_company = serializers.StringRelatedField(
            source='fin_co_no', read_only=True)

        class Meta:
            model = FinancialProduct
            fields = [
                'fin_prdt_cd', 'fin_prdt_nm', 'join_way', 'loan_inci_expn',
                'erly_rpay_fee', 'dly_rate', 'loan_lmt', 'dcls_month',
                'dcls_strt_day', 'dcls_end_day', 'fin_co_subm_day', 'prdt_div',
                'financial_company', 'user'  # 추가된 user 필드
            ]
            read_only_fields = ['user']  # user 필드를 읽기 전용으로 설정


class MortgageOptionSerializer(serializers.ModelSerializer):
    financial_product = FinancialProductSerializer(
        source='fk', read_only=True)  # 외래키 필드

    class Meta:
        model = MortgageOption
        fields = [
            'pk', 'field', 'field2', 'field3', 'field4', 'field5',
            'field6', 'field7', 'field8', 'field9', 'field10',
            'financial_product'
        ]


class JeonseOptionSerializer(serializers.ModelSerializer):
    financial_product = FinancialProductSerializer(
        source='fk', read_only=True)  # 외래키 필드

    class Meta:
        model = JeonseOption
        fields = [
            'pk', 'field', 'field2', 'field3', 'field4', 'field5',
            'field6', 'field7', 'field8',
            'financial_product'
        ]
