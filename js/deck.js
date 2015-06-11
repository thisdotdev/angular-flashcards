var deckModule = angular.module("flash.deck", []);

deckModule.controller('DeckController',function($scope) {

  var allDecks = [
    {
      name: "deck 0",
      cards: [
      { front: "deck 0, card 0",
          back: "back 0"
        },
        { front:"deck 0, card 1",
          back: "back 1"
        }
        ]
    },
        {
      name: "deck 1",
      cards: [
      { front: "deck 1, card 0",
          back: "back 0"
        },
        { front:"deck 1, card 1",
          back: "back 1"
        }
        ]
    }
];

var allCards = allDecks[0].cards;

  var studyDeck;

  $scope.refreshStudyDeck = function () {
    studyDeck = [].concat(allCards);
    return studyDeck;
  };

  $scope.refreshStudyDeck();

  $scope.addCard = function (front,back) {
    var newCard = {front: front, back: back};
    allCards.push(newCard);
    studyDeck.push(newCard);
  };

  $scope.decks = allDecks;
  
});
