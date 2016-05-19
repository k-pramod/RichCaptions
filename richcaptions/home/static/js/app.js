var richCaptionsApp = angular.module('RichCaptions',
    [
        'ngRoute',
        'smart-table',
        'katex',
        'homeControllers',
        'playerControllers',
        'editorControllers',
        'ngMaterial',
        'ngMessages',
        'ngMdIcons',
        'ngSanitize']);

richCaptionsApp.run(function ($rootScope, $location) {
    $rootScope.redirect = function (newLocation) {
        $location.path(newLocation);
    };
});

richCaptionsApp.config(function ($interpolateProvider) {
    $interpolateProvider.startSymbol('{$');
    $interpolateProvider.endSymbol('$}');
});