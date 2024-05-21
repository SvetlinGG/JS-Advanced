function cityTaxes(name, population, treasury){

    let cityInfo = {
        name,
        population: Number(population),
        treasury: Number(treasury),
        taxRate: 10,
    
    collectTaxes(){
        this.treasury += this.population * this.taxRate
    },
    applyGrowth(percentage){
        this.population *= (100 + percentage) /100
    },
    applyRecession(percentage){
        this.treasury *= (100 - percentage) /100
    },

    };
    return cityInfo;

}
let city =
  cityTaxes('Tortuga',
  7000,
  15000);
city.collectTaxes();
console.log(city.treasury);
city.applyGrowth(5);
console.log(city.population);

