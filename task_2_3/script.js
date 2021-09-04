var firstNum = Number(prompt('Введите первое число'));
var secondNum = Number(prompt('Введите второе число'));
var result;
if (firstNum >= 0 && secondNum >= 0) {
    result = firstNum - secondNum;
    alert(result);
} else if (firstNum < 0 && secondNum < 0) {
    result = firstNum * secondNum;
    alert(result);
} else {
    result = firstNum + secondNum;
    alert(result);
}
