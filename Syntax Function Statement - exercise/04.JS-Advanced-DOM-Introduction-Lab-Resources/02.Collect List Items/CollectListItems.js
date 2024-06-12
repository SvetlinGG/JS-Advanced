function extractText() {
  let liElements = document.querySelectorAll('li');

  let items = Array.from(liElements).map(el =>el.textContent);
  console.log(items);
  let textArea = document.getElementById('result');
  textArea.value = items.join('\n')
  
}


