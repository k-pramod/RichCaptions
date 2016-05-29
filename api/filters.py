import rest_framework_filters as filters

from editor.models import Caption
from player.models import Video


class VideoFilter(filters.FilterSet):
    title = filters.AllLookupsFilter(name='title')
    resource_id = filters.CharFilter(name='resource_id')
    url = filters.AllLookupsFilter(name='url')

    class Meta:
        model = Video
        fields = ['title', 'resource_id', 'url']


class CaptionFilter(filters.FilterSet):
    class Meta:
        model = Caption
        fields = {
            'markup': filters.ALL_LOOKUPS,
        }
