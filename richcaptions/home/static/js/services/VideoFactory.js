richCaptionsApp.factory('videoFactory', function ($http) {
    return {
        getAll: function() {
            return $http({
                method: 'GET',
                url: '/api/videos/?format=json',
                'contentType': 'application/json'
            });
        },
        get: function(videoId) {
            return $http({
                method: 'GET',
                url: '/api/videos/' + videoId + '/?format=json',
                'contentType': 'application/json'
            });
        }
    }
});