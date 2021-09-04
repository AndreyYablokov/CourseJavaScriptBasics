function addition_num(num1, num2) {
    return num1 + num2;
}
function subtraction_num(num1, num2) {
    return num1 - num2;
}
function multiplication_num(num1, num2) {
    return num1 * num2;
}
function division_num(num1, num2) {
    return num1 / num2;
}

var num1 = Number(prompt('Введите первое число'));
var num2 = Number(prompt('Введите второе число'));
alert(`Результат сложения: ${addition_num(num1, num2)}\nPезультат вычитания: ${subtraction_num(num1, num2)}
Результат умножения: ${multiplication_num(num1, num2)}\nРезультат деления: ${division_num(num1, num2)}`);
