# Generated by Django 3.2.9 on 2021-12-17 21:22

import django.core.validators
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('events', '0002_auto_20211217_2032'),
    ]

    operations = [
        migrations.AlterField(
            model_name='event',
            name='address',
            field=models.TextField(blank=True),
        ),
        migrations.AlterField(
            model_name='event',
            name='city',
            field=models.CharField(blank=True, max_length=20),
        ),
        migrations.AlterField(
            model_name='event',
            name='description',
            field=models.TextField(max_length=1000),
        ),
        migrations.AlterField(
            model_name='event',
            name='email',
            field=models.EmailField(max_length=30, validators=[django.core.validators.EmailValidator('Enter a valid email')]),
        ),
        migrations.AlterField(
            model_name='event',
            name='organizer',
            field=models.CharField(max_length=50),
        ),
        migrations.AlterField(
            model_name='event',
            name='organizer_type',
            field=models.CharField(max_length=30),
        ),
        migrations.AlterField(
            model_name='event',
            name='phone_number',
            field=models.CharField(max_length=15),
        ),
        migrations.AlterField(
            model_name='event',
            name='street',
            field=models.CharField(blank=True, max_length=40),
        ),
        migrations.AlterField(
            model_name='event',
            name='title',
            field=models.CharField(max_length=50),
        ),
    ]
