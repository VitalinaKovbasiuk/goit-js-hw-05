/* Делаем slug в URL из названия статьи
Заголовок статьи состоит  только из букв и пробелов

Нормализуем строку
Разбиваем по словам
Сшиваем в строку с разделителем

Должно получиться top-10-benefits-of-react-fremawork
 */

// const title = 'Top 10 benefits or React framework';

// const normalizedTitle = title.toLowerCase();
// console.log(normalizedTitle);

// const words = normalizedTitle.split(' ');
// console.log(words);

// const slug = words.join('-');
// console.log(slug);

// Записать это в одну строку можна так: ципочка вызовов
const title = 'Top 10 benefits or React framework';
const slug = title.toLowerCase().split(' ').join('-');
console.log(slug);