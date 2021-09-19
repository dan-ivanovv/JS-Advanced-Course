function sum(num1, num2){

    let summary = 0;
    let first = Number(num1);
    let second = Number(num2);

    for(let i = first; i <= second; i++){
        summary+=i;
    }
    console.log(summary);
}
sum('1', '5' );
sum('-8', '20');