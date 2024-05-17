"use strict";

// this in global scope
//console.log(this); // global scope - window , global in node js

function x() {
  // the value depends on strict/ non strict mode
  // console.log(this);
}

x(); // undefined
window.x(); // window

// this keyword in non strict mode  - (this substitution )

// If the value of this is undefined or null
// this keyboard will be replaced with global Object only in no script mode

// this keyword value depends on how this is called(window)

// this inside a object methods

const obj = {
  name: "akshay",
  a: 10,
  printName: function () {
    //console.log(this);
    //console.log(this.name);
  },
};

obj.printName();
//
obj.name;

const obj2 = {
  a: 20,
  name: "Manish",
};

obj.printName.call(obj2); // value of this become student 2

// call apply binds methods (sharing methods)

// this inside arrow function

const obj3 = {
  a: 10,
  x: () => {
    console.log(this);
  },
};

obj3.x();

const obj4 = {
  a: 10,
  x: function () {
    // encllosing parent lexical context
    const y = () => {
      console.log(this);
    };
    y();
  },
};

obj4.x();

// this inside DOM elements  => reference to HTMLelement

// this inside class constructor
