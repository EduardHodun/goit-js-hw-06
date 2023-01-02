// Напиши скрипт, який під час набору тексту в інпуті input#name-input (подія input), підставляє його поточне значення в span#name-output. Якщо інпут порожній, у спані повинен відображатися рядок "Anonymous".

// <input type="text" id="name-input" placeholder="Please enter your name" />
// <h1>Hello, <span id="name-output">Anonymous</span>!</h1>

const inputRef = document.querySelector('#name-input');

const spanRef = document.querySelector('#name-output');

// console.dir(inputRef);
// console.dir(spanRef);


inputRef.addEventListener("input", OnInputClick); 

function OnInputClick(evt) {
    
//   console.log("event: ", evt);
//   console.log("event type: ", evt.type);
//   console.log("currentTarget: ", evt.currentTarget);

       
    spanRef.textContent = evt.currentTarget.value;

      
};




