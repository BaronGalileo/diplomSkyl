# Generated by Django 5.1.1 on 2024-10-17 20:16

import django.db.models.deletion
from django.conf import settings
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('usersApp', '0003_alter_manager_user'),
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.AddField(
            model_name='client',
            name='role',
            field=models.CharField(default=2, max_length=120),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='serviseorganization',
            name='role',
            field=models.CharField(default=3, max_length=120),
            preserve_default=False,
        ),
        migrations.AlterField(
            model_name='client',
            name='user',
            field=models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, primary_key=True, related_name='client_role', serialize=False, to=settings.AUTH_USER_MODEL),
        ),
        migrations.AlterField(
            model_name='serviseorganization',
            name='user',
            field=models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, primary_key=True, related_name='servise_role', serialize=False, to=settings.AUTH_USER_MODEL),
        ),
    ]