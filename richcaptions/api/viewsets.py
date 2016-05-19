from rest_framework import viewsets

from player.models import Video
from editor.models import Caption

from .serializers import VideoSerializer, CaptionSerializer
from rest_framework_extensions.mixins import NestedViewSetMixin


class VideoViewSet(viewsets.ModelViewSet,
                   NestedViewSetMixin):
    queryset = Video.objects.all()
    serializer_class = VideoSerializer


class CaptionViewSet(viewsets.ModelViewSet,
                     NestedViewSetMixin):
    queryset = Caption.objects.all()
    serializer_class = CaptionSerializer
