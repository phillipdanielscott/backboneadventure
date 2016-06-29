let GridModel = require('./models/grid');
let PlayerView = require('./views/player');
let GameView = require('./views/game');

module.exports = Backbone.Router.extend({
  initialize: function (){

    /////MODEl
      let myMoves = new GridModel();
    ////VIEWS

      let gamerView = new GameView({
        model: myMoves,
        el:document.getElementById('D-pad'),
      });


    let player = new PlayerView({
      model: myMoves,
      el:document.getElementById('frontMenu')
    });

    });
  });

  routes: {
    newGame: function() {
      
    }
  }
