'use strict';

playerControllers.controller('PlayerController', ['$scope', '$routeParams', 'videoFactory', 'captionFactory',
    function PlayerController($scope, $routeParams, videoFactory, captionFactory) {

        $scope.videoId = $routeParams.videoId;
        $scope.video = null;
        $scope.captions = null;

        var defaultCaption = {'markup': 'No caption right now...'};

        $scope.currentCaption = defaultCaption;

        videoFactory.get($scope.videoId)
            .success(function (data) {
                $scope.video = data;
            })
            .error(function () {
                alert("Error in getting videos");
            });

        captionFactory.get($scope.videoId)
            .success(function (data) {
                $scope.captions = data['results'];
            })
            .error(function () {
                alert('Error in getting captions');
            });

        var refresh = 1000;
        setInterval(function () {
            runCaptions($scope.player.getCurrentTime());
        }, refresh);

        var runCaptions = function (playerTime) {
            if (!isInRange(playerTime, $scope.currentCaption)) {
                // set current caption to next one
                $scope.currentCaption = getCurrentCaption(playerTime);
                $scope.$apply();
            }
        };

        var isInRange = function (playerTime, caption) {
            var playerTimeMS = playerTime * 1000;
            return caption['starttime'] <= playerTimeMS && playerTimeMS <= caption['endtime'];
        };

        var getCurrentCaption = function (playerTime) {
            var caption;
            for (var i = 0; i < $scope.captions.length; i++) {
                caption = $scope.captions[i];
                if (isInRange(playerTime, caption)) {
                    return caption;
                }
            }
            return defaultCaption;
        }

    }
]);