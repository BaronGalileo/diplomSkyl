from django.db import models

from silantApp.models import Machine
from usersApp.models import ServiseOrganization


class TypeOfService(models.Model):
    name = models.CharField(max_length=200)
    specification = models.TextField()

    def __str__(self):
        return self.name


    class Meta:
        verbose_name = "Вид ТО"
        verbose_name_plural = "Виды ТО"


class Service(models.Model):
    type_of_service = models.ForeignKey(TypeOfService, on_delete=models.PROTECT)
    date_service = models.DateField()
    working_hours = models.FloatField()
    order_No = models.CharField(max_length=100)
    date_order = models.DateField()
    service_company = models.ForeignKey(ServiseOrganization, on_delete=models.PROTECT)


class Reclamation(models.Model):
    date_of_failure = models.CharField(max_length=250)
    working_hours = models.FloatField()
    failure_node = models.ForeignKey('FailureNode', on_delete=models.PROTECT)
    description_of_failure = models.TextField()
    recovery_method = models.ForeignKey('RecoveryMethod', on_delete=models.PROTECT)
    spare_parts = models.TextField(blank=True)
    date_of_restoration = models.CharField(max_length=100)
    downtime = models.CharField(max_length=100)
    service_company = models.ForeignKey(ServiseOrganization, on_delete=models.PROTECT)
    machine = models.ForeignKey(Machine, on_delete=models.PROTECT)


class FailureNode(models.Model):
    name = models.CharField(max_length=200)
    specification = models.TextField()

    def __str__(self):
        return self.name


class RecoveryMethod(models.Model):
    name = models.CharField(max_length=200)
    specification = models.TextField()

    def __str__(self):
        return self.name

