// Напиши скрипт управління формою логіна.

// <form class="login-form">
//   <label>
//     Email
//     <input type="email" name="email" />
//   </label>
//   <label>
//     Password
//     <input type="password" name="password" />
//   </label>
//   <button type="submit">Login</button>
// </form>

// Обробка відправлення форми form.login-form повинна відбуватися відповідно до події submit.
// Під час відправлення форми сторінка не повинна перезавантажуватися.
// Якщо у формі є незаповнені поля, виводь alert з попередженням про те, що всі поля повинні бути заповнені.
// Якщо користувач заповнив усі поля і відправив форму, збери значення полів в об'єкт, де ім'я поля буде ім'ям властивості, а значення поля - значенням властивості. Для доступу до елементів форми використовуй властивість elements.
// Виведи об'єкт із введеними даними в консоль і очисти значення полів форми методом reset.

const formRef = document.querySelector('.login-form');
// console.log(formRef);

formRef.addEventListener("submit", OnLoginFormBtnClick);

let formEmailPassword = {

    email: '',
    password: '',

};

function OnLoginFormBtnClick(evt) {

    
    
    // ДОСТУП через властивість Elements

    evt.preventDefault();

    console.dir(evt.currentTarget.elements.email.value.length);

    
//     const {elements: { email, password } } = evt.currentTarget;




//     if (email.value === "" || password.value === "") {

//     return alert("Всі поля повинні бути заповнені!");
//   }

//     console.log(email.value, password.value);


//     formEmailPassword.email = email.value;
//     formEmailPassword.password = password.value;
//     console.log(formEmailPassword);

//     evt.currentTarget.reset();


        // ДОСТУП через new FormData() - масив по бажанню, краще відправляти на сервер готову formData

    
       
    
    const formData = new FormData(evt.currentTarget);
    console.log(formData);


    const formEmailPasswordArray = [];

    formData.forEach((value, name) => {

        console.log('OnFormSubmit -> name', name);
        console.log('OnFormSubmit -> value', value);

        formEmailPasswordArray.push(name);
        formEmailPasswordArray.push(value);

        evt.currentTarget.reset();


    });

        console.log(formEmailPasswordArray);



};