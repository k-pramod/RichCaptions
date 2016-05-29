from django.conf.urls import url

from . import views

urlpatterns = [
    url(r'^(?P<video_id>[0-9]+)', views.editor, name='editor_edit'),
]
