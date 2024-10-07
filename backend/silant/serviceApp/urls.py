from django.urls import path, include
from rest_framework import routers

from .views import *

router = routers.SimpleRouter()
router.register(r'serv', ServiceViewSet)
router.register(r'reclamation', ReclamationViewSet)

urlpatterns = [
    path('v1/', include(router.urls)),
]
