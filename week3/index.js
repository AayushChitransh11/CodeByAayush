// class Rectangle{
//     constructor(width,height,color){
//         this.width=width;
//         this.height=height;
//         this.color=color;
//     }
//     area(){
//         const area=this.width*this.height;
//         return area;
//     }
//     paint(){
//         console.log(`Painting with color ${this.color}`);
//         console.log(this);
//     }
    
// }


// const rect1=new Rectangle(3,4,"red");
// console.log(rect1.area());
// rect1.paint(); 

// const rect2=new Rectangle(5,5,"black");
// console.log(rect2.area());
// rect2.paint();


const map=new Map();
map.set("name","Aayush");
map.set("age",55);
console.log(map.get("name"));
console.log(map.get("age"));

const d=new Date();
console.log(d.getTime());