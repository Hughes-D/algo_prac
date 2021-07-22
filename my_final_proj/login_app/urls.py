from django.urls import path
from . import views

urlpatterns = [
    path('', views.index),
    path('login', views.login),
    path('dash', views.dash),
    path('create', views.create),
    path('logout', views.logout),
    path('profile/<int:user_id>', views.profile),
    path('update/<int:user_id>', views.update),
    path('view_user/<int:user_id>', views.view_user),
]
