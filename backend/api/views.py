from rest_framework import status
from rest_framework.views import APIView
from rest_framework.response import Response
from django.contrib.auth.models import User
from rest_framework.permissions import AllowAny
from .serializers import UserSerializer


class RegisterView(APIView):
    permission_classes = [AllowAny]
    
    def post(self, request):
        try:
            data = request.data
            first_name  = data['first_name']
            last_name   = data['last_name']
            username    = data['username']
            password    = data['password']
            re_password = data['re_password']
            
            if password == re_password:
                if len(password) >= 8:
                    if not User.objects.filter(username=username).exists():
                        user = User.objects.create_user(
                            first_name = first_name,
                            last_name  = last_name,
                            username   = username,
                            password   = password
                        )
                        
                        user.save()
                        
                        if User.objects.filter(username=username).exists():
                            return Response(
                                    {'success': 'Account created successfully'},
                                    status=status.HTTP_201_CREATED
                                )
                        else:
                            return Response(
                                    {'error': 'Something went wrong while creating your account'},
                                    status=status.HTTP_500_INTERNAL_SERVER_ERROR
                                )
                    else:
                        return Response(
                            {'error': 'Username already exists'},
                            status=status.HTTP_400_BAD_REQUEST
                        )
                else:
                    return Response(
                        {'error': 'Passwords must be atleast 8 characters long'},
                        status=status.HTTP_400_BAD_REQUEST
                    )
            else:
                return Response(
                    {'error': 'Passwords do not match'},
                    status=status.HTTP_400_BAD_REQUEST
                )
        except:
            return Response(
                {'error': 'Something went wrong while registering your account'},
                status=status.HTTP_500_INTERNAL_SERVER_ERROR
            )
            
            
class LoadUserView(APIView):
    def get(self, request):
        try:
            user = request.user
            user = UserSerializer(user)
            
            return Response(
                {'user': user.data},
                status=status.HTTP_200_OK
            )
        except:
            return Response(
                {'error': 'Something went wrong while loading the user'},
                status=status.HTTP_500_INTERNAL_SERVER_ERROR
            )