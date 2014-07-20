function DirectionsCtrl($scope, $http) {
  $scope.directionsModel = {
    {
      origin: "Chicago, IL",
      destination: "Los Angeles, CA",
      waypoints: [
        {
        location:"Joplin, MO",
        stopover:false
      },{
        location:"Oklahoma City, OK",
        stopover:true
      }],
      provideRouteAlternatives: false,
      travelMode: TravelMode.BICYCLING,
      unitSystem: UnitSystem.IMPERIAL
    }
  };
  $scope.getDirections = function() {
    $scope._showStatement();

    var map;
    var mapOptions = {
          zoom: 10,
          center: new google.maps.LatLng(40.7127, -74.0059)
    };
    map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
  };

  $scope._showStatement = function() {
    $('#directions-statement').show();
  };
};
