package com.testcanvas.ws.service;

import com.testcanvas.ws.movimiento.Posicion;

public class ImplMovimiento implements IfaceMovimiento{

	@Override
	public Posicion actualizarMovimiento(Posicion obj) {
		// TODO Auto-generated method stub
		String msg;
		msg = String.valueOf(obj.getEjeX()) + ":" + String.valueOf(obj.getEjeY()); 
		
		System.out.println(msg);
		return null;
	}

}
