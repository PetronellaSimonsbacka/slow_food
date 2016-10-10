angular.module('starter.services', [])

.factory('Chats', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var chats = [{
    id: 0,
    name: 'Traditional Home Cooking',
    lastText: 'Your mum could not cook it better.',
    face: 'img/ben.png'
  }, {
    id: 1,
    name: 'Sushi',
    lastText: 'Asian food, fresh and crispy.',
    face: 'img/max.png'
  }, {
    id: 2,
    name: 'Vegan',
    lastText: 'Why eat animals when vegetables can taste like this?',
    face: 'img/adam.jpg'
  }, {
    id: 3,
    name: 'Hamburgers',
    lastText: 'Fast food has never tested better',
    face: 'img/perry.png'
  }, {
    id: 4,
    name: 'Just Desserts',
    lastText: 'This is wicked good ice cream.',
    face: 'img/mike.png'
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
