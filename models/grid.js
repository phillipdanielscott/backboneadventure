

module.exports = Backbone.Model.extend({
  url:'http://grid.queencityiron.com/api/players',
    defaults: {
        xValue: Math.floor(Math.random() * 10) + 1,
        yValue: Math.floor(Math.random() * 10) + 1,
        userName:"phillip",
        energy:10,
        moves:0,
        playerType: '',
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
    //       if (this.get('startingEnergy') <= 0) {
    //     this.trigger('gameEnded', this)
    // }
    }
  },

    right: function () {
      if (this.get('xValue') < 10) {
          this.set('xValue', this.get('xValue') + 1);    }
},
   changeMoves: function(){
     this.set('moves', this.get('moves') + 1);
   },

   decreaseEnergy: function(){
     this.set('energy', this.get('energy') - 1 );
   },

   Changename: function(name){
     this.set('userName', name);
   }

});
