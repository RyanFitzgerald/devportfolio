from rest_framework import serializers
from .models import FinancialCompany, FinancialProduct, MortgageOption, JeonseOption, CreditLoanOption

# FinancialCompany Serializer
class FinancialCompanySerializer(serializers.ModelSerializer):
    class Meta:
        model = FinancialCompany
        fields = ['company_id', 'company_name']


# FinancialProduct Serializer
class FinancialProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = FinancialProduct
        fields = [
            'product_id', 'user', 'product_name', 'join_way', 'loan_inci_expn',
            'erly_rpay_fee', 'dly_rate', 'loan_lmt', 'dcls_month', 
            'dcls_strt_day', 'dcls_end_day', 'fin_co_subm_day', 
            'prdt_div', 'fin_co_no'
        ]
        read_only_fields = ['user']


# MortgageOption Serializer
class MortgageOptionSerializer(serializers.ModelSerializer):
    class Meta:
        model = MortgageOption
        fields = [
            'option_id', 'dcls_month', 'mrtg_type', 'mrtg_type_nm', 
            'rpay_type', 'rpay_type_nm', 'lend_rate_type', 'lend_rate_type_nm',
            'lend_rate_min', 'lend_rate_max', 'lend_rate_avg', 'fin_prdt_cd'
        ]


# JeonseOption Serializer
class JeonseOptionSerializer(serializers.ModelSerializer):
    class Meta:
        model = JeonseOption
        fields = [
            'option_id', 'dcls_month', 'rpay_type', 'rpay_type_nm', 
            'lend_rate_type', 'lend_rate_type_nm', 'lend_rate_min', 
            'lend_rate_max', 'lend_rate_avg', 'fin_prdt_cd'
        ]


# CreditLoanOption Serializer
class CreditLoanOptionSerializer(serializers.ModelSerializer):
    class Meta:
        model = CreditLoanOption
        fields = [
            'option_id', 'dcls_month', 'crdt_prdt_type', 'crdt_lend_rate_type', 
            'crdt_lend_rate_type_nm', 'crdt_grad_1', 'crdt_grad_4', 'crdt_grad_5', 
            'crdt_grad_6', 'crdt_grad_10', 'crdt_grad_11', 'crdt_grad_12', 
            'crdt_grad_13', 'crdt_grad_avg', 'fin_prdt_cd'
        ]
