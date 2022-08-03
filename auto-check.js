/* Завдання 1 автоперевірка
 */
// ФУНКЦІЯ ЯК ЗНАЧЕННЯ
// Доповни код таким чином, щоб у змінній result був результат виконання функції makePizza, 
// а у змінній pointer було посилання на функцію makePizza.
//!!!before:
// function makePizza() {
//   return "Your pizza is being prepared, please wait.";
// }
// const result = null;
// const pointer = null;
//!!!after:
// function makePizza() {
//   return "Your pizza is being prepared, please wait.";
// }
// const result = makePizza();
// const pointer = makePizza;





/* Завдання 2 автоперевірка
 */
// КОЛБЕК-ФУНКЦІЇ
// Доповни функцію makeMessage таким чином, щоб вона очікувала другим параметром (параметр callback) колбек-функцію і повертала її виклик. 
// Функція deliverPizza або makePizza буде передаватися як колбек і очікувати аргументом ім'я готової піци, що доставляється.
//!!!before:
// function deliverPizza(pizzaName) {
//   return `Delivering ${pizzaName} pizza.`;
// }
// function makePizza(pizzaName) {
//   return `Pizza ${pizzaName} is being prepared, please wait...`;
// }
// function makeMessage(pizzaName) {
//   return;
// }
//!!!after:
// function deliverPizza(pizzaName) {
//   return `Delivering ${pizzaName} pizza.`;
// }
// function makePizza(pizzaName) {
//   return `Pizza ${pizzaName} is being prepared, please wait...`;
// }
// function makeMessage(pizzaName, callback) {
//   return callback(pizzaName);
// }





/* Завдання 3 автоперевірка
 */
// ІНЛАЙН-КОЛБЕКИ
// Доповни другий виклик функції makePizza(pizzaName, callback), 
// передавши другим аргументом інлайн колбек-функцію eatPizza(pizzaName), яка логує рядок "Eating pizza <назва піци>".
//!!!before:
// function makePizza(pizzaName, callback) {
//   console.log(`Pizza ${pizzaName} is being prepared, please wait...`);
//   callback(pizzaName);
// }
// makePizza("Royal Grand", function deliverPizza(pizzaName) {
//   console.log(`Delivering pizza ${pizzaName}.`);
// });
// makePizza("Ultracheese");
//!!!after:
// function makePizza(pizzaName, callback) {
//   console.log(`Pizza ${pizzaName} is being prepared, please wait...`);
//   callback(pizzaName);
// }
// makePizza("Royal Grand", function deliverPizza(pizzaName) {
//   console.log(`Delivering pizza ${pizzaName}.`);
// });
// makePizza("Ultracheese", function deliverPizza(pizzaName) {
//   console.log(`Eating pizza ${pizzaName}.`);
// });






/* Завдання 4 автоперевірка
 */
// ДЕКІЛЬКА КОЛБЕКІВ
// Необхідно написати логіку обробки замовлення піци. Виконай рефакторинг методу order таким чином, 
// щоб він приймав другим і третім параметром два колбеки onSuccess і onError.
// Якщо у властивості pizzas відсутня піца з назвою з параметра pizzaName, 
// метод order повинен повертати результат виклику колбека onError, 
// передаючи йому аргументом рядок "There is no pizza with a name <имя пиццы> in the assortment."
// Якщо у властивості pizzas присутня піца з назвою з параметра pizzaName, 
// метод order повинен повертати результат виклику колбека onSuccess, передаючи йому аргументом назву замовленої піци.
// Після оголошення об'єкта pizzaPalace ми додали колбеки і виклики методів. Будь ласка, нічого там не міняй.
//!!!before:
// const pizzaPalace = {
//   pizzas: ["Ultracheese", "Smoked", "Four meats"],
//   order(pizzaName) {},
// };
// function makePizza(pizzaName) {
//   return `Your order is accepted. Cooking pizza ${pizzaName}.`;
// }
// function onOrderError(error) {
//   return `Error! ${error}`;
// }
// pizzaPalace.order("Smoked", makePizza, onOrderError);
// pizzaPalace.order("Four meats", makePizza, onOrderError);
// pizzaPalace.order("Big Mike", makePizza, onOrderError);
// pizzaPalace.order("Vienna", makePizza, onOrderError);
//!!!after:
// const pizzaPalace = {
//   pizzas: ['Ultracheese', 'Smoked', 'Four meats'],
//   order(pizzaName, onSuccess, onError) {
//     if (!this.pizzas.includes(pizzaName)) {
//       return onError( `There is no pizza with a name ${pizzaName} in the assortment.`);
//     }
//     return onSuccess(pizzaName);
//   }
// };
// function makePizza(pizzaName) {
//   return `Your order is accepted. Cooking pizza ${pizzaName}.`;
// }
// function onOrderError(error) {
//   return `Error! ${error}`;
// }
// pizzaPalace.order("Smoked", makePizza, onOrderError);
// pizzaPalace.order("Four meats", makePizza, onOrderError);
// pizzaPalace.order("Big Mike", makePizza, onOrderError);
// pizzaPalace.order("Vienna", makePizza, onOrderError);





/* Завдання 5 автоперевірка
 */
