module.exports  = Backbone.Model.extend({
  url:'http://localhost:3000/api/players',
  defaults: {
      userName:"phillip",
      energy:10,
      moves:0,
      score:0
  }
})
