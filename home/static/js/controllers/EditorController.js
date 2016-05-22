'use strict';

editorControllers.controller('EditorController', ['$scope', '$location', 'videoFactory',
    function EditorController($scope, $location, videoFactory) {
        $scope.message = "Welcome home!";
        $scope.videos = {};

        videoFactory.getAll()
            .success(function (data) {
                $scope.videos = data['results'];
            })
            .error(function () {
                alert("Error in getting videos");
            });

    }]
);

/*
 var BASE_URI = $location.protocol() + "://" + $location.host() + ":" + $location.port() + "/";
 */