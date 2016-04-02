(function() {
    'use strict';

    angular.module('app', [

        'ngTouch',
        'ngSanitize',
        'ui.router',
        'ui.bootstrap',
        'ui.bootstrap.tooltip',
        'angularFileUpload',

        'app.routes',
        'app.config',
        'app.filters',

        'app.directives',
        'app.service.data',

        'app.controllers'

    ]);

})();
