const divs= document.querySelectorAll('div');

addGlobalEventListeners('click' , 'div', e=>{
 console.log('hi')
})

function addGlobalEventListeners( type, selector ,callback)
{
  document.addEventListener(type , e=>{
   if (e.target.matches(selector)) callback(e)
  })
}
const newDiv = document.createElement('div');
newDiv.style.width= '200px';
newDiv.style.height= '200px';
newDiv.style.backgroundColor="purple";
newDiv.addEventListener('click', ()=>{
 console.log('hi')
})
document.body.append(newDiv)