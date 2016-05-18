from rest_framework import serializers

from player.models import Video
from editor.models import Caption


class VideoSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Video
        fields = '__all__'
        read_only_fields = ('resource_id', 'url')


class CaptionSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Caption
        fields = '__all__'
        read_only_fields = ('video',)
