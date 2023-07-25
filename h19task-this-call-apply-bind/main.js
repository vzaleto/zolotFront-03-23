//Це ladder (сходи) – об'єкт, який дозволяє підніматися вгору та спускатися:

let ladder = {
    step: 0,
    up:  function () {
        
      this.step++;
      console.log('1', this)
      return this;
    },
    down: function() {
        this.step--;
        return this;
    },
    showStep: function () { // показывает текущую ступеньку
        console.log('res',this.step);
    }
};

ladder.up().up().down().showStep(); // 1