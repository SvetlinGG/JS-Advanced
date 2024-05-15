function road(speed, area){
    
    let status ;
    let limitedSpeed = 0;
    switch(area){
        case 'motorway':
        limitedSpeed = 130;
        break;
        case 'interstate':
        limitedSpeed = 90;
        break;
        case 'city':
        limitedSpeed = 50;
        break;
        case 'residential':
        limitedSpeed = 20;
        break;
    }
    let overSpeed = speed - limitedSpeed;
    if ( overSpeed <= 0){
        console.log(`Driving ${speed} km/h in a ${limitedSpeed} zone`);
    }
    //let overSpeed = speed - limitedSpeed;
    if ( overSpeed > 0 && overSpeed <=20){
        status = 'speeding'
        console.log(`The speed is ${overSpeed} km/h faster than the allowed speed of ${limitedSpeed} - ${status}`);
    }else if ( overSpeed > 20 && overSpeed <= 40){
        status = 'excessive speeding'
        console.log(`The speed is ${overSpeed} km/h faster than the allowed speed of ${limitedSpeed} - ${status}`);
    }else if ( overSpeed > 40){
        status = 'reckless driving'
        console.log(`The speed is ${overSpeed} km/h faster than the allowed speed of ${limitedSpeed} - ${status}`);
    }

}
road(40, 'city');
road(21, 'residential');
road(120, 'interstate');
road(200, 'motorway');