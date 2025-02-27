function randomNum(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}
function randomReturn(resolve, reject){
    return Math.random()*10 > 5 ? resolve : reject;
}

const p1 = new Promise((resolve, reject) => {
    setTimeout(randomReturn(resolve, reject), randomNum(500, 4000), "A");
});

const p2 = new Promise((resolve, reject) => {
    setTimeout(randomReturn(resolve, reject), randomNum(500, 4000), "B");
});

const p3 = new Promise((resolve, reject) => {
    setTimeout(randomReturn(resolve, reject), randomNum(500, 4000), "c");
});

const p4 = new Promise((resolve, reject) => {
    setTimeout(randomReturn(resolve, reject), randomNum(500, 4000), "d");
});

// Above are a bunch of Promises that will either resolve or reject randomly, and fulfill 
// in a random amount of time between half a second and 4 seconds.

// Challenge 1
// Implement the method to get a list of results of all the promises and console log how many failed and how many rejected
Promise.allSettled([p1,p2,p3,p4])
.then(results=>{
    const fulfilled = results.filter(result => result.status === "fulfilled").length;
    const rejected = results.filter(result => result.status === "rejected").length;
    console.log(`Resolved: ${fulfilled}, Rejected: ${rejected}`);
    console.log("Details:", results);

})
.catch(error=>{
    console.log("Error:",error);
})

// Challenge 2
// Implement the method to get a list of results from all the Promises unless one fails. Log the list of successful results or the error message if one fails.
// Promise.all([p1,p2,p3,p4])
// .then(result=>{
//     console.log("Passed:",result);
// })
// .catch(error=>{
//     console.log("Failed:",error);
// })

// Challenge 3
// Implement the method to figure out which Promise fulfilled first, print the message it fulfills with.
// Promise.race([p1,p2,p3,p4])
// .then(result=>{
//     console.log(result);
// })
// .catch(error=>{
//     console.log("Error:",error);
// })