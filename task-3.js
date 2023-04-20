/*
Дана строка. Необходимо вывести в консоль перевёрнутый вариант. 
Например, "Hello" -> "olleH".
*/

let str = 'Hello';

let newStr = str.split("").reverse().join("");

console.log(newStr);