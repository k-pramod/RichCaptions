from rest_framework import viewsets
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

    def list(self, request, **kwargs):
        queryset = self.queryset.filter(pk=kwargs['video_pk'])
        serializer = CaptionSerializer(queryset, many=True, context={'request': request})
        return Response(serializer.data)

    def retrieve(self, request, **kwargs):
        queryset = self.queryset.get(id=kwargs['pk'])
        serializer = CaptionSerializer(queryset, context={'request': request})
        return Response(serializer.data)
