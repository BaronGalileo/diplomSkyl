from django.contrib.auth import authenticate, login, logout
from django.http import HttpResponseRedirect
from django.shortcuts import render
from django.urls import reverse
from rest_framework.response import Response
from rest_framework.views import APIView

from .forms import LoginUserForm
from .models import *


def login_user(request):
    if request.method == 'POST':
        form = LoginUserForm(request.POST)
        if form.is_valid():
            cd = form.cleaned_data
            user = authenticate(request, username=cd['username'],
                                password=cd['password'])
            if user and user.is_active:
                login(request, user)
                return HttpResponseRedirect(reverse('api'))
        else:
            form = LoginUserForm()

    form = LoginUserForm()
    return render(request, 'users/login.html', {'form': form})


def logout_user(request):
    logout(request)
    return HttpResponseRedirect(reverse('users:login'))


class RoleView(APIView):

    def get(self, request):
        manager = Manager.objects.filter(user_id=request.user.id).values()
        servise_org = ServiseOrganization.objects.filter(user_id=request.user.id).values()
        client = Client.objects.filter(user_id=request.user.id).values()
        my_dict = {
            'manager': manager,
            'servise_org': servise_org,
            'client': client,
        }
        return Response({'roles': {my_dict.get('servise_org'), my_dict.get('client'), my_dict.get('manager'), }})
