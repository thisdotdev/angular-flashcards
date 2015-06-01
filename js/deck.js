var deckModule = angular.module("flash.controllers.deck", []);

deckModule.controller("DeckController", function ($scope) {
  var allCards = [
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

  var studyDeck;

  $scope.refreshStudyDeck = function () {
    return studyDeck = [].concat(allCards);
  };

  $scope.addCard = function(front, back) {
    var newCard = {front: front, back: back};
    allCards.push(newCard);
    studyDeck.push(newCard);
  };

});
