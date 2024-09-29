# Generated by Django 5.1.1 on 2024-09-29 10:30

import django.db.models.deletion
import django.utils.timezone
from django.conf import settings
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='Funder',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('InAccount', models.DecimalField(decimal_places=2, default=0.0, max_digits=10)),
                ('funding_date', models.DateField(default=django.utils.timezone.now)),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.CreateModel(
            name='Member',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('InBank', models.DecimalField(decimal_places=2, default=0.0, max_digits=10)),
                ('FinancialGoal', models.DecimalField(decimal_places=2, default=0.0, max_digits=10)),
                ('GoalReached', models.BooleanField(default=False)),
                ('Profession', models.EmailField(default='noemail@example.com', max_length=254, unique=True)),
                ('MoreAboutYourself', models.CharField(default='N/A', max_length=100)),
                ('joined_date', models.DateField(default=django.utils.timezone.now)),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.CreateModel(
            name='Collaborator',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('amount', models.DecimalField(decimal_places=2, default=0.0, max_digits=10)),
                ('details', models.TextField(default='No details provided.')),
                ('collaboration_date', models.DateField(default=django.utils.timezone.now)),
                ('funder', models.ForeignKey(default=None, on_delete=django.db.models.deletion.CASCADE, to='devfest.funder')),
                ('member', models.ForeignKey(default=None, on_delete=django.db.models.deletion.CASCADE, to='devfest.member')),
            ],
        ),
        migrations.CreateModel(
            name='UserProfile',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('FirstName', models.CharField(default='Unnamed Member', max_length=100)),
                ('LastName', models.CharField(default='Unnamed Member', max_length=100)),
                ('Age', models.IntegerField(blank=True, default=0)),
                ('phone_number', models.CharField(blank=True, max_length=15, null=True)),
                ('address', models.TextField(blank=True, null=True)),
                ('card_info', models.CharField(blank=True, max_length=255, null=True)),
                ('exDate', models.CharField(blank=True, max_length=255, null=True)),
                ('cvc', models.CharField(blank=True, max_length=255, null=True)),
                ('created_at', models.DateTimeField(default=django.utils.timezone.now)),
                ('user', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]