// МЕТОД FOREACH(CALLBACK)
// Функція calculateTotalPrice(orderedItems) приймає один параметр orderedItems - масив чисел, 
// і розраховує загальну суму його елементів, яка зберігається у змінній totalPrice і повертається як результат роботи функції.
// Виконай рефакторинг функції таким чином, щоб замість циклу for, вона використовувала метод forEach.
//!!!before:
// function calculateTotalPrice(orderedItems) {
//   let totalPrice = 0;
//   for (let i = 0; i < orderedItems.length; i += 1) {
//     totalPrice += orderedItems[i];
//   }
//   return totalPrice;
// }
//!!!after:
// function calculateTotalPrice(orderedItems) {
//   let totalPrice = 0;
//   orderedItems.forEach(function (number, index) {
//   totalPrice += orderedItems[number, index];
//   });
//   return totalPrice;
// }





/* Завдання 6 автоперевірка
 */
// ЗАДАЧА. ФІЛЬТРАЦІЯ МАСИВУ ЧИСЕЛ
// Функція filterArray(numbers, value) приймає масив чисел numbers і повертає новий масив, 
// в якому будуть тільки ті елементи оригінального масиву, які більші за значення параметра value.
// Виконай рефакторинг функції таким чином, щоб замість циклу for, вона використовувала метод forEach.
//!!!before:
// function filterArray(numbers, value) {
//   const filteredNumbers = [];
//   for (let i = 0; i < numbers.length; i += 1) {
//     if (numbers[i] > value) {
//       filteredNumbers.push(numbers[i]);
//     }
//   }
//   return filteredNumbers;
// }
//!!!after:
// function filterArray(numbers, value) {
//   const filteredNumbers = [];
// numbers.forEach(number => {
//     if (number > value) {
//       filteredNumbers.push(number);
//     }
// })
//   return filteredNumbers;
// }





/* Завдання 7 автоперевірка
 */
// ЗАДАЧА. СПІЛЬНІ ЕЛЕМЕНТИ
// Функція getCommonElements(firstArray, secondArray) приймає два масиви довільної довжини в параметри firstArray і secondArray, 
// і повертає новий масив їхніх спільних елементів, тобто тих, які присутні в обох масивах.
// Виконай рефакторинг функції таким чином, щоб замість циклу for, вона використовувала метод forEach.
//!!!before:
// function getCommonElements(firstArray, secondArray) {
//   const commonElements = [];
//   for (let i = 0; i < firstArray.length; i += 1) {
//     if (secondArray.includes(firstArray[i])) {
//       commonElements.push(firstArray[i]);
//     }
//   }
//   return commonElements;
// }
//!!!after:
// function getCommonElements(firstArray, secondArray) {
//   const commonElements = [];
// firstArray.forEach(element => {
//      if (secondArray.includes(element)) {
//       commonElements.push(element);
//     }
// })
//   return commonElements;
// }





/* Завдання 8 автоперевірка
 */
// СТРІЛОЧНІ ФУНКЦІЇ.
// Виконай рефакторинг функції calculateTotalPrice() таким чином, щоб вона була оголошена як стрілочна.
//!!!before:
// function calculateTotalPrice(quantity, pricePerItem) {
//   return quantity * pricePerItem;
// }
//!!!after:
// const calculateTotalPrice = (quantity, pricePerItem) => {
//   return quantity * pricePerItem;
// }





/* Завдання 9 автоперевірка
 */
// НЕЯВНЕ ПОВЕРНЕННЯ
// Виконай рефакторинг функції calculateTotalPrice() таким чином, щоб вона використовувала неявне повернення.
//!!!before:
// const calculateTotalPrice = (quantity, pricePerItem) => {
//   return quantity * pricePerItem;
// };
//!!!after:
// const calculateTotalPrice = (quantity, pricePerItem) => quantity * pricePerItem;






/* Завдання 10 автоперевірка
 */
// СТРІЛОЧНІ ФУНКЦІЇ ЯК КОЛБЕКИ
// Виконай рефакторинг функції calculateTotalPrice(orderedItems), 
// замінивши її оголошення на стрілочну функцію. Заміни колбек-функцію, передану в метод forEach(), на стрілочну функцію.
//!!!before:
// function calculateTotalPrice(orderedItems) {
//   let totalPrice = 0;
//   orderedItems.forEach(function (item) {
//     totalPrice += item;
//   });
//   return totalPrice;
// }
//!!!after:
// const calculateTotalPrice = (orderedItems) =>  {
//   let totalPrice = 0;
//   orderedItems.forEach((item) => {
//     totalPrice += item;
//   });
//   return totalPrice;
// }



/* Завдання 11 автоперевірка
 */
// ЗАДАЧА. ФІЛЬТРАЦІЯ МАСИВУ ЧИСЕЛ 2.0
// Заміни оголошення функції filterArray() і колбек для методу forEach() на стрілочні функції.
//!!!before:
// function filterArray(numbers, value) {
//   const filteredNumbers = [];
//   numbers.forEach(function (number) {
//     if (number > value) {
//       filteredNumbers.push(number);
//     }
//   });
//   return filteredNumbers;
// }
//!!!after:
// const filterArray = (numbers, value) => {
//   const filteredNumbers = [];
//   numbers.forEach((number) => {
//     if (number > value) {
//       filteredNumbers.push(number);
//     }
//   });
//   return filteredNumbers;
// }




/* Завдання 12 автоперевірка
 */
