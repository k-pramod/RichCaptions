'use strict';

editorControllers.controller('CaptioningController', ['$scope', '$routeParams', 'videoFactory', 'captionFactory',
    function CaptioningController($scope, $routeParams, videoFactory, captionFactory) {

        $scope.videoId = $routeParams.videoId;
        $scope.video = {};
        $scope.captions = null;

        var getVideoAndCaptions = function () {
            videoFactory.get($scope.videoId)
                .success(function (data) {
                    $scope.video = data;
                })
                .error(function (data, status, headers, config) {
                    alert("Error in getting videos");
                });

            captionFactory.get($scope.videoId)
                .success(function (data) {
                    $scope.captions = data['results'];
                })
                .error(function () {
                    alert('Error');
                });
        };

        getVideoAndCaptions();

    }
]);