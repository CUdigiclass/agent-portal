from rest_framework import serializers
from test2.models import agent_login
from test2.models import roles
from test2.models import login_status

class AgentSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = agent_login
        fields = "__all__"

class RoleSerializers(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = roles
        fields= "__all__"
        
class LoginStatusSerializers(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = login_status
        fields = "__all__"
