const indString = (arr, str) => {
    return arr.indexOf(str) < 0 ? 'Не найдено' : arr.indexOf(str);
};

console.log(indString(['ckjэ', 'словос'], 'слово'));