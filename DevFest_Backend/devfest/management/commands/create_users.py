from django.core.management.base import BaseCommand # type: ignore
from django.contrib.auth.models import User # type: ignore
from devfest.models import UserProfile, Member, Funder

class Command(BaseCommand):
    help = 'Create 12 users: 6 members, 6 funders, and 2 that are both'

    def handle(self, *args, **kwargs):
        # Create 12 users
        for i in range(1, 13):
            username = f'user{i}'
            email = f'user{i}@example.com'
            password = 'password123'

            # Create a user
            user = User.objects.create_user(username=username, email=email, password=password)
            
            # Create user profile
            UserProfile.objects.create(user=user, FirstName=f'First{i}', LastName=f'Last{i}', Age=25 + i)
            
            # Add users as members or funders
            if i <= 6:
                # First 6 users are members
                Member.objects.create(
                    user=user,
                    InBank=1000.00 * i,
                    FinancialGoal=5000.00,
                    GoalReached=False,
                    Profession=f'user{i}@profession.com',
                    MoreAboutYourself=f'I am member user{i}',
                )
            elif i <= 12:
                # Next 6 users are funders
                Funder.objects.create(
                    user=user,
                    InAccount=2000.00 * i,
                    funding_date='2023-01-01'
                )
            
            # Mark users 11 and 12 as both members and funders
            if i in [11, 12]:
                Member.objects.create(
                    user=user,
                    InBank=1000.00 * i,
                    FinancialGoal=5000.00,
                    GoalReached=False,
                    Profession=f'user{i}@profession.com',
                    MoreAboutYourself=f'I am both member and funder user{i}',
                )
                Funder.objects.create(
                    user=user,
                    InAccount=2000.00 * i,
                    funding_date='2023-01-01'
                )

        self.stdout.write(self.style.SUCCESS('Successfully created 12 users: 6 members, 6 funders, and 2 that are both.'))
