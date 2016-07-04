(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
let Router = require('./models/router');

window.addEventListener('load', function (){

 let newroute = new Router();
 Backbone.history.start();
});

},{"./models/router":3}],2:[function(require,module,exports){


module.exports = Backbone.Model.extend({
  url:'http://grid.queencityiron.com/api/players',
    defaults: {
        xValue: Math.floor(Math.random() * 10) + 1,
        yValue: Math.floor(Math.random() * 10) + 1,
        userName:"phillip",
        energy:10,
        moves:0,
        playerType: '',
    },

    up: function () {
      if (this.get('yValue') < 10) {
          this.set('yValue', this.get('yValue') + 1);
    }
  },

    down: function () {
      if (this.get('yValue') > -10) {
          this.set('yValue', this.get('yValue') - 1);
    }
  },

    left: function () {
      if (this.get('xValue') > -10) {
          this.set('xValue', this.get('xValue') - 1);
    //       if (this.get('startingEnergy') <= 0) {
    //     this.trigger('gameEnded', this)
    // }
    }
  },

    right: function () {
      if (this.get('xValue') < 10) {
          this.set('xValue', this.get('xValue') + 1);    }
},
   changeMoves: function(){
     this.set('moves', this.get('moves') + 1);
   },

   decreaseEnergy: function(){
     this.set('energy', this.get('energy') - 1 );
   },

   Changename: function(name){
     this.set('userName', name);
   }

});

},{}],3:[function(require,module,exports){
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

},{"../views/Gameover":6,"../views/game":7,"../views/player":8,"./grid":2,"./sizesCollection.js":5}],4:[function(require,module,exports){
module.exports = Backbone.Model.extend({
  url:'http://grid.queencityiron.com/api/players',
  defaults:{
    "name":"small",
    "energyperMove":1,
    "startingEnergy":20
    },
})

},{}],5:[function(require,module,exports){
let sizes = require('./sizes.js');
module.exports = Backbone.Collection.extend({
  url:'http://grid.queencityiron.com/api/players/3',
  model: sizes,
})

},{"./sizes.js":4}],6:[function(require,module,exports){
module.exports = Backbone.View.extend({
el:'#gameOverContainer',
initialize: function (){
  this.model.on('change', this.render,this );
},
});

},{}],7:[function(require,module,exports){
module.exports = Backbone.View.extend({
el: '#game',
initialize: function (){
  this.model.on('change', this.render,this );
},

events: {
       'click #up': 'clickUp',
       'click #down': 'clickDown',
       'click #left': 'clickLeft',
       'click #right': 'clickRight',
       'click button' : 'changeEnergy'
   },

   clickUp: function () {
     console.log("we goin up");
       this.model.up()
   },

   clickDown: function () {
     console.log("we goin down");
       this.model.down()

   },

   clickLeft: function () {
     console.log("we goin left");
       this.model.left()
   },

   clickRight: function () {
     console.log("we goin right");
       this.model.right()

   },
   changeEnergy: function (){
     console.log("something happened with energy");
     this.model.decreaseEnergy();
     this.model.changeMoves();
   },


   render: function () {
         let upButton = this.el.querySelector('#yAxis');
         upButton.textContent = this.model.get('yValue');

        let downButton = this.el.querySelector('#yAxis');
        downButton.textContent = this.model.get('yValue');

        let leftButton = this.el.querySelector('#xAxis');
        leftButton.textContent = this.model.get('xValue');

        let rightButton = this.el.querySelector('#xAxis');
        rightButton.textContent = this.model.get('xValue');

        let Moves = this.el.querySelector('#moves');
        moves.textContent = this.model.get('moves');

        let energy = this.el.querySelector('#energy');
        energy.textContent = this.model.get('energy');

        let Myname = this.el.querySelector('.ThisisName');
        Myname.textContent = this.model.get('userName');
}
});

},{}],8:[function(require,module,exports){
module.exports = Backbone.View.extend({
 el: '#frontMenu',

  initialize: function (){
   this.model.on('change', this.render,this );
   this.newCollection = new collection();
   let that = this
   this.newCollection.fetch({
     success: function(){
       console.log(that.newCollection);
     },
     error: function(){
       console.log("not working broooo")
     }
   });
  },


events: {
  'click #Thisissmall': 'clicked',
  'click #Thisislarge': 'large',
  'click #Thisisgiant': 'giant',
  'click button': 'saveUser',
},

saveUser: function () {
  let name = document.getElementById('name').value;
  this.model.Changename(name);
},

clicked:function(){
  console.log("clicked small");
  // document.getElementById('small');

},
large:function(){
  let search = this.newCOllection.find(function(){
    return what.get('name') === 'Large'
  });
  this.set('playerType','Large');
  this.set('energy', search.get('energyPerMove'));
  console.log("clicked large");

},
giant:function(){
  console.log("clicked giant");
}
});

},{}]},{},[1])