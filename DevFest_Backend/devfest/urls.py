from django.urls import path # type: ignore
from .views import MemberListCreate,FunderListCreate,CollaboratorListCreate


urlpatterns = [
    path('members/', MemberListCreate.as_view(), ),
    path('Funder/', FunderListCreate.as_view(), ),
    path('Collaborator/', CollaboratorListCreate.as_view(), ),
]