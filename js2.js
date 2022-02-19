////////////////////////////////////////МАССИВЫ///////////////////////////////////////////////////////////

//split()

// const name = "Mango";
// console.log(name.split(""));

// const message = "JavaScript is avesome";
// console.log(message.split(" "))

//join()

// const words = ["JavaScript", "is", "avesome"];
// console.log(words.join(""));
// console.log(words.join(" "));
// console.log(words.join("+++"));

//indexOf

// const clients = ["Mango", "Ajax", "Poly", "Kiwi"];
// console.log(clients.indexOf("Ajax"));  1
// console.log(clients.indexOf("Ajaaaala")); -1

//includes

// const clients = ["Mango", "Ajax", "Poly", "Kiwi"];
// console.log(clients.includes("Ajax"));  true
// console.log(clients.includes("Ajalax")); false


// Выносим варианты в массив
// const redFruits = ["apple", "strawberry", "cherry", "cranberries"];
// const fruit = "apple";
// Проверяем наличие элемента
// const hasFruit = redFruits.includes(fruit);
// if (hasFruit) {
//     console.log(`${fruit} is a red fruit!`);
// }

//push

// const numbers = [];

// numbers.push(1);
// console.log(numbers);

// numbers.push(2, 3, 4, 5, 6);
// console.log(numbers);

//pop

// const numbers = [1, 2, 3, 4, 5, 6, 7];

// console.log(numbers.pop());
// console.log(numbers);

// console.log(numbers.pop());
// console.log(numbers);

// console.log(numbers.pop());
// console.log(numbers);

// console.log(numbers.pop());
// console.log(numbers);

// console.log(numbers.pop());
// console.log(numbers);

// console.log(numbers.pop());
// console.log(numbers);

// console.log(numbers.pop());
// console.log(numbers);

// console.log(numbers.pop());
// console.log(numbers);

//slice

// const clients = ["Mango", "Ololo", "Trololo", "Kiwi", "Tomato"];
// console.log(clients.slice(4,5));

//splice

// const scores = [1, 2, 3, 4, 5];

// Удаляем три элемента массива, начиная с первого элемента (индекс 0)
// const deletedScores = scores.splice(0, 3);

// Теперь массив scores содержит два элемента
// console.log(scores); // [4, 5]

// А массив deletedScores содержит три удаленных элемента
// console.log(deletedScores); // [1, 2, 3]

//добавление

// const colors = ["red", "green", "blue", "white"];
// colors.splice(2, 0, "purple", "black", "tomato");
// console.log(colors);

//замена

// const colors = ["red", "green", "blue", "white"];
// colors.splice(2, 3, "purple", "black", "tomato");
// console.log(colors);

//concat

// const oldClients = ["Mango", "Ajax", "Poly", "Kiwi"];
// const newClients = ["Monkong", "Singu"];

// const allClientsWithOldFirst = oldClients.concat(newClients);
// console.log(allClientsWithOldFirst);

// const allClientsWithNewFirst = newClients.concat(oldClients);
// console.table(allClientsWithNewFirst);

// oldClients[3] = "QWWQEQWQ";
// console.table(oldClients);

// let a = 10;
// let b = a;

// console.log(a);

// console.log(b);
// a = 15;


// console.log(a);
// console.log(b);
///////////////////////////////ПРАКТИКА/////////////////////////////////////////////////////
//посчитать сумму покупок

// const cart = [54, 28, 105, 70, 92, 17, 120];
// let total = 0;

// //1 перебрать массив
// //2 сделать переменную total до цикла
// //3 каждый элемент приплюсовать к total

// for (let i = 0; i < cart.length; i += 1) {
//     // console.log(cart[i]);

//     total += cart[i];
// }

// console.log("Total =", total);


// а короче, если не нужен доступ к элементам массива

// const cart = [54, 28, 105, 70, 92, 17, 120];
// let total = 0;

// for (const value of cart) {

//     total += value;

// }

// console.log("Total =", total);

//если нужно посчитать каждый елемент на 10% больше

// const cart = [54, 28, 105, 70, 92, 17, 120];
// for (let i = 0; i < cart.length; i += 1) {

//     cart[i] = Math.round(cart[i] * 1.1);

// }

// console.log(cart)
///////////////////////////////////////////////////////////////////////////////////

