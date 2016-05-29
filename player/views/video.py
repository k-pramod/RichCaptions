from django.core.urlresolvers import reverse
from django.http.response import HttpResponseRedirect
from django.shortcuts import render

from ..forms import VideoForm


def create(request):
    if request.method == 'POST':
        form = VideoForm(request.POST)
        if form.is_valid():
            form.save()
            return HttpResponseRedirect(reverse('player_home'))
        else:
            pass
    else:
        form = VideoForm()

    return render(request, 'video/create.html', context={'form': form})
