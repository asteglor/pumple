angular.module('starter.services', [])

.factory('Smscodes', function() {
  var smscodes = [228, 124, 835];
  return {
    all: function() {
      return smscodes;
    },
    get: function(id) {
      for (var i = 0; i < smscodes.length; i++) {
        if (smscodes[i] === parseInt(smscode)) {
          return smscodes[i];
        }
      }
      return null;
    }
  };
});