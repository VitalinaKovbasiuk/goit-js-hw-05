/* Напиши скрипт который подсчитывает сумму четных чисел в масиве
 */
// const numbers = [1, 5, 8, 9, 12, 4, 15, 27, 30, 18, 11];
// 1.  переменную total 
// let total = 0;
// 2.  пребрать масив
// for (let i = 0; i < numbers.length; i += 1) {
//     const number = numbers[i];
//     console.log(number);
// 3.  на каждной интерации проверить элемент на четность
// if (number % 2 === 0) {
//     console.log('Четное!!!');
    // 4. если четный к тотал
//     total += number;
// }
// }
// console.log('Total:', total);
// если нужно не четное посчитатть пишеш то же самое, но !==  вместо ===
// !!!!либо можно записать это все короче:
// const numbers = [1, 5, 8, 9, 12, 4, 15, 27, 30, 18, 11];
// let total = 0;
// for (const number of numbers) {
    // console.log(number);
//     if (number % 2 === 0) {
//     console.log(`${number} - четное!!!`);
//     total += number;
//     }
// }
// console.log('Total:', total);

// !!!от обатного - вместо этого можна сделать по другому - проверить все, если не подходит , то пропускаем
// const numbers = [1, 5, 8, 9, 12, 4, 15, 27, 30, 18, 11];
// let total = 0;
// for (const number of numbers) {
//     if (number % 2 !== 0) {
//     console.log('Этy итерацию нужно пропустить', number);
//     continue;
//     }
//     console.log(`${number} - четное!!!`);
//     total += number;
// }
// console.log('Total:', total);