// //adding elements to body we use method append
// const body = document.body
// // // body.append("Hello world", "bye")  //in append we can pass strings but in appendchild we need to pass node

// const div =  document.createElement('div');
// const strong = document.createElement('strong');
// strong.innerText ="hello world"
// // div.innerHTML= " <strong>hello world</strong>"
// div.append(strong);
// body.append(div);

const body =document.body;

const div = document.querySelector('div')

const spanHi= document.querySelector('#hi')

const spanBye = document.querySelector('#bye')

spanHi.getAttribute('id');