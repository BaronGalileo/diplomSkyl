from django.db import models

from usersApp.models import Client, ServiseOrganization


class Machine(models.Model):
    brand = models.CharField(max_length=120)
    serial_num = models.CharField(max_length=120, unique=True)
    car_model = models.ForeignKey('CarModel', on_delete=models.PROTECT)
    engine_model = models.ForeignKey('EngineModel', on_delete=models.PROTECT)
    engine_num = models.CharField(max_length=120)
    transmission_model = models.ForeignKey('TransmissionModel', on_delete=models.PROTECT)
    transmission_num = models.CharField(max_length=120)
    driving_axle_model = models.ForeignKey('DrivingAxleModel', on_delete=models.PROTECT)
    driving_axle_num = models.CharField(max_length=120)
    model_of_a_controlled_bridge = models.ForeignKey('ModelOfAControlledBridge', on_delete=models.PROTECT)
    num_of_a_controlled_bridge = models.CharField(max_length=120)
    contractNo = models.CharField(max_length=120, unique=True)
    date_from_the_factory = models.DateField()
    consignee = models.CharField(max_length=255)
    delivery_address = models.CharField(max_length=255)
    equipment = models.CharField(max_length=255, blank=True)
    client = models.ForeignKey(Client, on_delete=models.CASCADE)
    service_company = models.ForeignKey(ServiseOrganization, models.SET_NULL, blank=True, null=True)

    def __str__(self):
        return self.brand

    class Meta:
        verbose_name = "Машина"
        verbose_name_plural = "Машины"

class CarModel(models.Model):
    name = models.CharField(max_length=100)
    specification = models.TextField(blank=True)

    def __str__(self):
        return self.name

    class Meta:
        verbose_name = "Модель техники"
        verbose_name_plural = "Модели техник"


class EngineModel(models.Model):
    name = models.CharField(max_length=100)
    specification = models.TextField(blank=True)

    def __str__(self):
        return self.name

    class Meta:
        verbose_name = "Модель двигателя"
        verbose_name_plural = "Модели двигателей"


class TransmissionModel(models.Model):
    name = models.CharField(max_length=100)
    specification = models.TextField(blank=True)

    def __str__(self):
        return self.name

    class Meta:
        verbose_name = "Модель трансмиссии"
        verbose_name_plural = "Модели трансмиссий"


class DrivingAxleModel(models.Model):
    name = models.CharField(max_length=100)
    specification = models.TextField(blank=True)

    def __str__(self):
        return self.name

    class Meta:
        verbose_name = "Модель ведущего моста"
        verbose_name_plural = "Модели ведущих мостов"


class ModelOfAControlledBridge(models.Model):
    name = models.CharField(max_length=100)
    specification = models.TextField(blank=True)

    def __str__(self):
        return self.name

    class Meta:
        verbose_name = "Модель управляемого моста"
        verbose_name_plural = "Модели управляемых мостов"



