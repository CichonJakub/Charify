from django.contrib import admin
from .models import UserAccount

#admin.site.unregister(DjangoGroup)


class UserAdmin(admin.ModelAdmin):
    list_display = ('username', 'name', 'password')

admin.site.register(UserAccount)
