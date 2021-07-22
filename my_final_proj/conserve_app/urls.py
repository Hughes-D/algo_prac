from django.urls import path
from . import views

urlpatterns = [
    path('events', views.events),
    path('new_event', views.new_event),
    path('update_event/<int:event_id>', views.update_event),
]