from rest_framework import serializers, status
from rest_framework.response import Response
from rest_framework_nested.relations import NestedHyperlinkedRelatedField

from player.models import Video
from editor.models import Caption

from .forms import VideoAPIForm
from .forms import CaptionAPIForm

from .utils import validate_against_model


class VideoSerializer(serializers.HyperlinkedModelSerializer):
    id = serializers.ReadOnlyField()

    class Meta:
        model = Video
        fields = '__all__'
        read_only_fields = ('resource_id', 'url')

    caption_set = NestedHyperlinkedRelatedField(many=True,
                                                read_only=True,
                                                view_name='video-captions-detail',
                                                parent_lookup_field='video',
                                                parent_lookup_url_kwarg='video_pk')

    def validate(self, attrs):
        validate_against_model(attrs, VideoAPIForm)
        return attrs


class CaptionSerializer(serializers.ModelSerializer):
    id = serializers.ReadOnlyField()
    video_id = serializers.IntegerField()

    class Meta:
        model = Caption
        fields = '__all__'
        read_only_fields = ('video',)

    def validate(self, attrs):
        validate_against_model(attrs, CaptionAPIForm)
        return attrs

    def create(self, validated_data):
        video_id = validated_data.pop('video_id')
        video = Video.objects.create(id=video_id)
        caption = Caption.objects.create(**validated_data, video=video)
        return caption


