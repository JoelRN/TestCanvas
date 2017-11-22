//Valor aleatorio
function valorRandom(inicio, fin){
	var num = Math.floor((Math.random() * fin) + inicio);
	return num;
}

// Color HTML
function getColorRandom(){
	var r = valorRandom(1, 255);
	var g = valorRandom(1, 255);
	var b = valorRandom(1, 255);

	return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}

function componentToHex(c) {
	var hex = c.toString(16);
	return hex.length == 1 ? "0" + hex : hex;
}