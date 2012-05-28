/*

	PREFIJO DE DADO
	PARA ASTAROTH
	
	02BEEL
	
	ID	CARAS	-1	O	+1
	--------------------------------------------
	6	10		1	5	4
	7	10		1	6	3
	8	10		1	7	2
	R7	10		3	4	3
	X4	10		3	7	0
	X6	10		5	5	0
	N0	10		0	1	0
	
	
*/
var dicePrefix = 'GENERIC_DICE';
var actions = new Array();
//cantidad de dados
/*
	Cómo hacer una ecuación
	F = fuerza
	I = inteligencia
	V = velocidad
	D = Fuerza de voluntad
	
	DOC = Medicina (solo Doctor)
	MEM = Memoria (solo Aria)
	PUN = Puntería (solo Dragoon)
	ESG = Habilidad con la espada (solo Knight)
	FAM = Fuerza máxima del familiar (solo Tamer)
	
	Obligatorio separar por sumas
	1 + R*2 + -V*2
*/
