from rest_framework import serializers

from silantApp.serializers import MachineSerializer
from usersApp.serializers import ServiseOrganizationSerializer
from .models import *




class TypeOfServiceSerializer(serializers.ModelSerializer):
    class Meta:
        model = TypeOfService
        fields = '__all__'


class FailureNodeSerializer(serializers.ModelSerializer):
    class Meta:
        model = FailureNode
        fields = '__all__'


class RecoveryMethodSerializer(serializers.ModelSerializer):
    class Meta:
        model = RecoveryMethod
        fields = '__all__'



class ServicePostSerializer(serializers.ModelSerializer):
    class Meta:
        model = Service
        fields = '__all__'


class ServiceSerializer(serializers.ModelSerializer):
    machine = MachineSerializer()
    service_company = ServiseOrganizationSerializer()
    type_of_service = TypeOfServiceSerializer()


    class Meta:
        model = Service
        fields = '__all__'


class ReclamationSerializer(serializers.ModelSerializer):
    machine = MachineSerializer()
    service_company = ServiseOrganizationSerializer()
    failure_node = FailureNodeSerializer()
    recovery_method = RecoveryMethodSerializer()

    class Meta:
        model = Reclamation
        fields = '__all__'

class ReclamationPostSerializer(serializers.ModelSerializer):

    class Meta:
        model = Reclamation
        fields = '__all__'

