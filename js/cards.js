angular.module("flash.cards", [])
  .controller("CardsController", function($scope) {

    $scope.addCard = function(){
      $scope.$parent.addCard($scope.front, $scope.back);
      $scope.front = $scope.back = "";
    };

  });
