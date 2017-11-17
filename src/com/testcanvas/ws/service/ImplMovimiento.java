package com.testcanvas.ws.service;

import com.testcanvas.ws.movimiento.Posicion;

public class ImplMovimiento implements IfaceMovimiento{

	@Override
	public boolean actualizarMovimiento(int ID, int ejeX, int ejeY) {
		// TODO Auto-generated method stub
		Posicion pos = new Posicion(ID);
		pos.setEjeX(ejeX); 
		pos.setEjeY(ejeY);
		
		System.out.println("id:" + ID + " coordenadas:" + ejeX + ":" + ejeY);
		return true;
	}

}
