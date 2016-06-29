module.exports = Backbone.View.extend({

  initialize: function (){
    this.model.on('change', this.render,this );
  },
events: {
  'click #Thisissmall': 'clicked',
  'click #Thisislarge': 'large',
  'click #Thisisgiant': 'giant'
},

clicked:function(){
  console.log("clicked small");
  document.getElementById("frontMenu").className = "";
},
large:function(){
  console.log("clicked large");
},
giant:function(){
  console.log("clicked giant");
}


});
