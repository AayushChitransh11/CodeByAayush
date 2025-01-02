// let firstName="Aayush";
// // firstName=30;
// console.log(firstName);

// var isStudent=true;
// isStudent=false;
// console.log(isStudent);

// const a=100;
// // a=false;
// console.log(a);

// function greet(name){
//     return "Hello "+name;
// }

// console.log(greet("Aayush"));

// function sum(a,b){
//     return a+b;
// }

// console.log(sum(3,4));

// function canVote(age){
//     if(age>18){
//         return true;
//     }
//     return false;
// }

// console.log(canVote(19));

// function checkEven(num){
//     if(num%2==0){
//         return "Even";
//     }
//     else{
//         return "Odd";
//     }
// }

// console.log(checkEven(5));


// let users=['A',"B","C"];
// // for(let i=0;i<users.length;i++){
// //     console.log(users[i]);
// // }

// let j=0;
// while(j<users.length){
//     console.log(users[j]);
//     j++;
// }

// num=3;
// sum=0;
// while(num>0){
//     sum+=num;
    
//     num--;
    
// }console.log(sum);

// let person={
//     name: "Aayush",
//     age: 27,
//     School:"NJIT"
// }

// console.log(person.name,person.School);
// console.log(person["age"]);

// function greet(user){
//     return "Hello, "+user.name+", age = "+user.age;
// }

// let person={
//     name:"Aayush",
//     age:30
// }
// console.log(greet(person));


// function greet(user){
//     if (user.gender=="Male"){
//         if(user.age>18){
//             return ("Hi"+" Mr "+user.name+" , your age is "+user.age+" and you can vote.");
//         }
//         return ("Hi"+" Mr "+user.name+" , your age is "+user.age+" and you cannot vote.");
       
//     }
//     else if (user.gender=="Female"){
//         return ("Hi"+" Mrs "+user.name+" , your age is "+user.age);
//     }
//     else{
//         return ("Hi"+" Others "+user.name+" , your age is "+user.age);
//     }
    
// }


// person={
//     name:"Aayush",
//     age:17,
//     gender:"Male"
// }

// person2={
//     name:"Aayushi",
//     age:50,
//     gender:"Female"
// }
// person3={
//     name:"Aayushi",
//     age:50,
//     gender:"Gay",
// }

// console.log(greet(person));




//Create a function that takes an array of objects as input,
//and returns the users whose age > 18 and are male


let arr=[{
    name:"Aayush",
    age:20,
    gender:"M"
},
{
    name:"Tina",
    age:18,
    gender:"F"
},
{
    name:"Mahi",
    age:57,
    gender:"M"
}
]


function check(user){
    let arr=[];
    for (let i=0;i<user.length;i++){
        if(user[i].gender==="M" && user[i].age>18){
            arr.push(user[i]);
        }

    }
    return arr;
    
}

console.log(check(arr));