/* Напиши скрипт поиска логина
Если логина нет - вывести сообщение 'Пользователь [логин] не найден.'
Если логин есть - вывести сообщение 'Пользователь [логин] найден.'
 */

// const logins = ['m4ngoDoge', 'k1widab3st', 'poly1scute', 'ajxth3m4n'];
// const loginToFind = 'poly1scute';
// let message = '';

// for (let i = 0; i < logins.length; i += 1) {
//     const login = logins[i];
//     if (login === loginToFind) {
//         message = `Пользователь ${loginToFind} найден.`;
//         break;
//     } 
//     message = `Пользователь ${loginToFind}  не найден.`;
// }
// console.log(message);

// const logins = ['m4ngoDoge', 'k1widab3st', 'poly1scute', 'ajxth3m4n'];
// const loginToFind = 'poly1scute';
// let message = '';
// for (let i = 0; i < logins.length; i += 1) {
//     const login = logins[i];
//     console.log('Login: ', login);
//     console.log(`${login} === ${loginToFind}: `, login === loginToFind);
//     if (login === loginToFind) {
//         console.log('Ура равны!!!!');
//         message = `Пользователь ${loginToFind} найден.`;
//         break;
//     } 
//     message = `Пользователь ${loginToFind}  не найден.`;
// }
// console.log(message);

// !або це можна записати ось так:
// const logins = ['m4ngoDoge', 'k1widab3st', 'poly1scute', 'ajxth3m4n'];
// const loginToFind = 'poly1scute';
// let message = `Пользователь ${loginToFind}  не найден.`;

// for (const login of logins) {
//     console.log('Login: ', login);
//     console.log(`${login} === ${loginToFind}: `, login === loginToFind);

//     if (login === loginToFind) {
//         console.log('Ура равны!!!!');
//         message = `Пользователь ${loginToFind} найден.`;
//         break;
//     } 
// }
// console.log(message);

// !!!!!!!!є ще самий простий варіант з include :
// const logins = ['m4ngoDoge', 'k1widab3st', 'poly1scute', 'ajxth3m4n'];
// const loginToFind = 'poly1scute';
// let message = `Пользователь ${loginToFind}  не найден.`;
// console.log(logins.includes(loginToFind));


// на пальцях пояснюю деклоративный код - абстракция (метод масива, 
// который под капотом скрывает детали реализации): 
// const logins = ['m4ngoDoge', 'k1widab3st', 'poly1scute', 'ajxth3m4n'];
// const loginToFind = 'poly1scute';
// const message = logins.includes(loginToFind) ? `Пользователь ${loginToFind} найден.` : `Пользователь ${loginToFind}  не найден.`;
// console.log(message);