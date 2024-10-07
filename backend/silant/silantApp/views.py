from rest_framework import generics, viewsets
from rest_framework.generics import get_object_or_404
from rest_framework.response import Response
from rest_framework.views import APIView

from serviceApp.models import FailureNode
from usersApp.models import *
from .models import *
from .permissions import IsManagerUser, IsServece
from .serializers import *



class MachineViewSet(viewsets.ModelViewSet):

    queryset = Machine.objects.all()
    serializer_class = MachineSerializer
    permission_classes = [IsManagerUser]

    def list(self, request):
        machines = Machine.objects.all()
        manager = Manager.objects.filter(user=request.user)
        servise_organization = ServiseOrganization.objects.filter(user=request.user)
        client = Client.objects.filter(user=request.user)
        if (request.user.is_authenticated and
                manager or servise_organization or client):
            serializer = MachineSerializer(machines, many=True)
        else:
            serializer = MachineSerializerNotAuth(machines, many=True)
        return Response(serializer.data)

    def retrieve(self, request, pk=None):
        machines = Machine.objects.all()
        manager = Manager.objects.filter(user=request.user)
        servise_organization = ServiseOrganization.objects.filter(user=request.user)
        client = Client.objects.filter(user=request.user)
        machine = get_object_or_404(machines, pk=pk)
        if (request.user.is_authenticated and
                manager or servise_organization or client):
            serializer = MachineSerializer(machine)
        else:
            serializer = MachineSerializerNotAuth(machine)
        return Response(serializer.data)


# class MachineAPIView(APIView):
#     def get(self, request):
#         machines = Machine.objects.all()
#         manager = Manager.objects.filter(user=request.user)
#         servise_organization = ServiseOrganization.objects.filter(user=request.user)
#         client = Client.objects.filter(user=request.user)
#
#         if (request.user.is_authenticated and
#                 manager or servise_organization or client):
#             serializer = MachineSerializer(machines, many=True)
#         else:
#             serializer = MachineSerializerNotAuth(machines, many=True)
#         return Response(serializer.data)
#
#
# class MachineCreateAPIView(generics.ListCreateAPIView):
#     queryset = Machine.objects.all()
#     serializer_class = MachineSerializer
#     permission_classes = (IsManagerUser,)
#
# class MachineUpdateAPIView(generics.RetrieveUpdateDestroyAPIView):
#     queryset = Machine.objects.all()
#     serializer_class = MachineSerializer
#     permission_classes = (IsManagerUser,)
#
#
# class CarModelCreateAPIView(generics.ListCreateAPIView):
#     queryset = CarModel.objects.all()
#     serializer_class = CarModelSerializer
#     permission_classes = (IsManagerUser,)
#
#
# class CarModelUpdateAPIView(generics.RetrieveUpdateDestroyAPIView):
#     queryset = CarModel.objects.all()
#     serializer_class = CarModelSerializer
#     permission_classes = (IsManagerUser,)
#
# class FailureNodeUpdateAPIView(generics.RetrieveUpdateDestroyAPIView):
#     queryset = FailureNode.objects.all()
#     serializer_class = FailureNodeSerializer
#     permission_classes = (IsServece,)
#
#
#
#


