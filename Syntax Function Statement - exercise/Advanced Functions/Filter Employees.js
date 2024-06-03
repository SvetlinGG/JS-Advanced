function employees(data, criteria){

    let persons = JSON.parse(data);
    let [key, value] = criteria.split('-');

    let result = persons.filter( obj => obj[key] == value);

    result.filter(obj => obj[key] == value)
        .map((x, i) => `${i}.${x.first_name} ${x.last_name} - ${x.email}`)
        .forEach(element => console.log(element));

    



}
employees(`[{
    "id": "1",
    "first_name": "Ardine",
    "last_name": "Bassam",
    "email": "abassam0@cnn.com",
    "gender": "Female"
  }, {
    "id": "2",
    "first_name": "Kizzee",
    "last_name": "Jost",
    "email": "kjost1@forbes.com",
    "gender": "Female"
  },  
{
    "id": "3",
    "first_name": "Evanne",
    "last_name": "Maldin",
    "email": "emaldin2@hostgator.com",
    "gender": "Male"
  }]`, 
'gender-Female')