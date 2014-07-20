function DirectionsCtrl($scope, $http) {
  $scope.directionsModel = {
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
      origin: $scope.brooklyn,
      destination: $scope.nyc,
      travelMode: google.maps.TravelMode.DRIVING
    };

    $scope.directionsService.route(request, function(result, status) {
      console.log("request: ", request);
      console.log("result: ", result);
      console.log("status: ", status);
      if (status == google.maps.DirectionsStatus.OK) {
        directionsDisplay.setDirections(result);
      }
    });
  };

  $scope._showStatement = function() {
    $('#directions-statement').show();
  };
};
