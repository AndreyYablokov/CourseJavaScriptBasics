function power(val, pow) {
    if (pow === 0) {
        return 1;
    } else if (pow === 1) {
        return val;
    } else if (pow === -1) {
        return 1 / val;
    } else {
        if (pow > 0) {
            return val * power(val, pow - 1);
        } else {
            return (1 / val) * power(val, pow + 1);
        }

    }
}

userNum = Number(prompt('Введите число'));
userPow = Number(prompt('Введите степень (целое число)'));
if (userNum !== NaN && userPow !== NaN) {
    alert(power(userNum, userPow));
} else {
    alert('Вы должны вводить только числа')
}