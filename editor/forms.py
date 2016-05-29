from django.forms import ModelForm

from .models import Caption


class CaptionForm(ModelForm):
    class Meta:
        model = Caption
        fields = '__all__'
