from rest_framework import viewsets, filters

from api.models import Video
from api.models import Caption

from api.serializers import VideoSerializer, CaptionSerializer
from rest_framework_extensions.mixins import NestedViewSetMixin

from api.filters import VideoFilter, CaptionFilter
from rest_framework.permissions import IsAuthenticatedOrReadOnly, IsAuthenticated


class VideoViewSet(viewsets.ModelViewSet, NestedViewSetMixin):
    permission_classes = (IsAuthenticatedOrReadOnly, )

    queryset = Video.objects.all()
    serializer_class = VideoSerializer

    filter_class = VideoFilter


class CaptionViewSet(viewsets.ModelViewSet, NestedViewSetMixin):
    permission_classes = (IsAuthenticatedOrReadOnly, )

    queryset = Caption.objects.all()
    serializer_class = CaptionSerializer

    filter_class = CaptionFilter
