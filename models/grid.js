

module.exports = Backbone.Model.extend({
    defaults: {
        xValue: 0,
        yValue: 0,
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
    }
  },

    right: function () {
      if (this.get('xValue') < 10) {
          this.set('xValue', this.get('xValue') + 1);    }
},
    clickedSmall:function(){
      
    }
});
