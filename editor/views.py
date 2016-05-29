from django.shortcuts import render

from player.models import Video


def editor(request, video_id):
    video = Video.objects.get(id=video_id)
    return render(request, template_name='editor.html', context={'video': video})
