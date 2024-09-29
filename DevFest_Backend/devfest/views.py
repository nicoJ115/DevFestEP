from django.shortcuts import render # type: ignore
from rest_framework import generics # type: ignore
from .models import Member,Funder,Collaborator
from .serializers import MemberSerializer,FunderSerializer,CollaboratorSerializer


class MemberListCreate(generics.ListCreateAPIView):
    queryset = Member.objects.all()
    serializer_class = MemberSerializer

class FunderListCreate(generics.ListCreateAPIView):
    queryset = Funder.objects.all()
    serializer_class = FunderSerializer

class CollaboratorListCreate(generics.ListCreateAPIView):
    queryset = Collaborator.objects.all()
    serializer_class = CollaboratorSerializer
