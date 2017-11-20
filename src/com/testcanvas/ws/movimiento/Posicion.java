package com.testcanvas.ws.movimiento;

import java.io.Serializable;

public class Posicion implements Serializable {
	
	/**
	 * 
	 */
	private static final long serialVersionUID = 2692085561590224720L;
	private int ID;
	
	private String colorCentro;
	private String colorBorde;
	
	private int ejeX;
	private int ejeY;
	
	public Posicion() {
		super();
	}
	
	public Posicion(int iD) {
		super();
		setID(iD);
	}
	
	public int getID() {
		return ID;
	}

	private void setID(int iD) {
		ID = iD;
	}
	
	public String getColorBorde() {
		return colorBorde;
	}

	public void setColorBorde(String colorBorde) {
		this.colorBorde = colorBorde;
	}
	
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

	public String getColorCentro() {
		return colorCentro;
	}

	public void setColorCentro(String colorCentro) {
		this.colorCentro = colorCentro;
	}
	
}
