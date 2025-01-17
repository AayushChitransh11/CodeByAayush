// const returnsFunction=function(){
//     return function(){
//         console.log("Hello from inner function!");
//         }
// }

// console.log(returnsFunction());
// console.log(returnsFunction()());

// function higherOrder(n, callback){
//     return n + callback();
// }

// function callback(){
//     return 5;
// }

// console.log(higherOrder(3,callback));
console.log((function (n){
    delete n;
    return n;
})(3));

let num=50;
delete num;
console.log(num);