//Задание 1
console.log('СлОвО'.toUpperCase());

//Задание 2
const searchStart = (Arr, Str) => {
    let Arr2 = [];
    Arr.forEach(ArrStr => {
        if (ArrStr.toUpperCase().startsWith(Str.toUpperCase()))
            Arr2.push(ArrStr);
    });
    return Arr2;
};

console.log(searchStart(['Кошка', 'Кит', 'Комар', 'Носорог'], 'ко'));
console.log(searchStart(['яблоко', 'груша', 'гриб', 'огурец'], 'гру'));
console.log(searchStart(['Дом', 'Банк', 'Больница', 'Театр'], 'Кино'));

//Задание 3
console.log(Math.floor(32.58884)); //До меньшего целого
console.log(Math.ceil(32.58884)); //До большего целого
console.log(Math.round(32.58884)); //До ближайшего целого

//Задание 4
const nums = [52, 53, 49, 77, 21, 32];

console.log(Math.min(...nums));
console.log(Math.max(...nums));

//Задание 5
const randNum = () => Math.floor(Math.random() * 10) + 1;

console.log(randNum());

//Задание 6
const getRandomArrNumbers = (num) => {
    let arr = [];
    for (let x = 0; x < Math.floor(num / 2); x++) {
        arr.push(Math.floor(Math.random() * (num + 1)));
    }
    return arr;
};

console.log(getRandomArrNumbers(7));
console.log(getRandomArrNumbers(12));

//Задание 7
const getRandomNumbersDiap = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

console.log(getRandomNumbersDiap(3, 41));

//Задание 8
console.log(new Date());

//Задание 9
let currentDate = new Date();
let nextDate = new Date();

nextDate.setDate(currentDate.getDate() + 73);
console.log(nextDate);

//Задание 10
const dateFormat = (date) => {
    let arr = [];
    let userDate = new Date(date);
    arr.push('Дата: ' + userDate.toLocaleDateString('ru-RU', { day: 'numeric', month: 'long', year: 'numeric' }) + ' - это ' + userDate.toLocaleDateString('ru-RU', { weekday: 'long' }));
    arr.push('Время: ' + (userDate.getHours() < 10 ? '0' + userDate.getHours() : userDate.getHours()) + ':' + (userDate.getMinutes() < 10 ? '0' + userDate.getMinutes() : userDate.getMinutes()) + ':' + (userDate.getSeconds() < 10 ? '0' + userDate.getSeconds() : userDate.getSeconds()));
    return arr;
}


console.log(dateFormat(new Date()));

currentDate = new Date();
const options = { day: 'numeric', month: 'long', year: 'numeric' };
console.log(currentDate.toLocaleDateString('ru-RU', options));

//Задание 11
const wordGame = () => {
    let arr = ['Яблоко', 'Груша', 'Дыня', 'Виноград', 'Персик', 'Апельсин', 'Мандарин'];
    arr = arr.sort(() => Math.random() - 0.5);
    alert(arr);
    let userFirstEl = prompt('Чему равнялся первый элемент массива?').toLocaleLowerCase();
    let userSecondEl = prompt('Чему равнялся последний элемент массива?').toLocaleLowerCase();

    let firstElFlg = userFirstEl === arr[0].toLocaleLowerCase();
    let secondElFlg = userSecondEl === arr[arr.length - 1].toLocaleLowerCase();

    if (firstElFlg && secondElFlg) {
        alert('Поздравляем, вы победили!');
    }
    else if (firstElFlg || secondElFlg) {
        alert('Вы были близки к победе!');
    }
    else {
        alert('К сожалению вы ответили неверно!');
    }
};

var button = document.querySelector('.word-game__button');
button.addEventListener('click', wordGame);

