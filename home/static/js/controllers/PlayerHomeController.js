'use strict';

playerControllers.controller('PlayerHomeController', ['$scope', 'videoFactory', 'toastFactory',
    function PlayerHomeController($scope, videoFactory, toastFactory) {
        $scope.message = "Welcome to the playerHomeController";

        $scope.videos = {};

        videoFactory.getAll()
            .success(function (data) {
                $scope.videos = data['results'];
            })
            .error(function (data, status, headers, config) {
                toastFactory.show('error', 'Error:', 'unable to get videos.');
                console.warn(data);
            });
    }
]);