module.exports = Backbone.Model.extend({
  url:'http://grid.queencityiron.com/api/players',
  defaults:{
    "name":"small",
    "energyperMove":1,
    "startingEnergy":20
    },
})
