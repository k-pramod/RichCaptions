var richCaptionsApp = angular.module('RichCaptions',
    [
        'ngRoute',
        'smart-table',
        'katex',
        'youtube-embed',
        'homeControllers',
        'playerControllers',
        'editorControllers',
        'ngMaterial',
        'ngMessages',
        'ngMdIcons',
        'ngSanitize']);

richCaptionsApp.run(function ($rootScope, $location, $route) {
    // Move the navbar's underline as different routes are loaded
    $rootScope.selectedTab = 0;
    $rootScope.$on("$routeChangeSuccess", function () {
        $rootScope.selectedTab = $route.current.$$route.tab;
    });

    // Handle redirections
    $rootScope.redirect = function (newLocation, absolute) {
        if (absolute) {
            window.location.href = '/' + newLocation;
        } else {
            $location.path(newLocation);
        }
    };
    $rootScope.Math = window.Math;
});

richCaptionsApp.config(function ($interpolateProvider) {
    $interpolateProvider.startSymbol('{$');
    $interpolateProvider.endSymbol('$}');
});

richCaptionsApp.config(function ($mdThemingProvider) {
    $mdThemingProvider.theme('default')
        .primaryPalette('blue')
        .accentPalette('red');
});

richCaptionsApp.directive('bindCss', function ($window) {

    return {
        restrict: 'A',

        link: function (scope, elem, attrs) {
            var attributes = scope.$eval(attrs['bindCss']);
            var targetElem = angular.element(document.querySelector(attributes[1]));

            // Watch for changes
            scope.$watch(function () {
                return targetElem.height();
            },
            function (newValue, oldValue) {
                if (newValue != oldValue) {
                    elem.css(attributes[0], newValue);
                }
            });
        }
    };
});