// СУММА ВСЕХ ЧЕТНЫХ ЕЛЕМЕНТОВ МАССИВА

// const numbers = [1, 5, 8, 9, 12, 4, 15, 27, 30, 18, 11];
// let total = 0;

// //1 переменная total
// //2 перебрать массив
// for (let i = 0; i < numbers.length; i += 1) {
//     console.log(numbers[i]);

//     //3 на каждой итерации проверить елемент на четность

//     if (numbers[i] % 2 === 0) {

//         console.log('Четное!');

//     //4 если четный плюсуем к total
//         total += numbers[i];

//     }
// }
// console.log("Total =", total);

// ЗАПИСЬ ЛУЧШЕ(Выводит только четные числа (остальные закомичены на 204 строке))

// const numbers = [1, 5, 8, 9, 12, 4, 15, 27, 30, 18, 11];
// let total = 0;

// for (const number of numbers) {
//     // console.log(number);

//     if (number % 2 === 0) {
//         console.log(`${number} - четное!`);
//         total += number;
//     }
// }
// console.log("Total =", total);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// СКРИПТ ПОИСКА ЛОГИНА

// ЧЕРЕЗ FOR

// const logins = ["Mango", "Kiwi", "Poly", "Ajax"];
// const loginToFind = "Poly";
// let message = `Пользователь ${loginToFind} не найден`;

// for (let i = 0; i < logins.length; i += 1) {
//     const login = logins[i];

//     console.log("Login ", login);

//     console.log(`${login} === ${loginToFind}: `, login === loginToFind);

//     if (login === loginToFind) {
//         message = `Пользователь ${loginToFind} найден`;
//         break;
//     }
// }

//     console.log(message);

//ВАРИАНТ ПОЛУЧШЕ

// const logins = ["Mango", "Kiwi", "Poly", "Ajax"];
// const loginToFind = "Poly";
// let message = `Пользователь ${loginToFind} не найден`;

// for (const login of logins) {
//     console.log("Login ", login);

//     console.log(`${login} === ${loginToFind}: `, login === loginToFind);

//         if (login === loginToFind) {
//         message = `Пользователь ${loginToFind} найден`;
//         break;
//     }
// }

//     console.log(message);

//ЕЩЕ ПРОЩЕ !!!

// const logins = ["Mango", "Kiwi", "Poly", "Ajax"];
// const loginToFind = "Poly";

// const message = logins.includes(loginToFind)
//     ? `Пользователь ${loginToFind} найден`
//     : `Пользователь ${loginToFind} не найден`;

// console.log(message);

////////////////////////////////////////////////////////////

//ПОИСК САМОГО МАЛЕНЬКОГО ЧИСЛА В МАССИВЕ, ПРИ УСЛОВИИ ЧТО ЧИСЛА УНИКАЛЬНЫЕ (НЕТ ПОВТОРОВ)

// const numbers = [51, 18, 13, 24, 7, 85, 19];
// let smallestNumber = numbers[0];

// for (const number of numbers) {

//     if (number < smallestNumber) {

//         smallestNumber = number;

//     }
// }

// console.log('smallestNumber =', smallestNumber);


//ПОИСК САМОГО БОЛЬШОГО ЧИСЛА В МАССИВЕ, ПРИ УСЛОВИИ ЧТО ЧИСЛА УНИКАЛЬНЫЕ (НЕТ ПОВТОРОВ)

// const numbers = [51, 18, 13, 24, 7, 85, 19];
// let biggerNumber = numbers[0];

// for (const number of numbers) {

//     if (number > biggerNumber) {

//         biggerNumber = number;

//     }
// }

// console.log('biggerNumber =', biggerNumber);

/////////////////////////////////////////////////////////////////////////////////////////////////////////

// ОБЬЕДИНЕНИЕ ВСЕХ ЭЛЕМЕНТОВ МАССИВА В ОДНО СТРОКОВОЕ ЗНАЧЕНИЕ
// ПРИ УСЛОВИИ ЧТО ЭЛЕМЕНТОВ ПРОИЗВОЛЬНОЕ КОЛЛИЧЕСТВО И ЭЛЕМЕНТЫ В СТРОКЕ РАЗДЕЛЕНЫ ЗАПЯТОЙ

