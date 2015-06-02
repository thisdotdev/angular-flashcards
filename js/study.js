angular.module("flash.study", [])
  .controller("StudyController", function ($scope) {

    function init() {
      $scope.cards = $scope.$parent.refreshStudyDeck();
      $scope.front = true;
      $scope.current = 0;
    }

    init();

    $scope.reset = init;

    $scope.next = function(){
      var step = +(!$scope.front); // change cards if on back
      $scope.move(step);
    };

    $scope.back = function(){
      var step = -($scope.front); // change cards if on front
      $scope.move(step);
    };

    $scope.move = function(step){ // step is 0,1,-1
      var numCards = $scope.cards.length;
      $scope.current = ($scope.current + step + numCards) % numCards;
      $scope.front = !$scope.front;
    };

    $scope.gotIt = function() {
      $scope.front = true;
      $scope.cards.splice($scope.current, 1);
      $scope.current = ($scope.current % $scope.cards.length) || 0;
    };

  });
