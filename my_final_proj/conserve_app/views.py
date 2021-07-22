from django.shortcuts import render, redirect
from django.contrib import messages
from django.apps import apps

from .models import *

User = apps.get_model('login_app', 'User')

# Create your views here.
def events(request):
    context = {
        'events': Event.objects.all()
    }
    return render(request, 'events.html', context)

def new_event(request):
    errors = Event.objects.event_validator(request.POST)
        # check if the errors dictionary has anything in it
    if len(errors) > 0:
        # if the errors dictionary contains anything, loop through each key-value pair and make a flash message
        for key, value in errors.items():
            messages.error(request, value)
        # redirect the user back to the form to fix the errors
        return redirect('/conserve/events')
    else:
        this_user= User.objects.get(id=request.session['user_id'])
        new_event= Event.objects.create(
            name= request.POST['name'], 
            location = request.POST['location'], 
            description = request.POST['description'], 
            date= request.POST['date'],
            user= this_user,
            )
    messages.success(request, "Event successfully created")
    return redirect('/conserve/events')

def update_event(request, event_id):
