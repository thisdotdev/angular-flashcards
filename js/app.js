var flashApp = angular.module('flash', [
  "ngRoute",
  "flash.cards", 
  "flash.deck", 
  "flash.study" 
]).config(['$routeProvider', function($routeProvider) {
  $routeProvider.when("/study", {
    templateUrl: 'partials/study.html',
    controller: 'StudyController'
    })
  .when("/add", {
    templateUrl: 'partials/cards.html',
    controller: 'CardsController'
    });
}]);