'use strict';

module.exports = function(app) {
    var games = require('../controllers/gamesController.js');
    
    app.route('/games')
      .get(games.listGames)
      .post(games.launchGame);
  
    /*
    app.route('/games/:gameId')
      .get(users.viewGame)
      .put(users.postGamble)
      .delete(users.cancelGame);
    */
  };
