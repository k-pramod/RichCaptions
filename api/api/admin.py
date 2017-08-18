from django.contrib import admin
from api.models import Caption, Video

admin.site.register((Caption, Video))
