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
