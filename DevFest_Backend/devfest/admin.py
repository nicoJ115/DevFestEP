from django.contrib import admin # type: ignore
from .models import UserProfile, Member, Funder, Collaborator
# Register your models here.

# Customize UserProfile Admin
class UserProfileAdmin(admin.ModelAdmin):
    list_display = ('user', 'FirstName', 'LastName', 'Age', 'phone_number', 'address', 'created_at')
    list_editable = ( 'FirstName', 'LastName',)
    search_fields = ('FirstName', 'LastName', 'user__username')  # Allow searching by username or name
    list_filter = ('created_at',)  # Add a filter by creation date

# Customize Member Admin
class MemberAdmin(admin.ModelAdmin):
    list_display = ('user', 'InBank', 'FinancialGoal', 'GoalReached', 'Profession', 'joined_date')
    list_editable = ('InBank', 'FinancialGoal', 'Profession','GoalReached'  )
    search_fields = ('user__username', 'Profession')
    list_filter = ('GoalReached', 'joined_date')

# Customize Funder Admin
class FunderAdmin(admin.ModelAdmin):
    list_display = ('user', 'InAccount', 'funding_date')
    list_editable = ('InAccount', )
    search_fields = ('user__username',)
    list_filter = ('funding_date',)

# Customize Collaborator Admin
class CollaboratorAdmin(admin.ModelAdmin):
    list_display = ('member', 'funder', 'amount', 'collaboration_date')
    search_fields = ('member__user__username', 'funder__user__username')
    list_filter = ('collaboration_date',)

# Register the models to the admin site
admin.site.register(UserProfile, UserProfileAdmin)
admin.site.register(Member, MemberAdmin)
admin.site.register(Funder, FunderAdmin)
admin.site.register(Collaborator, CollaboratorAdmin)
