var module = angular.module('urbanBikeJourney.citiBikes.service', ['ngResource']);

module.factory('citibikes', function() {
  var data = [
    {
      id: 1,
      name: 'Brooklyn'
    },
    {
      id: 2,
      name: 'NYC'
    },
    {
      id: 3,
      name: 'Queens'
    }
  ];

  return {
    stations: function () {
        return data;
    }
  };
});
