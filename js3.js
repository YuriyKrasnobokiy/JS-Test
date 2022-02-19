//
// //СОЗДАНИЕ ОБЬЕКТА

// const book = {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     genres: ["historical prose", "adventure"],
//     isPublic: true,
//     rating: 8.38,
// };

// //Вложенные свойства

// const user = {
// name: "Jacques Gluke",
// tag: "jgluke",
// location: {
//     country: "Jamaica",
//     city: "Ocho Rios",
// },
// stats: {
//     followers: 5603,
//     views: 4827,
//     likes: 1308,
// },
// };

// //Обращение к свойствам через точку

// const book = {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     genres: ["historical prose", "adventure"],
//     isPublic: true,
//     rating: 8.38,
// };

// const bookTitle = book.title;
// console.log(bookTitle);

// const bookGenres = book.genres;
// console.log(bookGenres);

// const bookPrice = book.price;
// console.log(bookPrice);

//Обращение к свойствам через квадратные скобки

// const book = {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     genres: ["historical prose", "adventure"],
//     isPublic: true,
//     rating: 8.38,
// };

// const bookTitle = book['title'];
// console.log(bookTitle);

// const bookGenres = book['genres'];
// console.log(bookGenres);

// const bookAuthor = book['author'];
// console.log(bookAuthor);

// ///

// book.isPublic = false;
// console.log(book.isPublic);

// const goods = {
//     apples: 6,
//     grapes: 3,
//     bread: 4,
//     cheese: 7,
// };

// const values = Object.values(goods); // [6, 3, 4, 7]

// let total = 0;

// for (const value of values) {
//     total += value;
// }

// console.log(total); // 20

// // Метод Object.keys()

// const book = {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     genres: ["historical prose", "adventure"],
//     rating: 8.38,
// };
// const keys = Object.keys(book);

// for (const key of keys) {
//   // Ключ
//     console.log(key);
//   // Значение свойства
//     console.log(book[key]);
// }

// // Метод Object.values()

// const book = {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
// };
// const keys = Object.keys(book);
// console.log(keys); // ['title', 'author', 'rating']

// const values = Object.values(book);
// console.log(values); // ['The Last Kingdom', 'Bernard Cornwell', 8.38]

////

// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "На берегу спокойных вод",
//     author: "Роберт Шекли",
//     rating: 8.51,
//   },
//   {
//     title: "Сон смешного человека",
//     author: "Федор Достоевский",
//     rating: 7.75,
//   },
// ];

//// узнать рейтинг общий

// let totalRating = 0;

// for (const book of books) {
//   totalRating += book.rating;
// }

// const averageRating = (totalRating / books.length).toFixed(1);
// console.log(averageRating);

//// Например, получим список названий всех книг в коллекции books.

// const bookNames = [];

// for (const book of books) {
//   bookNames.push(book.title);
// }

// console.log(bookNames);

// const playlist = {
//     name: 'my favorite playlist',
//     rating: 5,
//     tracks: ['track-1', 'track-2', 'track-3'],
//     trackCount: 3,
// };

// console.log(playlist);

// const x = {};

// const fn = function (myObject) {
//     console.log(myObject);
// }
// fn({ a: 1, b: 2 });

// const rtfm = function () {
//     return { a: 5 };
// }

// console.log(rtfm());

// const playlist = {
//     name: 'my favorite playlist',
//     rating: 5,
//     tracks: ['track-1', 'track-2', 'track-3'],
//     trackCount: 3,
// };

// console.log(playlist);

// const propertyName = 'tracks';

// console.log(playlist.propertyName);
// console.log(playlist[propertyName]);

// КОРОТКАЯ ЗАПИСЬ СВОЙСТВ

// const userName = 'Mango';
// const email = 'mango@gmail.com';

// const signupData = {
//     userName,
//     email,
// }

// console.log(signupData);

//ВЫЧИСЛЯЕМЫЕ СВОЙСТВА

// const inputName = 'Color';
// const inputValue = 'Tomato';

// const colorPickerData = {
//     [inputName]: inputValue,
// };

// console.log(colorPickerData);

// //ДОБАВЛЕНИЕ СВОЙСТВ

// const playlist = {
//     name: 'my favorite playlist',
//     rating: 5,
//     tracks: ['track-1', 'track-2', 'track-3'],
//     trackCount: 3,
// };

// //если нету - создаеться
// playlist.qwe = 5;

