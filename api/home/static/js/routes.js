richCaptionsApp.config(['$routeProvider',
    function ($routeProvider) {
        $routeProvider.when('/', {
            templateUrl: '/static/html/home/index.html',
            controller: 'HomeController',
            tab: 0
        }).when('/player', {
            templateUrl: '/static/html/player/index.html',
            controller: 'PlayerHomeController',
            tab: 1
        }).when('/player/:videoId', {
            templateUrl: '/static/html/player/player.html',
            controller: 'PlayerController',
            tab: 1
        }).when('/editor', {
            templateUrl: '/static/html/editor/index.html',
            controller: 'EditorController',
            tab: 2
        }).when('/editor/:videoId', {
            templateUrl: '/static/html/editor/captioner.html',
            controller: 'CaptioningController',
            tab: 2
        }).when('/search', {
            templateUrl: '/static/html/search/index.html',
            controller: 'SearchController',
            tab: 3
        }).otherwise({
            redirectTo: '/'
        });
    }
]);