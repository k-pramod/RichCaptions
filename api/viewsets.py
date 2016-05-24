from rest_framework import viewsets, filters

from player.models import Video
from editor.models import Caption

from .serializers import VideoSerializer, CaptionSerializer
from rest_framework_extensions.mixins import NestedViewSetMixin

from .filters import VideoFilter, CaptionFilter


class VideoViewSet(viewsets.ModelViewSet, NestedViewSetMixin):
    queryset = Video.objects.all()
    serializer_class = VideoSerializer

    filter_class = VideoFilter


class CaptionViewSet(viewsets.ModelViewSet, NestedViewSetMixin):
    queryset = Caption.objects.all()
    serializer_class = CaptionSerializer

    filter_class = CaptionFilter
