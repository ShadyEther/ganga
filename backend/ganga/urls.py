from django.contrib import admin
from django.urls import path, include
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView

from api.views import RegisterView, LoadUserView


urlpatterns = [
    path("admin/", admin.site.urls),
    path("api/token/", TokenObtainPairView.as_view(), name='get_token'),
    path("api/token/refresh/", TokenRefreshView.as_view(), name='refresh_token'),
    path('api/account/register', RegisterView.as_view(), name='register_account'),
    path('api/account/user', LoadUserView.as_view(), name='load_user')
    # path("api/", include("api.urls"))
]
