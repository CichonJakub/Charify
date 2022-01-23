from django.db import models
from django.contrib.auth.models import AbstractBaseUser
from django.contrib.auth.models import PermissionsMixin, BaseUserManager
# Create your models here.
from django.core.exceptions import PermissionDenied
from django.contrib.postgres.fields import JSONField

class UserAccountManager(BaseUserManager):
    def create_user(self, username, name, password=None):
        if not username:
            raise ValueError("User must have Username")

        user = self.model(username=username, name=name)

        user.set_password(password)
        user.save()

        return user

    def create_superuser(self, username, password=None, **extra_fields):
        extra_fields.setdefault('is_staff', True)
        extra_fields.setdefault('is_superuser', True)

        if extra_fields.get('is_staff') is not True:
            raise ValueError('Superuser must have is_staff=True.')
        if extra_fields.get('is_superuser') is not True:
            raise ValueError('Superuser must have is_superuser=True.')

        return self._create_user(username, password, **extra_fields)

    def _create_user(self, username, password=None, **extra_fields):
        user = self.model(username=username, **extra_fields)
        user.set_password(password)
        user.save(using=self._db)
        return user


class UserAccount(AbstractBaseUser, PermissionsMixin):
    username = models.CharField(max_length=255, unique=True)
    name = models.CharField(max_length=255)
    password = models.CharField(max_length=255)
    is_active = models.BooleanField(default=True, max_length=255)
    is_staff = models.CharField(default=False, max_length=255)
    UsersEvents = JSONField()


    objects = UserAccountManager()

    USERNAME_FIELD = 'username'
    REQUIRED_FIELDS = ['name']

    def get_full_name(self):
        return self.name

    def __str__(self):
        return self.username



