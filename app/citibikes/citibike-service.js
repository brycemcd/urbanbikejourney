var module = angular.module('urbanBikeJourney.citibikes.service', ['ngResource']);

module.factory('CitiBike', function() {
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
    all: function () {
      return data;
    },
    first: function() {
      return data(0);
    }
  };
});
