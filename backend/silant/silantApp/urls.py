from django.urls import path, include
from rest_framework import routers

from .views import *

router = routers.SimpleRouter()
router.register(r'machine', MachineViewSet)
router.register(r'carmodel', CarModelViewSet)
router.register(r'enginemodel', EngineModelViewSet)
router.register(r'transmissionmodel', TransmissionModelViewSet)
router.register(r'drivingaxlemodel', DrivingAxleModelViewSet)
router.register(r'modelofacontrolledbridge', ModelOfAControlledBridgeViewSet)

urlpatterns = [
    path('v1/', include(router.urls)),
]
