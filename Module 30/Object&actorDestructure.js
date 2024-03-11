const actor = {
    name: 'Ananata',
    age : 24
}

const {name,age:boyos  }= actor;
console.log(name);
console.log(boyos);
/*

1 . var let const 
2. default parameter
3. template string
4. arrow function
5. destructing and Spread operator and spread operator 
6. Object.keys , Object.values , Object.entries
7. For of used in array and string
8. For in loop used in object


*/ 

const a = 46;
const numbers =[56,7,8];
const person ={
    name : 'sakib khan'
}
const message =    `Hi , ${person.name} has a : ${a} access to ${numbers.push(8)}`;

const square = x=> x*x;
const sum = (a,b) => a+b;
const {x,y,z, ...others} = {x:2 , y:5, z:1 , name : 'abc', age:45}

const[first, second ,...remaining] = [1,2,3,4]
