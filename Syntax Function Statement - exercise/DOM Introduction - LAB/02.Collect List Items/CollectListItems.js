function extractText() {
  let textArea = document.getElementById('result');
  let items = document.querySelectorAll('li');
  let result = [...items].map( el => el.textContent)
  console.log(result);
  textArea.textContent = result.join('\n')
 
}


