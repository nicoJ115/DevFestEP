from django.db import models # type: ignore
from django.utils import timezone # type: ignore
from django.contrib.auth.models import User # type: ignore



class UserProfile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)

    FirstName = models.CharField(max_length=100, default='Unnamed Member')
    LastName = models.CharField(max_length=100, default='Unnamed Member')
    Age = models.IntegerField(default=0,blank=True)

    phone_number = models.CharField(max_length=15, blank=True, null=True)
    address = models.TextField(blank=True, null=True)

    card_info = models.CharField(max_length=255, blank=True, null=True)
    exDate = models.CharField(max_length=255, blank=True, null=True)
    cvc =  models.CharField(max_length=255, blank=True, null=True)

    created_at = models.DateTimeField(default=timezone.now)

    def __str__(self):
        return self.user.username
    

class Member(models.Model):
    user = models.ForeignKey(UserProfile, on_delete=models.CASCADE)

    InBank = models.DecimalField(max_digits=10, decimal_places=2, default=0.00)
    FinancialGoal = models.DecimalField(max_digits=10, decimal_places=2, default=0.00)
    GoalReached = models.BooleanField(default=False)

    Profession = models.EmailField(unique=True, default='noemail@example.com')
    MoreAboutYourself = models.CharField(max_length=100, default='N/A')

    joined_date = models.DateField(default=timezone.now)

    def __str__(self):
        name = self.user.FirstName + ' ' + self.user.LastName
        return name

   
        



class Funder(models.Model):
    user = models.ForeignKey(UserProfile, on_delete=models.CASCADE)

    InAccount = models.DecimalField(max_digits=10, decimal_places=2, default=0.00)

    funding_date = models.DateField(default=timezone.now)

    def __str__(self):
        name = self.user.FirstName + ' ' + self.user.LastName
        return name


class Collaborator(models.Model):
    member = models.ForeignKey(Member, on_delete=models.CASCADE, default=None)
    funder = models.ForeignKey(Funder, on_delete=models.CASCADE, default=None)

    amount = models.DecimalField(max_digits=10, decimal_places=2, default=0.00)
    details = models.TextField(default='No details provided.')

    collaboration_date = models.DateField(default=timezone.now)



    def __str__(self):
        name = self.member.user.FirstName + ' ' + self.member.user.LastName +' - '+ self.member.user.FirstName + ' ' + self.member.user.LastName
        return name