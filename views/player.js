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
