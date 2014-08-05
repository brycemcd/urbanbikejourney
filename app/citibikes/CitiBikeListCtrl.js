var module = angular.module('urbanBikeJourney.citibike.controller.list', []);

module.controller('CitiBikeListCtrl', ['$scope', '$state', '$resource', 'CitiBike', function($scope, $state, $resource, CitiBike) {
  $scope.stations = CitiBike.all();

  var citiBikesAPI = $resource('http://www.citibikenyc.com/stations/json',
    { callback: 'JSON_CALLBACK' },
    { get: { method: 'JSONP' }});

  $scope.stationsCitiBikesAPI = citiBikesAPI.get();

  $scope.detail = function(station) {
    $state.transitionTo('citiBikeDetail', {id: id});
  };
}]);
