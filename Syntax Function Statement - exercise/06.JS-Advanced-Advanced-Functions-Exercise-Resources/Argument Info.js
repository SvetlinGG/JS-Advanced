function argument(){

    let data = {};
    Array.from(arguments).forEach( arg => {
        console.log(`${typeof arg}: ${arg}`);
        const type = typeof arg;
        if ( !data.hasOwnProperty(type)){

            data[type] = 1;
        }else {
            data[type] ++;
        }
    });
    let sorted = Object.keys(data).sort((a, b) => data[b] - data[a])
                                .forEach( key => {
                                    console.log(`${key} = $`);
                                })

    

}
argument('cat', 42, function () { console.log('Hello world!'); })