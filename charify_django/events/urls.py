from django.urls import path

from . import views

urlpatterns = [
    # example: /events/
    path('', views.index, name='index'),
    # example: /events/4    --- NOTE: 4 is just an example ID of an event, it can be any int you want
    path('<int:event_id>/', views.detail, name='detail'),
    # ex: /events/4/results/
    path('<int:event_id>/results/', views.results, name='results'),
    # ex: /events/4/join/
    path('<int:event_id>/join/', views.join, name='join'),

]
