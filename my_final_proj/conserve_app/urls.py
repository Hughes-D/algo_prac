from django.urls import path
from . import views

urlpatterns = [
    path('events', views.events),
    path('new_event', views.new_event),
    path('update_event/<int:event_id>', views.update_event),
    path('update_done/<int:event_id>', views.update_done),
    path('my_events/<int:user_id>', views.my_events),
    # Need delete views
    path('delete/<int:user_id>/<int:event_id>', views.delete),
]