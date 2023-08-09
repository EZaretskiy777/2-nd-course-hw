//Задание 1
const minNum = (a, b) => a < b ? a : b;
console.log(minNum(8, 15));

//Задание 2 
const evenNum = (num) => num % 2 === 0 ? 'Чётное' : 'Нечётное';
console.log(evenNum(4));

//Задание 3
const squareNumCons = (num) => console.log(num ** 2);
squareNumCons(3);

const squareNum = (num) => num ** 2;
console.log(squareNum(7));

//Задание 4
const yearsQuestion = () => {
    let userYears = Number(prompt('Сколько вам лет?'));

    if (userYears >= 0 && userYears <= 12) {
        alert('Привет, друг!');
    }
    else if (userYears > 12) {
        alert('Добро пожаловать!');
    }
    else {
        alert('Вы ввели неправильное значение');
    }
};

yearsQuestion();

//Задание 5
const isNumber = (num1, num2) => {
    let funcNum1 = Number(num1);
    let funcNum2 = Number(num2);

    return isNaN(funcNum1) || isNaN(funcNum2) ? 'Одно или оба значения не являются числом' : funcNum1 * funcNum2;
};

alert(isNumber('a', 8));

//Задание 6
const cubeNum = () => {
    let num = Number(prompt('Введите число'));

    return isNaN(num) ? 'Переданный параметр не является числом' : `n в кубе равняется ${num ** 3}`;
}

alert(cubeNum());

//Задание 7 
function getArea() {
    return 3.14 * this.radius;
}

function getPerimeter() {
    return 2 * 3.14 * this.radius;
}

let circle1 = {
    radius: 15,
    getArea: getArea,
    getPerimeter: getPerimeter
};

let circle2 = {
    radius: 7,
    getArea: getArea,
    getPerimeter: getPerimeter
};

alert(`Круг1. Площадь - ${circle1.getArea()}, периметр - ${circle1.getPerimeter()}`);
alert(`Круг2. Площадь - ${circle2.getArea()}, периметр - ${circle2.getPerimeter()}`);

//Задание 8 
function seasonsGame() {
    let monthUser = Number(prompt('Введите номер месяца'));

    if (monthUser === 12 || monthUser === 1 || monthUser === 2) {
        alert('Зима');
    }
    else if (monthUser === 3 || monthUser === 4 || monthUser === 5) {
        alert('Весна');
    }
    else if (monthUser === 6 || monthUser === 7 || monthUser === 8) {
        alert('Лето');
    }
    else if (monthUser === 9 || monthUser === 10 || monthUser === 11) {
        alert('Осень');
    }
    else {
        alert('Такого месяца нет');
    }
}
