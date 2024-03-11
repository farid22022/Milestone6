//map ==> loops through each element of the array and do the
//operation that you passed in the call back function and hold the
//result from each operation in an array and finally returns you the
//array

const numbers = [1,2,3,4,5];

function doubleIt(num){
    console.log('Number is : ', num);
    return num*2;
}

const double2 = n => n*2;

// const result = numbers.map(doubleIt)
// const result = numbers.map(double2)
const result = numbers.map(n => n*2);
// console.log(result);

const letters = ['abc' , 'def' , 'ghi'];
const lengths = letters.map(letter => letter.length);
console.log(lengths);