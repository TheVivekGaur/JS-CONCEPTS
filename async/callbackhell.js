// console.log('start');

// setTimeout(()=>{
//  console.log('after 2 sec')
// }, 3000)

// console.log('end');

console.log('start');

function logInUser(email, password, callback) {
 setTimeout(() => {
  console.log('now data here')
  callback({
   userEmail: email
  });
 }, 2000)
}

function logInUser(email, password) {
 setTimeout(() => {
  return({
   userEmail: email
  });
 }, 2000)
}

function getUserVideos(email, callback) {
 setTimeout(() => {
  callback(['video 1', 'video 2', 'video 3']);
 }, 1000)
}

function videoDetails(videos, callback) {
 setTimeout(() => {
  callback('title of the video')
 }, 2000)
}

const user = logInUser('vvksngh24@gmial.com', '123457', user=> {
 console.log('user')
 getUserVideos(user.userEmail, (videos) => {
  console.log(videos);
  videoDetails(videos[0], title =>{
   console.log(title);
  })
 })
})
console.log('end')
