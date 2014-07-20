function DirectionsCtrl($scope, $http) {
  $scope.directionsModel = {};
  $scope.getDirections = function() {
    $scope._showStatement();
    $http({
      method: 'GET',
      url: 'http://maps.googleapis.com/maps/api/directions/json?origin=Toronto&destination=Montreal'
    }).
      success(function(data, status, headers, config){
      console.log("data", data);
      console.log("status", status);
      console.log("headers", headers);
      console.log("config", config);
    }).
      error(function(data, status, headers, config){
      console.log("data", data);
      console.log("status", status);
      console.log("headers", headers);
      console.log("config", config);
    });
  };

  $scope._showStatement = function() {
    $('#directions-statement').show();
  };
};
