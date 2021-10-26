// console.log("hey");
// //var let const

// // var globally scoped not to use much as let and const has block scope rather global
// let  age = 30;
// age =40;
// console.log(age);

// // always use const unless you r nevery going to reassign value;
// const score;

// score=10;
// console.log(score);

//data types
// strings, numbers, boolean,null ,undefined,

// const name = "vivek";
// const  age= 10;
// const rating =4.5;
// const isCool = true;
// const  x = null;
// const y = undefined;
// let z;
// console.log( typeof x);

//strings

// const name = 'vivek';
// const age= 21;
// //conactenation
// console.log('my name is' + name + 'and i am ' +age );

// //template strings or literals
// const string= console.log(`my name is ${name} and I am ${age} years old`);
// console.log(string);

// const s = 'vivek';
// console.log(s.split(''))

//arrays  holds multiple value

// const numbers = new Array(1,2,3,4,5);
// console.log(numbers);

// const fruits = ['apples', 'mangoes', 'kiwi', 10, true];

// fruits.push('peas');
// fruits.unshift('strwasberies');
// fruits.pop();
// console.log(fruits.indexOf('mangoes'))
// console.log(fruits);

//Object Literals key value pairs

// const person = {
//  name:' vivek',
//  lastname:'gaur',
//  age: 21,
//  hobbies: ['cooking', 'web dev'],
//  address:{
//   firstlane:' 40',
//   secondlane: '20'
//  }
// }
 
// person.email = 'vvksngh24@gmail.com';

// const { name:firstname, lastname,} = person;
//  console.log(firstname, lastname);

// const todos= [
//  {
//    id: 1,
//    text: "takeof",
//    isCool: true
//  },
//  {
//   id: 2,
//    text: "of",
//    isCool: true
//  },
//  {
//   id: 3,
//    text: "toof",
//    isCool: false
//  }
// ];

// // console.log(todos[2].text)

// const todoJSON = JSON.stringify(todos);
// console.log(todoJSON)

//for

// for(let i = 0; i< 10; i++) {
//   console.log(`for loop number ${i}`);
// }

//while loop

// let i =0;
// while(i<10){
//  console.log(i);
//  i++;
// }

//foreach, map, filter


//conditions
// const x = 4;
// const y= 10;
// if( x > 5 || y> 10){
//  console.log('x is more than 5');
// } 

// const x = 10;

// const color = x >10 ? 'color is red' : 'color isblack';

// console.log(color)

// switch(color) {
//  case 'red' :
//   console.log('color is red');
//   break;
//   case 'blue' :
//    console.log('color is blue');

//    default:
//     console.log('color is not red and blue')
// }

// function  addNumbers ( a =1 , b=1)
// {
//   return a + b;
// }
// addNumbers();


// const addNumbers = ( a, b) => {
//  return a + b;
// }

// console.log(addNumbers(2,2));

//constructor function
function Person(firstName, LastName, dob) {
  this.firstName= firstName;
  this.LastName =LastName;
  this.dob = dob;
  this.getBirthYear = function (){
   return  this.dob.getFullYear();
  }
}

//iinstanetaiate object
const person1= new Person('John', 'jack', '4-12-2021');
console.log(person1)

console.log(person1.getBirthYear());