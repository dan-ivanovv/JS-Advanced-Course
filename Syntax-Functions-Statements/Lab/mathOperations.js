function mathOperations(num1, num2, operator){
    let total;

    switch(operator){
        case '+':total = num1 + num2;break;
        case '-':total = num1 - num2;break;
        case '*':total = num1 * num2;break;
        case '/':total = num1 / num2;break;
        case '%':total = num1 % num2;break;
        case '**':total = num1 ** num2;break;
    }
    console.log(total);
}mathOperations(3, 5.5, '*')