// const friends = ["Mango", "Kiwi", "Poly", "Ajax"];
// let string = "";

// for (const friend of friends) {

//     string += friend + ",";
// }

// string = string.slice(0, string.length - 1);
// console.log(string);

//ВАРИАНТ ПОЛУЧШЕ

// const friends = ["Mango", "Kiwi", "Poly", "Ajax"];

// const string = friends.join(", ");
// console.log(string);

///////////////////////////////////////////////////////////////

// НАПИИШИ СКРИПТ КОТОРЫЙ ЗАМЕНЯЕТ РЕГИСТР КАЖЛОГО СИМВОЛА НА ПРОТИВОПОЛОЖНЫЙ
// НАПРИМЕР ЕСЛИ СТРОКА "JavaScript", ТО НА ВЫХОДЕ "jAVAsCRIPT"

// const string = "JavaScript";
// const letters = string.split("");
// let invertedString = "";

// console.log(letters);

// for (const letter of letters) {
//     console.log(letter);

//     if (letter === letter.toLowerCase()) {
//         console.log("Эта буква в внижнем регистре -", letter);

//         invertedString += letter.toUpperCase();
//     } else {
//         invertedString += letter.toLowerCase();
//     }

// }

// console.log(invertedString);

///ЛУЧШЕ///

// const string = "JavaScript";
// const letters = string.split("");
// let invertedString = "";

// console.log(letters);

// for (const letter of letters) {

//     console.log(letter);

//     invertedString +=
//         letter === letter.toLowerCase()
//             ? letter.toUpperCase()
//             : letter.toLowerCase();
// }

// console.log("invertedString: ", invertedString);

//////////////////////////////////////////////////////////

// ДЕЛАЕМ SLUG В URL ИЗ НАЗВАНИЯ СТАТЬИ

//     - НОРМАЛИЗУЕМ СТРОКУ
//     - ЗАЗБИВАЕМ ПО СЛОВАМ
//     - СШИВАЕМ В СТРУКТУРУ С РАЗДЕЛИТЕЛЯМИ

//ДОЛЖНО ПОЛУЧИТЬСЯ top-10-benefits-of-react-framework

// const title = 'Top 10 benefits of React framework';

// const normalizedTitle = title.toLowerCase();
// console.log(normalizedTitle);

// const words = normalizedTitle.split(' ');
// console.log(words);

// const slug = words.join('-');
// console.log(slug);

//А УДОБНЕЕ И КОРОЧЕ ТАК:

// const title = 'Top 10 benefits of React framework';

// const slug1 = title.toLowerCase().split(' ').join('-');

// console.log(slug1);

/////////////////////////////////////////////////////////////////////////////////////////

//НАПИШИ СКРИПТ КОТОРЫЙ СЧИТАЕТ СУММУ ЭЛЕМЕНТОВ ДВУХ МАССИВОВ

//ПРИМИТИВ

// const array1 = [5, 10, 15, 20];
// const array2 = [10, 20, 30];
// let total = 0;


// for (let i = 0; i < array1.length; i += 1) {
//     total += array1[i];
// }

// for (let i = 0; i < array2.length; i += 1) {
//     total += array2[i];
// }

// console.log(total);

/// МЕТОД НАМНОГО ЛУЧШЕ И ПРАВИЛЬНЕЕ

// const array1 = [5, 10, 15, 20];
// const array2 = [10, 20, 30];
// let total = 0;

// const numbers = array1.concat(array2);

// for (const number of numbers) {
//     total += number;
// }

// console.log(total);

///////////////////////////////////////////////////////////////////////////////

// РАБОТАЕМ С КОЛЛЕКЦИЕЙ КАРТОЧЕК В ТРЕЛЛО

// МЕТОД SPLICE
//     - УДАЛИТЬ
//     - ДОБАВИТЬ
//     - ОБНОВИТЬ

//УДАЛЕНИЕ

// const cards = [
//     'Карточка-1',
//     'Карточка-2',
//     'Карточка-3',
//     'Карточка-4',
//     'Карточка-5'
// ];

// console.table(cards);

// // УДАЛЕНИЕ ЭЛЕМЕНТОВ ПО ИНДЕКСУ, indexOf()

// const cardToRemove = 'Карточка-3';

