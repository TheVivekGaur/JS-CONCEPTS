//PROMISES
function makeRequest(location) {
 return new Promise((resolve, reject)=>{
   console.log(`making request to ${location}`)
   if(location === 'Google'){
    resolve('google says hi')
   }else {
    reject(' we can only talk to google')
   }
 })
}

function processRequest(response) {
 return new Promise((resolve, reject)=>{
   console.log('processing request')
  resolve('extra information ' + response)
  })
}

// makeRequest('Google').then((response) =>{
//  console.log('response received')
//  return processRequest(response)
// }) .then((processResponse)=>{
//   console.log(processResponse)
// }).catch( err =>{
//   console.log(err)
// })

//REFACTORING IT TO ASYNC AWAIT

async function doWork () {
 try{ 
 const response = await makeRequest('Google');
 console.log('Response received')
const processResponse = await  processRequest(response)
console.log(processResponse)
} catch (err){
   console.log(err)
}
}
doWork();