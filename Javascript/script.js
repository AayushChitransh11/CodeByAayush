

const obj1={name:"Aayush"};

obj1.sayHello=function(){
    return "Hello from Aayush!";
};
// console.log(obj1);

// console.log(obj1.sayHello());
// console.log(obj1['sayHello']());

// obj1.language=function(lang){
//     return `My fav. language is ${lang}`;
// }

// console.log(obj1.language("Java"));
// const myArray = [ function alerter() { console.log('Hello!'); } ];
// myArray[0]();

const triange={
    type:"equilateral",
    identify:function(){
        return `This triangle is an ${this.type} traingle!`;
    }
};
// console.log(triange.type);

// console.log(triange.identify());
const tree = {
    type: 'redwood',
    leaves: 'green',
    height: 80,
    age: 15,
    growOneFoot: function () {
      this.height += 1;
    }
  };

//   console.log(tree.growOneFoot());
//   console.log(tree['growOneFoot']());
// const car={
//     door:4,
//     drive:function(){
//         console.log(`All ${this.door} doors should be closed!`);
//     }
// }
// this.door=5;
// const letsRoll=car.drive;
// letsRoll();

// let eating="cookie";

// window.eating===eating;
// console.log(Object.keys(tree));
// console.log(Object.values(tree));

