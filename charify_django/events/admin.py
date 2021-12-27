from django.contrib import admin
from .models import Event

class EventAdmin(admin.ModelAdmin):
    list_display = ('title', 'description', 'street', 'city', 'organizer', 'organizer_type', 'phone_number', 'email', 'number_of_people', 'event_date', 'published_date', 'tags', 'photo')
    # list_display = (
    # 'title', 'description', 'address', 'organizer', 'organizer_type', 'phone_number', 'email', 'number_of_people',
    # 'event_date', 'published_date', 'tags')



# Register your models here.

admin.site.register(Event, EventAdmin)
