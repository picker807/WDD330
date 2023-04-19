
const prompt_fn = require('prompt-sync');
const prompt = prompt_fn();
let calculator = {
      sum() {
        return this.a + this.b;
      },
    
      mul() {
        return this.a * this.b;
      },

      sub() {
        return this.a - this.b;
      },

      div() {
        return this.a / this.b;
      },
    
      read() {
       
        this.a = parseInt(prompt('First number? '));
        this.b = parseInt(prompt('Second number? '));
      }
};

calculator.read();
console.log( calculator.sum() );
console.log( calculator.mul() );
console.log( calculator.sub() );
console.log( calculator.div() );