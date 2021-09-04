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
function math_operation(num1, num2, operation) {
    if ('+-*/'.indexOf(operation) != -1) {
        switch (operation) {
            case '+':
                return addition_num(num1, num2);
            case '-':
                return subtraction_num(num1, num2);
            case '*':
                return multiplication_num(num1, num2);
            case '/':
                return division_num(num1, num2);
        }
    }
    return undefined;
}

var num1 = Number(prompt('Введите первое число'));
var num2 = Number(prompt('Введите второе число'));
var operation = prompt('Введите операцию (+,-,*,/)');
alert(math_operation(num1, num2, operation));
