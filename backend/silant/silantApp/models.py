from django.db import models

from usersApp.models import Client, ServiseOrganization


class Machine(models.Model):
    brand = models.CharField(max_length=120, verbose_name="Модель")
    serial_num = models.CharField(max_length=120, unique=True, verbose_name="Зав.№ машины")
    car_model = models.ForeignKey('CarModel', on_delete=models.PROTECT, verbose_name="Модель техники")
    engine_model = models.ForeignKey('EngineModel', on_delete=models.PROTECT, verbose_name="Модель двигателя")
    engine_num = models.CharField(max_length=120, verbose_name="Зав.№ двигателя")
    transmission_model = models.ForeignKey('TransmissionModel', on_delete=models.PROTECT, verbose_name="Модель трансмиссии")
    transmission_num = models.CharField(max_length=120, verbose_name="Зав.№ трансмиссии")
    driving_axle_model = models.ForeignKey('DrivingAxleModel', on_delete=models.PROTECT, verbose_name="Модель ведущего моста")
    driving_axle_num = models.CharField(max_length=120, verbose_name="Зав.№ ведущего моста")
    model_of_a_controlled_bridge = models.ForeignKey('ModelOfAControlledBridge', on_delete=models.PROTECT, verbose_name="Модель управляемого моста")
    num_of_a_controlled_bridge = models.CharField(max_length=120, verbose_name="Зав.№ управляемого моста")
    contractNo = models.CharField(max_length=120, unique=True, verbose_name="Договор поставки №, дата")
    date_from_the_factory = models.DateField(verbose_name="Дата отгрузки с завода")
    consignee = models.CharField(max_length=255, verbose_name="Грузополучатель(конечный потребитель)")
    delivery_address = models.CharField(max_length=255, verbose_name="Адрес поставки (эксплуатации)")
    equipment = models.CharField(max_length=255, blank=True, verbose_name="Комплектация (доп. опции)")
    client = models.ForeignKey(Client, on_delete=models.CASCADE, verbose_name="Клиент")
    service_company = models.ForeignKey(ServiseOrganization, on_delete=models.PROTECT, verbose_name="Сервисная компания")

    def __str__(self):
        return self.brand

    class Meta:
        verbose_name = "Машина"
        verbose_name_plural = "Машины"


class CarModel(models.Model):
    name = models.CharField(max_length=100, verbose_name="название")
    specification = models.TextField(blank=True, verbose_name="описание")

    def __str__(self):
        return self.name

    class Meta:
        verbose_name = "Модель техники"
        verbose_name_plural = "Модели техник"


class EngineModel(models.Model):
    name = models.CharField(max_length=100, verbose_name="название")
    specification = models.TextField(blank=True, verbose_name="описание")

    def __str__(self):
        return self.name

    class Meta:
        verbose_name = "Модель двигателя"
        verbose_name_plural = "Модели двигателей"


class TransmissionModel(models.Model):
    name = models.CharField(max_length=100, verbose_name="название")
    specification = models.TextField(blank=True, verbose_name="описание")

    def __str__(self):
        return self.name

    class Meta:
        verbose_name = "Модель трансмиссии"
        verbose_name_plural = "Модели трансмиссий"


class DrivingAxleModel(models.Model):
    name = models.CharField(max_length=100, verbose_name="название")
    specification = models.TextField(blank=True, verbose_name="описание")

    def __str__(self):
        return self.name

    class Meta:
        verbose_name = "Модель ведущего моста"
        verbose_name_plural = "Модели ведущих мостов"


class ModelOfAControlledBridge(models.Model):
    name = models.CharField(max_length=100, verbose_name="название")
    specification = models.TextField(blank=True, verbose_name="описание")

    def __str__(self):
        return self.name

    class Meta:
        verbose_name = "Модель управляемого моста"
        verbose_name_plural = "Модели управляемых мостов"