// ЗАДАЧА. СПІЛЬНІ ЕЛЕМЕНТИ 2.0
// Заміни оголошення функції getCommonElements() і колбек для методу forEach() на стрілочні функції.
//!!!before:
// function getCommonElements(firstArray, secondArray) {
//   const commonElements = [];
//   firstArray.forEach(function (element) {
//     if (secondArray.includes(element)) {
//       commonElements.push(element);
//     }
//   });
//   return commonElements;
// }
//!!!after:
// const getCommonElements = (firstArray, secondArray) => {
//   const commonElements = [];
//   firstArray.forEach((element) => {
//     if (secondArray.includes(element)) {
//       commonElements.push(element);
//     }
//   });
//   return commonElements;
// }



/* Завдання 13 автоперевірка
 */
// ЧИСТІ ФУНКЦІЇ
// Функція changeEven(numbers, value) приймає масив чисел numbers і оновлює кожен елемент, 
// значення якого - це парне число, додаючи до нього значення параметра value.
// Виконай рефакторинг функції таким чином, щоб вона стала чистою - не змінювала масив чисел numbers, а створювала, 
// наповнювала і повертала новий масив з оновленими значеннями.
//!!!before:
// function changeEven(numbers, value) {
//   for (let i = 0; i < numbers.length; i += 1) {
//     if (numbers[i] % 2 === 0) {
//       numbers[i] = numbers[i] + value;
//     }
//   }
// }
//!!!after:
// function changeEven(numbers, value) {
//   const newArray = [];
// numbers.forEach(element => {
//     if (element % 2 === 0) {
//       newArray.push(element + value);
//     } else {
//       newArray.push(element);
//     }
//   });
//   return newArray;
// }





/* Завдання 14 автоперевірка
 */
// МЕТОД MAP()
// Доповни код таким чином, щоб у змінній planetsLengths вийшов масив довжин назв планет. Обов'язково використовуй метод map().
//!!!before:
// const planets = ["Earth", "Mars", "Venus", "Jupiter"];
// const planetsLengths = planets;
//!!!after:
// const planets = ["Earth", "Mars", "Venus", "Jupiter"];
// const planetsLengths = planets.map(planet => planet.length);
// console.log(planetsLengths);



/* Завдання 15 автоперевірка
 */
// МЕТОД MAP() І МАСИВ ОБ'ЄКТІВ
// Використовуючи метод map(), зроби так, щоб у змінній titles вийшов масив назв книг (властивість title) з усіх об'єктів масиву books.
//!!!before:
// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   },
//   { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//   { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
// ];
// const titles = books;
//!!!after:
// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   },
//   { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//   { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
// ];
// const titles = books.map(book => book.title);
// console.log(titles);




/* Завдання 16 автоперевірка
 */
// МЕТОД FLATMAP()
// Використовуючи метод flatMap(), зроби так, щоб у змінній genres вийшов масив усіх жанрів книг (властивість genres) з масиву книг books.
//!!!before:
// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     genres: ["adventure", "history"],
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     genres: ["fiction"],
//   },
//   {
//     title: "Redder Than Blood",
//     author: "Tanith Lee",
//     genres: ["horror", "mysticism"],
//   },
// ];
// const genres = books;
//!!!after:
// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     genres: ["adventure", "history"],
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     genres: ["fiction"],
//   },
//   {
//     title: "Redder Than Blood",
//     author: "Tanith Lee",
//     genres: ["horror", "mysticism"],
//   },
// ];
// const genres = books.flatMap(book => book.genres);
// console.log(genres);






/* Завдання 17 автоперевірка
 */
// ЗАДАЧА. ІМЕНА КОРИСТУВАЧІВ
// Доповни функцію getUserNames(users) таким чином, щоб вона повертала масив імен 
// користувачів (властивість name) з масиву об'єктів в параметрі users.
//!!!before:
// const getUserNames = users => {
// };
//!!!after:
// const getUserNames = users => 
//     users.map(user => user.name);






/* Завдання 18 автоперевірка
 */
// ЗАДАЧА. ПОШТИ КОРИСТУВАЧІВ
// Доповни функцію getUserEmails(users) таким чином, щоб вона повертала масив
// поштових адрес користувачів (властивість email) з масиву об'єктів в параметрі users.
//!!!before:
// const getUserEmails = users => {
// };
//!!!after:
// const getUserEmails = users => 
// users.map(user => user.email);





/* Завдання 19 автоперевірка
 */
// МЕТОДИ FILTER І FIND
// Доповни код таким чином, щоб у змінній evenNumbers утворився масив парних чисел з масиву numbers, 
// а в змінній oddNumbers - масив непарних. Обов'язково використовуй метод filter().
//!!!before:
// const numbers = [17, 24, 82, 61, 36, 18, 47, 52, 73];
// const evenNumbers = numbers;
// const oddNumbers = numbers;
//!!!after:
// const numbers = [17, 24, 82, 61, 36, 18, 47, 52, 73];
// const evenNumbers = numbers.filter(number => number % 2 === 0);
// const oddNumbers = numbers.filter(number => number % 2);
// console.log(evenNumbers);
// console.log(oddNumbers);







/* Завдання 20 автоперевірка
 */
