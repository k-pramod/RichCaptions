from rest_framework import viewsets, renderers
from rest_framework.decorators import detail_route
from rest_framework.response import Response

from player.models import Video
from editor.models import Caption


from .serializers import VideoSerializer, CaptionSerializer


class VideoViewSet(viewsets.ModelViewSet):
    queryset = Video.objects.all()
    serializer_class = VideoSerializer


class CaptionViewSet(viewsets.ModelViewSet):
    queryset = Caption.objects.all()
    serializer_class = CaptionSerializer
