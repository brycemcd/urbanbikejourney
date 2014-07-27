google.load('visualization', '1', {packages: ['columnchart']});

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
  $scope.elevator = new google.maps.ElevationService();


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

  $scope.plotElevation = function(results, status) {
    // Takes an array of ElevationResult objects, draws the path on the map
    // and plots the elevation profile on a Visualization API ColumnChart.
    console.log('elevation result: ', results);
    console.log('elevation status: ', status);
    if (status != google.maps.ElevationStatus.OK) {
      return;
    }
    var elevations = results;

    // Extract the elevation samples from the returned results
    // and store them in an array of LatLngs.
    var elevationPath = [];
    for (var i = 0; i < results.length; i++) {
      elevationPath.push(elevations[i].location);
    }

    // Display a polyline of the elevation path.
    //var pathOptions = {
      //path: elevationPath,
      //strokeColor: '#0000CC',
      //opacity: 0.4,
      //map: map
    //}
    //polyline = new google.maps.Polyline(pathOptions);

    // Extract the data from which to populate the chart.
    // Because the samples are equidistant, the 'Sample'
    // column here does double duty as distance along the
    // X axis.
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Sample');
    data.addColumn('number', 'Elevation');
    for (var i = 0; i < results.length; i++) {
      data.addRow(['', elevations[i].elevation]);
    }

    chart = new google.visualization.ColumnChart(document.getElementById('elevation-graph'));
    // Draw the chart using the data within its DIV.
    document.getElementById('elevation-graph').style.display = 'block';
    chart.draw(data, {
      height: 150,
      legend: 'none',
      titleY: 'Elevation (m)'
    });

  };

  $scope.calcRoute = function() {
    var request = {
      origin: $scope.directionsModel.origin,
      destination: $scope.directionsModel.destination,
      travelMode: google.maps.TravelMode.BICYCLING
    };


    $scope.directionsService.route(request, function(result, status) {
      console.log("result: ", result.routes[0]);
      $scope.directionsModel.route = result.routes[0];

      var path = result.routes[0].legs[0].steps[0].lat_lngs
      var pathRequest = {
        'path' : path,
        'samples' : 256
      }

      $scope.elevator.getElevationAlongPath(pathRequest, $scope.plotElevation);

      $scope.$apply(); // doesn't seem like this should be needed
      if (status == google.maps.DirectionsStatus.OK) {
        $scope.directionsDisplay.setDirections(result);
      }
    });
  };

  $scope._showStatement = function() {
    $('#directions-statement').show();
  };

}]);
