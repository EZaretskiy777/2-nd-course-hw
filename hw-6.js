//Задание 1
let numbers = [1, 5, 4, 10, 0, 3];

for (let num of numbers) {
    if (num === 10) {
        alert(num);
        break;
    }
    alert(num);
}

//Задание 2
numbers = [1, 5, 4, 10, 0, 3];

alert(numbers.indexOf(4));

//Задание 3
numbers = [1, 3, 5, 10, 20];

alert(numbers.join(''));

//Задание 4
let numbersMult = [];

for (let x = 0; x < 3; x++) {
    numbersMult[x] = [];
    for (let y = 0; y < 3; y++) {
        numbersMult[x][y] = 1;
    }
}

console.log(numbersMult);

//Задание 5
numbers = [1, 1, 1];

for (let x = 0; x < 3; x++) {
    numbers.push(2);
}

console.log(numbers);

//Задание 6
let arr = [9, 8, 7, 'a', 6, 5];

arr.sort().pop();
console.log(arr);

//Задание 7
numbers = [9, 8, 7, 6, 5];
let result = numbers.includes(Number(prompt('Введите число'))) ? 'Угадал' : 'Не угадал';

alert(result);

//Задание 8
let str = 'abcdef';

console.log(str.split('').reverse().join(''));

//Задание 9
numbers = [[1, 2, 3,], [4, 5, 6]];
let numbers2 = [];

numbers.forEach((el) => numbers2 = numbers2.concat(el));
console.log(numbers2);

//Задание 10
numbers = [];

for (let x = 0; x < 10; x++) {
    numbers[x] = Math.floor(Math.random() * 10) + 1;
}

console.log(numbers);

for (let x = 0; x < numbers.length; x++) {
    if (x !== numbers.length - 1) {
        console.log(numbers[x] + numbers[x + 1]);
    }
    else {
        console.log(numbers[x]);
    }
}

//Задание 11
numbers = [1, 2, 3, 4, 5];
const squareNum = (arr) => {
    return arr.map((el) => el ** 2);
}

console.log(squareNum(numbers));

//Задание 12
arr = ['слово', '', 'слог', 'длинное предложение', 'буква'];
const getLengthWords = (arr) => {
    return arr.map((el) => el.length);
};

console.log(getLengthWords(arr));

//Задание 13
const filterPositive = (array) => {
    return array.filter(num => num < 0);
}

console.log(filterPositive([-1, 0, 5, -10, 56]));
console.log(filterPositive([-25, 25, 0, -1000, -2]));

//Задание 14
numbers = [];

for (let x = 0; x < 10; x++) {
    numbers[x] = Math.floor(Math.random() * 11);
}

numbers2 = numbers.filter(num => num % 2 === 0);
console.log(numbers);
console.log(numbers2);

//Задание 15
numbers = [];

for (let x = 0; x < 6; x++) {
    numbers[x] = Math.floor(Math.random() * 10) + 1;
}

console.log(numbers);
console.log(numbers.reduce((a, b) => a + b) / numbers.length);