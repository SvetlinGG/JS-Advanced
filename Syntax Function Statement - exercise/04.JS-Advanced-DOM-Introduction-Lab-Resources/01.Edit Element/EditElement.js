function editElement(element, match, replacer) {
    const text = element.textContent;
    const newText = text.replace(match,replacer);
    element.textContent = newText;
}