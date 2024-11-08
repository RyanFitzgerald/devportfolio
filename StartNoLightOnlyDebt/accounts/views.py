from django.shortcuts import render, redirect
from managebanks.models import FinancialProduct
from .models import User
def preferred_loan_list(request):
    user = request.user
    if user.is_authenticated:
        # 선호 은행에 해당하는 금융상품 필터링
        preferred_banks = user.preferred_banks.all()  # 사용자가 선택한 선호 은행 목록
        loans = FinancialProduct.objects.filter(fk__in=preferred_banks)  # 선호 은행의 금융상품
    else:
        loans = FinancialProduct.objects.none()  # 비로그인 상태에서는 빈 쿼리셋 반환
    
    return render(request, 'loan_list.html', {'loans': loans})
