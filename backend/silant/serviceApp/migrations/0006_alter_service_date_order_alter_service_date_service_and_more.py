# Generated by Django 5.1.1 on 2024-11-03 12:12

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('serviceApp', '0005_alter_service_date_order_alter_service_date_service'),
    ]

    operations = [
        migrations.AlterField(
            model_name='service',
            name='date_order',
            field=models.DateField(blank=True, null=True, verbose_name='дата заказ-наряда'),
        ),
        migrations.AlterField(
            model_name='service',
            name='date_service',
            field=models.DateField(blank=True, null=True, verbose_name='дата проведения ТО'),
        ),
        migrations.AlterField(
            model_name='service',
            name='order_No',
            field=models.CharField(blank=True, max_length=100, null=True, verbose_name='№ заказ-наряда'),
        ),
    ]
