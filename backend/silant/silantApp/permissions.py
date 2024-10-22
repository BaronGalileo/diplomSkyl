from rest_framework.permissions import BasePermission, SAFE_METHODS

from silantApp.serializers import MachineSerializerNotAuth
from silantApp.utils import authUser_is_person
# from silantApp.utils import authUser_is_person
from usersApp.models import Manager, ServiseOrganization, Client


class IsManagerUser(BasePermission):

    def has_permission(self, request, view):
        if request.user.is_staff:
            return request.user.is_staff
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


class OnlyManagerPost(BasePermission):

    def has_permission(self, request, view):
        if request.user.is_staff:
            return request.user.is_staff
        manager = Manager.objects.filter(user=request.user.id)


        if manager:
            return bool(
                request.method != 'DELETE'
            )
        else:
            return bool(
                request.method in SAFE_METHODS
            )


class IsServece(BasePermission):

    def has_permission(self, request, view):
        if request.user.is_staff:
            return request.user.is_staff
        is_auth_user = authUser_is_person(user=request.user.id)

        if is_auth_user:
            return bool(
                request.method != 'DELETE'
            )


class IsReclamation(BasePermission):

    def has_permission(self, request, view):
        is_auth_user = authUser_is_person(user=request.user.id)
        client = Client.objects.filter(user_id=request.user.id)
        if request.user.is_staff:
            return request.user.is_staff

        if (not client and is_auth_user):
            return bool(
                request.method != 'DELETE'
            )
        else:
            return bool(
                request.method in SAFE_METHODS
                and is_auth_user or request.user.is_staff
            )


class ReadOnly(BasePermission):
    def has_permission(self, request, view):
        return request.method in SAFE_METHODS
