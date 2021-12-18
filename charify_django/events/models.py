from django.db import models
from django.core.validators import EmailValidator, MaxValueValidator
from django.core.exceptions import ValidationError


class Event(models.Model):
    title = models.CharField(max_length=50,
                            blank=False)
    description = models.TextField(max_length=1000, blank=True)
    street = models.CharField(max_length=40, blank=True)
    city = models.CharField(max_length=20, blank=True)
    organizer = models.CharField(max_length=50, blank=True)
    organizer_type = models.CharField(max_length=30, blank=True)
    phone_number = models.CharField(max_length=15, blank=True)
    email = models.EmailField(max_length=30,blank=True, validators=[EmailValidator("Enter a valid email")])
    number_of_people = models.IntegerField(blank=True,
                                           validators=[MaxValueValidator(999, "Too much people")])
    event_date = models.DateTimeField(blank=True)
    published_date = models.DateTimeField(auto_now_add=True)
    tags = models.CharField(max_length=150, blank=True)
    photo = models.ImageField(blank=True, upload_to='images/')

    def _str_(self):
        return self.title



# class Question(models.Model):
#     question_text = models.CharField(max_length=200)
#     pub_date = models.DateTimeField('date published')
#
#
# class Choice(models.Model):
#     question = models.ForeignKey(Question, on_delete=models.CASCADE)
#     choice_text = models.CharField(max_length=200)
#     votes = models.IntegerField(default=0)
