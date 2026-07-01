import { Component, OnInit } from '@angular/core';
import { faChainSlash } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-immediate-invoke',
  imports: [],
  templateUrl: './immediate-invoke.html',
  styleUrl: './immediate-invoke.scss',
})
export class ImmediateInvoke {
  count = 0;
  total = 10 + 5;
  name1:any;

  ngOnInit() {

  }


  EVENT = `

button.addEventListener("click", function () {
  console.log(this); // button element
});
Explanation:

Function called by the browser when an event occurs.

this: the element that triggered the event (for normal functions).

Use case: DOM events, UI interactions.

`;

  iife = `(function () {
  console.log("Runs immediately");
})();
Explanation:

Function runs as soon as it’s defined.

Creates a local scope, useful to avoid global variables.

Use case: Initialization, module pattern (before ES6 modules).`;
  arrow_function = `
const greet = () => console.log("Hello");
greet();
Explanation:

Arrow functions don’t have their own this; they inherit from the outer scope.

Use case: Short functions, callbacks, closures.

`;
  Indirect_Invocation = `
  Indirect Invocation (call, apply, bind)
function greet(msg) {
  console.log(msg, this.name);
}
const user = { name: "Mia" };
greet.call(user, "Hi");       // Hi Mia
greet.apply(user, ["Hello"]);  // Hello Mia
const boundGreet = greet.bind(user);
boundGreet("Hey");             // Hey Mia


Explanation:

Call a function with explicit this.

call → arguments listed individually

apply → arguments as an array

bind → returns a new function with bound this.

Use case: Borrow methods, event handling, functional programming.
  
  
  `;

  constructor_invocation: string = `function Person(name) {
  this.name = name;
}
const p = new Person("Sam");
console.log(p.name); // Sam
Explanation:

new creates a new object and calls the function with this pointing to it.

this: the newly created object.

Use case: Object creation, classic OOP pattern.`;
  method: string = `
const user = {
  name: "Alex",
  sayHi() {
    console.log(this.name);
  }
};
user.sayHi(); // Alex

Explanation:

Function is called as a property of an object.

this: the object owning the method (user).

Use case: Methods inside objects, classes, modules.
  `;

  greet() {
    (() => {
      this.count++;
      this.count = this.count + 5;
      let name = 'amar';
      const kumartitle = 'kumar';
      console.log(name, 'test');
      console.log(kumartitle)
    })();
  }
  methodF() {
    const user = { name: "Alex", sayHi() { console.log(this.name); } };
    user.sayHi();
    // console.log(user.name)
  }
Constructor1(){ 
  const createUser = function (name: string, age: number) {
  return { name, age };
};
const user = createUser('Alice', 25);

 } 

 callanadapply(){
  (function (role: string) {
  console.log(name + ' is ' + role);
}).call({ name: 'Angular Dev' }, 'awesome');
 }


 arr(){
  const greet = () => console.log("Hello"); 
  greet();
 }
 iifefunction(){
  (function () { console.log("Runs immediately"); })();
 }



  

}

