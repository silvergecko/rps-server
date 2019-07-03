'use strict';

module.exports = function(app) {
    var pendingGames = require('../controllers/pendingGamesController.js');
    
    /*
    app.route('/pendingGames')
      .get(games.listGames)
      .post(games.launchGame);
    */

    
    app.route('/pendingGames/:userId')
      .get(pendingGames.listGames);
      //.put(pendingGames.postGamble);
      /*
      .delete(users.cancelGame);
      */
  };
