from rest_framework import serializers  # type: ignore
from .models import Member, Funder, Collaborator

class MemberSerializer(serializers.ModelSerializer):
	
	class Meta:
		model = Member
		fields = '__all__'
		

class FunderSerializer(serializers.ModelSerializer):
	
	class Meta:
		model = Funder
		fields = '__all__'
		

class CollaboratorSerializer(serializers.ModelSerializer):
	
	class Meta:
		model = Collaborator
		fields = '__all__'
