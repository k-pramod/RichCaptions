from django.db import models
from player.models import Video


class Caption(models.Model):
    """
    Represents a single enhanced caption
    """

    # The video for this caption
    video = models.ForeignKey(Video, on_delete=models.CASCADE)

    # The LaTeX markup for the caption
    markup = models.CharField(max_length=1024, blank=False)

    # The start and end times for displaying the caption
    starttime = models.IntegerField(blank=False, verbose_name="Start time (ms)")
    endtime = models.IntegerField(blank=False, verbose_name="End time (ms)")

    def __str__(self):
        title = self.video.title
        return "\"{}\" for {}".format(self.markup, title if title != "" else self.video.resource_id)
