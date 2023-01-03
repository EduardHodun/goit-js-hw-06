// Напиши скрипт, який змінює кольори фону елемента <body> через інлайн-стиль по кліку на button.change-color і виводить значення кольору в span.color.

// <div class="widget">
//   <p>Background color: <span class="color">-</span></p>
//   <button type="button" class="change-color">Change color</button>
// </div>

// Для генерування випадкового кольору використовуй функцію getRandomHexColor.

// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215)
//     .toString(16)
//     .padStart(6, 0)}`;
// }

const widgetRef = document.querySelector(".widget");

console.dir(widgetRef);

const SpanRef = document.querySelector(".color");

const mainBtn = document.querySelector(".change-color");

mainBtn.addEventListener("click", OnBtnClick);


function OnBtnClick() {

  console.log("Hello");
  document.body.style.backgroundColor = getRandomHexColor();
  SpanRef.textContent = document.body.style.backgroundColor;

};



function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};
