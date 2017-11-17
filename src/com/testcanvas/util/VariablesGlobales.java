package com.testcanvas.util;

import java.util.*;
import com.testcanvas.ws.movimiento.*;

public class VariablesGlobales {
	private static ArrayList<Posicion> lPosiciones;		
	
	public static ArrayList<Posicion> getlPosiciones() {
		return lPosiciones;
	}

	public static void anniadirlPosiciones(Posicion pos) {

		if(lPosiciones == null) {
			lPosiciones = new ArrayList<Posicion>();
		}		
		lPosiciones.add(pos);
	}
	
	public static void eliminarlPosiciones(Posicion pos) {
		if(lPosiciones == null) {
			lPosiciones = new ArrayList<Posicion>();
		}		
		for (int i = 0; i < lPosiciones.size() - 1; i++) {
			if(pos.getID() == lPosiciones.get(i).getID()) {
				lPosiciones.remove(i);	
			}			
		}		
	}
	
	public static boolean existelPosiciones(Posicion pos) {
		if(lPosiciones == null) {
			lPosiciones = new ArrayList<Posicion>();
		}		
		for (int i = 0; i < lPosiciones.size() - 1; i++) {
			if(pos.getID() == lPosiciones.get(i).getID()) {
				return true;	
			}			
		}
		return false;
	}
	
	public static void actualizarlPosiciones(Posicion pos) {
		if(lPosiciones == null) {
			lPosiciones = new ArrayList<Posicion>();
		}		
		for (int i = 0; i < lPosiciones.size() - 1; i++) {
			if(pos.getID() == lPosiciones.get(i).getID()) {
				lPosiciones.get(i).setEjeX(pos.getEjeX());
				lPosiciones.get(i).setEjeY(pos.getEjeY());
			}			
		}
	}
}
