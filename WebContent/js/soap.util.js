//Actualizar posicion	
function soapRequest(){	
	$.soap({
		url: "http://localhost:8080/TestCanvas/services/ImplMovimiento?wsdl",
		method: "actualizarMovimiento",
		data: {ID: m_us.ID, 
			colorCentro: m_us.colorCentro, 
			colorBorde: m_us.colorBorde, 
			ejeX: m_us.ejeX, 
			ejeY: m_us.ejeY,
			direccion: m_us.dir},
		HTTPHeaders:{
			'Content-Type': 'application/xml',
			'Server-Protocol': 'SOAP'
		},
		success: function(response){
			//response = $.format(response.toString(),{ method: 'xml'});
			//$("#output").text(response);
		},
		error: function(data, status, req) {
			//alert('err'+data.state);
		}
	});
}


// Obtener listado
lOtrosUsuarios = [];

function getLista(){
	$.soap({
		url: "http://localhost:8080/TestCanvas/services/ImplMovimiento?wsdl",
		method: "getListaPosiciones",
		data: {},
		HTTPHeaders:{
			'Content-Type': 'application/xml',
			'Server-Protocol': 'SOAP'
		},
		success: function(response){
			var txt_output = $.format(response.toString(),{ method: 'xml'});
			$("#output").text(txt_output);

			var lPosiciones = response.content.getElementsByTagName("getListaPosicionesResponse");
			var lPosiciones = lPosiciones[0].children;

			lOtrosUsuarios = [];

			for (i=1; i <= lPosiciones.length; i++){
				var _ID = lPosiciones[i - 1].getElementsByTagName("ns" + i + ":ID")[0].innerHTML;
				var _colorBorde = lPosiciones[i - 1].getElementsByTagName("ns" + i + ":colorBorde")[0].innerHTML;
				var _colorCentro = lPosiciones[i - 1].getElementsByTagName("ns" + i + ":colorCentro")[0].innerHTML;
				var _ejeX = lPosiciones[i - 1].getElementsByTagName("ns" + i + ":ejeX")[0].innerHTML;
				var _ejeY = lPosiciones[i - 1].getElementsByTagName("ns" + i + ":ejeY")[0].innerHTML;
				var _direccion = lPosiciones[i - 1].getElementsByTagName("ns" + i + ":dir")[0].innerHTML;

				if (_ID != m_us.ID) {
					var pos = {ID: _ID, 
							colorBorde: _colorBorde,
							colorCentro: _colorCentro,
							ejeX: _ejeX,
							ejeY: _ejeY,
							dir: _direccion};
					lOtrosUsuarios.push(pos);
				}					
			}

		},
		error: function(data, status, req) {
			//alert('err'+data.state);
			if(true){}
		}
	});
}