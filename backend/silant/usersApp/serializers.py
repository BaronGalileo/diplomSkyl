from rest_framework import serializers

from .models import *


class ClientSerializer(serializers.ModelSerializer):

    class Meta:
        model = Client
        fields = "__all__"

class ManagerSerializer(serializers.ModelSerializer):

    class Meta:
        model = Manager
        fields = "__all__"


class ServiseOrganizationSerializer(serializers.ModelSerializer):

    class Meta:
        model = Manager
        fields = "__all__"