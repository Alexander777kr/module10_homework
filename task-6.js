/*
Дан массив. Проверить, одинаковые ли элементы в массиве и вывести 
результат true или false в консоль. Речь идёт не о двух рядом стоящих 
одинаковых элементах, а обо всех. Проверить, все ли элементы в 
массиве одинаковые.
 */

let result = true;

let arr1 = [58, 69, 75];
let arr2 = [58, 69, 75];

if (arr1.length !== arr2.length) {
    result = false;
}
if (result) {
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) {
            result = false;
            break;
        }
    }
}


console.log('Результат сравнения массивов: ' + result);