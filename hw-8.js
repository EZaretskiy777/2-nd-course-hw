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
        if (typeof arr[x] === 'object') {
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
const consoleDate = () => {
    const endTime = new Date();
    endTime.setSeconds(endTime.getSeconds() + 30);

    const interval = setInterval(() => {
        if (endTime.getTime() - (new Date()).getTime() <= 0) {
            console.log('30 секунд прошло');
            clearInterval(interval);
        }
        else {
            console.log(new Date());
        }
    }, 3000);
};

consoleDate();

//Задание 4 
function delayForSecond(callback) {
    setTimeout(callback, 1000);
}

delayForSecond(function () {
    console.log('Привет, Глеб!');
});

//Задание 5
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

delayForSecond();
setTimeout(() => sayHi('Глеб'), 2000);