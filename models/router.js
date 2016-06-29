let GridModel = require('./grid');
let PlayerView = require('../views/player');
let GameView = require('../views/game');


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

}
});


// routes {
//   'click':'removeFrontmenu'
// }





// removeFrontmenu: function (){
//   console.log("we are in business");
//   this.
// },

  // routes: {
  //   newGame: function() {
  //
  //   }
  // }
