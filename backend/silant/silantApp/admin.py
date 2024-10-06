from django.contrib import admin

from .models import *

admin.site.register(Machine)
admin.site.register(CarModel)
admin.site.register(EngineModel)
admin.site.register(TransmissionModel)
admin.site.register(DrivingAxleModel)
admin.site.register(ModelOfAControlledBridge)
admin.site.register(ServiceCompany)

