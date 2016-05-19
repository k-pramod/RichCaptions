from django.forms import ModelForm
from editor.models import Caption
from player.models import Video


class CaptionAPIForm(ModelForm):
    class Meta:
        model = Caption
        exclude = ('video', )


class VideoAPIForm(ModelForm):
    class Meta:
        model = Video
        fields = '__all__'
