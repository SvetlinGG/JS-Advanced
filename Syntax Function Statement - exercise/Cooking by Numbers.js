function cooking(price, ...commandList){

    price = Number(price);
    for ( let element of commandList){
        
        if ( element === 'chop'){
            price /=2;
        }else if ( element === 'dice'){
            price /=3;
        }else if ( element === 'spice'){
            price +=1;
        }else if ( element === 'bake'){
            price *=3;
        }else if ( element === 'fillet'){
            price *=0.8;
        }
        console.log(price);
    }


}
//cooking('32', 'chop', 'chop', 'chop', 'chop', 'chop');
cooking('9', 'dice', 'spice', 'chop', 'bake', 'fillet');