from django.conf.urls import url
from . import views
from .views import video

urlpatterns = [
    url(r'^create/', video.create, name='player_create'),
    url(r'^', views.index, name='player_home')
]
