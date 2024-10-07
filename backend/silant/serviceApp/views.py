from django.shortcuts import render
from rest_framework import viewsets

from silantApp.permissions import IsServece, IsReclamation
from .models import *
from .serializers import ServiceSerializer, ReclamationSerializer


class ServiceViewSet(viewsets.ModelViewSet):
    queryset = Service.objects.all()
    serializer_class = ServiceSerializer
    permission_classes = [IsServece,]


class ReclamationViewSet(viewsets.ModelViewSet):
    queryset = Reclamation.objects.all()
    serializer_class = ReclamationSerializer
    permission_classes = [IsReclamation,]