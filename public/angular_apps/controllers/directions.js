angular.module('urbanBikeJourney.controllers', []).
  controller('DirectionsCtrl', ['$scope', function($scope, $http) {

  $scope.directionsModel = {
      origin: "grand central station",
      destination: "161 6th, 10013",
      waypoints: [],
      provideRouteAlternatives: false,
      travelMode: google.maps.TravelMode.BICYCLING,
      unitSystem: google.maps.UnitSystem.IMPERIAL
  };

  $scope.brooklyn = new google.maps.LatLng(40.6928, -73.9903);
  $scope.nyc = new google.maps.LatLng(40.7127, -74.0059);
  $scope.directionsDisplay = new google.maps.DirectionsRenderer();
  $scope.directionsService = new google.maps.DirectionsService();


  $scope.getDirections = function() {
    $scope._showStatement();

    var map;
    
    var mapOptions = {
          zoom: 10,
          center: $scope.nyc
    };
    map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
    $scope.directionsDisplay.setMap(map);

    $scope.calcRoute();
  };

  $scope.calcRoute = function() {
    var request = {
      origin: $scope.directionsModel.origin,
      destination: $scope.directionsModel.destination,
      travelMode: google.maps.TravelMode.BICYCLING
    };

    $scope.directionsService.route(request, function(result, status) {
      console.log("request: ", request);
      console.log("result: ", result);
      console.log("status: ", status);
      if (status == google.maps.DirectionsStatus.OK) {
        $scope.directionsDisplay.setDirections(result);
      }
    });
  };

  $scope._showStatement = function() {
    $('#directions-statement').show();
  };
}]);