// //если есть - перезапишеться
// playlist.rating = 10;

// console.log(playlist);

//ССЫЛОЧНЫЙ ТИП

// const a = { x: 1, y: 2 };
// const b = a;

// console.log({ a: 1 } === { a: 1 }); //false

// console.log(a === b); //true

// a.c = 100;

// console.log(a);
// //тоже самое
// console.log(b);

//////////////////////////////////////////////////////////////

//МЕТОДЫ ОБЬЕКТА И this ПРИ ОБРАЩЕНИИ К СВОЙСТВАМ В МЕТОДАХ

//методы обьекта - это те же функции!

// const playlist = {
//     name: 'my favorite playlist',
//     rating: 5,
//     tracks: ['track-1', 'track-2', 'track-3'],
//     trackCount: 3,
//     // getName: function () {
//     //     console.log('Ага это getName :)');
//     // },
//     //более короткая запись
//     getName() {
//         console.log('Ага это getName :)');
//     }
// };

// console.log(playlist);

//ИЗМЕНЕНИЕ ИМЕНИ changeName

// изменение имени

// const playlist = {
//     name: 'my favorite playlist',
//     rating: 5,
//     tracks: ['track-1', 'track-2', 'track-3'],
//     trackCount: 3,
//     changeName(newName) {
//         console.log('this внутри changeName: ', this);

//         this.name = newName;
//     },
// };

// playlist.changeName('Новое имя');

// console.log(playlist);

//добавление трэка addTrack

// const playlist = {
//     name: 'my favorite playlist',
//     rating: 5,
//     tracks: ['track-1', 'track-2', 'track-3'],
//     trackCount: 3,
//     changeName(newName) {
//         console.log('this внутри changeName: ', this);

//         this.name = newName;
//     },
//     addTrack(track) {
//         this.tracks.push(track);
//     }
// };

// playlist.changeName('Новое имя');

// playlist.addTrack('Новый трэк');

// console.log(playlist);

//обновление рейтинга updateRating

// const playlist = {
//     name: 'my favorite playlist',
//     rating: 5,
//     tracks: ['track-1', 'track-2', 'track-3'],
//     trackCount: 3,
//     changeName(newName) {
//         console.log('this внутри changeName: ', this);

//         this.name = newName;
//     },
//     addTrack(track) {
//         this.tracks.push(track);
//     },
//     updateRating(newRating) {
//         this.rating = newRating;
//     },
// };

// playlist.changeName('Новое имя');

// playlist.addTrack('Новый трэк');

// playlist.updateRating(4)

// console.log(playlist);

// getTrackCount обновление счетчика трэков

// const playlist = {
//     name: 'my favorite playlist',
//     rating: 5,
//     tracks: ['track-1', 'track-2', 'track-3'],
//     trackCount: 3,
//     changeName(newName) {
//         console.log('this внутри changeName: ', this);

//         this.name = newName;
//     },
//     addTrack(track) {
//         this.tracks.push(track);
//         // олдскул
//         // this.trackCount = this.tracks.length;
//     },
//     updateRating(newRating) {
//         this.rating = newRating;
//     },
//     getTrackCount() {
//         return this.tracks.length;
//     },
// };

// playlist.changeName('Новое имя');

// playlist.addTrack('Новый трэк');

// playlist.updateRating(4);

// playlist.getTrackCount();

// console.log(playlist);

////////////////////////////////////////////////////////////////////

// ПЕРЕБОР ОБЬЕКТА ЧЕРЕЗ for...in И Object.keys|values|entries

//Object.keys возвращает массив ключей

// const feedback = {
//     good: 5,
//     neutral: 10,
//     bad: 3,
// };

// let totalFeedback = 0;

// const keys = Object.keys(feedback);

// console.log(keys);

// for (const key of keys) {
//     console.log(key);

//     console.log(feedback[key]);

//     totalFeedback += feedback[key];
// }

// console.log('totalFeedback: ', totalFeedback);

//Object.values возвращает массив значений

// const feedback = {
//     good: 5,
//     neutral: 10,
//     bad: 3,
// };

// let totalFeedback = 0;

// const values = Object.values(feedback);

// console.log(values);

// for (const value of values) {
//     console.log(value);

//     totalFeedback += value;
// }

// console.log('totalFeedback: ', totalFeedback);

//////////////////////////////ПРАКТИКА///////////////////////////////////////////////////////////////////////