// const index = cards.indexOf(cardToRemove);
// console.log(index);

// cards.splice(index, 1)
// //console.log(cards.splice(index, 1)); ПОКАЗЫВАЕТ МАССИВ УДАЛЕННЫХ ЭЛЕМЕНТОВ

// console.table(cards);

//ДОБАВЛЕНИЕ ЭЛЕМЕНТОВ ПО ИНДЕКСУ

// const cardToInsert = 'Карточка-6';

// const index = 3;

// cards.splice(index, 0, cardToInsert);

// ( 0 - ЭТО КОЛЛИЧЕСТВО ЭЛЕМЕНТОВ КОТОРЫХ НУЖНО УДАЛИТЬ)

// console.table(cards);

//ОБНОВЛЕНИЕ ЭЛЕМЕНТОВ ПО ИНДЕКСУ

// const cardToUpdate = 'Карточка-4';

// const index = cards.indexOf(cardToUpdate);

// console.log(index);

// cards.splice(index, 1, 'Обновленная карточка-4');

// console.table(cards);

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////   ФУНКЦИИ   /////////////////////////////////////////////////////////////////////////////////////////

// 1. Объявление параметров x, y, z
// function multiply(x, y, z) {
//   console.log(`Результат умножения равен ${x * y * z}`);
// }

// // 2. Передача аргументов
// multiply(2, 3, 5); // Результат умножения равен 30
// multiply(4, 8, 12); // Результат умножения равен 384
// multiply(17, 6, 25); // Результат умножения равен 2550

// //ОПЕРАТОР RETURN

// function multiply(x, y, z) {
//   console.log("Код до return выполняется как обычно");

//   // Возвращаем результат выражения умножения
//   return x * y * z;

//   console.log("Этот лог никогда не выполнится, он стоит после return");
// }

// // Результат работы функции можно сохранить в переменную
// let result = multiply(2, 3, 5);
// console.log(result); // 30

// result = multiply(4, 8, 12);
// console.log(result); // 384

// result = multiply(17, 6, 25);
// console.log(result); // 2550

//////////////Паттерн «Ранний возврат»//////////////////////

// function withdraw(amount, balance) {
//     if (amount === 0) {
//         console.log("Для проведения операции введите сумму больше нуля");
//         return;
//     } else if (amount > balance) {
//         console.log("Недостаточно средств на счету");
//         return;
//     }   else {
//     console.log("Операция снятия средств проведена успешно");
//     }
// }

// withdraw(0, 300); // "Для проведения операции введите сумму больше нуля"
// withdraw(500, 300); // "Недостаточно средств на счету"
// withdraw(100, 300); // "Операция снятия средств проведена успешно"

// ///////////////////Функциональное выражение//////////////////////////

// // Объявление функции (function declaration)
// function multiply(x, y, z) {
//   console.log(`Результат умножения равен ${x * y * z}`);
// }

// // Функциональное выражение (function expression)
// const multiply = function (x, y, z) {
//   console.log(`Результат умножения равен ${x * y * z}`);
// };

//////////////////////////////////////////ПРАКТИКА///////////////////////////////

// const add = function (x, y) {
//     console.log(x);
//     console.log(y);
//     console.log('Выполняется функция add');

//     return x = y;
// }

// const r1 = add(5, 3);
// console.log('r1: ', r1);

// const r2 = add(10, 15);
// console.log('r2: ', r2);

// const r3 = add(30, 50);
// console.log('r3: ', r3);

///////////////////////////////////

// const fn = function () {

//     console.log(1);

//     return 555;

//     console.log(2);

//     console.log(3);

// }

// console.log('Результат функции: ', fn());

//////////////////////////////////////////////

// const fn = function (value) {

//     console.log(1);
//     console.log(2);

//     if (value < 50) {
//         return 'Меньше чем 50';
//     }
//     return 'Больше чем 50';
// };

// console.log('Результат функции: ', fn(10));
// console.log('Результат функции: ', fn(1000));

///////////////////////////////////////////////////////////

// СТЕК ВЫЗОВА
// STACK TRACE И ПОИСК ОШИБОК

// const FnA = function () {
//     console.log('выполняется функция A');
// };

// const FnB = function () {
//     console.log('выполняется функция В');
// };

// const FnС = function () {
//     console.log('выполняется функция С');
// };

