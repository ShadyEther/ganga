from django.http import JsonResponse

# Create your views here.
def api_login(request):
    return JsonResponse({"api_name":"login"})

def api_logout(request):
    return JsonResponse({"api_name":"logout"})

def api_register(request):
    return JsonResponse({"api_name":"register"})