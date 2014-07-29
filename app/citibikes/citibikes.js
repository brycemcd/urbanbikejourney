var module = angular.module('urbanBikeJourney.citiBikes', [
  'ui.router',
  'urbanBikeJourney.citiBikes.controller.list',
  'urbanBikeJourney.citiBikes.controller.detail',
  'urbanBikeJourney.citiBikes.service'
]);

module.config(['$urlRouterProvider', '$stateProvider', function($urlRouterProvider, $stateProvider) {
  $stateProvider
    .state('citibikesList', {
          url: '/citibikes',
          templateUrl: 'citibikes.list.html.haml',
          controller: 'CitiBikesListCtrl'
    })

    .state('citibikesdetail', {
          url: '/citibikes/:id',
          templateUrl: 'citibikes.detail.html.haml>',
          controller: 'CitiBikesDetailCtrl'
    });
}]);
