var btnTranslate = document.querySelector('#btn-translate');
var textArea = document.querySelector('#txt-input');
var outputDiv = document.querySelector('#output');


function clickHandler () {
     outputDiv.innerText = "translated" + textArea.value;
}


btnTranslate.addEventListener('click' , clickHandler);