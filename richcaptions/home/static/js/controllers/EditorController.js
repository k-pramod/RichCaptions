'use strict';

editorControllers.controller('EditorController', ['$scope', '$location', 'videoFactory',
    function EditorController($scope, $location, videoFactory) {
        $scope.message = "Welcome home!";

        $scope.redirect = function(newLocation) {
            $location.path(newLocation);
        };

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

 $scope.video = {
 'id' : '',
 'url': '',
 'resource_id': '',
 'title': '',
 'captions': []
 };

 $scope.redirect = function(loc) {
 $location.url('edit')
 }

 $scope.getCaptions = function() {
 captionFactory.get($scope.video.id)
 .success(function(data) {
 $scope.captions = JSON.parse(data);
 })
 .error(function(data, status, headers, config) {
 alert("Error in getting captions");
 })
 };
 */