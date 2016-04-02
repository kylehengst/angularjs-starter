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

(function() {
    'use strict';

    angular.module('app.config', [])

        // prod || env
        .constant('ENV','prod')
        .constant('API_URL','https://api.fixer.io/')

    ;

})();
(function() {
    'use strict';

    angular.module('app.filters', [])

        .filter('objToArr', function () {

            return function (items) {
                if (!items) return [];
                return Object.keys(items)
                    .map(function (key) {
                        items[key].id = key;
                        return items[key];
                    });
            }

        })

        .filter('toArray', function () {

            return function (obj, id) {
                var result = [];
                var k = id ? id : 'id';
                angular.forEach(obj, function (val, key) {
                    val[k] = key;
                    result.push(val);
                });
                return result;
            };

        })

    ;

})();
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
(function() {
    'use strict';

    angular.module('app.controllers', []);


})();
(function() {
    'use strict';

    angular.module('app.controllers')

        .controller('MainCtrl', MainCtrl);

    MainCtrl.$inject = ['$state','$stateParams', '$http'];

    function MainCtrl($state, $stateParams, $http) {

        var mainvm = this;
        mainvm.hello = 'Hello';

        activate();

        function activate()
        {
            toastr.info('Main Controller');
        }

    }


})();
(function() {
    'use strict';

    angular
        .module('app.directives',[])

        .directive('reallyClick', function() {
            return {
                restrict: 'A',
                link: function(scope, element, attrs) {
                    element.bind('click', function() {
                        var message = attrs.reallyMessage;
                        if (message && confirm(message)) {
                            scope.$apply(attrs.reallyClick);
                        }
                    });
                }
            }
        })

    ;


})();
(function() {
    'use strict';

    angular
        .module('app.directives')
        .directive('dcTest', dcTest);

    function dcTest() {

        var directive = {
            link: link,
            templateUrl: 'app/directives/test.html',
            replace:true,
            restrict: 'A'
        };
        return directive;

        function link(scope, element, attrs) {

        }

    }

})();
(function() {
    'use strict';

    angular.module('app.service.data', [])

        .service('Data', Data);

    Data.$inject = ['$http', 'API_URL'];

    function Data($http, API_URL) {

        var model = this;
        model.getLatest = getLatest;

        var urls = {
            LATEST: API_URL+'latest',
        };

        /**
         * Get the latest exchange rates
         * @returns {*}
         */

        function getLatest(){
            return $http.get(urls.LATEST).then(function(response){
                return response.data;
            });
        }

    }

})();