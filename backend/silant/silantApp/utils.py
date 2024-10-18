from usersApp.models import *


def authUser_is_person(user):
    if user == None:
        return user
    else:
        manager = Manager.objects.filter(user_id=user)
        servise_organization = ServiseOrganization.objects.filter(user_id=user)
        client = Client.objects.filter(user_id=user)
        return bool(manager or servise_organization or client)


