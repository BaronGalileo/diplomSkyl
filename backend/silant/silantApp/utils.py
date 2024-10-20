from django.shortcuts import get_object_or_404

from silantApp.serializers import *
from serviceApp.serializers import *
from usersApp.models import *
from rest_framework.response import Response


def authUser_is_person(user):
    if user == None:
        return user
    else:
        manager = Manager.objects.filter(user_id=user)
        servise_organization = ServiseOrganization.objects.filter(user_id=user)
        client = Client.objects.filter(user_id=user)
        return bool(manager or servise_organization or client)



def filter_by_role(request, queryset, my_serializer):
    if my_serializer != MachineSerializer and my_serializer != ReclamationSerializer:
        return None
    else:

        role_dict = {
            "admin": role_user_is_manager(queryset, my_serializer),
            "manager": role_user_is_manager(queryset, my_serializer),
            "serviseorg": role_user_is_serviseorg(request.user, queryset, my_serializer),
            "client": role_user_is_client(request.user, queryset, my_serializer),
        }
        if (request.data.get('role')):
            serializer_is_True = role_dict.get(request.data.get('role'))
            if serializer_is_True:
                return serializer_is_True


def role_user_is_client(user, queryset, my_serializer):
    if (my_serializer == MachineSerializer):
        machines = queryset.filter(client=user.id)
        serializer = my_serializer(machines, many=True)
        return Response(serializer.data)
    elif (my_serializer == ReclamationSerializer):
        reclamation = queryset.filter(machine__client__user_id=user.id)
        serializer = my_serializer(reclamation, many=True)
        return Response(serializer.data)


def role_user_is_serviseorg(user, queryset, my_serializer):
    if (my_serializer == MachineSerializer):
        my_queryset = queryset.filter(service_company=user.id)
        serializer = my_serializer(my_queryset, many=True)
        return Response(serializer.data)
    elif (my_serializer == ReclamationSerializer):
        reclamation = queryset.filter(service_company_id=user.id)
        serializer = my_serializer(reclamation, many=True)
        return Response(serializer.data)


def role_user_is_manager(queryset, my_serializer):
    my_queryset = queryset
    serializer = my_serializer(my_queryset, many=True)
    return Response(serializer.data)



# def request_User_role_is(user):
#     if user == None:
#         return user
#     elif (user.is_staff):
#         return "admin"
#     else:
#         manager = Manager.objects.filter(user_id=user.id)
#         if manager and manager.values()[0].get("role"):
#             return manager.values()[0].get("role")
#         servise_organization = ServiseOrganization.objects.filter(user_id=user.id)
#         if servise_organization and servise_organization.values()[0].get("role"):
#             return servise_organization.values()[0].get("role")
#         client = Client.objects.filter(user_id=user.id)
#         if client and client.values()[0].get("role"):
#             return client.values()[0].get("role")