// РАБОТА С КОЛЛЕКЦИЕЙ (МАССИВ ОБЬЕКТА)

// const friends = [
//     { name: 'Mango', online: false },
//     { name: 'Kiwi', online: true },
//     { name: 'Poly', online: true },
//     { name: 'Ajax', online: false },
// ];

// console.table(friends);

// for (const friend of friends) {
//     console.log(friend);

//     friend.newprop = 666;
// }

// console.table(friends);

/////////ПОИСК ДРУГА ПО ИМЕНИ////////////////////

// const friends = [
//     { name: 'Mango', online: false },
//     { name: 'Kiwi', online: true },
//     { name: 'Poly', online: true },
//     { name: 'Ajax', online: false },
// ];

// console.table(friends);

// const findFriendByName = function (allFriends, friendName) {
//     for (const friend of allFriends) {
//         console.log(friend);
//         console.log(friend.name);

//         if (friend.name === friendName) {
//             return 'НАШЛИ!!!';
//         }
//     }

//     return 'НЕ НАШЛИ :(';
// };

// console.log(findFriendByName(friends, 'Poly'));
// console.log(findFriendByName(friends, 'Chelsy'));

////получить имена всех друзей//////////////////////////////

// const friends = [
//     { name: 'Mango', online: false },
//     { name: 'Kiwi', online: true },
//     { name: 'Poly', online: true },
//     { name: 'Ajax', online: false },
// ];

// console.table(friends);

// const getAllNames = function (allFriends) {
//     const names = [];

//     for (const friend of allFriends) {
//         console.log(friend.name);

//         names.push(friend.name);
//     }

//     return names;
// }

// console.log(getAllNames(friends));

////получить имена друзей которые онлайн/////////////////

// const friends = [
//     { name: 'Mango', online: false },
//     { name: 'Kiwi', online: true },
//     { name: 'Poly', online: true },
//     { name: 'Ajax', online: false },
// ];

// console.table(friends);

// const getOnlineFriends = function (allFriends) {
//     const onlineFriends = [];

//     for (const friend of allFriends) {
//         console.log(friend);
//         console.log(friend.online);

//         if (friend.online) {
//             onlineFriends.push(friend);
//         }
//     }

//     return onlineFriends;
// }

// console.log(getOnlineFriends(friends));

////получить имена друзей которые онлайн//////////////////

// const friends = [
//     { name: 'Mango', online: false },
//     { name: 'Kiwi', online: true },
//     { name: 'Poly', online: true },
//     { name: 'Ajax', online: false },
// ];

// console.table(friends);

// const getOfflineFriends = function (allFriends) {
//     const offlineFriends = [];

//     for (const friend of allFriends) {

//         console.log(friend.online);

//         if (!friend.online) {
//             offlineFriends.push(friend);
//         }
//     }

//     return offlineFriends;
// }

// console.log(getOfflineFriends(friends));

////создать два массива оффлайн и онлайн. Если тру - в первый. Если нет - во второй./////////////////////

// const friends = [
//     { name: 'Mango', online: false },
//     { name: 'Kiwi', online: true },
//     { name: 'Poly', online: true },
//     { name: 'Ajax', online: false },
// ];

// console.table(friends);

// const getFriendsByOnlineStatus = function (allFriends) {
//     const friendsByStatus = {
//         online: [],
//         offline: []
//     };

//     for (const friend of allFriends) {
//         if (friend.online) {
//             friendsByStatus.online.push(friend);
//             continue;
//         }

//         friendsByStatus.offline.push(friend);
//     }

//     return friendsByStatus;
// }

// console.log(getFriendsByOnlineStatus(friends));

//////////////////////////////колличество свойств в обьекте////////////////////////////////////////////////////////////////

// const x = {
//     a: 1,
//     b: 2,
//     c: 50,
//     d: 100
// };

// console.log(Object.keys(x).length);

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// # Модуль 3. Занятие 1. Объекты

// <!-- https://github.com/luxplanjay/js-33-qna/blob/03-%D0%BE%D0%B1%D1%8A%D0%B5%D0%BA%D1%82%D1%8B/js/vehicles.js -->

// ## Example 1 - Основы обьектов

// Напиши скрипт, который, для объекта `user`, последовательно:

