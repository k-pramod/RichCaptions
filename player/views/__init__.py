from django.shortcuts import render

from ..models import Video


def index(request):
    return render(request, template_name='index.html', context={'videos': Video.objects.all()})
