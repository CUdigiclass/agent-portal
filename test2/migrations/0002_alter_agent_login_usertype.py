# Generated by Django 4.2.5 on 2023-09-16 08:58

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("test2", "0001_initial"),
    ]

    operations = [
        migrations.AlterField(
            model_name="agent_login",
            name="usertype",
            field=models.IntegerField(),
        ),
    ]
