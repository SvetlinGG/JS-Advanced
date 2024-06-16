function editElement(element, match, replacer) {
    let text = element.textContent;
    let newText = text.replace(match, replacer);
    element.textContent =  newText
}
    