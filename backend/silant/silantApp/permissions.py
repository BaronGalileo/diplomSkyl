from rest_framework.permissions import BasePermission, SAFE_METHODS

from silantApp.serializers import MachineSerializerNotAuth
from silantApp.utils import authUser_is_person
from usersApp.models import Manager, ServiseOrganization, Client


class IsManagerUser(BasePermission):

    def has_permission(self, request, view):
        manager = Manager.objects.filter(user=request.user.id)
        is_auth_user = authUser_is_person(user=request.user.id)

        if manager:
            return bool(
                request.method != 'DELETE'
            )
        else:
            return bool(
                request.method in SAFE_METHODS
                and is_auth_user
            )


class IsServece(BasePermission):

    def has_permission(self, request, view):
        is_auth_user = authUser_is_person(user=request.user.id)


        if is_auth_user:
            return bool(
                request.method != 'DELETE'
            )
        else:
            return bool(
                request.method in SAFE_METHODS
                and is_auth_user
            )

class IsReclamation(BasePermission):

    def has_permission(self, request, view):
        is_auth_user = authUser_is_person(user=request.user.id)
        client = Client.objects.filter(user_id=request.user.id)

        if (not client  and is_auth_user):
            return bool(
                request.method != 'DELETE'
            )
        else:
            return bool(
                request.method in SAFE_METHODS
                and is_auth_user
            )