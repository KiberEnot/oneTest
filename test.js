'use strict'

function Calculator(){
    this['+'] = (a, b) => a + b;
    this['-'] = (a, b) => a - b; 
    this.calculate = (str) => {
        str.split(' ')[1] == 1
    };
};

let calc = new Calculator;

alert( calc.calculate("3 + 7") ); // 10
//let powerCalc = new Calculator;
//powerCalc.addMethod("*", (a, b) => a * b);
//powerCalc.addMethod("/", (a, b) => a / b);
//powerCalc.addMethod("**", (a, b) => a ** b);

//let result = powerCalc.calculate("2 ** 3");
//alert( result ); // 8