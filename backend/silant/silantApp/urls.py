from django.urls import path, include
from rest_framework import routers

from .views import *

router = routers.SimpleRouter()
router.register(r'machine', MachineViewSet)





urlpatterns = [

    path('v1/', include(router.urls)),
    # path('v1/machinelist/', MachineViewSet.as_view()),
    # path('v1/machinelist/', MachineCreateAPIView.as_view()),
    # path('v1/machinelist/<int:pk>/', MachineUpdateAPIView.as_view()),
]