// ФІЛЬТРАЦІЯ УНІКАЛЬНИХ ЕЛЕМЕНТІВ
// Доповни код таким чином, щоб у змінній allGenres був масив всіх жанрів книг (властивість genres) з масиву books, 
// а у змінній uniqueGenres - масив унікальних жанрів, без повторень.
//!!!before:
// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     genres: ["adventure", "history"],
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     genres: ["fiction", "mysticism"],
//   },
//   {
//     title: "Redder Than Blood",
//     author: "Tanith Lee",
//     genres: ["horror", "mysticism", "adventure"],
//   },
// ];
// const allGenres = books;
// const uniqueGenres = allGenres;
//!!!after:
// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     genres: ["adventure", "history"],
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     genres: ["fiction", "mysticism"],
//   },
//   {
//     title: "Redder Than Blood",
//     author: "Tanith Lee",
//     genres: ["horror", "mysticism", "adventure"],
//   },
// ]
// const allGenres = books.flatMap(book => book.genres);
// const uniqueGenres = allGenres.filter((course, index, array) => array.indexOf(course) === index);
// console.log(allGenres);
// console.log(uniqueGenres);





/* Завдання 21 автоперевірка
 */
// МЕТОД FILTER() І МАСИВ ОБ'ЄКТІВ
// Використовуючи метод filter(), доповни код таким чином, щоб:
// У змінній topRatedBooks утворився масив книг, рейтинг яких (властивість rating) більший за або дорівнює значенню змінної MIN_RATING.
// У змінній booksByAuthor утворився масив книг, написаних автором з ім'ям (властивість author), яке збігається зі значенням у змінній AUTHOR.
//!!!before:
// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   },
//   { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//   { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
// ];
// const MIN_RATING = 8;
// const AUTHOR = "Bernard Cornwell";
// const topRatedBooks = books;
// const booksByAuthor = books;
//!!!after:
// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   },
//   { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//   { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
// ];
// const MIN_RATING = 8;
// const AUTHOR = "Bernard Cornwell";
// const topRatedBooks = books.filter(book => book.rating >= MIN_RATING);
// const booksByAuthor = books.filter(book => book.author === AUTHOR);






/* Завдання 22 автоперевірка
 */
// ЗАДАЧА. КОРИСТУВАЧІ З КОЛЬОРОМ ОЧЕЙ
// Доповни функцію getUsersWithEyeColor(users, color) таким чином, щоб вона повертала масив користувачів, 
// у яких колір очей (властивість eyeColor) збігається зі значенням параметра color.
//!!!before:
// const getUsersWithEyeColor = (users, color) => {
// };
//!!!after:
// const getUsersWithEyeColor = (users, color) => 
// users.filter(user => user.eyeColor === color);





/* Завдання 23 автоперевірка
 */
// ЗАДАЧА. КОРИСТУВАЧІ У ВІКОВІЙ КАТЕГОРІЇ
// Доповни функцію getUsersWithAge(users, minAge, maxAge) таким чином, 
// щоб вона повертала масив користувачів, вік яких (властивість age) потрапляє у проміжок від minAge до maxAge.
//!!!before:
// const getUsersWithAge = (users, minAge, maxAge) => {
// };
//!!!after:
// const getUsersWithAge = (users, minAge, maxAge) => 
//  users.filter(user => user.age <= maxAge & user.age >= minAge)
// ;





/* Завдання 24 автоперевірка
 */
// ЗАДАЧА. КОРИСТУВАЧІ З ДРУГОМ
// Доповни функцію getUsersWithFriend(users, friendName) таким чином, щоб вона повертала масив користувачів, 
// у яких є один з ім'ям в параметрі friendName. Масив друзів користувача зберігається у властивості friends.
//!!!before:
// const getUsersWithFriend = (users, friendName) => {
// };
//!!!after:
// const getUsersWithFriend = (users, friendName) => 
// users.filter(user => user.friends.includes(friendName));
// ;





/* Завдання 25 автоперевірка
 */
// ЗАДАЧА. СПИСОК ДРУЗІВ
// Доповни функцію getFriends(users) таким чином, щоб вона повертала масив друзів всіх користувачів (властивість friends).
// У декількох користувачів можуть бути однакові друзі, зроби так, щоб масив, що повертається, не містив повторень.
//!!!before:
// const getFriends = (users) => {
// };
//!!!after:
// const getFriends = users => 
// users.flatMap(user => user.friends).filter((course, index, array) => array.indexOf(course) === index);; 




/* Завдання 26 автоперевірка
 */
// ЗАДАЧА. АКТИВНІ КОРИСТУВАЧІ
// Доповни функцію getActiveUsers(users) таким чином, щоб вона повертала масив активних користувачів, значення властивості isActive яких - true.
//!!!before:
// const getActiveUsers = (users) => {
// };
//!!!after:
// const getActiveUsers = (users) => 
// users.filter(user => user.isActive === true);
// ; 





/* Завдання 27 автоперевірка
 */
// ЗАДАЧА. НЕАКТИВНІ КОРИСТУВАЧІ
// Доповни функцію getInactiveUsers(users) таким чином, 
// щоб вона повертала масив неактивних користувачів, значення властивості isActive яких - false.
//!!!before:
// const getInactiveUsers = (users) => {
// };
//!!!after:
// const getInactiveUsers = (users) => 
//      users.filter(user => user.isActive === false);
// ;





/* Завдання 28 автоперевірка
 */
