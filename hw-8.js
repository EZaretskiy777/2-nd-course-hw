//Задание 1
let people = [
    { name: 'Глеб', age: 29 },
    { name: 'Анна', age: 17 },
    { name: 'Олег', age: 7 },
    { name: 'Оксана', age: 47 }
];

console.log(people.sort((obj1, obj2) => obj1.age < obj2.age ? -1 : 1));

//Задание 2
function isPositive(number) {
    if (Number(number) > 0)
        return true;
    else
        return false;
}

function isMale(gender) {
    if (gender === 'male')
        return true;
    else
        return false;
}

function filter(arr, ruleFunc) {
    let funcArr = [];

    for (let x = 0; x < arr.length; x++) {
        if (ruleFunc.name === 'isMale') {
            if (ruleFunc(arr[x].gender)) {
                funcArr.push(arr[x]);
            }
        }
        else if (ruleFunc(arr[x])) {
            funcArr.push(arr[x]);
        }
    }
    return funcArr;
}

console.log(filter([3, -4, 1, 9], isPositive));

people = [
    { name: 'Глеб', gender: 'male' },
    { name: 'Анна', gender: 'female' },
    { name: 'Олег', gender: 'male' },
    { name: 'Оксана', gender: 'female' }
];

console.log(filter(people, isMale));

//Задание 3 
const consoleDate = (timeSec) => {
    if (isNaN(+timeSec)) {
        return;
    }

    const interval = setInterval(() => {
        console.log(new Date());
    }, 1000);

    setTimeout(() => {
        clearInterval(interval);
        console.log(`${timeSec} секунд прошло`);
    }, timeSec * 1000);
};

consoleDate();

//Задание 4 
function delayForSecond(callback) {
    setTimeout(() => { callback() }, 1000);
}

delayForSecond(function () {
    console.log('Привет, Глеб!');
});

//Задание 5
// Функция delayForSecond через 1 секунду пишет в консоль «Прошла одна секунда», 
// а затем вызывает переданный колбэк
function delayForSecond(cb) {
    setTimeout(() => {
        console.log('Прошла одна секунда');
        if (cb) {
            cb();
        }
    }, 1000)
}

function sayHi(name) {
    console.log(`Привет, ${name}!`);
}

sayHi('Глеб');
delayForSecond();