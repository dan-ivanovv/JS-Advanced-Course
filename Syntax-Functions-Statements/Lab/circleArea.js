function area(radius){

    let circleArea;
    let type = typeof(radius);

    if(type === 'number'){
        circleArea = Math.pow(radius, 2) * Math.PI;
        console.log(circleArea.toFixed(2));
    }else{
        console.log(`We can not calculate the circle area, because we receive a ${type}.`);
    }
}
area(true);