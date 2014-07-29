var module = angular.module('urbanBikeJourney.routes', [
  'ui.router',
  'ngSanitize',
  'urbanBikeJourney.controllers',
  'urbanBikeJourney.directives'
]);

module.config(['$urlRouterProvider', '$stateProvider', function($urlRouterProvider, $stateProvider) {
  $stateProvider
    .state('?', {
          url: '/?',
          templateUrl: '',
          controller: ''
    })

    .state('?', {
          url: '/?/:id',
          templateUrl: '',
          controller: ''
    });
}]);
