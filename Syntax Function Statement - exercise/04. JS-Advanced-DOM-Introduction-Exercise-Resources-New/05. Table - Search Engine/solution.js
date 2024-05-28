function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {
      let input = document.getElementById('searchField').value;
      let rows = [...document.querySelectorAll('tbody tr')];

      rows.forEach( row => {
         row.classList.remove('select');
         if( row.textContent.includes(input)){
            row.classList.add('select')
         }
      });

   }
}