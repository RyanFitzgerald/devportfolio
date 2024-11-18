from django.urls import path
from .views import FetchFinancialData, FetchFinancialCompanyData

urlpatterns = [
    path('fetch-financial-data/', FetchFinancialData.as_view(), name='fetch_financial_data'),
    path('fetch-financial-company/', FetchFinancialCompanyData.as_view(), name='fetch_financial_company'),
]
