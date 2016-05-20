richCaptionsApp.factory('captionFactory', function ($http) {
    return {
        get: function(videoId) {
            return $http({
                method: 'GET',
                url: '/api/videos/' + videoId + '/captions/?format=json',
                'contentType': 'application/json',
            });
        }
    }
});