// МЕТОД FIND()
// Використовуючи метод find(), доповни код таким чином, щоб:
// У змінній bookWithTitle утворився об'єкт книги, назва якої (властивість title) збігається зі значенням змінної BOOK_TITLE.
// У змінній bookByAuthor утворився об'єкт книги, автор якої (властивість author) збігається зі значенням змінної AUTHOR.
//!!!before:
// const books = [
//    {
//      title: 'The Last Kingdom',
//      author: 'Bernard Cornwell',
//      rating: 8.38,
//    },
//    {
//      title: 'Beside Still Waters',
//      author: 'Robert Sheckley',
//      rating: 8.51,
//    },
//    {
//      title: 'The Dream of a Ridiculous Man',
//      author: 'Fyodor Dostoevsky',
//      rating: 7.75,
//    },
//    { title: 'Redder Than Blood', author: 'Tanith Lee', rating: 7.94 },
//  ];
//  const BOOK_TITLE = 'The Dream of a Ridiculous Man';
//  const AUTHOR = 'Robert Sheckley';
//  const bookWithTitle = books;
//  const bookByAuthor = books;
//!!!after:
// const books = [
//    {
//      title: 'The Last Kingdom',
//      author: 'Bernard Cornwell',
//      rating: 8.38,
//    },
//    {
//      title: 'Beside Still Waters',
//      author: 'Robert Sheckley',
//      rating: 8.51,
//    },
//    {
//      title: 'The Dream of a Ridiculous Man',
//      author: 'Fyodor Dostoevsky',
//      rating: 7.75,
//    },
//    { title: 'Redder Than Blood', author: 'Tanith Lee', rating: 7.94 },
//  ];
//  const BOOK_TITLE = 'The Dream of a Ridiculous Man';
//  const AUTHOR = 'Robert Sheckley';
//  const bookWithTitle = books.find((option) => option.title === BOOK_TITLE);
//  const bookByAuthor = books.find((option) => option.author === AUTHOR);
 






/* Завдання 29 автоперевірка
 */
// ЗАДАЧА. КОРИСТУВАЧ З ПОШТОЮ
// Доповни функцію getUserWithEmail(users, email) таким чином, щоб вона повертала об'єкт користувача, 
// пошта якого (властивість email) збігається зі значенням параметра email.
//!!!before:
// const getUserWithEmail = (users, email) => {
// };
//!!!after:
// const getUserWithEmail = (users, email) => 
//    users.find((option) => option.email === email)
// ;






/* Завдання 30 автоперевірка
 */
// МЕТОД EVERY()
// Використовуючи метод every(), доповни код таким чином, щоб:
// У змінній eachElementInFirstIsEven був результат перевірки всіх елементів масиву firstArray на парність.
// У змінній eachElementInFirstIsOdd був результат перевірки всіх елементів масиву firstArray на непарність.
// У змінній eachElementInSecondIsEven був результат перевірки всіх елементів масиву secondArray на парність.
// У змінній eachElementInSecondIsOdd був результат перевірки всіх елементів масиву secondArray на непарність.
// У змінній eachElementInThirdIsEven був результат перевірки всіх елементів масиву thirdArray на парність.
// У змінній eachElementInThirdIsOdd був результат перевірки всіх елементів масиву thirdArray на непарність.
//!!!before:
// const firstArray = [26, 94, 36, 18];
// const secondArray = [17, 61, 23];
// const thirdArray = [17, 26, 94, 61, 36, 23, 18];
// const eachElementInFirstIsEven = firstArray;
// const eachElementInFirstIsOdd = firstArray;
// const eachElementInSecondIsEven = secondArray;
// const eachElementInSecondIsOdd = secondArray;
// const eachElementInThirdIsEven = thirdArray;
// const eachElementInThirdIsOdd = thirdArray;
//!!!after:
// const firstArray = [26, 94, 36, 18];
// const secondArray = [17, 61, 23];
// const thirdArray = [17, 26, 94, 61, 36, 23, 18];
// const eachElementInFirstIsEven = firstArray.every((value) => value >= 0);
// const eachElementInFirstIsOdd = firstArray.every((value) => value <= 0);
// const eachElementInSecondIsEven = secondArray.every((value) => value <= 0);
// const eachElementInSecondIsOdd = secondArray.every((value) => value >= 0);
// const eachElementInThirdIsEven = thirdArray.every((value) => value <= 0);
// const eachElementInThirdIsOdd = thirdArray.every((value) => value <= 0);





/* Завдання 31 автоперевірка
 */
// ЗАДАЧА. ЧИ ВСІ КОРИСТУВАЧІ АКТИВНІ
// Доповни функцію isEveryUserActive(users) таким чином, щоб вона перевіряла, 
// чи всі користувачі зараз активні (властивість isActive) і повертала true або false.
//!!!before:
// const isEveryUserActive = (users) => {
// };
//!!!after:
// const isEveryUserActive = (users) =>
//     users.every(user => user.isActive);
// ;





/* Завдання 32 автоперевірка
 */
