var flashApp = angular.module('flash', []);
 flashApp.controller('CardController',function ($scope) {
   $scope.cards = [
    { front:"Red and invisible?",
      back:"No tomatoes"
    },
    { front:"beep",
      back:"boop"
    },
    { front:"full frontal",
      back:"back end"
    }
  ];
  $scope.current = 0;
  $scope.nextCard = function() {
    $scope.current = ($scope.current+1) % ($scope.cards.length);
  };
 });
