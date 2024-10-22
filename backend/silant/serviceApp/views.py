from django.shortcuts import render
from rest_framework.generics import get_object_or_404
from rest_framework.response import Response
from rest_framework import viewsets

from silantApp.permissions import IsServece, IsReclamation, IsManagerUser
from silantApp.utils import filter_by_role, authUser_is_person
from .models import *
from .serializers import *


class ServiceViewSet(viewsets.ModelViewSet):
    queryset = Service.objects.all()
    serializer_class = ServiceSerializer
    permission_classes = [IsServece,]

    def list(self, request):
        queryset = Service.objects.all()
        my_serializer = ServiceSerializer
        if filter_by_role(request.user.id, queryset, my_serializer):
            return filter_by_role(request.user.id, queryset, my_serializer)
        else:
            return Response({'404': "NotFoundPage"})


class ReclamationViewSet(viewsets.ModelViewSet):
    queryset = Reclamation.objects.all()
    serializer_class = ReclamationSerializer
    permission_classes = [IsReclamation,]

    def list(self, request):
        queryset = Reclamation.objects.all()
        my_serializer = ReclamationSerializer
        if filter_by_role(request.user.id, queryset, my_serializer):
            return filter_by_role(request.user.id, queryset, my_serializer)
        else:
            return Response({'404': "NotFoundPage"})



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