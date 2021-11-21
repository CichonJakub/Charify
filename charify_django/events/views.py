from tkinter import Image

from django.shortcuts import render

from django.http import HttpResponse, FileResponse


def index(request):
    # imgResponse('D:\Python\Charify\charify_django\events\html.jpg')
    return HttpResponse("Hello, user! We have some events for you ;)")


def detail(request, event_id):
    return HttpResponse("You're looking at event %s. \n" % event_id + 'Litwo! Ojczyzno moja! ty jesteś jak zdrowie\n'

                        + 'Ile cię trzeba cenić, ten tylko się dowie,\n'

                        + 'Kto cię stracił. Dziś piękność twą w całej ozdobie\n'

                        + 'Widzę i opisuję, bo tęsknię po tobie')


def results(request, event_id):
    response = "You're looking at the results of event %s."
    return HttpResponse(response % event_id)


def join(request, event_id):
    return HttpResponse("You're joining to event %s." % event_id)


