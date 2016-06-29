module.exports = Backbone.View.extend({

initialize: function (){
  this.model.on('change', this.render,this );
},

events: {
       'click #up': 'clickUp',
       'click #down': 'clickDown',
       'click #left': 'clickLeft',
       'click #right': 'clickRight',
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


   render: function () {
         let upButton = this.el.querySelector('#yAxis');
         upButton.textContent = this.model.get('yValue');

        let downButton = this.el.querySelector('#yAxis');
        downButton.textContent = this.model.get('yValue');

        let leftButton = this.el.querySelector('#xAxis');
        leftButton.textContent = this.model.get('xValue');

        let rightButton = this.el.querySelector('#xAxis');
        rightButton.textContent = this.model.get('xValue');
}
});
