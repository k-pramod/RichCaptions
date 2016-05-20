'use strict';

playerControllers.controller('PlayerController', ['$scope', '$routeParams', 'videoFactory', 'captionFactory',
    function PlayerController($scope, $routeParams, videoFactory, captionFactory) {

        $scope.videoId = $routeParams.videoId;
        $scope.video = null;
        $scope.captions = null;

        $scope.defaultCaption = {'markup': 'No caption right now...'};
        $scope.currentCaption = $scope.defaultCaption;

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

        setInterval(function () {
            captionFactory.updateCaptions($scope);
        }, 1000);

    }
]);