// - добавляет поле `mood` со значением `'happy'`
// - заменяет значение `hobby` на `'skydiving'`
// - заменяет значение `premium` на `false`
// - выводит содержимое объекта `user` в формате `ключ:значение` используя
//   `Object.keys()` и `for...of`

// ### Код

// ```js
// const user = {
//   name: "Mango",
//   age: 20,
//   hobby: "html",
//   premium: true,
// };

// user.mood = "happy";
// user.hobby = "skydiving";
// user.premium = false;

// const keys = Object.keys(user);

// for (let key of keys) {
//   console.log(`${key}: ${user[key]}`);
// }
// console.log(keys);

// console.log(user);
// ```

// ## Example 2 - метод Object.values()

// У нас есть объект, в котором хранятся зарплаты нашей команды. Напишите код для
// суммирования всех зарплат и сохраните результат в переменной sum. Должно
// получиться 390. Если объект `salaries` пуст, то результат должен быть 0.

// ### Код

// ```js
// const salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130,
// };

// function calcSalary(salaries) {
//   const values = Object.values(salaries);
//   let total = 0;
//   for (let value of values) {
//     total += value;
//   }
//   return total;
// }

// console.log(calcSalary(salaries));
// console.log(calcSalary({}));

// ```

// ## Example 3 - Массив объектов

// Напишите ф-цию `calcTotalPrice(stones, stoneName)`, которая принимает массив
// обьектов и строку с названием камня. Ф-ция считает и возвращает общую стоимость
// камней с таким именем, ценой и количеством из обьекта

// ### Код

// ```js
// const stones = [
//   { name: 'Изумруд', price: 1300, quantity: 4 },
//   { name: 'Бриллиант', price: 2700, quantity: 3 },
//   { name: 'Сапфир', price: 400, quantity: 7 },
//   { name: 'Щебень', price: 200, quantity: 2 },
// ];
// ```

// ## Example 4 - Комплексные задачи

// Напиши скрипт управления личным кабинетом интернет банка. Есть объект `account`
// в котором необходимо реализовать методы для работы с балансом и историей
// транзакций.

// ```js
// /*
//  * Типов транзацкий всего два.
//  * Можно положить либо снять деньги со счета.
//  */
// const Transaction = {
//   WITHDRAW: "withdraw",
//   DEPOSIT: "deposit",
// };

// // /*
// //  * Каждая транзакция это объект со свойствами: id, type и amount
// //  */

// const account = {
//   // Текущий баланс счета
//   balance: 0,

//   // История транзакций
//   transactions: [],

//   /*
//    * Метод создает и возвращает объект транзакции.
//    * Принимает сумму и тип транзакции.
//    */
//   createTransaction(amount, type) {
//     return {
//       amount,
//       type,
//       id: this.transactions.length,
//     };
//   },

//   /*
//    * Метод отвечающий за добавление суммы к балансу.
//    * Принимает сумму танзакции.
//    * Вызывает createTransaction для создания объекта транзакции
//    * после чего добавляет его в историю транзакций
//    */
//   deposit(amount) {
//     const transaction = this.createTransaction(amount, Transaction.DEPOSIT);
//     this.transactions.push(transaction);
//     this.balance += amount;
//   },

//   /*
//    * Метод отвечающий за снятие суммы с баланса.
//    * Принимает сумму танзакции.
//    * Вызывает createTransaction для создания объекта транзакции
//    * после чего добавляет его в историю транзакций.
//    *
//    * Если amount больше чем текущий баланс, выводи сообщение
//    * о том, что снятие такой суммы не возможно, недостаточно средств.
//    */
//   withdraw(amount) {
//     const transaction = this.createTransaction(amount, Transaction.WITHDRAW);
//     this.transactions.push(transaction);
//     this.balance -= amount;
//   },

//   /*
//    * Метод возвращает текущий баланс
//    */
//   getBalance() {
//     // this = account
//     return this.balance; // account.balance
//   },

//   /*
//    * Метод ищет и возвращает объект транзации по id
//    */
//   getTransactionDetails(id) {
//     for (let transaction of this.transactions) {
//       if (transaction.id === id) {
//         return transaction;
//       }
//     }
//   },

//   /*
//    * Метод возвращает количество средств
//    * определенного типа транзакции из всей истории транзакций
//    */
//   getTransactionTotal(type) {
//     let total = 0;

//     for (let transaction of this.transactions) {
//       if (transaction.type === type) {
//         total += transaction.amount;
//       }
//     }
//     return total;
//   },
// };
// // ```

