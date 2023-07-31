//Задание 1
let password = 'пароль';
let userPassword = prompt('Введите пароль');

alert(userPassword === password ? 'Пароль введен верно' : 'Пароль введен неправильно');

//Задание 2
let c = prompt('Введите число');
if (c > 0 && c < 10)
    console.log('Верно');
else
    console.log('Неверно');

//Задание 3
let d = prompt('Введите первое число');
let e = prompt('Введите второе число');

console.log(d > 100 || e > 100 ? 'Верно' : 'Неверно');

//Задание 4 
let a = '2';
let b = '3';
// Код выше изменять менять нельзя, чтобы решить задачу исправьте код ниже: 
alert(Number(a) + Number(b));

//Задание 5
let monthNumber = Number(prompt('Введите номер месяца'));

switch (monthNumber) {
    case 12:
    case 1:
    case 2:
        console.log('Зима');
        break;
    case 3:
    case 4:
    case 5:
        console.log('Весна');
        break;
    case 6:
    case 7:
    case 8:
        console.log('Лето');
        break;
    case 9:
    case 10:
    case 11:
        console.log('Осень');
        break;
    default:
        console.log('Такого месяца не существует');
}

//Задание 7
let n = Number(prompt('Пожалуйста, введите любое число'));

alert(n % 2 == 0 ? 'Число четное' : 'Число нечетное');

//Задание 8 
let clientOS = true;

console.log(clientOS ? 'Установите версию приложения для iOS по ссылке' : 'Установите версию приложения для Android по ссылке');

//Задание 9 
let phoneYear = 2015;

if (phoneYear < 2015)
    console.log(clientOS ? 'Установите облегченную версию приложения для iOS по ссылке' : 'Установите облегченную версию приложения для Android по ссылке');
else
    console.log(clientOS ? 'Установите версию приложения для iOS по ссылке' : 'Установите версию приложения для Android по ссылке');
