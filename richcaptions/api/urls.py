from django.conf.urls import url, include, patterns
from rest_framework_nested import routers

from .viewsets import VideoViewSet, CaptionViewSet

"""# Routers provide an easy way of automatically determining the URL conf.
router = routers.DefaultRouter()
router.register(r'videos', VideoViewSet)
router.register(r'captions', CaptionViewSet)

# Wire up our API using automatic URL routing.
# Additionally, we include login URLs for the browsable API.
urlpatterns = [
    url(r'^', include(router.urls)),
]"""


router = routers.SimpleRouter()
router.register(r'video', VideoViewSet, base_name='video')
router.register(r'caption', CaptionViewSet, base_name='caption')

videos_router = routers.NestedSimpleRouter(router, r'video', lookup='video')
videos_router.register(r'caption', CaptionViewSet, base_name='video-captions')

urlpatterns = [
    url(r'^', include(router.urls)),
    url(r'^', include(videos_router.urls)),
]