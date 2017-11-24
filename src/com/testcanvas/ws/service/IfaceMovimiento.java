package com.testcanvas.ws.service;

import com.testcanvas.ws.movimiento.Posicion;

public interface IfaceMovimiento {
	boolean actualizarMovimiento(int ID, String colorCentro, String colorBorde, int ejeX, int ejeY, int direccion);
	Posicion[] getListaPosiciones();
}
