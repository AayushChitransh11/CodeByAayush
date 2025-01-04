// function setTimeoutPromisified(ms) {
//     return new Promise(resolve => setTimeout(resolve, ms));
// }
//   function callback() {
// 	console.log("4 seconds have passed");
// }
// setTimeoutPromisified(4000).then(callback);

// let p=setTimeoutPromisified(3000);
// console.log(p);

// function waitfor3sec(resolve){
//     setTimeout(resolve,10000);
// }

// function setTimeoutPromisified(){
//     return new Promise(waitfor3sec);
// }

// function main(){
//     console.log("Main is called!");
// }

// setTimeoutPromisified().then(main);


// function random(resolve){
//     setTimeout(resolve, 3000);
// }


// let p=new Promise(random);

// function callback(){
//     console.log("Promise succeeded!");
// }
// p.then(callback);


//  creare promisified version of read a file

// const fs=require('fs');
// function readthefile(finalvalue){
//     fs.readFile("a.txt","utf8",function(err,data){
//         finalvalue(data);
//     });
// }

// function readfile(filename){
//     return new Promise(readthefile);
// }

// const p=readfile();

// function callback(contents){
//     console.log(contents);
// }
// p.then(callback);

// const fs=require('fs');

// console.log("Top of the file!");

// function readthefile(resolve){
//     setTimeout(resolve,4000);
//     console.log("readfile done");
// }

// function setTimeoutPromisified(){
//     console.log("at settime funtion");
//     return new Promise(readthefile);
    
// }

// const p=setTimeoutPromisified();

// function callback(){
//     console.log("Timer is done!");
// }
// p.then(callback);

// console.log("End of the file!");

class Promise2{
    constructor(fn){
        this.fn=fn;
        this.fn(()=>{
            this.resolve();
        })
    }
    then(callback){
        this.resolve=callback;
    }
}

function readFile(resolve){
    setTimeout(function(){
        console.log("callback based setTimeout completed");
        resolve();

    },3000);
}

function  setTimeoutPromisified(){
    return new Promise2(readFile);
}

let t = setTimeoutPromisified();

function callback(){
    console.log("Callback has been called!");
}

t.then(callback);


