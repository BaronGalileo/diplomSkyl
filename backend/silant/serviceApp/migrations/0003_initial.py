# Generated by Django 5.1.1 on 2024-10-06 11:29

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('serviceApp', '0002_initial'),
        ('usersApp', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='reclamation',
            name='service_company',
            field=models.ForeignKey(on_delete=django.db.models.deletion.PROTECT, to='usersApp.serviseorganization'),
        ),
        migrations.AddField(
            model_name='reclamation',
            name='recovery_method',
            field=models.ForeignKey(on_delete=django.db.models.deletion.PROTECT, to='serviceApp.recoverymethod'),
        ),
        migrations.AddField(
            model_name='service',
            name='service_company',
            field=models.ForeignKey(on_delete=django.db.models.deletion.PROTECT, to='usersApp.serviseorganization'),
        ),
        migrations.AddField(
            model_name='service',
            name='type_of_service',
            field=models.ForeignKey(on_delete=django.db.models.deletion.PROTECT, to='serviceApp.typeofservice'),
        ),
    ]
