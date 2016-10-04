richCaptionsApp.factory('searchFactory', function ($http) {
    var factory = {};

    var dictToUrlParams = function (baseUrl, dict) {
        var params = '?';
        for (var key in dict) {
            params += encodeURIComponent(key) + '=' + encodeURIComponent(dict[key]) + '&';
        }
        console.info(baseUrl + params);
        return baseUrl + params;
    };

    var videoTitleSearch = function (param) {
        return dictToUrlParams('/api/videos/', {'title__icontains': param, 'format': 'json'});
    };

    var constructURL = function (param) {
        return videoTitleSearch(param);
    };

    factory.search = function (param) {
        return $http({
            method: 'GET',
            url: constructURL(param),
            'contentType': 'application/json'
        });
    };

    return factory;
});