from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.exceptions import AuthenticationFailed
import jwt
import datetime
import json
from .serializers import *
from .models import *

class RegisterView(APIView):
    def post(self, request):
        serializer = UserSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data)
    

class LoginView(APIView):
    def post(sekf, request):
        email = request.data['email']
        password = request.data['password']

        user = User.objects.filter(email=email).first()

        if user is None:
            raise AuthenticationFailed('User not found!')
        
        if not user.check_password(password):
            raise AuthenticationFailed('Wrong password entered!')
        
        payload = {
            'id': user.id,
            'expiry': json.dumps((datetime.datetime.now(datetime.UTC) + datetime.timedelta(minutes=60)).strftime("%Y-%m-%d %H:%M:%S")),
            'created_at': json.dumps(datetime.datetime.now(datetime.UTC).strftime("%Y-%m-%d %H:%M:%S"))
        }
        
        token = jwt.encode(payload, 'secret')

        response = Response()
        response.set_cookie(key='jwt_token', value=token, httponly=True)
        response.data = {
            'token': token
        }

        return response
    

class UserView(APIView):
    def get(self, request):
        token = request.COOKIES.get('jwt_token')
        
        if not token:
            raise AuthenticationFailed('Unauthenticated')
        
        try:
            payload = jwt.decode(token, 'secret', algorithms=['HS256'])
        except jwt.ExpiredSignatureError:
            raise AuthenticationFailed('Unauthenticated')
        
        user = User.objects.filter(id=payload['id']).first()
        serializer = UserSerializer(user)
        return Response(serializer.data)
    

class LogoutView(APIView):
    def post(self, request):
        response = Response()
        response.delete_cookie('jwt_token')
        response.data = {
            'message': 'success'
        }
        return response