from django.shortcuts import render
from django.urls import path
from django.http import HttpResponse
from rest_framework import viewsets
from test2.models import agent_login
from test2.serializers import AgentSerializer
from test2.serializers import RoleSerializers
from test2.models import roles
from test2.models import login_status
from test2.serializers import LoginStatusSerializers

class AgentloginViewset(viewsets.ModelViewSet):
    queryset= agent_login.objects.all()
    serializer_class= AgentSerializer

class RolesViewset(viewsets.ModelViewSet):
    queryset = roles.objects.all()
    serializer_class = RoleSerializers

class LoginStatusViewset(viewsets.ModelViewSet):
    queryset = login_status.objects.all()
    serializer_class = LoginStatusSerializers
   

