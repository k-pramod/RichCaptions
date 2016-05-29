from rest_framework import viewsets
from rest_framework_extensions.mixins import NestedViewSetMixin

from editor.models import Caption
from player.models import Video
from .filters import VideoFilter, CaptionFilter
from .serializers import VideoSerializer, CaptionSerializer


class VideoViewSet(viewsets.ModelViewSet, NestedViewSetMixin):
    queryset = Video.objects.all()
    serializer_class = VideoSerializer

    filter_class = VideoFilter


class CaptionViewSet(viewsets.ModelViewSet, NestedViewSetMixin):
    queryset = Caption.objects.all()
    serializer_class = CaptionSerializer

    filter_class = CaptionFilter
