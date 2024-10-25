from django.db import models

from silantApp.models import Machine
from usersApp.models import ServiseOrganization


class TypeOfService(models.Model):
    name = models.CharField(max_length=100, verbose_name="название")
    specification = models.TextField(verbose_name="описание")

    def __str__(self):
        return self.name

    class Meta:
        verbose_name = "Вид ТО"
        verbose_name_plural = "Виды ТО"


class Service(models.Model):
    machine = models.ForeignKey(Machine, on_delete=models.CASCADE, verbose_name="Машина")
    type_of_service = models.ForeignKey(TypeOfService, on_delete=models.PROTECT, verbose_name="Вид ТО")
    date_service = models.DateField(verbose_name="дата проведения ТО")
    working_hours = models.FloatField(verbose_name="наработка, м/час")
    order_No = models.CharField(max_length=100, verbose_name="№ заказ-наряда")
    date_order = models.DateField(verbose_name="дата заказ-наряда")
    service_company = models.ForeignKey(ServiseOrganization, on_delete=models.CASCADE, verbose_name="сервисная компания")

    def __str__(self):
        return self.order_No

    class Meta:
        verbose_name = "ТО"
        verbose_name_plural = "ТО"


class Reclamation(models.Model):
    date_of_failure = models.CharField(max_length=250, verbose_name="дата отказа")
    working_hours = models.FloatField(verbose_name="наработка, м/час")
    failure_node = models.ForeignKey('FailureNode', on_delete=models.PROTECT, verbose_name="узел отказа")
    description_of_failure = models.TextField(verbose_name="описание отказа")
    recovery_method = models.ForeignKey('RecoveryMethod', on_delete=models.PROTECT, verbose_name="способ восстановления")
    spare_parts = models.TextField(blank=True, verbose_name="используемые запасные части")
    date_of_restoration = models.CharField(max_length=100, verbose_name="дата восстановления", blank=True)
    downtime = models.CharField(max_length=100, verbose_name="время простоя техники", blank=True)
    service_company = models.ForeignKey(ServiseOrganization, on_delete=models.PROTECT, verbose_name="сервисная компания")
    machine = models.ForeignKey(Machine, on_delete=models.CASCADE, verbose_name="машина")

    def __str__(self):
        return self.description_of_failure

    class Meta:
        verbose_name = "Рекламация"
        verbose_name_plural = "Рекламации"


class FailureNode(models.Model):
    name = models.CharField(max_length=100, verbose_name="название")
    specification = models.TextField(verbose_name="описание")

    def __str__(self):
        return self.name

    class Meta:
        verbose_name = "Узел отказа"
        verbose_name_plural = "Узлы отказа"


class RecoveryMethod(models.Model):
    name = models.CharField(max_length=100, verbose_name="название")
    specification = models.TextField(verbose_name="описание")

    def __str__(self):
        return self.name

    class Meta:
        verbose_name = "Способ восстановления"
        verbose_name_plural = "Способы восстановления"

