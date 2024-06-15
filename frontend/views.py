from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.
def login(request):
    return HttpResponse("Hey there this is login page")

def register(request):
    return HttpResponse("Hey there this is register page")

def home(request):
    return HttpResponse("Hey there this is home page")