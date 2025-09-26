function outTer(){
    let result = 5;

    return () => {
        console.log(result)
    }

}

const result = outTer();
// console.dir(result());

// the inner function can access variable from outer scope even after outer function execution is over


function createBankAccount(initialValue){
    let balance = initialValue;

    return function deposit(value){
        balance = balance + value;

        console.log('deposited', value, 'total balance', balance)
    }
} 


const account = createBankAccount(500)
const first = account(100);
const second = account(200);
// console.log(first) 
// console.log(second)



function testClosure() {
    let x = 10;
    return function () {
        return x * x;
    };
}
console.log(testClosure()());