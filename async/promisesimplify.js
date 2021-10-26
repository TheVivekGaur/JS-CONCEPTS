// let p =new Promise((resolve, reject) =>{
//  let a = 1 + 1
//  if(a==2) {
//   resolve('succeed');
//  } else{
//   reject('failed')
//  }
// })

// p.then((message)=>{
//   console.log('this is in the then ' + message)
// })
// .catch((err)=>{
//    console.log('this is in the catch' + message)
// })

//through callback
// const userLeft = false;
// const userWatchingMeme = true;

// function watchTutorialCllback( callback , errorCallback){
 //     if(userLeft)
 //     {  
 //              errorCallback({
 //               name: 'user left',
 //               message: ':('
 //              })    
 //     } else if(userWatchingMeme){
 //      errorCallback({
 //       name:'userWatchingMeme',
 //       message: 'WebDevSimplified < cat' 
 //      })
 //     } else 
 //     {
 //      callback('thumbs up and chill')
 //     }
 //    })
 //   }

 // watchingTutorialCallback((message) =>{
 //  console.log('success' + message)
 // },(error) =>{
 //  console.log(error.name + ' ' + error.message) 
 // } )


// REFACTORING TO PROMISES

// const userLeft = false;
// const userWatchingMeme = true;

// function watchTutorialPromise(){
//    return new Promise((resolve, reject) =>{
//     if(userLeft)
//     {  
//              reject({
//               name: 'user left',
//               message: ':('
//              })    
//     } else if(userWatchingMeme){
//      resolve({
//       name:'userWatchingMeme',
//       message: 'WebDevSimplified < cat' 
//      })
//     } else 
//     {
//      resolve ('thumbs up and chill')
//     }
//    })
//   }

//   watchTutorialPromise().then((message)=>{
//   console.log('success' + message.name)
//   }) .catch ((err)=>{
//  console.log('giving' + err)
//   })

  // PROMISE.ALL

  const recordVideoOne = new Promise((resolve, reject) =>{
   resolve('video 1 recorded')
  })

  const recordVideoTwo = new Promise((resolve, reject) =>{
   resolve('video 2 recorded')
  })

  const recordVideoThree = new Promise((resolve, reject) =>{
   resolve('video 3 recorded')
  })

  // Promise.all([
  //  recordVideoOne,
  //  recordVideoTwo,
  //  recordVideoThree
  // ]) .then((message)=>{
  //  console.log( message)
  // })

  Promise.race([      ///similar to all but it will run as soon as first one gets resolved give us one retrun vlaue
    recordVideoOne,
    recordVideoTwo,
    recordVideoThree
   ]) .then((message)=>{
    console.log( message)
   })