(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
let GridModel = require('./models/grid');
let PlayerView = require('./views/player');
let GameView = require('./views/game');

window.addEventListener('load', function (){

/////MODEl
  let myMoves = new GridModel();







////VIEWS

  let gamerView = new GameView({
    model: myMoves,
    el:document.getElementById('D-pad'),
  });
});

// let Axis = new yValue({
//     model: ymodel,
//     el: document.getElementById('D-Pad'),
//
// let otherAxis = new xValue({
//     model: xmodel,
//     el: document.getElementById('D-Pad')
// });
// });

},{"./models/grid":2,"./views/game":3,"./views/player":4}],2:[function(require,module,exports){


module.exports = Backbone.Model.extend({
    defaults: {
        xValue: 0,
        yValue: 0,
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
    }
  },

    right: function () {
      if (this.get('xValue') < 10) {
          this.set('xValue', this.get('xValue') + 1);    }
}
});

},{}],3:[function(require,module,exports){
module.exports = Backbone.View.extend({

initialize: function (){
  this.model.on('change', this.render,this );
},

events: {
       'click #up': 'clickUp',
       'click #down': 'clickDown',
       'click #left': 'clickLeft',
       'click #right': 'clickRight',
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

   render: function () {
         let upButton = this.el.querySelector('#yAxis');
         upButton.textContent = this.model.get('yValue');

        let downButton = this.el.querySelector('#yAxis');
        downButton.textContent = this.model.get('yValue');

        let leftButton = this.el.querySelector('#xAxis');
        leftButton.textContent = this.model.get('xValue');

        let rightButton = this.el.querySelector('#xAxis');
        rightButton.textContent = this.model.get('xValue');
}
});

},{}],4:[function(require,module,exports){

},{}]},{},[1])