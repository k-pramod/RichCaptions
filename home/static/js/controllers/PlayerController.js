'use strict';

playerControllers.controller('PlayerController', ['$scope', '$routeParams', 'videoFactory', 'captionFactory', 'toastFactory',
    function PlayerController($scope, $routeParams, videoFactory, captionFactory, toastFactory) {

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
                toastFactory.show('error', 'Error:', 'unable to get videos.');
                console.warn(data);
            });

        captionFactory.get($scope.videoId)
            .success(function (data) {
                $scope.captions = data['results'];
            })
            .error(function () {
                toastFactory.show('error', 'Error:', 'unable to get captions.');
                console.warn(data);
            });

        setInterval(function () {
            captionFactory.updateCaptions($scope);
        }, 1000);

    }
]);