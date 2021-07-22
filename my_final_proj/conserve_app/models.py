from django.db import models

# Create your models here.

class EventManager(models.Manager):
    def event_validator(self, postData):
        errors={}
        if len(postData['name']) < 2:
            errors['name'] = 'Name must be at least 2 characters!'
        if len(postData['location']) < 2:
            errors['location'] = "Location must be at least 2 characters!"
        if len(postData['description']) <10:
            errors['description'] = 'Description must be at least 10 characters!'
        return errors

class Event(models.Model):
    name = models.CharField(max_length=100)
    location = models.CharField(max_length=100)
    description = models.CharField(max_length=500)
    date = models.DateField()
    user=models.ForeignKey('login_app.User', related_name='events', on_delete=models.CASCADE)
    created_at= models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    objects= EventManager()

