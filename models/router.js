let GridModel = require('./grid');
let sizesCollection = require ('./sizesCollection.js')
let PlayerView = require('../views/player');
let GameView = require('../views/game');
let GameOverView = require('../views/Gameover');
// let PlayerModel = require('./playermodel');



module.exports = Backbone.Router.extend({
  initialize: function (){

    /////MODEl
      let myMoves = new GridModel();
      // let myPlayer = new PlayerModel()
    ////VIEWS

     this.gamerView = new GameView({
       model: myMoves,
        el:document.getElementById('game')
      });

     this.player = new PlayerView({
       model: myMoves,
      el:document.getElementById('frontMenu')
    });

    this.gameOver = new GameOverView({
      model: myMoves,
      el:document.getElementById('gameOverContainer')
    });
},



routes: {
  'startthegame': 'newGame',
  'Restart': 'Backtomenu',
  'smallbutton':'Pressedsmall',
  'largebutton':'Pressedlarge',
  'Giantbutton':'PressedGiant',
  'GAMEOVER':'itHasended'
  // 'click':'removeFrontmenu',

},
    itHasended:function(){
      console.log('ahoy! the end is nigh!')
      this.player.el.classList.add('hidden');
      this.gamerView.el.classList.add('hidden');
      this.gameOver.el.classList.remove('hidden');
    },

    newGame: function() {
      console.log('start the game');
      this.player.el.classList.add('hidden');
      this.gameOver.el.classList.add('hidden');
      this.gamerView.el.classList.remove('hidden');

  },

  Backtomenu: function(){
    console.log('restart');
    this.player.el.classList.remove('hidden');
    this.gamerView.el.classList.add('hidden');
    this.gameOver.el.classList.add('hidden');

  },
  Pressedsmall:function(){
    this.gameOver.el.classList.add('hidden');
    this.player.el.classList.add('hidden');
    this.gamerView.el.classList.remove('hidden');
  },
  Pressedlarge:function(){
    this.gameOver.el.classList.add('hidden');
    this.player.el.classList.add('hidden');
    this.gamerView.el.classList.remove('hidden');
  },
  PressedGiant:function(){
    this.gameOver.el.classList.add('hidden');
    this.player.el.classList.add('hidden');
    this.gamerView.el.classList.remove('hidden');
  }

});
