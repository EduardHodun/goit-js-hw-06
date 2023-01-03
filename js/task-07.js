// Напиши скрипт, який реагує на зміну значення input#font-size-control (подія input) і змінює інлайн-стиль span#text, оновлюючи властивість font-size. В результаті, перетягуючи повзунок, буде змінюватися розмір тексту.

// <input id="font-size-control" type="range" min="16" max="96" />
// <br />
// <span id="text">Abracadabra!</span>

const inputRef = document.querySelector('#font-size-control');
const spanRef = document.querySelector('#text');
const pRef = document.querySelector('#text-p');


// console.log(inputRef.value);
// console.log(spanRef.textContent);
// console.log( spanRef.style.fontSize);


inputRef.addEventListener("input", onFontSizeControlClick);

function onFontSizeControlClick(evt) { 

//    console.log("event: ", evt.target);
    
    
    spanRef.style.fontSize = `${inputRef.value}px`;
    console.log(inputRef.value);


    pRef.innerHTML = inputRef.value;


};