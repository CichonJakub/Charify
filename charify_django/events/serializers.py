from rest_framework import serializers
from .models import Event

class EventSerializer(serializers.ModelSerializer):
    class Meta:
        model = Event
        fields = ('id', 'title', 'description', 'address', 'organizer', 'organizer_type', 'phone_number', 'email', 'number_of_people', 'event_date', 'published_date', 'tags')
        #fields = ('id', 'title', 'description', 'address', 'organizer', 'organizer_type', 'phone_number', 'email', 'number_of_people', 'event_date', 'published_date', 'tags', 'photo') jak wlaczymy photo