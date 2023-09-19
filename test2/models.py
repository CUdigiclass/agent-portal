from django.db import models


# Create your models here.
class agent_login(models.Model):
    agent_id = models.CharField(max_length=100,default=None)
    first_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100)
    email = models.CharField(max_length=100)
    mobile = models.CharField(max_length=15)
    token = models.TextField()
    password= models.TextField(default=None)   
    usertype = models.IntegerField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    status = models.CharField(max_length=10, choices=[
        ('active', 'Active'),   
        ('inactive', 'Inactive'),
    ], default='active')
    def __str__(self):
        return f"{self.first_name} {self.last_name}"

class roles(models.Model):
    usertype = models.IntegerField()
    role = models.CharField(max_length=15)
    created_at = models.DateTimeField(auto_now_add =True)

    def __str__(self):
        return f"{self.role}"

class login_status(models.Model):
    agent_id = models.CharField(max_length=100,default=None)
    logintime = models.DateTimeField(auto_now_add=True)
    logouttime = models.DateTimeField(auto_now_add=True)
    def __str__(self):
        return f"{self.logintime} {self.logouttime}"
    

