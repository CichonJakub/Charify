from django.contrib import admin
from .models import Event

class EventAdmin(admin.ModelAdmin):
    fields = ['title', 'description', 'address', 'organizer', 'organizer_type', 'phone_number', 'email', 'number_of_people', 'event_date', 'published_date', 'tags', 'photo']

admin.site.register(Event, EventAdmin)

