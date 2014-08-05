var module = angular.module('urbanBikeJourney.citibikes.controller.list', []);

module.controller('CitiBikeListCtrl', ['$scope', '$state', '$resource', 'CitiBike', function($scope, $state, $resource, CitiBike) {
  $scope.id = $stateParams.id;

  if ($scope.id) {
    CitiBike.get({id: $scope.id}, function(data) {
      $scope.station = data}, function(error) {
        $scope.error = error.data;
      }
    );
  }

  $scope.cancel = function() {
    $state.transitionTo('citiBikeList');
  };
}]);
