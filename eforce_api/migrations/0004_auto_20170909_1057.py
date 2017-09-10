# -*- coding: utf-8 -*-
# Generated by Django 1.9.6 on 2017-09-09 02:57
from __future__ import unicode_literals

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('eforce_api', '0003_auto_20170909_1023'),
    ]

    operations = [
        migrations.CreateModel(
            name='SystemGroup',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('rolename', models.TextField(max_length=100)),
            ],
        ),
        migrations.AddField(
            model_name='userprofile',
            name='usergroup',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, related_name='userprofile', to='eforce_api.SystemGroup'),
        ),
    ]