// console.log(account.getBalance());
// account.deposit(450);
// account.deposit(50);
// account.withdraw(100);
// account.deposit(100);
// account.withdraw(50);
// console.log(account.getBalance());

// console.log(account.getTransactionDetails(0));
// console.log(account.getTransactionTotal(Transaction.DEPOSIT));
// console.log(account.getTransactionTotal(Transaction.WITHDRAW));

// console.log(account);

// const string = "The brown fox jumps over lazy dog";

// function findLongestWord(string) {
//   const wordArray = string.split(" ");
//   let result = wordArray[0];
//   for (let word of wordArray) {
//     if (word.length >= result.length) {
//       result = word;
//     }
//   }
//   return result;
// }

// console.log(findLongestWord(string));

// const user = {
//   name: "Bob",
//   email: "user@gmail",
//   //   info: {
//   //     age: 23,
//   //     gender: "male",
//   //   },
// };

// console.log(user.info && user.info.age);
// console.log(user.info?.age);

// console.log(user && user.info && user.info.age);
// console.log(user?.info?.age);

// function getExtremeElements(array) {
//   console.log(array);
// }

// getExtremeElements([1, 3, 5, 6, 8]);

// function checkAge(age) {
//   if (age >= 18) {
//     // Change this line
//     return "You are an adult"; // stop
//   }
//   return "You are a minor";
// }

// function checkAge(age) {
//   if (age >= 18) {
//     // Change this line
//     return "You are an adult"; // stop
//   } else {
//     return "You are a minor";
//   }
// }

// const user = {
//   name: "Bob",
//   age: 13,
//   status: true,
// };

// for (let key in user) {
//   if (user.hasOwnProperty(key)) {
//     console.log(key);
//   }
// }

// console.log(user);

// const objKey = prompt("Enter key name");

// function showValue(obj, keyName) {
//   console.log(obj[keyName]);
// }

// showValue(user, objKey);

// const key = prompt("Enter key name");
// const value = prompt("enter value");

// const user2 = {
//   [key]: value,
// };

// console.log(user2);


/////////////////////////////////////////////// lesson #6

// # Модуль 3 Занятие 6. Деструктуризация и rest/spread

// ## Example 1 - Деструктуризация

// Перепиши функцию так, чтобы она принимала один объект параметров, вместо набора
// независимых аргументов.

// ```js
// function calcBMI(weight, height) {
//   const numericWeight = Number(weight.replace(',', '.'));
//   const numericHeight = Number(height.replace(',', '.'));
//   return Number((numericWeight / numericHeight ** 2).toFixed(1));
// }

// // Было
// // console.log(calcBMI('88,3', '1.75'));
// // console.log(calcBMI('68,3', '1.65'));
// // console.log(calcBMI('118,3', '1.95'));

// // Ожидается
// console.log(
//   calcBMI({
//     weight: '88,3',
//     height: '1.75',
//   }),
// );
// console.log(
//   calcBMI({
//     weight: '68,3',
//     height: '1.65',
//   }),
// );
// console.log(
//   calcBMI({
//     weight: '118,3',
//     height: '1.95',
//   }),
// );
// ```

// ## Example 2 - Деструктуризация

// Перепиши функцию так, чтобы она принимала один объект параметров, вместо набора
// независимых аргументов.

// ```js
// function printContactsInfo(names, phones) {
//   const nameList = names.split(',');
//   const phoneList = phones.split(',');
//   for (let i = 0; i < nameList.length; i += 1) {
//     console.log(`${nameList[i]}: ${phoneList[i]}`);
//   }
// }

// // Было
// // printContactsInfo(
// //   'Jacob,William,Solomon,Artemis',
// //   '89001234567,89001112233,890055566377,890055566300',
// // );

// // Ожидается
// printContactsInfo({
//   names: 'Jacob,William,Solomon,Artemis',
//   phones: '89001234567,89001112233,890055566377,890055566300',
// });
// ```

// ## Example 3 - Глубокая деструктуризация

// Перепиши функцию так, чтобы она принимала один объект параметров, вместо набора
// независимых аргументов.

// ```js
// function getBotReport(companyName, repairBots, defenceBots) {
//   return `${companyName} has ${repairBots + defenceBots} bots in stock`;
// }

// // Было
// // console.log(getBotReport('Cyberdyne Systems', 150, 50));

