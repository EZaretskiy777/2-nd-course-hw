//Задание 1 
for (let x = 0; x < 2; x++) {
    console.log('Привет');
}

//Задание 2
for (let x = 1; x <= 5; x++) {
    console.log(x);
}

//Задание 3
for (let x = 7; x <= 22; x++) {
    console.log(x);
}

//Задание 4
let obj = {
    'Коля': '200',
    'Вася': '300',
    'Петя': '400'
}

for (let x in obj) {
    alert(`${x} — зарплата ${obj[x]} долларов.`);
}

//Задание 5
let n = 1000;
num = 0;

while (n >= 50) {
    n /= 2;
    num++;
}


alert(n + ' ' + num);

//Задание 6
let frDate = 1;

for (let x = frDate; x <= 31; x += 7) {
    alert(`Сегодня пятница, ${x}-е число. Необходимо подготовить отчет.`);
}