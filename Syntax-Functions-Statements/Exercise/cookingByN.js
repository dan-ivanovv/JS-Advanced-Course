function cookingByN(n, act1, act2, act3, act4, act5) {
    let num = Number(n);

    let chop = function (n) {
        return n / 2;
    }
    let dice = function (n) {
        return Math.sqrt(n);
    }
    let spice = function (n) {
        return n + 1;
    }
    let bake = function (n) {
        return n * 3;
    }
    let fillet = function (n) {
        return n * 0.8;
    }

    const arr = [act1, act2, act3, act4, act5];
    let result = num;

    for (let i = 0; i < arr.length; i++) {
        switch (arr[i]) {
            case 'chop':
                result = chop(result);
                console.log(result);
                break;
            case 'dice':
                result = dice(result);
                console.log(result);
                break;
            case 'spice':
                result = spice(result);
                console.log(result);
                break;
            case 'bake':
                result = bake(result);
                console.log(result);
                break;
            case 'fillet':
                result = fillet(result);
                console.log(result);
                break;
        }
    }



}
cookingByN('32', 'chop', 'chop', 'chop', 'chop', 'chop');
cookingByN('9', 'dice', 'spice', 'chop', 'bake', 'fillet');
