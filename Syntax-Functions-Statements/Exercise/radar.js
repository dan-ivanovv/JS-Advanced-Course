function radar(speed, area) {

    let status;
    let difference = 0;
    let motorwaySlimit = 130;
    let interstateSlimit = 90;
    let citySlimit = 50;
    let residentialSlimit = 20;




    switch (area) {
        case 'motorway':
            if (speed > motorwaySlimit) {
                difference = speed - motorwaySlimit;
                if (difference <= 20) {
                    status = 'speeding';
                } else if (difference > 20 && difference <= 40) {
                    status = 'excessive speeding';
                } else {
                    status = 'reckless driving';
                }
                console.log(`The speed is ${difference} km/h faster than the allowed speed of ${motorwaySlimit} - ${status}`);
            } else {
                console.log(`Driving ${speed} km/h in a ${motorwaySlimit} zone`);
            }
            break;
        case 'interstate':
            if (speed > interstateSlimit) {
                difference = speed - interstateSlimit;
                if (difference <= 20) {
                    status = 'speeding';
                } else if (difference > 20 && difference <= 40) {
                    status = 'excessive speeding';
                } else {
                    status = 'reckless driving';
                }
                console.log(`The speed is ${difference} km/h faster than the allowed speed of ${interstateSlimit} - ${status}`);
            } else {
                console.log(`Driving ${speed} km/h in a ${interstateSlimit} zone`);
            }
            break;
        case 'city':
            if (speed > citySlimit) {
                difference = speed - citySlimit;
                if (difference <= 20) {
                    status = 'speeding';
                } else if (difference > 20 && difference <= 40) {
                    status = 'excessive speeding';
                } else {
                    status = 'reckless driving';
                }
                console.log(`The speed is ${difference} km/h faster than the allowed speed of ${citySlimit} - ${status}`);
            } else {
                console.log(`Driving ${speed} km/h in a ${citySlimit} zone`);
            }
            break;
        case 'residential':
            if (speed > residentialSlimit) {
                difference = speed - residentialSlimit;
                if (difference <= 20) {
                    status = 'speeding';
                } else if (difference > 20 && difference <= 40) {
                    status = 'excessive speeding';
                } else {
                    status = 'reckless driving';
                }
                console.log(`The speed is ${difference} km/h faster than the allowed speed of ${residentialSlimit} - ${status}`);
            } else {
                console.log(`Driving ${speed} km/h in a ${residentialSlimit} zone`);
            }
            break;
    }


}
radar(40, 'city');
radar(21, 'residential');
radar(120, 'interstate');
radar(200, 'motorway');