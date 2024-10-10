from django.urls import path, include
from rest_framework import routers

from .views import *

router = routers.SimpleRouter()
router.register(r'service', ServiceViewSet)
router.register(r'reclamation', ReclamationViewSet)
router.register(r'typeofservice', TypeOfServiceViewSet)
router.register(r'failurenode', FailureNodeViewSet)
router.register(r'recoverymethod', RecoveryMethodViewSet)

urlpatterns = [
    path('v1/', include(router.urls)),
]