// МЕТОД SOME()
// Використовуючи метод some(), доповни код таким чином, щоб:
// У змінній anyElementInFirstIsEven був результат перевірки наявності парних елементів в масиві firstArray.
// У змінній anyElementInFirstIsOdd був результат перевірки наявності непарних елементів в масиві firstArray.
// У змінній anyElementInSecondIsEven був результат перевірки наявності парних елементів в масиві secondArray.
// У змінній anyElementInSecondIsOdd був результат перевірки наявності непарних елементів в масиві secondArray.
// У змінній anyElementInThirdIsEven був результат перевірки наявності парних елементів в масиві thirdArray.
// У змінній anyElementInThirdIsOdd був результат перевірки наявності непарних елементів в масиві thirdArray.
//!!!before:
// const firstArray = [26, 94, 36, 18];
// const secondArray = [17, 61, 23];
// const thirdArray = [17, 26, 94, 61, 36, 23, 18];
// const anyElementInFirstIsEven = firstArray;
// const anyElementInFirstIsOdd = firstArray;
// const anyElementInSecondIsEven = secondArray;
// const anyElementInSecondIsOdd = secondArray;
// const anyElementInThirdIsEven = thirdArray;
// const anyElementInThirdIsOdd = thirdArray;
//!!!after:
// const firstArray = [26, 94, 36, 18];
// const secondArray = [17, 61, 23];
// const thirdArray = [17, 26, 94, 61, 36, 23, 18];
// const anyElementInFirstIsEven = firstArray.some(value => value >= 0); ;
// const anyElementInFirstIsOdd = firstArray.some(value => value <= 0); ;
// const anyElementInSecondIsEven = secondArray.some(value => value <= 0); ;
// const anyElementInSecondIsOdd = secondArray.some(value => value >= 0); ;
// const anyElementInThirdIsEven = thirdArray.some(value => value >= 0); ;
// const anyElementInThirdIsOdd = thirdArray.some(value => value >= 0); ;







/* Завдання 33 автоперевірка
 */
// ЗАДАЧА. ЧИ Є АКТИВНІ КОРИСТУВАЧІ
// Доповни функцію isAnyUserActive(users) таким чином, 
// щоб вона перевіряла наявність активних користувачів (властивість isActive) і повертала true або false.
//!!!before:
// const isAnyUserActive = users => {
// };
//!!!after:
// const isAnyUserActive = users => 
//    users.some(user => user.isActive)
// ;






/* Завдання 34 автоперевірка
 */
// МЕТОД REDUCE()
// Ігровому сервісу необхідний функціонал підрахунку середнього часу, проведеного в іграх. 
// Доповни код таким чином, щоб у змінній totalPlayTime вийшло загальний ігровий час з масиву playtimes.
//!!!before:
// const players = {
//    mango: 1270,
//    poly: 468,
//    ajax: 710,
//    kiwi: 244
//  };
//  const playtimes = Object.values(players); 
//  const totalPlayTime = playtimes;
//  const averagePlayTime = totalPlayTime / playtimes.length;
//!!!after:
// const players = {
//    mango: 1270,
//    poly: 468,
//    ajax: 710,
//    kiwi: 244
//  };
//  const playtimes = Object.values(players);
//  const totalPlayTime = playtimes.reduce((previousValue, number) => {
//    return previousValue + number;
//  }, 0);;
//  const averagePlayTime = totalPlayTime / playtimes.length;







/* Завдання 35 автоперевірка
 */
// МЕТОД REDUCE() І МАСИВ ОБ'ЄКТІВ
// Нашому сервісу необхідно розрахувати середній час, проведений в одній грі для кожного гравця, і отримати загальну суму цих значень часу. 
// Розрахувати час для кожного з гравців можна, розділивши його час (властивість playtime) на кількість ігор (властивість gamesPlayed).
//!!!before:
// const players = [
//    { name: "Mango", playtime: 1270, gamesPlayed: 4 },
//    { name: "Poly", playtime: 469, gamesPlayed: 2 },
//    { name: "Ajax", playtime: 690, gamesPlayed: 3 },
//    { name: "Kiwi", playtime: 241, gamesPlayed: 1 },
//  ];
//  const totalAveragePlaytimePerGame = players;
//!!!after:
// const players = [
//    { name: "Mango", playtime: 1270, gamesPlayed: 4 },
//    { name: "Poly", playtime: 469, gamesPlayed: 2 },
//    { name: "Ajax", playtime: 690, gamesPlayed: 3 },
//    { name: "Kiwi", playtime: 241, gamesPlayed: 1 },
//  ];
//  const totalAveragePlaytimePerGame = players.reduce((total, player) => {
//    return total + player.playtime / player.gamesPlayed;
//  }, 0);
 
 





/* Завдання 36 автоперевірка
 */
// ЗАДАЧА. ЗАГАЛЬНИЙ БАЛАНС КОРИСТУВАЧІВ
// Доповни функцію calculateTotalBalance(users) таким чином, 
// щоб вона рахувала і повертала суму всіх коштів (властивість balance), які зберігають користувачі з масиву users.
//!!!before:
// const calculateTotalBalance = users => {
// };
//!!!after:
// const calculateTotalBalance = users => {
//    return users.reduce((totalBalance, user) => totalBalance + user.balance, 0);
// };






/* Завдання 37 автоперевірка
 */
// ЗАДАЧА. ЗАГАЛЬНА КІЛЬКІСТЬ ДРУЗІВ
// Доповни функцію getTotalFriendCount(users) таким чином, щоб вона рахувала і повертала 
// загальну кількість друзів (властивість friends) усіх користувачів з масиву users.
//!!!before:
// const getTotalFriendCount = users => {
// };
//!!!after:
// const getTotalFriendCount = users => users.reduce((total, user) => total + user.friends.length, 0);




