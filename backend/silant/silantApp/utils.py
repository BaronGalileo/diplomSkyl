from django.shortcuts import get_object_or_404

from silantApp.serializers import *
from serviceApp.serializers import *
from usersApp.models import *
from rest_framework.response import Response


def authUser_is_person(user):
    if user == None:
        return user
    else:
        manager = Manager.objects.filter(user=user)
        servise_organization = ServiseOrganization.objects.filter(user=user)
        client = Client.objects.filter(user=user)
        return bool(manager or servise_organization or client)


def authUser_role(user):
    if user == None:
        print("None", user)
        return user
    else:
        manager = Manager.objects.filter(user_id=user)
        if manager and manager.values()[0].get("role"):
            return manager.values()[0].get("role")
        servise_organization = ServiseOrganization.objects.filter(user_id=user)
        if servise_organization and servise_organization.values()[0].get("role"):
            return servise_organization.values()[0].get("role")
        client = Client.objects.filter(user_id=user)
        if client and client.values()[0].get("role"):
            return client.values()[0].get("role")


def filter_by_role(user_id, queryset, my_serializer):
    if (my_serializer != MachineSerializer and my_serializer != ReclamationSerializer and my_serializer != ServiceSerializer):
        return None
    else:
        user_target = authUser_role(user_id)
        if user_target and user_target == "admin":
            return role_user_is_manager(queryset, my_serializer)
        elif user_target and user_target == "manager":
            return role_user_is_manager(queryset, my_serializer)
        elif user_target and user_target == "serviseorg":
            return role_user_is_serviseorg(user_id, queryset, my_serializer)
        elif user_target and user_target == "client":
            return role_user_is_client(user_id, queryset, my_serializer)
        else:
            return None


def role_user_is_client(user_id, queryset, my_serializer):
    if (my_serializer == MachineSerializer):
        machines = queryset.filter(client=user_id)
        serializer = my_serializer(machines, many=True)
        return Response(serializer.data)
    elif (my_serializer == ReclamationSerializer):
        reclamation = queryset.filter(machine__client__user_id=user_id)
        serializer = my_serializer(reclamation, many=True)
        return Response(serializer.data)
    else:
        services = queryset.filter(machine__client__user_id=user_id)
        serializer = my_serializer(services, many=True)
        return Response(serializer.data)


def role_user_is_serviseorg(user_id, queryset, my_serializer):
    if (my_serializer == MachineSerializer):
        my_queryset = queryset.filter(service_company_id=user_id)
        serializer = my_serializer(my_queryset, many=True)
        return Response(serializer.data)
    elif (my_serializer == ReclamationSerializer):
        reclamation = queryset.filter(service_company_id=user_id)
        serializer = my_serializer(reclamation, many=True)
        return Response(serializer.data)
    elif (my_serializer == ServiceSerializer):
        servises = queryset.filter(service_company_id=user_id)
        serializer = my_serializer(servises, many=True)
        return Response(serializer.data)


def role_user_is_manager(queryset, my_serializer):
    my_queryset = queryset
    serializer = my_serializer(my_queryset, many=True)
    return Response(serializer.data)


