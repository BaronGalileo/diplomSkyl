from django.urls import path, include
from rest_framework import routers

from . import views
from .views import ClientViewSet, ServiseOrgViewSet

router = routers.SimpleRouter()
router.register(r'clients', ClientViewSet)
router.register(r'servicesorgan', ServiseOrgViewSet)


app_name = 'users'

urlpatterns = [
    path('login/', views.login_user, name='login'),
    path('logout/', views.logout_user, name='logout'),
    path('role/', views.RoleView.as_view()),
    path('v1/', include(router.urls)),
]


