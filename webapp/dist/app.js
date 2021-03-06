(function() {
  angular.
  module('app', []).
  controller('TriviaCtrl', ['$scope', '$http', 'QuestionService', TriviaController]);
  
  function TriviaController($scope, $http, QuestionService) {
    $scope.categories = QuestionService.getQuestions().categories;
    
    $scope.activate = activate;
    
    function activate(question) {
      deactivateAll();
      question.active = true;
    }
    
    function deactivateAll() {
      $scope.categories.forEach(function(category) {
        category.questions.forEach(function(question) {
          question.active = false;
        });
      });
    }
    
    document.addEventListener('keyup', (function(event) {
      if (event.keyCode === 27) {
        $scope.$apply(function() {
          deactivateAll();
        });
      }
    }));
  }
})();
;(function() {
  angular.
  module('app').
  directive('triviaQuestion', TriviaQuestion);

  console.log('yo');

  function TriviaQuestion() {
    return {
      restrict: 'E',
      templateUrl: './templates/question.tpl.html',
      replace: true,
      scope: {
        question: '='
      },
      link: function($scope, elem, attr, ctrl) {
        console.log($scope);
      }
    };
  }
})();
;(function() {
  angular.
  module('app').
  service('QuestionService', function() {
    this.getQuestions = function() {
      return {
        "categories": [
          {
            "cat_name": "Animals",
            "questions": [
              {
                "cat_name": "Animals",
                "question": "These rodents first got to America by stowing away on ships",
                "answer": "rats",
                "amount": "100"
              },
              {
                "cat_name": "Animals",
                "question": "There are about 40,000 muscles & tendons in this part of an elephant's body",
                "answer": "the trunk",
                "amount": "200"
              },
              {
                "cat_name": "Animals",
                "question": "When husbands \"pop\" for an ermine coat, they're actually buying this fur",
                "answer": "a weasel",
                "amount": "300"
              },
              {
                "cat_name": "Animals",
                "question": "Close relative of the pig, though its name means \"river horse\"",
                "answer": "the hippopotamus",
                "amount": "400"
              },
              {
                "cat_name": "Animals",
                "question": "If this species of hybrid's parents were reversed, you'd get a hinny",
                "answer": "a mule",
                "amount": "500"
              }
            ]
          },
          {
            "cat_name": "Pop Music",
            "questions": [
              {
                "cat_name": "Pop Music",
                "question": "\"Photograph\" and \"You're Sixteen\" made him the only ex-Beatle to have two consecutive songs reach #1 in the U.S.",
                "answer": "Ringo Starr",
                "amount": "100"
              },
              {
                "cat_name": "Pop Music",
                "question": "This Stones hit begins \"It is the evening of the day, I sit and watch the children play\"",
                "answer": "\"As Tears Go By\"",
                "amount": "200"
              },
              {
                "cat_name": "Pop Music",
                "question": "\"But don't forget who's takin' you home and in whose arms you're gonna be, so darlin', save\" this",
                "answer": "\"The Last Dance For Me\"",
                "amount": "300"
              },
              {
                "cat_name": "Pop Music",
                "question": "This rock star of the 50's and 60's hit the charts again in the 70's with the Stone Canyon Band",
                "answer": "Ricky Nelson",
                "amount": "400"
              },
              {
                "cat_name": "Pop Music",
                "question": "This 1961 Lawrence Welk pop hit takes its title from the name of a city in India and features a harpsichord",
                "answer": "\"Calcutta\"",
                "amount": "500"
              }
            ]
          },
          {
            "cat_name": "3 Letter Words",
            "questions": [
              {
                "cat_name": "3 Letter Words",
                "question": "It can be a deep hole in the ground, or the kernel of a cherry",
                "answer": "the pit",
                "amount": "100"
              },
              {
                "cat_name": "3 Letter Words",
                "question": "To strike someone, or a successful song or show",
                "answer": "a hit",
                "amount": "200"
              },
              {
                "cat_name": "3 Letter Words",
                "question": "Physically sound & healthy, or what a temperamental child might \"throw\"",
                "answer": "a fit",
                "amount": "300"
              },
              {
                "cat_name": "3 Letter Words",
                "question": "It can refer to a humorist, or to one's intellect & reason",
                "answer": "a wit",
                "amount": "400"
              },
              {
                "cat_name": "3 Letter Words",
                "question": "The metal mouthpiece on a bridle, or 12 1/2 cents",
                "answer": "a bit",
                "amount": "500"
              }
            ]
          },
          {
            "cat_name": "Food",
            "questions": [
              {
                "cat_name": "Food",
                "question": "The cheese steak sandwich is said to have originated in this eastern city in the 1930s",
                "answer": "Philadelphia",
                "amount": "100"
              },
              {
                "cat_name": "Food",
                "question": "This thick seafood soup's name comes from chaudiere, a type of caldron",
                "answer": "chowder",
                "amount": "200"
              },
              {
                "cat_name": "Food",
                "question": "Cannoli pastries are often filled with this soft cheese found in lasagna",
                "answer": "ricotta",
                "amount": "300"
              },
              {
                "cat_name": "Food",
                "question": "An open-faced one of these uses one slice of bread",
                "answer": "sandwich",
                "amount": "400"
              },
              {
                "cat_name": "Food",
                "question": "This Mexican specialty translates as \"stuffed peppers\" & that's what they are",
                "answer": "chiles rellenos",
                "amount": "500"
              }
            ]
          },
          {
            "cat_name": "Animals",
            "questions": [
              {
                "cat_name": "Animals",
                "question": "These rodents first got to America by stowing away on ships",
                "answer": "rats",
                "amount": "100"
              },
              {
                "cat_name": "Animals",
                "question": "There are about 40,000 muscles & tendons in this part of an elephant's body",
                "answer": "the trunk",
                "amount": "200"
              },
              {
                "cat_name": "Animals",
                "question": "When husbands \"pop\" for an ermine coat, they're actually buying this fur",
                "answer": "a weasel",
                "amount": "300"
              },
              {
                "cat_name": "Animals",
                "question": "Close relative of the pig, though its name means \"river horse\"",
                "answer": "the hippopotamus",
                "amount": "400"
              },
              {
                "cat_name": "Animals",
                "question": "If this species of hybrid's parents were reversed, you'd get a hinny",
                "answer": "a mule",
                "amount": "500"
              }
            ]
          },
          {
            "cat_name": "Pop Music",
            "questions": [
              {
                "cat_name": "Pop Music",
                "question": "\"Photograph\" and \"You're Sixteen\" made him the only ex-Beatle to have two consecutive songs reach #1 in the U.S.",
                "answer": "Ringo Starr",
                "amount": "100"
              },
              {
                "cat_name": "Pop Music",
                "question": "This Stones hit begins \"It is the evening of the day, I sit and watch the children play\"",
                "answer": "\"As Tears Go By\"",
                "amount": "200"
              },
              {
                "cat_name": "Pop Music",
                "question": "\"But don't forget who's takin' you home and in whose arms you're gonna be, so darlin', save\" this",
                "answer": "\"The Last Dance For Me\"",
                "amount": "300"
              },
              {
                "cat_name": "Pop Music",
                "question": "This rock star of the 50's and 60's hit the charts again in the 70's with the Stone Canyon Band",
                "answer": "Ricky Nelson",
                "amount": "400"
              },
              {
                "cat_name": "Pop Music",
                "question": "This 1961 Lawrence Welk pop hit takes its title from the name of a city in India and features a harpsichord",
                "answer": "\"Calcutta\"",
                "amount": "500"
              }
            ]
          }
        ]
      };
    };
  });
})();
