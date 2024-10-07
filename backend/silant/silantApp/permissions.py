from rest_framework.permissions import BasePermission, SAFE_METHODS

from silantApp.serializers import MachineSerializerNotAuth
from usersApp.models import Manager, ServiseOrganization, Client


class IsManagerUser(BasePermission):

    def has_permission(self, request, view):
        manager = Manager.objects.filter(user=request.user)

        if manager:
            return bool(
                request.method != 'DELETE'
            )
        else:
            return bool(
                request.method in SAFE_METHODS
                and request.user.is_authenticated
            )


class IsServece(BasePermission):

    def has_permission(self, request, view):
        manager = ServiseOrganization.objects.filter(user=request.user)
        servise_organization = ServiseOrganization.objects.filter(user=request.user)
        client = Client.objects.filter(user=request.user)

        if manager or servise_organization or client:
            return bool(
                request.method != 'DELETE'
            )
        else:
            return bool(
                request.method in SAFE_METHODS
                and request.user.is_authenticated
            )

class IsReclamation(BasePermission):

    def has_permission(self, request, view):

        manager = ServiseOrganization.objects.filter(user=request.user)
        servise_organization = ServiseOrganization.objects.filter(user=request.user)


        if manager or servise_organization:
            return bool(
                request.method != 'DELETE'
            )
        else:
            return bool(
                request.method in SAFE_METHODS
                and request.user.is_authenticated
            )