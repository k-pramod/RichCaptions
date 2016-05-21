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
    $rootScope.$on("$routeChangeSuccess", function(){
        $rootScope.selectedTab = $route.current.$$route.tab;
        console.log($rootScope.selectedTab);
    });

    // Handle redirections
    $rootScope.redirect = function (newLocation) {
        $location.path(newLocation);
    };
});

richCaptionsApp.config(function ($interpolateProvider) {
    $interpolateProvider.startSymbol('{$');
    $interpolateProvider.endSymbol('$}');
});