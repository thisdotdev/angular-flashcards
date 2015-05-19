var flashApp = angular.module("flash", []);
flashApp.controller("CardController", function ($scope) {
  $scope.cards = [
    { front: "how many licks?",
      back: "50"
    },
    { front: "beep",
      back: "boop"
    },
    { front: "this is the front",
      back: "this is the back"
    }
  ];
  $scope.current = 0;
  $scope.nextCard = function(){
    $scope.current = ($scope.current+1) % ($scope.cards.length);
  };
});
