'use strict';

editorControllers.controller('CaptioningController', ['$scope', '$routeParams', 'videoFactory', 'captionFactory', 'toastFactory', '$location', '$anchorScroll',
    function CaptioningController($scope, $routeParams, videoFactory, captionFactory, toastFactory, $location, $anchorScroll) {

        $scope.videoId = $routeParams.videoId;
        $scope.video = {};
        $scope.captions = null;

        $scope.defaultCaption = {
            'markup': '',
            'starttime_sec': '',
            'endtime_sec': '',
            'id': -1
        };
        $scope.currentCaption = $scope.defaultCaption;

        $scope.showAllCaptions = false;
        $scope.toggleCaptions = function () {
            $scope.showAllCaptions = !$scope.showAllCaptions;
        };

        $scope.captioner = {};
        $scope.captioner.newCaption = $scope.defaultCaption;

        $scope.currentTime = 0;

        $scope.updateStart = function () {
            var newCaption = $scope.captioner.newCaption;
            if (newCaption.starttime_sec == '') {
                newCaption.starttime_sec = $scope.player.getCurrentTime();
            }
        };

        $scope.playerSpeed = 1;
        $scope.playerSpeeds = [0.5, 1, 1.5, 2];
        $scope.updateSpeed = function () {
            $scope.player.setPlaybackRate(parseFloat($scope.playerSpeed));
        };

        $scope.newCaptions = [];

        $scope.skip = function (duration) {
            var currentTime = $scope.player.getCurrentTime();
            $scope.player.seekTo(currentTime + parseFloat(duration));
        };


        $scope.trySave = function ($event) {
            /* If enter pressed:
             1. Convert the caption to the API version
             2. Save the caption to the database
             3. Update the captions table
             */
            if ($event.charCode == 13) { // User presses enter
                var newCaption = $scope.captioner.newCaption;
                newCaption.endtime_sec = $scope.player.getCurrentTime();
                // Get API version of caption
                var dbCaption = {
                    'markup': newCaption.markup,
                    'starttime': parseInt(newCaption.starttime_sec * 1000),
                    'endtime': parseInt(newCaption.endtime_sec * 1000),
                    'video_id': $scope.videoId
                };
                // Post the data
                captionFactory.post($scope.videoId, dbCaption)
                    .success(function (data) {
                        console.log(data);
                        $scope.captions.push(data);
                        $scope.newCaptions.push(newCaption);
                        $scope.captioner.currentCaption = $scope.defaultCaption;
                    })
                    .error(function (err) {
                        console.warn(err);
                    });
            }
        };


        $scope.rgx = /.*/;
        // (([^$]*)(\$[^\$]*\$)*([^$]*))*
        videoFactory.get($scope.videoId)
            .success(function (data) {
                $scope.video = data;
            })
            .error(function (data, status, headers, config) {
                toastFactory.show('error', 'Error:', 'unable to get video.');
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

        var currentRow = $();

        setInterval(function () {
            var hasUpdated = captionFactory.updateCaptions($scope);
            if (hasUpdated) goToCurrentCaption();
        }, 1000);

        var goToCurrentCaption = function () {
            var currentCaptionId = $scope.currentCaption['id'];
            // http://stackoverflow.com/questions/14166557/jquery-find-the-index-of-a-row-with-a-specific-data-attribute-value
            var row = $('.captioner-caption-table tr[data-caption-id=' + currentCaptionId + ']');
            currentRow.removeClass('active');
            row.addClass('active');
            currentRow = row;

            var table = $('.captioner-caption-table tbody');

            if (row.length) {
                // http://stackoverflow.com/questions/2905867/how-to-scroll-to-specific-item-using-jquery
                table.animate({
                    scrollTop: row.offset().top - table.offset().top + table.scrollTop()
                });
            }
        };
    }
]);