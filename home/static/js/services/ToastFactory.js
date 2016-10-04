richCaptionsApp.factory('toastFactory', function ($mdToast) {
    var factory = {};

    var getSimpleTemplate = function (type, title, message) {
        return '<md-toast class="md-toast ' + type + '">'
            + '<md-toast-content>'
            + '<b>' + title + '</b>'
            + '&nbsp;' + message
            + '</md-toast-content>'
            + '</md-toast>';
    };

    factory.show = function (type, title, message) {
        $mdToast.show({
            template: getSimpleTemplate(type, title, message),
            hideDelay: 6000,
            position: 'bottom right'
        });
    };

    return factory;
});