# Generated by Django 5.1.1 on 2024-10-06 17:24

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='CarModel',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100, verbose_name='название')),
                ('specification', models.TextField(blank=True, verbose_name='описание')),
            ],
            options={
                'verbose_name': 'Модель техники',
                'verbose_name_plural': 'Модели техник',
            },
        ),
        migrations.CreateModel(
            name='DrivingAxleModel',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100, verbose_name='название')),
                ('specification', models.TextField(blank=True, verbose_name='описание')),
            ],
            options={
                'verbose_name': 'Модель ведущего моста',
                'verbose_name_plural': 'Модели ведущих мостов',
            },
        ),
        migrations.CreateModel(
            name='EngineModel',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100, verbose_name='название')),
                ('specification', models.TextField(blank=True, verbose_name='описание')),
            ],
            options={
                'verbose_name': 'Модель двигателя',
                'verbose_name_plural': 'Модели двигателей',
            },
        ),
        migrations.CreateModel(
            name='ModelOfAControlledBridge',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100, verbose_name='название')),
                ('specification', models.TextField(blank=True, verbose_name='описание')),
            ],
            options={
                'verbose_name': 'Модель управляемого моста',
                'verbose_name_plural': 'Модели управляемых мостов',
            },
        ),
        migrations.CreateModel(
            name='TransmissionModel',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100, verbose_name='название')),
                ('specification', models.TextField(blank=True, verbose_name='описание')),
            ],
            options={
                'verbose_name': 'Модель трансмиссии',
                'verbose_name_plural': 'Модели трансмиссий',
            },
        ),
        migrations.CreateModel(
            name='Machine',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('brand', models.CharField(max_length=120, verbose_name='Модель')),
                ('serial_num', models.CharField(max_length=120, unique=True, verbose_name='Зав.№ машины')),
                ('engine_num', models.CharField(max_length=120, verbose_name='Зав.№ двигателя')),
                ('transmission_num', models.CharField(max_length=120, verbose_name='Зав.№ трансмиссии')),
                ('driving_axle_num', models.CharField(max_length=120, verbose_name='Зав.№ ведущего моста')),
                ('num_of_a_controlled_bridge', models.CharField(max_length=120, verbose_name='Зав.№ управляемого моста')),
                ('contractNo', models.CharField(max_length=120, unique=True, verbose_name='Договор поставки №, дата')),
                ('date_from_the_factory', models.DateField(verbose_name='Дата отгрузки с завода')),
                ('consignee', models.CharField(max_length=255, verbose_name='Грузополучатель(конечный потребитель)')),
                ('delivery_address', models.CharField(max_length=255, verbose_name='Адрес поставки (эксплуатации)')),
                ('equipment', models.CharField(blank=True, max_length=255, verbose_name='Комплектация (доп. опции)')),
                ('car_model', models.ForeignKey(on_delete=django.db.models.deletion.PROTECT, to='silantApp.carmodel', verbose_name='Модель техники')),
            ],
            options={
                'verbose_name': 'Машина',
                'verbose_name_plural': 'Машины',
            },
        ),
    ]