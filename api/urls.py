from django.urls import path
from . import views

urlpatterns = [
    path("login", views.api_login),
    path("logout", views.api_logout),
    path("register", views.api_register)
]