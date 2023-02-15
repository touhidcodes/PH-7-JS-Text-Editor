function getTextById(textId) {
	const elementInnerText = document.getElementById(textId);
	const innerText = elementInnerText.innerText;
	return innerText;
}

function getValueById(valueId) {
	const elementValue = document.getElementById(valueId);
	const value = elementValue.value;
	return value;
}
