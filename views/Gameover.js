module.exports = Backbone.View.extend({
el:'#gameOverContainer',
initialize: function (){
  this.model.on('change', this.render,this );
},
});
