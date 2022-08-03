/* Напиши скрипт , который заменяет регистр каждого символа в строке на противоположный
Например, если строка "JavaScript", то на виходе должна быть строка "jAVAsCRIPT"
 */

// это старый метод
// const string = 'JavaScript';
// const letters = string.split('');
// let invertedString = '';

// console.log(letters);

// for (const letter of letters) {
//     console.log(letter); 

//     if (letter === letter.toLowerCase()) {
//         console.log('Эта буква в нижнем регистре!!! - ', letter);

//         invertedString += letter.toUpperCase();
//     } else {
//         console.log('Эта буква в верхнем регистре!!! - ', letter);
//         invertedString += letter.toLowerCase();
//     }
// }
// console.log(invertedString);

// !!!новый метод
// const string = 'JavaScript';
// const letters = string.split('');
// let invertedString = '';

// console.log(letters);

// for (const letter of letters) {
//     console.log(letter);
//     invertedString += letter === letter.toLowerCase() ? letter.toUpperCase() : letter.toLowerCase();
// }
// console.log('invertedString: ' , invertedString);