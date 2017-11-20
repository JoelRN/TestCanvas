package com.testcanvas.util;

import java.util.*;
import com.testcanvas.ws.movimiento.*;

public class VariablesGlobales {
	private static HashMap<String, Posicion> lPosiciones;		
	
	
	public static Collection<Posicion> getlPosiciones() {
		return lPosiciones.values();
	}
	
	public static void actualizarlPosiciones(Posicion pos) {
		// Inicializo el array
		if(lPosiciones == null) {
			lPosiciones = new HashMap<String, Posicion>();
		}		
		
		String ID = Integer.toString(pos.getID());
		lPosiciones.put(ID, pos);
		
	}
	
	/*public static void eliminarlPosiciones(Posicion pos) {		
		for (int i = 0; i < lPosiciones.size() - 1; i++) {
			if(pos.getID() == lPosiciones.get(i).getID()) {
				lPosiciones.remove(i);	
			}			
		}		
	}*/
		
}
