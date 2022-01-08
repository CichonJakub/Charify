from django.db import models
from django.contrib.auth.models import AbstractBaseUser
from django.contrib.auth.models import PermissionsMixin, BaseUserManager
# Create your models here.


class UserAccountManager(BaseUserManager):
    def create_user(self, username, name, password=None):
        if not username:
            raise ValueError("User must have Username")

        user = self.model(username=username, name=name)

        user.set_password(password)
        user.save()

        return user




class UserAccount(AbstractBaseUser, PermissionsMixin):
    username = models.CharField(max_length=255, unique=True)
    name = models.CharField(max_length=255)
    password = models.CharField(max_length=255)
    is_active = models.BooleanField(default=True, max_length=255)
    is_staff = models.CharField(default=False, max_length=255)



    objects = UserAccountManager()

    USERNAME_FIELD = 'username'
    REQUIRED_FIELDS = ['name']

    def get_full_name(self):
        return self.name

    def __str__(self):
        return self.username



