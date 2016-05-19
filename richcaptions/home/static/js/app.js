var richCaptionsApp = angular.module('RichCaptions',
    [
        'ngRoute',
        'smart-table',
        'katex',
        'editorControllers',
        'homeControllers',
        'ngMaterial',
        'ngMessages',
        'ngMdIcons',
        'ngSanitize']);


richCaptionsApp.config(function ($interpolateProvider) {
    $interpolateProvider.startSymbol('{$');
    $interpolateProvider.endSymbol('$}');
});