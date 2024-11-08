from django.urls import path
from . import views

urlpatterns = [
    path('loans/preferred/', views.preferred_loan_list, name='preferred_loan_list'),
]
