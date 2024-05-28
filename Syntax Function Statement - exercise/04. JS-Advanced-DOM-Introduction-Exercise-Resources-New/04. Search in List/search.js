function search() {
   
   let input = document.getElementById('searchText').value;
   let result = document.getElementById('result');
   let towns = [...document.querySelectorAll('#towns li')];

   let resetTowns = () =>{
         towns.forEach(town => {
            town.style.textDecoration = 'none';
            town.style.fontWeight = 'normal';
         });
   }
   resetTowns();
   let filteredTowns = towns.filter(town =>
      town.textContent.includes(input)
      );
      filteredTowns.forEach(town => {
         town.style.textDecoration = 'underline';
         town.style.fontWeight = 'bold;'
      });

      result.textContent = `${filteredTowns.length} matches found`
}
