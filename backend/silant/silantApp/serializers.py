from rest_framework import serializers

from serviceApp.models import FailureNode
from usersApp.serializers import *
from .models import *


class CarModelSerializer(serializers.ModelSerializer):
    class Meta:
        model = CarModel
        fields = '__all__'


class EngineModelSerializer(serializers.ModelSerializer):
    class Meta:
        model = EngineModel
        fields = '__all__'


class TransmissionModelSerializer(serializers.ModelSerializer):
    class Meta:
        model = TransmissionModel
        fields = '__all__'


class DrivingAxleModelSerializer(serializers.ModelSerializer):
    class Meta:
        model = DrivingAxleModel
        fields = '__all__'


class ModelOfAControlledBridgeSerializer(serializers.ModelSerializer):
    class Meta:
        model = ModelOfAControlledBridge
        fields = '__all__'


class MachinePostSerializer(serializers.ModelSerializer):
    class Meta:
        model = Machine
        fields = "__all__"


class MachineSerializer(serializers.ModelSerializer):
    client = ClientSerializer()
    service_company = ServiseOrganizationSerializer()
    car_model = CarModelSerializer()
    engine_model = EngineModelSerializer()
    transmission_model = TransmissionModelSerializer()
    driving_axle_model = DrivingAxleModelSerializer()
    model_of_a_controlled_bridge = ModelOfAControlledBridgeSerializer()

    class Meta:
        model = Machine
        fields = "__all__"


class MachineSerializerNotAuth(serializers.ModelSerializer):
    car_model = CarModelSerializer()
    engine_model = EngineModelSerializer()
    transmission_model = TransmissionModelSerializer()
    driving_axle_model = DrivingAxleModelSerializer()
    model_of_a_controlled_bridge = ModelOfAControlledBridgeSerializer()

    class Meta:
        model = Machine
        fields = ('brand', 'serial_num', 'car_model', 'engine_model', 'engine_num', 'transmission_model',
                  'transmission_num', 'driving_axle_model', 'driving_axle_num', 'model_of_a_controlled_bridge',
                  'num_of_a_controlled_bridge')
