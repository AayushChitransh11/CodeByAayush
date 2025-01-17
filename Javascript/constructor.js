//In JS, we don't have class, instead we have constructor function, and then we
//instantiate the objects using the constructor function
//Constructor function may be converted to a class declaration

function Hero(name,role){
    this.name=name;
    this.role=role;
    

    this.introduce=function(){
        console.log (`Hi, I am ${name} and my role is ${role}.`);
    }
}

const obj1=new Hero("Aayush","Swe");

const obj2=new Hero("Chitransh","PM");

// console.log(obj1.name);
// console.log(obj2.role);

// console.log(obj2.introduce());


function myfun(role,name){
    this.role=role;
    this.name=name;
}

const p1=new myfun("PMO","asc");
console.log(p1.role);


console.log(p1 instanceof myfun);