/* Завдання 38 автоперевірка
 */
// МЕТОД SORT()
// Доповни код таким чином, щоб у змінній ascendingReleaseDates вийшла копія масиву releaseDates, відсортована за зростанням, 
// а у змінній alphabeticalAuthors - копія масиву імен авторів authors, відсортована за алфавітом.
//!!!before:
// const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];
// const authors = [
//   "Tanith Lee",
//   "Bernard Cornwell",
//   "Robert Sheckley",
//   "Fyodor Dostoevsky",
// ];
// const ascendingReleaseDates = releaseDates;
// const alphabeticalAuthors = authors;
//!!!after:
// const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];
// const authors = [
//   "Tanith Lee",
//   "Bernard Cornwell",
//   "Robert Sheckley",
//   "Fyodor Dostoevsky",
// ];
// const ascendingReleaseDates = [...releaseDates].sort();
// const alphabeticalAuthors = [...authors].sort();






/* Завдання 39 автоперевірка
 */
// СВІЙ ПОРЯДОК СОРТУВАННЯ ЧИСЕЛ
// Онлайн бібіліотеці необхідно відображати книги, відсортовані за датою видання, за її зростанням або спаданням. 
// Доповни код таким чином, щоб у змінній ascendingReleaseDates вийшла копія масиву releaseDates, 
// відсортована за зростанням, а у змінній descendingReleaseDates - копія, відсортована за спаданням.
//!!!before:
// const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];
// const ascendingReleaseDates = releaseDates;
// const descendingReleaseDates = releaseDates;
//!!!after:
// const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];
// const ascendingReleaseDates = [...releaseDates].sort((a, b) => a - b);
// const descendingReleaseDates = [...releaseDates].sort((a, b) => b - a);






/* Завдання 40 автоперевірка
 */
// СВІЙ ПОРЯДОК СОРТУВАННЯ РЯДКІВ
// Онлайн бібіліотеці необхідно відображати книги, відсортовані за автором, в алфавітному і зворотному алфавітному порядку. 
// Доповни код таким чином, щоб у змінній authorsInAlphabetOrder вийшла копія масиву authors, 
// відсортована за алфавітом, а у змінній authorsInReversedOrder - копія, відсортована у зворотному алфавітному порядку.
//!!!before:
// const authors = [
//    "Tanith Lee",
//    "Bernard Cornwell",
//    "Robert Sheckley",
//    "Fyodor Dostoevsky",
//    "Howard Lovecraft",
//  ];
//  const authorsInAlphabetOrder = authors;
//  const authorsInReversedOrder = authors;
//!!!after:
// const authors = [
//    "Tanith Lee",
//    "Bernard Cornwell",
//    "Robert Sheckley",
//    "Fyodor Dostoevsky",
//    "Howard Lovecraft",
//  ];
//  const authorsInAlphabetOrder = [...authors].sort((a, b) => a.localeCompare(b));;
//  const authorsInReversedOrder = [...authors].sort((a, b) => b.localeCompare(a));;
  





/* Завдання 41 автоперевірка
 */
// СОРТУВАННЯ ОБ'ЄКТІВ
// Доповни код таким чином, щоб:
// У змінній sortedByAuthorName вийшов масив книг, відсортований за ім'ям автора в алфавітному порядку.
// У змінній sortedByReversedAuthorName вийшов масив книг, відсортований за ім'ям автора у зворотному алфавітному порядку.
// У змінній sortedByAscendingRating вийшов масив книг, відсортований за зростанням рейтингу.
// У змінній sortedByDescentingRating вийшов масив книг, відсортований за спаданням рейтингу.
//!!!before:
// const books = [
//    {
//      title: "The Last Kingdom",
//      author: "Bernard Cornwell",
//      rating: 8.38,
//    },
//    {
//      title: "Beside Still Waters",
//      author: "Robert Sheckley",
//      rating: 8.51,
//    },
//    {
//      title: "The Dream of a Ridiculous Man",
//      author: "Fyodor Dostoevsky",
//      rating: 7.75,
//    },
//    { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//    { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
//  ];
//  const sortedByAuthorName = books;
//  const sortedByReversedAuthorName = books;
//  const sortedByAscendingRating = books;
//  const sortedByDescentingRating = books;
//!!!after:
// const books = [
//    {
//      title: "The Last Kingdom",
//      author: "Bernard Cornwell",
//      rating: 8.38,
//    },
//    {
//      title: "Beside Still Waters",
//      author: "Robert Sheckley",
//      rating: 8.51,
//    },
//    {
//      title: "The Dream of a Ridiculous Man",
//      author: "Fyodor Dostoevsky",
//      rating: 7.75,
//    },
//    { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//    { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
//  ];
//  const sortedByAuthorName = [...books].sort(
//    (firstBook, secondBook) => firstBook.author.localeCompare(secondBook.author));
//  ;
//  const sortedByReversedAuthorName = [...books].sort(
//    (firstBook, secondBook) => secondBook.author.localeCompare(firstBook.author));
//  ;
//  const sortedByAscendingRating = [...books].sort(
//    (firstBook, secondBook) => firstBook.rating - secondBook.rating
//  );
//  ;
//  const sortedByDescentingRating = [...books].sort(
//    (firstBook, secondBook) => secondBook.rating - firstBook.rating
//  );
//  ;
 





