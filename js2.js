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
////////////////////////////////////////////////////////////////////////////////////
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

const string = "JavaScript";
const letters = string.split("");
let invertedString = "";

console.log(letters);

for (const letter of letters) {

    console.log(letter);

    invertedString +=
        letter === letter.toLowerCase()
            ? letter.toUpperCase()
            : letter.toLowerCase();
}

console.log("invertedString: ", invertedString);