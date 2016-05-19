richCaptionsApp.config(['$routeProvider',
    function ($routeProvider) {
        $routeProvider.when('/', {
            templateUrl: '/static/html/home/index.html',
            controller: 'HomeController'
        }).when('/editor', {
            templateUrl: '/static/html/editor/index.html',
            controller: 'EditorController'
        }).when('/editor/:videoId', {
            templateUrl: '/static/html/editor/captioner.html',
            controller: 'CaptioningController'
        }).otherwise({
            redirectTo: '/'
        });
    }
]);