/* Завдання 42 автоперевірка
 */
// ЗАДАЧА. СОРТУВАННЯ ЗА БАЛАНСОМ
// Доповни функцію sortByAscendingBalance(users) таким чином, щоб вона повертала масив користувачів, 
// відсортований за зростанням їх балансу (властивість balance).
//!!!before:
// const sortByAscendingBalance = users => {
// };
//!!!after:
// const sortByAscendingBalance = users => users.sort(
//    (firstBalance, secondBalance) => firstBalance.balance - secondBalance.balance
//  );






/* Завдання 43 автоперевірка
 */
// ЗАДАЧА. СОРТУВАННЯ ЗА КІЛЬКІСТЮ ДРУЗІВ
// Доповни функцію sortByDescendingFriendCount(users) таким чином, щоб вона повертала масив користувачів, 
// відсортований за спаданням кількості їхніх друзів (властивість friends).
//!!!before:
// const sortByDescendingFriendCount = users => { 
// };
//!!!after:
// const sortByDescendingFriendCount = users =>[...users].sort((firstFriend, secondFriend) => (secondFriend.friends).length - (firstFriend.friends).length);
// ;






/* Завдання 44 автоперевірка
 */
// ЗАДАЧА. СОРТУВАННЯ ЗА ІМ'ЯМ
// Доповни функцію sortByName(users) таким чином, щоб вона повертала масив користувачів, 
// відсортований за їх ім'ям (властивість name) в алфавітному порядку.
//!!!before:
// const sortByName = users => {
// };
//!!!after:
// const sortByName = users => 
// [...users].sort((firstName, secondName) => firstName.name.localeCompare(secondName.name));
// ;
// ;






/* Завдання 45 автоперевірка
 */
// ЛАНЦЮЖКИ МЕТОДІВ (ЧЕЙНІНГ, CHAINING)
// Доповни код таким чином, щоб у змінній names вийшов масив імен авторів в алфавітному порядку, 
// рейтинг книг яких більший за значення змінної MIN_BOOK_RATING.
//!!!before:
// const books = [
//    {
//      title: "The Last Kingdom",
//      author: "Bernard Cornwell",
//      rating: 8.38,
//    },
//    {
//      title: "Beside Still Waters",
//      author: "Robert Sheckley",
//      rating: 8.51,
//    },
//    {
//      title: "The Dream of a Ridiculous Man",
//      author: "Fyodor Dostoevsky",
//      rating: 7.75,
//    },
//    { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//    {
//      title: "The Dreams in the Witch House",
//      author: "Howard Lovecraft",
//      rating: 8.67,
//    },
//  ];
//  const MIN_BOOK_RATING = 8;
//  const names = books;
//!!!after:
// const books = [
//    {
//      title: "The Last Kingdom",
//      author: "Bernard Cornwell",
//      rating: 8.38,
//    },
//    {
//      title: "Beside Still Waters",
//      author: "Robert Sheckley",
//      rating: 8.51,
//    },
//    {
//      title: "The Dream of a Ridiculous Man",
//      author: "Fyodor Dostoevsky",
//      rating: 7.75,
//    },
//    { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//    {
//      title: "The Dreams in the Witch House",
//      author: "Howard Lovecraft",
//      rating: 8.67,
//    },
//  ];
//  const MIN_BOOK_RATING = 8;
//  const names = [...books].filter((book => book.rating > MIN_BOOK_RATING)).map(book => book.author).sort((a,b) => a.localeCompare(b));






/* Завдання 46 автоперевірка
 */
// ЗАДАЧА. КОРИСТУВАЧІ І ДРУЗІ
// Доповни функцію getNamesSortedByFriendCount(users) таким чином, 
// щоб вона повертала масив імен користувачів, відсортований за зростанням кількості їхніх друзів (властивість friends).
//!!!before:
// const getNamesSortedByFriendCount = users => {
// };
//!!!after:
// const getNamesSortedByFriendCount = users => 
//    [...users].sort((firstName, secondName) => firstName.friends.length -  secondName.friends.length).map(user => user.name);




/* Завдання 47 автоперевірка
 */
// ЗАДАЧА. ІМЕНА ДРУЗІВ
// Доповни функцію getSortedFriends(users) таким чином, 
// щоб вона повертала масив унікальних імен друзів (властивість friends), відсортований за алфавітом.
//!!!before:
// const getSortedFriends = users => {
// };
//!!!after:
// const getSortedFriends = users => 
// [...users].flatMap(user => user.friends).filter((friends, index, array) => 
// array.indexOf(friends) === index).sort((a, b) => a.localeCompare(b));   






/* Завдання 48 автоперевірка
 */
// ЗАДАЧА. ЗАГАЛЬНИЙ БАЛАНС
// Доповни функцію getTotalBalanceByGender(users, gender) таким чином, 
// щоб вона повертала загальний баланс користувачів (властивість balance), 
// стать яких (властивість gender) збігається зі значенням параметра gender.
//!!!before:
// const getTotalBalanceByGender = (users, gender) => {

// };
//!!!after:
// const getTotalBalanceByGender = (users, gender) => users.filter
//     (user=> user.gender === gender).reduce((total,user) =>{
//         return total+user.balance;
// }, 0)






