function dayOfWeek(day) {

    let num;

    switch (day) {
        case 'Monday': num = 1; console.log(num); break;
        case 'Tuesday': num = 2; console.log(num); break;
        case 'Wednesday': num = 3; console.log(num); break;
        case 'Thursday': num = 4; console.log(num); break;
        case 'Friday': num = 5; console.log(num); break;
        case 'Saturday': num = 6; console.log(num); break;
        case 'Sunday': num = 7; console.log(num); break;
        default: console.log(`error`); break;
    }

}
dayOfWeek('Friday');
dayOfWeek('Invalid');