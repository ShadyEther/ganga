from django.urls import path
from .views import RegisterView, LoadUserView

urls = [
    path('register', RegisterView.as_view(), name='account_register'),
    path('user', LoadUserView.as_view(), name='load_user')
]