// console.log('лог перед вызовом фукции А');
// FnA();
// console.log('лог после вызовом фукции А');
// console.log('лог перед вызовом фукции В');
// FnB();
// console.log('лог после вызовом фукции В');
// console.log('лог перед вызовом фукции С');
// FnС();
// console.log('лог после вызовом фукции С');

///////////////////////////////////ПРАКТИКА////////////////////////////////////////

//НАПИШИ ФУНКЦИЮ calculateTotalPrice, КОТОРАЯ ПРИНИМАЕТ МАССИВ ЦЕН И ВОЗВРАЩАЕТ ИХ СУММУ

// const calculateTotalPrice = function (items) {
//     console.log('items внутри функции: ', items);

//     let total = 0;

//     for (const item of items) {
//         total += item;
//     }

//     return total;
// }

// const r1 = calculateTotalPrice([1, 2, 3]);

// console.log(`общая сумма: ${r1}`);
// console.log(calculateTotalPrice([5, 10, 15, 20]));
// console.log(calculateTotalPrice([100, 200, 300]));

/////////////////////////////////////////////////////////////////////////////////////////////

//НАПИШИ ФУНКЦИЮ logItems(items) ДЛЯ ПЕРЕБОРА И ЛОГИРОВАНИЯ МАССИВА

// const logItems = function(items) {
// for (const item of items) {
//         console.log(item);
//     }
// }

// logItems(['Mabgj', 'Kiwi', 'Poly', 'Ajax']);

// logItems([1, 2, 3, 4, 5]);

// logItems(['клавиатура', 'наушники', 'часы']);

//////////////////////////////////////////////////////////////////////////////////////////////////

// НАПИШИ ФУНКЦИЮ findLogin(allLogins, login) ДЛЯ ПОИСКА ЛОГИНА


// const logins = ["m4ngoDoge", "kiwidab3st", "poly1scute", "aj4xth3m4n"];

// const findLogin = function (allLogins, loginToFind) {

//     let message = `Пользователь ${loginToFind} не найден`;

//     for (const login of allLogins) {
//         if (login === loginToFind) {

//             message = `Пользователь ${loginToFind} найден`;

//             return message;
//         }
//     }

//     return message;
// }

// console.log(findLogin(logins, 'avocod3r'));

// console.log(findLogin(logins, 'kiwidab3st'));

// console.log(findLogin(logins, 'jam4l'));

// console.log(findLogin(logins, 'poly1scute'));

////ПЕРЕМЕННАЯ message НЕ НУЖНА!!!////

// const logins = ["m4ngoDoge", "kiwidab3st", "poly1scute", "aj4xth3m4n"];

// const findLogin = function (allLogins, loginToFind) {

//     for (const login of allLogins) {

//         if (login === loginToFind) {

//             return `Пользователь ${loginToFind} найден`;
//         }
//     }

//     return `Пользователь ${loginToFind} не найден`;
// }

// console.log(findLogin(logins, 'avocod3r'));

// console.log(findLogin(logins, 'kiwidab3st'));

// console.log(findLogin(logins, 'jam4l'));

// console.log(findLogin(logins, 'poly1scute'));

////// ЕЩЕ КОРОЧЕ И ЧЕРЕЗ ТЕРНАРНИК /////

// const logins = ["m4ngoDoge", "kiwidab3st", "poly1scute", "aj4xth3m4n"];

// const findLogin = function (allLogins, loginToFind) {

//     return allLogins.includes(loginToFind)
//         ? `Пользователь ${loginToFind} найден`
//         : `Пользователь ${loginToFind} не найден`
// };

// console.log(findLogin(logins, 'avocod3r'));

// console.log(findLogin(logins, 'kiwidab3st'));

// console.log(findLogin(logins, 'jam4l'));

// console.log(findLogin(logins, 'poly1scute'));

////////////////////////////////////////////////////////////////////////////////////////////////////
//ПОИСК САМОГО МАЛЕНЬКОГО ЧИСЛА В МАССИВЕ, ПРИ УСЛОВИИ ЧТО ЧИСЛА УНИКАЛЬНЫЕ (НЕТ ПОВТОРОВ)

// const findSmallestNumber = function (numbers) {
//     let smallestNumber = numbers[0];

