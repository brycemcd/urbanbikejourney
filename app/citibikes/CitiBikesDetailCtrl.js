var module = angular.module('urbanBikeJourney.citiBikes.controller.list', []);

module.controller('CitiBikesListCtrl', ['$scope', '$state', '$resource', 'citibikes', function($scope, $state, $resource, citibikes) {
  $scope.cancel = function() {
    $state.transitionTo('citibikeslist');
  };
}]);
