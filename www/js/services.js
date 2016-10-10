angular.module('starter.services', [])

.factory('Chats', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var chats = [{
    id: 0,
    name: 'Traditional Home Cooking',
    lastText: 'Your mum could not cook it better.',
    face: 'img/ben.png',
    place: 'img/restaurant1.jpg',
    moreText: 'BETTER at Avenyn 22, open 12.00-00.00.'
  }, {
    id: 1,
    name: 'Sushi',
    lastText: 'Asian food, fresh and crispy.',
    face: 'img/max.png',
    place: 'img/restaurant2.jpg',
    moreText: 'SUSHI FOR BEGINNERS at Andra Långgatan 22, open 18.00-02.00.'
  }, {
    id: 2,
    name: 'Vegan',
    lastText: 'Why eat animals when vegetables can taste like this?',
    face: 'img/adam.jpg',
    place: 'img/restaurant3.jpg',
    moreText: 'VEGGIELOVER at Nordhemsgatan 9 22, open 20.00-22.00.'
  }, {
    id: 3,
    name: 'Hamburgers',
    lastText: 'Fast food has never tested better',
    face: 'img/perry.png',
    place: 'img/restaurant4.jpg',
    moreText: 'BIG BAD BURGER at Paternostergatan 24, open 08.00-02.00.'
  }, {
    id: 4,
    name: 'Just Desserts',
    lastText: 'This is wicked good ice cream.',
    face: 'img/mike.png',
    place: 'img/restaurant5.jpg',
    moreText: 'SWEEEETIE at Fjällgatan, open 13.00-19.00.'
  }];

  return {
    all: function() {
      return chats;
    },
    remove: function(chat) {
      chats.splice(chats.indexOf(chat), 1);
    },
    get: function(chatId) {
      for (var i = 0; i < chats.length; i++) {
        if (chats[i].id === parseInt(chatId)) {
          return chats[i];
        }
      }
      return null;
    }
  };
});
