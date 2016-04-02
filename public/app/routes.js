(function() {
    'use strict';

    angular.module('app.routes', [])

        .config(function ($stateProvider, $urlRouterProvider) {

            $stateProvider

                .state('index', {
                    url: '',
                    resolve:{

                    },
                    templateUrl: 'app/views/index.html',
                    controller: 'MainCtrl',
                    controllerAs: 'mainvm'
                })

            ;

            $urlRouterProvider.otherwise('/');

        })

        .run(function($rootScope, ENV){
            $rootScope.ENV = ENV;
        })

    ;

})();