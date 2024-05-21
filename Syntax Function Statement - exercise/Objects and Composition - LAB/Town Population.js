function town(input){

    let cityObj = {};
    for ( let item of input){
        let [ city, population] = item.split(' <-> ');
        
        if (!cityObj[city]) {
			cityObj[city] = {population: Number(population)} ;
		} else {
			cityObj[city].population +=  Number(population);
		}
    }
    let entries = Object.entries(cityObj);
    for ( let [city, people] of entries){
        console.log(`${city} : ${people.population}`);
    }

    

}
town(['Istanbul <-> 100000',
'Honk Kong <-> 2100004',
'Jerusalem <-> 2352344',
'Mexico City <-> 23401925',
'Istanbul <-> 1000']);