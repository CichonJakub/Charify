from django.db import models
from django.core.validators import EmailValidator, MaxValueValidator
from django.core.exceptions import ValidationError


class Event(models.Model):
    title = models.CharField(max_length=150,
                            blank=False)
    description = models.TextField(blank=False)
    address = models.TextField(blank=False)
    organizer = models.CharField(max_length=150, blank=False)
    organizer_type = models.CharField(max_length=150)
    phone_number = models.CharField(max_length=9)
    email = models.EmailField(validators=[EmailValidator("Enter a valid email")])
    number_of_people = models.IntegerField(blank=False,
                                           validators=[MaxValueValidator(999, "Too much people")])
    event_date = models.DateTimeField(blank=False)
    published_date = models.DateTimeField(auto_now_add=True)
    tags = models.CharField(max_length=150)
    photo = models.ImageField(blank=True)

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
