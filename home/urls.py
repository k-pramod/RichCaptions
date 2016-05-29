from django.conf.urls import url

from . import views

urlpatterns = [
    url(r'^(?![\s\S])', views.index, name='home-index'),
]

# Blank: r'^(?![\s\S])'
