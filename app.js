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
  $scope.current = 0; // card to display
  $scope.front = true;

  $scope.next = function() {
    var move = +($scope.front); //change cards if on front (true or or false coerced to 0 or 1 by adding + before)
    var numCards = $scope.cards.length;

    $scope.current = ($scope.current + move) % (numCards);
    $scope.front = !$scope.front;
  };

 });
