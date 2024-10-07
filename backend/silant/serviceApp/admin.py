from django.contrib import admin

from .models import *

admin.site.register(TypeOfService)
admin.site.register(Service)
admin.site.register(Reclamation)
admin.site.register(FailureNode)
admin.site.register(RecoveryMethod)
