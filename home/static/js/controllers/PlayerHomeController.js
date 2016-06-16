'use strict';

playerControllers.controller('PlayerHomeController', ['$scope', 'videoFactory', 'toastFactory',
    function PlayerHomeController($scope, videoFactory, toastFactory) {
        $scope.message = "Welcome to the playerHomeController";

        $scope.videos = {};

        $scope.loading = true;

        videoFactory.getAll()
            .success(function (data) {
                $scope.loading = false;
                $scope.videos = data['results'];
            })
            .error(function (data, status, headers, config) {
                toastFactory.show('error', 'Error:', 'unable to get videos.');
                console.warn(data);
            });
    }
]);