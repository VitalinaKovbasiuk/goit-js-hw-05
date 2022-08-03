/* Знакомство с масивами
 */
// const friends = ['Mango', 'Kiwi', 'Poly', 'Ajax'];
// console.table(friends);
// узнать последний индекс - это всегда длина -1
// const lastIndex = friends.length -1;
// console.log(lastIndex);
// когда вы хотите обратится к елементу всредине масива - вы ставите: 
// console.log(friends[0]);
// как что-то записать  в масив:
// friends[1] = 'hfjhfjh'
// friends[3] = 65465;
// console.table(friends);



/* Примитивные и сложные типы
Передача по сылке и по значению
Сылочное равенство
 */
// let a = 10;
// let b = a;
// console.log(a);
// console.log(b);
//  a = 20;
// console.log(a);
// console.log(b);

// Передача по силці:
// const a = [1, 2, 3];
// const b = a;
// console.log('a', a);
// console.log('b', b);
// a[0] = 500;
// console.log('a', a);
// console.log('b', b);
// console.log(a === b);




/* Перебор - интерация масива
 */
// const friends = ['Mango', 'Kiwi', 'Poly', 'Ajax'];
// console.table(friends);
// const lastIndex = friends.length -1;

// for(let i = 0; i <= lastIndex; i += 1) {
//     console.log(friends[i]);
// }
// додати щось всередину масиву:
// for(let i = 0; i <= lastIndex; i += 1) {
//     friends[i] += '-1';
// }
// console.table(friends);
 
// for.....of если вам не нужно изменять елемент масива или не нужен индекс
// for (const friend of friends) {
//     console.table(friend);
// }