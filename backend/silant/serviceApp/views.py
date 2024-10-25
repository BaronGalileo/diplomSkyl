from django.shortcuts import render
from rest_framework.generics import get_object_or_404
from rest_framework.response import Response
from rest_framework import viewsets, status

from silantApp.permissions import IsServece, IsReclamation, IsManagerUser
from silantApp.utils import filter_by_role, authUser_is_person
from .models import *
from .serializers import *


class ServiceViewSet(viewsets.ModelViewSet):
    queryset = Service.objects.all()
    serializer_class = ServiceSerializer
    permission_classes = [IsServece, ]

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
    permission_classes = [IsReclamation, ]

    def list(self, request):
        queryset = Reclamation.objects.all()
        my_serializer = ReclamationSerializer
        if filter_by_role(request.user.id, queryset, my_serializer):
            return filter_by_role(request.user.id, queryset, my_serializer)
        else:
            return Response({'404': "NotFoundPage"})

    def create(self, request, *args, **kwargs):
        serializer = ReclamationPostSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        self.perform_create(serializer)
        headers = self.get_success_headers(serializer.data)
        return Response(serializer.data, status=status.HTTP_201_CREATED, headers=headers)

    def update(self, request, *args, **kwargs):
        partial = kwargs.pop('partial', False)
        instance = self.get_object()
        serializer = ReclamationPostSerializer(instance, data=request.data, partial=partial)
        serializer.is_valid(raise_exception=True)
        self.perform_update(serializer)

        if getattr(instance, '_prefetched_objects_cache', None):
            # If 'prefetch_related' has been applied to a queryset, we need to
            # forcibly invalidate the prefetch cache on the instance.
            instance._prefetched_objects_cache = {}

        return Response(serializer.data)


class TypeOfServiceViewSet(viewsets.ModelViewSet):
    queryset = TypeOfService.objects.all()
    serializer_class = TypeOfServiceSerializer
    permission_classes = [IsManagerUser, ]


class FailureNodeViewSet(viewsets.ModelViewSet):
    queryset = FailureNode.objects.all()
    serializer_class = FailureNodeSerializer
    permission_classes = [IsManagerUser, ]


class RecoveryMethodViewSet(viewsets.ModelViewSet):
    queryset = RecoveryMethod.objects.all()
    serializer_class = RecoveryMethodSerializer
    permission_classes = [IsManagerUser, ]