//     for (const number of numbers) {
//         if (number < smallestNumber) {
//             smallestNumber = number;
//         }
//     }

//     return smallestNumber;
// };

// console.log(findSmallestNumber([3, 8, 12, -2, 15]));
// console.log(findSmallestNumber([100, 54, 8, 12, 47]));
// console.log(findSmallestNumber([7, 21, 84, 15, 4]));

///////////////////////////////////////////////////////////////////////////////////////////////////////
// НАПИИШИ ФУНКЦИЮ  changeCase(string) КОТОРАЯ ЗАМЕНЯЕТ РЕГИСТР КАЖДОГО СИМВОЛА НА ПРОТИВОПОЛОЖНЫЙ
// НАПРИМЕР ЕСЛИ СТРОКА "JavaScript", ТО НА ВЫХОДЕ "jAVAsCRIPT"

// const changeCase = function (string) {
//     const letters = string.split('');
//     let invertedString = '';

//     for (const letter of letters) {
//         const isInLowerCase = letter === letter.toLowerCase();

//         invertedString += isInLowerCase
//             ? letter.toUpperCase()
//             : letter.toLowerCase();
//     }

//     return invertedString;
// }

// console.log(changeCase('qweRTY'));
// console.log(changeCase('mAnGo'));
// console.log(changeCase('AjAx'));

/////////////////////////////////////////////////////////////////////////////////////////////////////////
// НАПИШИ ФУНКЦИЮ slugify(string) КОТОРАЯ ПОЛУЧАЕТ СТРОЧКУ И ВОЗВРАЩАЕТ URL-slug
// строка состоит только из букв и пробелов

// const slugify = function (string) {

//     return string.toLowerCase().split(' ').join('-');
// }

// console.log(slugify('Top 10 benefits of React framework'));
// console.log(slugify('Azure Static Web Apps are Awesome'));
// console.log(slugify('Technical writing tips for non-native English speakers'));

/////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ПСЕВДОМАССИВ arguments И Arraym.from И ...

//////////////////Array.from////////////////

// const fn = function () {
//     console.log(arguments);

//     const args = Array.from(arguments);

//     console.log(args);
// };

// fn(1, 2, 3);
// fn(1, 2, 3, 4, 5);
// fn(1, 2, 3, 4, 5, 6, 7);

////////////Операция ... (rest)//////////

// const fn = function (...args) {
//     console.log(args);
// };

// fn(1, 2, 3);
// fn(1, 2, 3, 4, 5);
// fn(1, 2, 3, 4, 5, 6, 7);

/////////////

// const fn = function (a, b, c, ...args) {
//     console.log(`${a}, ${b}, ${c}`);
//     console.log(args);
// };

// fn('hello', 1, 2, 3);
// fn('aloha', 1, 2, 3, 4, 5);
// fn('hi', 1, 2, 3, 4, 5, 6, 7);

// Напиши функцию add для сложения произвольного колличества элементов(чисел)
//     - Операция ... (rest)

// const add = function (...args) {
//     console.log(args);

//     let total = 0;

//     for (const arg of args) {
//         total += arg;
//     }

//     return total;
// };

// console.log(add(1, 2, 3));
// console.log(add(1, 2, 4, 5, 6));

////////////////////////////////////////////////////////////////////////////////////////
// напиши функцию filterNumbers(Array[, number1, ...]) которая:
//     - первым аргументом принимает массив чисел
//     - после первого аргумента может быть произвольное колличество других аргументов, которые будут числами
//     - функция должна вернуть новый массив в котором будут только те элементы, начиная со второго
//     - для которых есть аналог в оригинальном массиве

// const filterNumbers = function (array, ...args) {
//     console.log('array: ', array);
//     console.log('args: ', args);
//     const uniqueElements = [];

//     for (const element of array) {
//         if (args.includes(element)) {
//             uniqueElements.push(element);
//             console.log(`${element} есть везде!`);
//         }
//     }
//     return uniqueElements;
// };

// console.log(filterNumbers([1, 2, 3, 4, 5], 10, 15, 2, 3, 8));
// console.log(filterNumbers([10, 15, 25, 30], 23, 30, 18, 15));
// console.log(filterNumbers([100, 200, 300, 400, 500], 7, 12, 2, 200, 64));


