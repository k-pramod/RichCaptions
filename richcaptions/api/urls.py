"""# Routers provide an easy way of automatically determining the URL conf.
router = routers.DefaultRouter()
router.register(r'videos', VideoViewSet)
router.register(r'captions', CaptionViewSet)

# Wire up our API using automatic URL routing.
# Additionally, we include login URLs for the browsable API.
urlpatterns = [
    url(r'^', include(router.urls)),
]"""

from rest_framework_extensions.routers import ExtendedSimpleRouter

from .viewsets import VideoViewSet, CaptionViewSet

router = ExtendedSimpleRouter()
(
    router
        .register(r'videos',
                  VideoViewSet,
                  base_name='video')
        .register(r'captions',
                  CaptionViewSet,
                  base_name='videos-caption',
                  parents_query_lookups=['video_caption'])
)

urlpatterns = router.urls
