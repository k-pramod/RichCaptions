'use strict';

editorControllers.controller('EditorController', ['$scope', '$location', 'videoFactory', 'toastFactory',
    function EditorController($scope, $location, videoFactory, toastFactory) {
        $scope.message = "Welcome home!";
        $scope.videos = {};

        $scope.loading = true;

        videoFactory.getAll()
            .success(function (data) {
                $scope.loading = false;
                $scope.videos = data['results'];
            })
            .error(function () {
                toastFactory.show('error', 'Error:', 'unable to get videos.');
                console.warn(data);
            });
    }]
);

/*
 var BASE_URI = $location.protocol() + "://" + $location.host() + ":" + $location.port() + "/";
 */