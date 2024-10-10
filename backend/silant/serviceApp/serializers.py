from rest_framework import serializers
from .models import *


class ServiceSerializer(serializers.ModelSerializer):
    class Meta:
        model = Service
        fields = '__all__'


class ReclamationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Reclamation
        fields = '__all__'


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


