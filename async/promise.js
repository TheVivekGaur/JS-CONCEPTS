// const promise = new Promise ((resolve, reject ) =>{
//  setTimeout(()=>{
//   console.log('got user')
//   reject(new Error('got 404'))
//  },2000)
// })

// promise.then( user =>{
//  console.log(user);
// })
// .catch( e =>{
//  console.log((e))
// }) 

console.log('start');

function logInUser(email, password){
 return new Promise((resolve,reject)=>{
  setTimeout(() =>{
   console.log('now got user data');
   resolve({userEmail: email})
  }, 3000)
 })
 }


function getUserVideos(email){
 return new Promise((resolve, reject) =>{
  setTimeout(() =>{
  resolve(['videos1' , "videos2" , "videos3"])
  },2000)
 })
}
 

function videoDetails(video){
 return new Promise((resolve, reject)=>{
  setTimeout(()=>{
  resolve('title of the video')
  },2000)
 })
}

// logInUser('vvksngh24@gmail.com', 'kasjasj')
// .then( user => getUserVideos(user))
// .then(videos => videoDetails(videos[0])) 
// .then(detail => console.log(detail));

//more sync way

async function  displayUser(){
 const loggedUser = await logInUser('vvkv','sks')
 const videos = await getUserVideos(loggedUser.userEmail);
 const detail= await videoDetails(videos[0]);
console.log(detail);
}

displayUser();
// const user = logInUser('vvkv', 'pass')
// const videos = getUserVideos(user.email);
// const videoTitle= videoDetails(videos.video[0]) 
// console.log('finish')
