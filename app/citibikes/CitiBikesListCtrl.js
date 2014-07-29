var module = angular.module('urbanBikeJourney.citiBikes.controller.list', []);

module.controller('CitiBikesListCtrl', ['$scope', '$state', '$resource', 'stations', function($scope, $state, $resource, stations) {
  $scope.stations = citibikes.stations();

  var citiBikesAPI = $resource('http://www.citibikenyc.com/stations/json',
    { callback: 'JSON_CALLBACK' },
    { get: { method: 'JSONP' }});

  $scope.stationsCitiBikesAPI = citiBikesAPI.get();

  $scope.detail = function(station) {
    $state.transitionTo('citibikesdetail', {id: id});
  };
}]);
