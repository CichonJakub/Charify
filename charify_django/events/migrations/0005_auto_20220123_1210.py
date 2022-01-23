# Generated by Django 3.2.9 on 2022-01-23 12:10

import django.core.validators
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('events', '0004_auto_20211217_2149'),
    ]

    operations = [
        migrations.AlterField(
            model_name='event',
            name='city',
            field=models.CharField(blank=True, max_length=20),
        ),
        migrations.AlterField(
            model_name='event',
            name='description',
            field=models.TextField(blank=True, max_length=1000),
        ),
        migrations.AlterField(
            model_name='event',
            name='email',
            field=models.EmailField(blank=True, max_length=30, validators=[django.core.validators.EmailValidator('Enter a valid email')]),
        ),
        migrations.AlterField(
            model_name='event',
            name='event_date',
            field=models.DateTimeField(blank=True),
        ),
        migrations.AlterField(
            model_name='event',
            name='number_of_people',
            field=models.IntegerField(blank=True, validators=[django.core.validators.MaxValueValidator(999, 'Too much people')]),
        ),
        migrations.AlterField(
            model_name='event',
            name='organizer',
            field=models.CharField(blank=True, max_length=50),
        ),
        migrations.AlterField(
            model_name='event',
            name='organizer_type',
            field=models.CharField(blank=True, max_length=30),
        ),
        migrations.AlterField(
            model_name='event',
            name='phone_number',
            field=models.CharField(blank=True, max_length=15),
        ),
        migrations.AlterField(
            model_name='event',
            name='photo',
            field=models.ImageField(blank=True, upload_to='images/'),
        ),
        migrations.AlterField(
            model_name='event',
            name='street',
            field=models.CharField(blank=True, max_length=40),
        ),
        migrations.AlterField(
            model_name='event',
            name='tags',
            field=models.CharField(blank=True, max_length=150),
        ),
    ]