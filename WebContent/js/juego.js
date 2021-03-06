// Variables Globales
/////////////////////////////////////////

m_us = {ID: 0,
		colorCentro: "",
		colorBorde: "",
		ejeX: 0,
		ejeY: 0,
		dir: 0};

refresh = 1000 / 30;	// Refresco por segundo

vConstante = 4;
vx = 0;					// Velocidad
vy = 0;

debug = false;

window.onload = function() {
	c = document.getElementById("game");
	cc = c.getContext("2d");
	document.addEventListener("keydown", keyPush);
	inicializarVariablesGlobales();
	posicionInicio();
	
	setInterval(update, refresh);
	setInterval(soapRequest, refresh);		
	setInterval(getLista, refresh);
}

function inicializarVariablesGlobales(){
	m_us.ID = valorRandom(1, 1000);
	
	m_us.colorCentro = getColorRandom();
	m_us.colorBorde = getColorRandom();	
	
	
	
	document.getElementById("idCliente").value = m_us.ID;
}

function update() {
	cc.fillStyle = "black";
	cc.fillRect(0, 0, c.width, c.height);

	dibu.crearPersonaje(m_us);

	for(i = 0; i < lOtrosUsuarios.length; i++){
		var p = lOtrosUsuarios[i];
		dibu.crearPersonaje(p);		
	}

	mover();
}

//Movimientos	
function posicionInicio() {
	m_us.ejeX = valorRandom(0, c.width);	// Posicion
	m_us.ejeY = valorRandom(0, c.height);	
}

function mover(){
	m_us.ejeX += vx;
	m_us.ejeY += vy;

	if (m_us.ejeX < 0) { m_us.ejeX = c.width; }
	if (m_us.ejeX > c.width) { m_us.ejeX = 0; }
	if (m_us.ejeY < 0) { m_us.ejeY = c.height; }
	if (m_us.ejeY > c.height) { m_us.ejeY = 0; }
}


//Eventos
function keyPush(evt){

	switch (evt.keyCode) {
	case 37:	// Izq
		vx = -vConstante; vy = 0;
		m_us.dir = 270;
		break;
	case 38:	// Arriba
		vx = 0; vy = -vConstante; 
		m_us.dir = 0;
		break;
	case 39:	// Der
		vx = vConstante; vy = 0;
		m_us.dir = 90;
		break;
	case 40:	// Abajo
		vx = 0; vy = vConstante;
		m_us.dir = 180;
		break;			
	default:
		//vx =  0; vy = 0;
		break;
	}		
}

