

console.log(name)
var name;
name = 'sagor'
console.log(name)

// var hoisted and assign value undefined
// let hoisted never assign value undefined thats why gives reference error
// const never hoisted thats why gives references error;

// TDZ= an area where you can not access a variable until initialized

{
    // tdz started



    console.log(name);



    let name = 'sagor' // tdz ends here
}