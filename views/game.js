module.exports = Backbone.View.extend({
el: '#game',
initialize: function (){
  this.model.on('change', this.render,this );
},

events: {
       'click #up': 'clickUp',
       'click #down': 'clickDown',
       'click #left': 'clickLeft',
       'click #right': 'clickRight',
       'click button' : 'changeEnergy'
   },

   clickUp: function () {
     console.log("we goin up");
       this.model.up()
   },

   clickDown: function () {
     console.log("we goin down");
       this.model.down()

   },

   clickLeft: function () {
     console.log("we goin left");
       this.model.left()
   },

   clickRight: function () {
     console.log("we goin right");
       this.model.right()

   },
   changeEnergy: function (){
     console.log("something happened with energy");
     this.model.decreaseEnergy();
     this.model.changeMoves();
   },


   render: function () {
         let upButton = this.el.querySelector('#yAxis');
         upButton.textContent = this.model.get('yValue');

        let downButton = this.el.querySelector('#yAxis');
        downButton.textContent = this.model.get('yValue');

        let leftButton = this.el.querySelector('#xAxis');
        leftButton.textContent = this.model.get('xValue');

        let rightButton = this.el.querySelector('#xAxis');
        rightButton.textContent = this.model.get('xValue');

        let Moves = this.el.querySelector('#moves');
        moves.textContent = this.model.get('moves');

        let energy = this.el.querySelector('#energy');
        energy.textContent = this.model.get('energy');

        let Myname = this.el.querySelector('.ThisisName');
        Myname.textContent = this.model.get('userName');
}
});
