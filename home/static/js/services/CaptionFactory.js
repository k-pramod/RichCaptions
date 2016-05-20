richCaptionsApp.factory('captionFactory', function ($http) {
    var factory = {};
    factory.get = function (videoId) {
        return $http({
            method: 'GET',
            url: '/api/videos/' + videoId + '/captions/?format=json',
            'contentType': 'application/json'
        });
    };

    factory.post = function (videoId, newCaption) {
        return $http({
            method: 'POST',
            url: '/api/videos/' + videoId + '/captions/',
            contentType: 'application/json',
            data: newCaption
        })
    };

    /**
     * Updates the Angular $scope with correct caption
     * NOTE: $scope MUST declare this before hand
     *      $scope.defaultCaption = {'markup': 'No caption right now...'};
     *      $scope.currentCaption = $scope.defaultCaption;
     *
     * @param scope     The Angular $scope
     */
    factory.updateCaptions = function (scope) {
        var playerTime = scope.player.getCurrentTime();
        if (!isInRange(playerTime, scope.currentCaption)) {
            // set current caption to next one
            scope.currentCaption = getCurrentCaption(scope);
            scope.$apply();
        }
    };

    var isInRange = function (playerTime, caption) {
        var playerTimeMS = playerTime * 1000;
        return caption['starttime'] <= playerTimeMS && playerTimeMS <= caption['endtime'];
    };

    var getCurrentCaption = function (scope) {
        var playerTime = scope.player.getCurrentTime();
        for (var i = 0; i < scope.captions.length; i++) {
            var caption = scope.captions[i];
            if (isInRange(playerTime, caption)) {
                return caption;
            }
        }
        return scope.defaultCaption;
    };

    return factory;
});