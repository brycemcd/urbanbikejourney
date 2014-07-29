var module = angular.module('urbanBikeJourney', [
  'ui.router',
  'urbanBikeJourney.citiBikes',
  'urbanBikeJourney.routes',
]);

module.run(['$state', function ($state) {
   $state.transitionTo('welcome');
}]);

module.config(['$locationProvider', '$urlRouterProvider', '$stateProvider', function($locationProvider, $urlRouterProvider, $stateProvider) {
  $locationProvider.html5Mode(true);

  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('welcome', {
          url: '/welcome',
          template: '<p>Welcome</p>'
          ,
          redirectTo: function(current, path, search){
            if(search.goto){
              return '/' + search.goto
            }
            else{
              return '/'
            }
          }
    });
}]);
