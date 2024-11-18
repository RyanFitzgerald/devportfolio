from django.urls import path
from .views import FetchFinancialData

urlpatterns = [
    path('fetch-financial-data/', FetchFinancialData.as_view(), name='fetch_financial_data'),
]
