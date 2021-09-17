function getNumerals(number) {
    result = {}
    if (number >= 0 && number <= 999) {
        result = {
            units: 0,
            tens: 0,
            hundreds: 0,
        }
        result.units = number % 10;
        result.tens = (number - result.units) / 10 % 10;
        result.hundreds = (number - result.units - result.tens * 10) / 100 % 10;
    }
    return result;
}

userNum = parseInt(prompt('Введите число от 0 до 999'));
numerals = getNumerals(userNum);
if (Object.keys(numerals).length === 0) {
    alert('Вы ввели неверное число. Число должно быть в диапазоне от 0 до 999');
} else {
    alert(JSON.stringify(numerals));
}
