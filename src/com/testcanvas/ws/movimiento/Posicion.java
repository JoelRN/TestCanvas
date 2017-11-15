package com.testcanvas.ws.movimiento;

import java.io.Serializable;

public class Posicion implements Serializable {

	/**
	 * 
	 */
	private static final long serialVersionUID = -4398395317695586075L;
	private int ejeX;
	private int ejeY;
	
	public int getEjeX() {
		return ejeX;
	}
	public void setEjeX(int ejeX) {
		this.ejeX = ejeX;
	}
	public int getEjeY() {
		return ejeY;
	}
	public void setEjeY(int ejeY) {
		this.ejeY = ejeY;
	}
	
	
}