// // Ожидается
// console.log(
//   getBotReport({
//     companyName: 'Cyberdyne Systems',
//     bots: {
//       repair: 150,
//       defence: 50,
//     },
//   }),
// ); // "Cyberdyne Systems has 200 bots in stock"
// ```

// ## Example 4 - Деструктуризация

// Перепиши функцию так, чтобы она принимала объект параметров со свойствами
// `companyName` и `stock` и выводила репорт о количестве товаров на складе любой
// компании.

// ```js
// // Решение
// function getStockReport({ companyName, stock }) {
//   let total = 0;
//   for (const value of Object.values(stock)) {
//     total += value;
//   }
//   return `${companyName} has ${total} items in stock`;
// }

// console.log(
//   getStockReport({
//     companyName: 'Cyberdyne Systems',
//     stock: {
//       repairBots: 150,
//       defenceBots: 50,
//     },
//   }),
// ); // "Cyberdyne Systems has 200 items in stock"

// console.log(
//   getStockReport({
//     companyName: 'Belacci',
//     stock: {
//       shoes: 20,
//       skirts: 10,
//       hats: 5,
//     },
//   }),
// ); // "Belacci has 35 item in stock"
// ```

// ## Example 5 - Операция spread

// Дополни функцию `createContact(partialContact)` так, чтобы она возвращала новый
// объект контакта с добавленными свойствами `id` и `createdAt`, а также `list` со
// значением "default" если в `partialContact` нет такого свойства.

// ```js
// // Решение
// function createContact(partialContact) {
//   return {
//     list: 'default',
//     ...partialContact,
//     id: generateId(),
//     createdAt: Date.now(),
//   };
// }

// console.log(
//   createContact({
//     name: 'Mango',
//     email: 'mango@mail.com',
//     list: 'friends',
//   }),
// );
// console.log(
//   createContact({
//     name: 'Poly',
//     email: 'poly@hotmail.com',
//   }),
// );

// function generateId() {
//   return '_' + Math.random().toString(36).substr(2, 9);
// }
// ```

// ## Example 6 - Операция rest

// Напиши функцию `transformUsername(user)` так, чтобы она возвращала новый обьект
// со свойством `fullName`, вместо `firstName` и `lastName`.

// ```js
// // Решение
// function transformUsername({ firstName, lastName, ...otherProps }) {
//   return {
//     fullName: `${firstName} ${lastName}`,
//     ...otherProps,
//   };
// }

// console.log(
//   transformId({
//     id: 1,
//     firstName: 'Jacob',
//     lastName: 'Mercer',
//     email: 'j.mercer@mail.com',
//     friendCount: 40,
//   }),
// );

// console.log(
//   transformId({
//     id: 2,
//     firstName: 'Adrian',
//     lastName: 'Cross',
//     email: 'a.cross@hotmail.com',
//     friendCount: 20,
//   }),
// );
// ```



/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////ЧАСТЬ 2///////////////////////////////////////////////////////////////////

// операция spread (распыление)
// Array.prototype.concat и аналог через spread

// const numbers = [
//     1000,
//     ...[1, 2, 3],
//     5000,
//     ...[4, 5, 6],
//     7000,
//     ...[7, 8, 9],
//     9000
// ];

// console.log(numbers);

//////////// поиск самой маленькой или большой температуры (числа)

// const temps = [18, 14, 12, 21, 17, 29, 24];

// console.log(Math.max(18, 14, 12, 21, 17, 29, 24));
// console.log(Math.min(18, 14, 12, 21, 17, 29, 24));
//или
// console.log(Math.max(...temps));
// console.log(Math.min(...temps));

/////////////передача типов при расспылении

// const a = [{ x: 1 }, { y: 1 }, { z: 1 }];

// const b = [...a];

// console.log('a: ', a);
// console.log('b: ', b);

// console.log(a[0] === b[0]); //true

// console.log(a === b); //false

// a[0].x = 1000;

// console.log('a: ', a);
// console.log('b: ', b);

//////////////////
// сшиваем несколько массивов в один через concat и spread

// const lastWeekTemps = [1, 2, 3];
// const currentWeekTemps = [4, 5, 6];
// const nextWeekTemps = [7, 8, 9];

//через concat

// const xx = lastWeekTemps.concat(currentWeekTemps, nextWeekTemps);

// console.log(xx);

//через spread

