from rest_framework import viewsets
from rest_framework.generics import get_object_or_404
from rest_framework.response import Response
from rest_framework.views import APIView

from serviceApp.models import FailureNode
from usersApp.models import *
from .models import *
from .permissions import IsManagerUser, IsServece, OnlyManagerPost
from .serializers import *
from .utils import authUser_is_person


class MachineViewSet(viewsets.ModelViewSet):

    queryset = Machine.objects.all()
    serializer_class = MachineSerializer
    permission_classes = [OnlyManagerPost]

    def list(self, request):
        is_auth_user = authUser_is_person(user=request.user.id)
        machines = Machine.objects.all()
        if (request.user.is_authenticated and
                is_auth_user):
            serializer = MachineSerializer(machines, many=True)
        else:
            serializer = MachineSerializerNotAuth(machines, many=True)
        return Response(serializer.data)

    def retrieve(self, request, pk=None):
        machines = Machine.objects.all()
        is_auth_user = authUser_is_person(user=request.user.id)
        machine = get_object_or_404(machines, serial_num=pk)
        if (request.user.is_authenticated and
                is_auth_user):
            serializer = MachineSerializer(machine)
        else:
            serializer = MachineSerializerNotAuth(machine)
        return Response(serializer.data)


class CarModelViewSet(viewsets.ModelViewSet):
    queryset = CarModel.objects.all()
    serializer_class = CarModelSerializer
    permission_classes = [IsManagerUser]


class EngineModelViewSet(viewsets.ModelViewSet):
    queryset = EngineModel.objects.all()
    serializer_class = EngineModelSerializer
    permission_classes = [IsManagerUser]


class TransmissionModelViewSet(viewsets.ModelViewSet):
    queryset = TransmissionModel.objects.all()
    serializer_class = TransmissionModelSerializer
    permission_classes = [IsManagerUser]


class DrivingAxleModelViewSet(viewsets.ModelViewSet):
    queryset = DrivingAxleModel.objects.all()
    serializer_class = DrivingAxleModelSerializer
    permission_classes = [IsManagerUser]


class ModelOfAControlledBridgeViewSet(viewsets.ModelViewSet):
    queryset = ModelOfAControlledBridge.objects.all()
    serializer_class = ModelOfAControlledBridgeSerializer
    permission_classes = [IsManagerUser]








