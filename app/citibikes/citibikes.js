var module = angular.module('urbanBikeJourney.citibikes', [
  'ui.router',
  'urbanBikeJourney.citibikes.controller.list',
  'urbanBikeJourney.citibikes.controller.detail',
  'urbanBikeJourney.citibikes.service'
]);

module.config(['$urlRouterProvider', '$stateProvider', function($urlRouterProvider, $stateProvider) {
  $stateProvider
    .state('citiBikeList', {
          url: '/citibikes',
          templateUrl: 'citibikes.list.html.haml',
          controller: 'CitiBikeListCtrl'
    })

    .state('citiBikeDetail', {
          url: '/citibikes/:id',
          templateUrl: 'citibikes.detail.html.haml>',
          controller: 'CitiBikeDetailCtrl'
    });
}]);
