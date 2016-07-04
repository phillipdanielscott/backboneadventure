let Router = require('./models/router');

window.addEventListener('load', function (){

 let newroute = new Router();
 Backbone.history.start();
});
