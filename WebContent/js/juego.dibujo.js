
dibu = {
		crearRectangulo: function(x, y, w, h, c){
			cc.fillStyle = c;
			cc.fillRect(x, y, w, h);
		},
		crearCirculo: function(x, y, color, colorBorde){
			radius = 20;

			cc.beginPath();
			cc.arc(x, y, radius, 0, 2 * Math.PI, false);
			cc.fillStyle = color;
			cc.fill();
			cc.lineWidth = 5;
			cc.strokeStyle = colorBorde;
			cc.stroke();
		},
		crearArma: function(_ejeX, _ejeY, _color, _dir){
			//_direccion = 90;
			_width = 0;
			_height = 0;	
			
			if (_dir == 0){			// Arriba = 0º
				_ejeX -= 5; _ejeY -= 55;		
				_width = 10; _height = 40;			
			} else if (_dir == 180){	// Abajo = 180
				_ejeX -= 5; _ejeY += 15;		
				_width = 10; _height = 40;			
			} else if (_dir == 270){	// Izquierda = 270
				_ejeX -= 55; _ejeY -= 5;		
				_width = 40; _height = 10;
				
			}  else if (_dir == 90){	// Derecha = 90
				_ejeX += 15; _ejeY -= 5;		
				_width = 40; _height = 10;	
			}
			
			this.crearRectangulo(_ejeX, _ejeY, _width, _height);
		},
		crearPersonaje: function(_m_us){
			var _X = new Number(_m_us.ejeX);
			var _Y = new Number(_m_us.ejeY);
						
			this.crearCirculo(_X, _Y, _m_us.colorCentro, _m_us.colorBorde);
			this.crearArma(_X, _Y, _m_us.colorBorde, _m_us.dir);
		}
}

