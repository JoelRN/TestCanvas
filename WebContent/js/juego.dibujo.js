function crearRectangulo(x, y){
	cc.fillStyle = "green";
	cc.fillRect(x, y, 40, 40);
}

function crearCirculo(x, y, color, colorBorde){
	radius = 20;

	cc.beginPath();
	cc.arc(x, y, radius, 0, 2 * Math.PI, false);
	cc.fillStyle = color;
	cc.fill();
	cc.lineWidth = 5;
	cc.strokeStyle = colorBorde;
	cc.stroke();
}
