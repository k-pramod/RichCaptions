'use strict';

editorControllers.controller('EditorController', ['$scope', '$location', 'videoFactory',
    function EditorController($scope, $location, videoFactory) {
        $scope.message = "Welcome home!";
        $scope.videos = {};

        var getVideos = function () {
            videoFactory.getAll()
                .success(function (data) {
                    $scope.videos = data['results'];
                })
                .error(function (data, status, headers, config) {
                    alert("Error in getting videos");
                });
        };

        getVideos();
    }]
);

/*
 var BASE_URI = $location.protocol() + "://" + $location.host() + ":" + $location.port() + "/";
 */