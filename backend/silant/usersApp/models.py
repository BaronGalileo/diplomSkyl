from django.contrib.auth.models import User
from django.db import models




class Manager(models.Model):
    name = models.CharField(max_length=100)
    user = models.OneToOneField(User, on_delete=models.CASCADE, primary_key=True)

    def __str__(self):
        return self.name


class ServiseOrganization(models.Model):
    name = models.CharField(max_length=100)
    user = models.OneToOneField(User, on_delete=models.CASCADE, primary_key=True)

    def __str__(self):
        return self.name


class Client(models.Model):
    name = models.CharField(max_length=120)
    user = models.OneToOneField(User, on_delete=models.CASCADE, primary_key=True)


    def __str__(self):
        return self.name
