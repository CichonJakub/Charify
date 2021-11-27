from django.db import models


class Event(models.Model):
    title = models.CharField(max_length=150)
    description = models.TextField()
    address = models.TextField()
    organizer = models.CharField(max_length=150)
    organizer_type = models.CharField(max_length=150)
    phone_number = models.CharField(max_length=150)
    email = models.EmailField()
    number_of_people = models.IntegerField()
    event_date = models.DateTimeField()
    published_date = models.DateTimeField(auto_now_add=True)
    tags = models.CharField(max_length=150)
    photo = models.ImageField() ## na razie powuje bledy bo jest zawsze wymagae... + nie ma gdzie trzymac obrazka

    def _str_(self):
        return self.title



#  ----------------- still to work on :) ---------- in CLF 31/33


# class Question(models.Model):
#     question_text = models.CharField(max_length=200)
#     pub_date = models.DateTimeField('date published')
#
#
# class Choice(models.Model):
#     question = models.ForeignKey(Question, on_delete=models.CASCADE)
#     choice_text = models.CharField(max_length=200)
#     votes = models.IntegerField(default=0)
