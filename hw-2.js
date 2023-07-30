//Задание 1
let a = 10;
alert(a);
a = 20;
alert(a);

//Задание 2
let iphoneYear = 2007;
alert(iphoneYear);

//Задание 3
let jsCreator = 'Брендан Эйх или Айк';
alert(jsCreator);

//Задание 4
let x = 10;
let y = 2;

alert(x + y);
alert(x - y);
alert(x * y);
alert(x / y);

//Задание 5
alert(2 ** 5);

//Задание 6
a = 9;
let b = 2;
alert(a % b);

//Задание 7
let num = 1;
num += 5;
num -= 3;
num *= 7;
num /= 3;
num += 1;
num -= 1;
alert(num);

//Задание 8
let age = prompt("Сколько вам лет?");
alert(age);

//Задание 9
let user = {
    name: 'Женя',
    age: 29,
    isAdmin: true
};
user['city of residence'] = 'Moscow';
delete user['city of residence'];

let info = prompt("Какую информацию хотите узнать о пользователе?");
alert(user[info]);

//Задание 10
let name = prompt("Как вас зовут?");
alert(`Привет, ${name.toUpperCase()}!`);
