'use strict';

playerControllers.controller('SearchController', ['$scope', '$rootScope', 'searchFactory', 'toastFactory',
    function SearchController($scope, $rootScope, searchFactory, toastFactory) {

        $scope.text = "";
        $scope.results = [];
        $scope.resultsFound = false;
        $scope.loading = false;
        $scope.search = function () {
            $scope.loading = true;
            searchFactory.search($scope.text)
                .success(function (data) {
                    if (data.count > 0) {
                        $scope.results = data.results;
                        $scope.resultsFound = true;
                    } else {
                        $scope.resultsFound = false;
                    }
                    $scope.loading = false;
                })
                .error(function (data) {
                    $scope.resultsFound = false;
                })
                .finally(function () {
                    if (!$scope.resultsFound) {
                        toastFactory.show('error', 'No results', '(or server error)');
                    } else {
                        toastFactory.show('good', 'Results found!', '');
                    }
                });
        };
    }
]);