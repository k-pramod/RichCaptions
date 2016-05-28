'use strict';

playerControllers.controller('SearchController', ['$scope', 'searchFactory', 'toastFactory',
    function SearchController($scope, searchFactory, toastFactory) {
        $scope.text = "";
        $scope.results = [];
        $scope.resultsFound = false;
        $scope.search = function () {
            searchFactory.search($scope.text)
                .success(function (data) {
                    if (data.count > 0) {
                        $scope.results = data.results;
                        $scope.resultsFound = true;
                    } else {
                        $scope.resultsFound = false;
                    }
                })
                .error(function (data) {
                    $scope.resultsFound = false;
                });

            if ($scope.resultsFound == false) {
                toastFactory.show('error', 'No results', '(or server error)');
            }
        }
    }
]);