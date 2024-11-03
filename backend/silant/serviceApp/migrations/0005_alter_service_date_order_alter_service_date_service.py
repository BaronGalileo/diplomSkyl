# Generated by Django 5.1.1 on 2024-11-03 12:09

import django.utils.timezone
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('serviceApp', '0004_alter_reclamation_downtime_alter_service_date_order'),
    ]

    operations = [
        migrations.AlterField(
            model_name='service',
            name='date_order',
            field=models.DateField(blank=True, default=django.utils.timezone.now, verbose_name='дата заказ-наряда'),
            preserve_default=False,
        ),
        migrations.AlterField(
            model_name='service',
            name='date_service',
            field=models.DateField(blank=True, verbose_name='дата проведения ТО'),
        ),
    ]
