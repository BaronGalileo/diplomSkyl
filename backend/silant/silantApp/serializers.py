from rest_framework import serializers

from serviceApp.models import FailureNode
from .models import *


class MachineSerializer(serializers.ModelSerializer):
    class Meta:
        model = Machine
        fields = '__all__'


class MachineSerializerNotAuth(serializers.ModelSerializer):
    class Meta:
        model = Machine
        fields = ('brand', 'serial_num', 'car_model', 'engine_model', 'engine_num', 'transmission_model',
                  'transmission_num', 'driving_axle_model', 'driving_axle_num', 'model_of_a_controlled_bridge',
                  'num_of_a_controlled_bridge')


class CarModelSerializer(serializers.ModelSerializer):
    class Meta:
        model = CarModel
        fields = '__all__'


class FailureNodeSerializer(serializers.ModelSerializer):
    class Meta:
        model = FailureNode
        fields ='__all__'
