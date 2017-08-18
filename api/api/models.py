from django.db import models


class Video(models.Model):
    """
    Represents a single playable video registered with richcaptions
    """

    # The URL of the YouTube video (e.g. https://www.youtube.com/watch?v=JC82Il2cjqA)
    url = models.URLField(blank=False, verbose_name="video URL")

    # The YouTube video id (e.g. JC82Il2cjqA)
    resource_id = models.CharField(max_length=16, blank=False, verbose_name="video resource ID")

    # Some metadata attributes of the video
    title = models.CharField(max_length=64, blank=True, verbose_name="video title")

    def __str__(self):
        if self.title != '':
            return "{} at {}".format(self.title, self.url)
        else:
            return self.url


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
