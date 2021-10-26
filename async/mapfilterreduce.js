//MAP

// const arr = [5,1,3,2,6];

// //double  the array transform the array
// function double(x){
//  return x * 2;
// }

// //triple
// function triple(x){
//  return x * 3;
// } 

// //binary
// function binary(x){
//  return x.toString(2);
// }

// const output = arr.map(binary)

// console.log(output);

//filter

// const arr = [1,2,3,4,5];

// //filte odd values

// function odd(x){
//  if( x%2 !=0)
//  return x;
// }


// const output =arr.filter(odd);
// console.log(output)

//REDUCE

// const arr = [5,1,3,2,6];

// function findSum (arr){
//   let sum = 0;
//   for( let i = 0 ; i< arr.length; i++){
//    sum = sum + arr[i]
//   }
//   return sum;
// }

// console.log(findSum(arr))

// const output = arr.reduce(function(acc, curr){
//  acc = acc + curr;
//  return acc;
// }, 0)

// console.log(output)

// //find max
// function findMax(arr){
//  let max=0;
//  for(let i =0 ;i<arr.length; i++){
//   if( arr[i]> max){
//    max = arr[i]
//   }
//   return max;
//  }
// }

// console.log(findMax(arr))

// const outputMax = arr.reduce(function(max, curr){
//   if( curr>max){
//     max = curr;
//   }
//   return max;
// },0)

// console.log(outputMax)


//TRICKY MAPP//

const users = [
 {firstName: "Vivek", lastName: "gaur" ,age:21},
 {firstName: "Vvk", lastName: "kumar" ,age:30},
 {firstName: "paul", lastName: "son" ,age:21}
];

//LIST OF FULL NAME OF USERS

const output = users.map(user => user.firstName + user.lastName)

console.log(output)

// how many people with particular uinque ages

// const outputAge = users.reduce(function (acc, curr){
//  if (acc[curr.age]){
//   acc[curr.age]=++acc[curr.age]
//  } else {
//    acc[curr.age] = 1;
//  }
// }, {});

// console.log(outputAge)

const first = users.filter(user => user.age < 30 )

const filterwithmap = first.map(user => user.firstName);
console.log(filterwithmap)

//with reduce

const withReduce = users.reduce((acc, curr)=>{
 if(curr.age <30){
  acc.push(curr.firstName)
 }
 return acc;
},[])

console.log(withReduce)