// const allTemps = [...lastWeekTemps, ...currentWeekTemps, ...nextWeekTemps];

// console.log(allTemps);

/////////////////////
//распыление обьектов

//олдскул

// const a = { x: 1, y: 2 };
// const b = { x: 0, z: 3 };

// const c = Object.assign({name: 'Mango' }, a, b);

// console.log(c);

//современный метод

// const a = { x: 1, y: 2 };
// const b = { x: 0, z: 3 };

// const c = {
//     name: 'Mango',
//     ...a,
//     ...b,
// };

// console.log(c);

///

// const defaultSettings = {
//     theme: 'light',
//     showNotifications: true,
//     hideSideBar: false,
// };

// const userSettings = {
//     showNotifications: false,
//     hideSideBar: true,
// };

// const finalSettings = {
//     ...defaultSettings,
//     ...userSettings,
// };

// console.log(finalSettings);

//////////////////////////////////////////////////////////////////////////////////
//ДЕСТРУКТУРИЗАЦИЯ ОБЕКТОВ

// const playlist = {
//     name: 'my favorite playlist',
//     rating: 5,
//     tracks: ['track-1', 'track-2', 'track-3'],
//     trackCount: 3,
// };

// console.log(
//     playlist.name,
//     playlist.rating,
//     playlist.trackCount,
//     playlist.tracks
// );

//более правильно и удобно

// const playlist = {
//     name: 'my favorite playlist',
//     rating: 5,
//     tracks: ['track-1', 'track-2', 'track-3'],
//     trackCount: 3,
// };

// const { rating, tracks } = playlist;

// console.log(rating, tracks);

////

// const playlist = {
//     name: 'my favorite playlist',
//     rating: 5,
//     tracks: ['track-1', 'track-2', 'track-3'],
//     trackCount: 3,
// };

// const { name, rating, tracks, trackCount} = playlist;

// console.log(
//     name,
//     rating,
//     tracks,
//     trackCount,
// );

/////////

// const playlist = {
//     name: 'my favorite playlist',
//     rating: 5,
//     tracks: ['track-1', 'track-2', 'track-3'],
//     trackCount: 3,
// };

// const { name, rating, tracks, trackCount: numberOfTracks, author = 'user', } = playlist;

// console.log(numberOfTracks);

///////если не указан trackCount

// const playlist = {
//     name: 'my favorite playlist',
//     rating: 5,
//     tracks: ['track-1', 'track-2', 'track-3'],
// };

// const { name, rating, tracks, trackCount: numberOfTracks = 0, author = 'user', } = playlist;

// console.log(numberOfTracks);

/////////////////////////////////////////////////////////////////
// ГЛУБОКАЯ ДЕСТРУКТУРИЗАЦИЯ

// const profile = {
//     name: 'Jacques Gluke',
//     tag: 'jgluke',
//     avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/oy/128.jpg',
//     stats: {
//         followers: 5603,
//         views: 4827,
//         likes: 1308,
//     },
// };

// const {
//     name,
//     tag,
//     avatar,
//     stats: { followers, views, likes },
// } = profile;

// console.log( name, tag, avatar, followers, views, likes, );

////////////////////////////////////////////////////////////////////////////
//ДЕСТРУКТУРИЗАЦИЯ МАССИВОВ

// const rgb = [255, 100, 80];
// const [red, green, blue] = rgb;
// console.log(red, green, blue);

////

// const authors = {
//     kiwi: 4,
//     poly: 7,
//     ajax: 9,
//     mango: 6,
// };

// const ratings = Object.values(authors);

// console.log(Math.max(...ratings));

///
///keys

// const authors = {
//     kiwi: 4,
//     poly: 7,
//     ajax: 9,
//     mango: 6,
// };

// const keys = Object.keys(authors);

// for (const key of keys) {
//     console.log(key);
//     console.log(authors[key]);
// }

///
///entries

// const authors = {
//     kiwi: 4,
//     poly: 7,
//     ajax: 9,
//     mango: 6,
// };

// const entries = Object.entries(authors);

// // console.log(entries);

// for (const entry of entries) {
//     console.log(entry);
// }

///чуть короче///

// const authors = {
//     kiwi: 4,
//     poly: 7,
//     ajax: 9,
//     mango: 6,
// };

// const entries = Object.entries(authors);

// for (const entry of entries) {;
//     const name = entry[0];
//     const rating = entry[1];
//     console.log(name, rating);
// }

