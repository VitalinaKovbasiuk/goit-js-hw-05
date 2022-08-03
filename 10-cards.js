/* Работаем с коллекцией карточек в trello
Метод splice() 
Удвлить
Добавить
Обновить
 */

const cards = [
    'Карточка-1',
    'Карточка-2',
    'Карточка-3',
    'Карточка-4',
    'Карточка-5',
];
console.table(cards);

// !Удаление по индексу, метод indexOf

//  const cadrToRemove =  'Карточка-3';
//  const index = cards.indexOf(cadrToRemove); // index - позволяет найти елемент в масиве
//  console.log(index);

//  cards.splice(index, 1);
//  console.table(cards);

// !Добавление по индексу
// const cardToInset = 'Карточка-6';
// const index = 3;
// cards.splice(index, 0, cardToInset);
// console.table(cards);

// !обновление по индексу
const cadrToRemove =  'Карточка-4';
cards.splice(3, 1, 5555);
console.table(cards);