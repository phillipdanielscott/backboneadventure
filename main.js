let Router = require('./models/router');

window.addEventListener('load', function (){

 let newroute = new Router();
 Backbone.history.start();
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