///еще проще и короче///

// const authors = {
//     kiwi: 4,
//     poly: 7,
//     ajax: 9,
//     mango: 6,
// };

// const entries = Object.entries(authors);

// for (const entry of entries) {;
//     const [name, rating] = entry;
//     console.log(name, rating);
// }

///еще лучше///

// const authors = {
//     kiwi: 4,
//     poly: 7,
//     ajax: 9,
//     mango: 6,
// };

// const entries = Object.entries(authors);

// for (const [name, rating] of entries) {;
//     console.log(name, rating);
// };

//////////////////////////////////////////////////////////////////////////////////////
//ОПЕРАЦИЯ rest (сбор)

// const profile = {
//     name: 'Jacques Gluke',
//     tag: 'jgluke',
//     avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/oy/128.jpg',
//     stats: {
//         followers: 5603,
//         views: 4827,
//         likes: 1308,
//     },
// };

// const { name, tag, avatar, ...restProps } = profile;

// console.log(name, tag, avatar);
// console.log(restProps);
// console.log(profile);

// const profile = {
//     name: 'Jacques Gluke',
//     tag: 'jgluke',
//     avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/oy/128.jpg',
//     stats: {
//         followers: 5603,
//         views: 4827,
//         likes: 1308,
//     },
// };

// const { name, tag, avatar, ...restProps } = profile;

// console.log(name, tag, avatar);
// console.log(restProps);
// console.log(profile);

//////////////////////////////////////////////////////////
//ПАТТЕРН ОБЬЕКТ НАСТРОЕК

// const showProfileInfo = function (userProfile) {

//     const {
//         name,
//         tag,
//         avatar,
//         stats: { followers, views, likes },
//     } = userProfile;

//     console.log(name, tag, avatar, followers, views, likes);
// };

// const profile = {
//     name: 'Jacques Gluke',
//     tag: 'jgluke',
//     avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/oy/128.jpg',
//     stats: {
//         followers: 5603,
//         views: 4827,
//         likes: 1308,
//     },
// };

// showProfileInfo(profile);

//или так

// const showProfileInfo = function ({
//     name,
//     tag,
//     avatar,
//     stats: { followers, views, likes },
// }) {
//     console.log(name, tag, avatar, followers, views, likes);
// };

// const profile = {
//     name: 'Jacques Gluke',
//     tag: 'jgluke',
//     avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/oy/128.jpg',
//     stats: {
//         followers: 5603,
//         views: 4827,
//         likes: 1308,
//     },
// };

// showProfileInfo(profile);

//////////////////////////////////////////////////////////////////////////////////////////////////////
//РАБОТА С КОРЗИНОЙ ТОВАРОВ

// const cart = {
//     items: [],
//     getItems() {
//         return this.items;
//     },
//     add(product) {
//         for (const item of this.items) {
//             if (item.name === product.name) {
//                 item.quantity += 1;
//                 return;
//             }
//         }

//         const newProduct = {
//             ...product,
//             quantity: 1,
//         };

//         this.items.push(newProduct);
//     },
//     remove(productName) {
//         const { items } = this;

//         for (let i = 0; i < items.length; i += 1) {

//             const { name } = items[i];

//             if (productName === name) {
//                 console.log('Нашли такой продукт ', productName);
//                 console.log('индекс: ', i);

//                 items.splice(i, 1);
//             }
//         }
//     },
//     clear() {
//         this.items = [];
//     },
//     countTotalPrice() {
//         const { items } = this;
//         let total = 0;

//         for (const {price, quantity} of items) {
//             total += price * quantity;
//         }

//         return total;
//     },
//     increaseQuantity(productName) { },
//     decreaseQuantity(productName) { },
// };

// console.log(cart.getItems());

// cart.add({ name: 'apple', price: 50 });
// cart.add({ name: 'grape', price: 70 });
// cart.add({ name: 'lemon', price: 60 });
// cart.add({ name: 'lemon', price: 60 });
// cart.add({ name: 'strawberry', price: 110 });
// cart.add({ name: 'strawberry', price: 110 });
// cart.add({ name: 'strawberry', price: 110 });

// console.table(cart.getItems());

// console.log('Total ', cart.countTotalPrice());

// cart.remove('grape');

// console.table(cart.getItems());

// cart.clear();
// console.log(cart.getItems());
