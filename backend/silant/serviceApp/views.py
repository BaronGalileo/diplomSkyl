from django.shortcuts import render
from rest_framework import viewsets

from silantApp.permissions import IsServece, IsReclamation, IsManagerUser
from silantApp.utils import filter_by_role
from .models import *
from .serializers import *


class ServiceViewSet(viewsets.ModelViewSet):
    queryset = Service.objects.all()
    serializer_class = ServiceSerializer
    permission_classes = [IsServece,]


class ReclamationViewSet(viewsets.ModelViewSet):
    queryset = Reclamation.objects.all()
    serializer_class = ReclamationSerializer
    permission_classes = [IsReclamation,]

    def list(self, request):
        queryset = Reclamation.objects.all()
        my_serializer = ReclamationSerializer
        if filter_by_role(request, queryset, my_serializer):
            return filter_by_role(request, queryset, my_serializer)



class TypeOfServiceViewSet(viewsets.ModelViewSet):
    queryset = TypeOfService.objects.all()
    serializer_class = TypeOfServiceSerializer
    permission_classes = [IsManagerUser,]


class FailureNodeViewSet(viewsets.ModelViewSet):
    queryset = FailureNode.objects.all()
    serializer_class = FailureNodeSerializer
    permission_classes = [IsManagerUser,]


class RecoveryMethodViewSet(viewsets.ModelViewSet):
    queryset = RecoveryMethod.objects.all()
    serializer_class = RecoveryMethodSerializer
    permission_classes = [IsManagerUser,]