function stars(size){
    let result='';
    let item = '*';

    if(size === undefined){
        size = 5;
    }

    for(let i = 0; i < size; i++ ){
        result+=item;
    }
    console.log(result);
}
stars(2);