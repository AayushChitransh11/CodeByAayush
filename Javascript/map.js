const captains=['Picard', 'Adama', 'Reynolds', 'Beeblebrox'];

// const titles=captains.map(cap => `Captain ${cap}`);
const titles=captains.map(cap =>{
    return `Captain ${cap}`
});

// console.log(titles);

const num=[1,2,3,4,5];

const doubles=num.map(x=>x*2);
// console.log(doubles);

function mydouble(x){
    return x*2;
}

const anotherDouble=num.map(x=> mydouble(x));
console.log(anotherDouble);