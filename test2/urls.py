from django.contrib import admin
from django.urls import path,include
from test2.views import AgentloginViewset
from rest_framework import routers
from test2.views import RolesViewset
from test2.views import LoginStatusViewset

router = routers.DefaultRouter()
router.register(r'agentslogin',AgentloginViewset)
router.register(r'roles',RolesViewset)
router.register(r'loginstatus',LoginStatusViewset)

urlpatterns = [
    #path("admin/", admin.site.urls),
    path("",include(router.urls))
]
