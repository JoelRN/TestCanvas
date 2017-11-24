package com.testcanvas.ws.service;

import java.util.Collection;

import com.testcanvas.util.VariablesGlobales;
import com.testcanvas.ws.movimiento.Posicion;

public class ImplMovimiento implements IfaceMovimiento{

	@Override
	public boolean actualizarMovimiento(int ID, String colorCentro, String colorBorde, int ejeX, int ejeY, int dir) {		
		Posicion pos = new Posicion(ID);
		pos.setColorCentro(colorCentro);
		pos.setColorBorde(colorBorde);			
		pos.setEjeX(ejeX); 
		pos.setEjeY(ejeY);
		pos.setDir(dir);
		
		VariablesGlobales.actualizarlPosiciones(pos);
				
		//System.out.println("id:" + ID + " coordenadas:" + ejeX + ":" + ejeY + "  " + colorCentro + ":" + colorBorde);
		return true;
	}

	@Override
	public Posicion[] getListaPosiciones(){
		Collection<Posicion> lAuxPosicion = VariablesGlobales.getlPosiciones();
		int num = lAuxPosicion.size();
		Posicion[] lPos = new Posicion[num];		
		
		lAuxPosicion.toArray(lPos);
		
		return lPos;
	}
}
