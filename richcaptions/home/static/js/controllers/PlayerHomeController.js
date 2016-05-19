'use strict';

playerControllers.controller('PlayerHomeController', ['$scope', 'videoFactory',
    function PlayerHomeController($scope, videoFactory) {
        $scope.message = "Welcome to the playerHomeController";

        $scope.videos = {};

        videoFactory.getAll()
            .success(function (data) {
                $scope.videos = data['results'];
            })
            .error(function (data, status, headers, config) {
                alert("Error in getting videos");
            });
    }
]);