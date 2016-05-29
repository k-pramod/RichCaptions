from rest_framework import serializers

from editor.models import Caption
from player.models import Video
from .validators import required


class CaptionSerializer(serializers.ModelSerializer):
    id = serializers.ReadOnlyField()
    video_id = serializers.IntegerField()

    # Declare all the model fields as serializers
    markup = serializers.CharField(max_length=1024, allow_blank=False, validators=[required])
    starttime = serializers.IntegerField(validators=[required])
    endtime = serializers.IntegerField(validators=[required])

    class Meta:
        model = Caption
        fields = ('id', 'video_id', 'markup', 'starttime', 'endtime')
        read_only_fields = ('video',)


class VideoSerializer(serializers.ModelSerializer):
    id = serializers.ReadOnlyField()

    # Declare all the model fields as serializers
    url = serializers.URLField(allow_blank=False, validators=[required])
    resource_id = serializers.CharField(max_length=16, allow_blank=False, validators=[required])
    title = serializers.CharField(max_length=64, allow_blank=False)

    class Meta:
        model = Video
        fields = ('id', 'resource_id', 'url', 'title', 'caption_set')
        read_only_fields = ('resource_id', 'url')
