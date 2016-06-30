let GridModel = require('./grid');
let PlayerModel = require('./playermodel');
let PlayerView = require('../views/player');
let GameView = require('../views/game');


module.exports = Backbone.Router.extend({
  initialize: function (){

    /////MODEl
      let myMoves = new GridModel();

      let myPlayer = new PlayerModel()
    ////VIEWS

     this.gamerView = new GameView({
       model: myMoves,
        el:document.getElementById('game')
      });

     this.player = new PlayerView({
       model: myPlayer,
      el:document.getElementById('frontMenu')
    });
},



routes: {
  'startthegame': 'newGame',

  // 'click':'removeFrontmenu',

},

    newGame: function() {
      console.log('start the game');
      this.player.el.classList.add('hidden');
      this.gamerView.el.classList.remove('hidden');




  }

});
