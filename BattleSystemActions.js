/*

	PREFIJO DE DADO
	PARA ASTAROTH
	
	01AST
	
	ID	CARAS	-1	O	+1
	--------------------------------------------
	CC	10		0	9	1	90%, sin pifias
	ARM	10		1	4	5	50%, con posible pifia simple. Arma de uso general
	ACC	10		1	5	4	60%, con posible pifia simple. Arma débil
	AC2	10		1	8	1	90%, con posible pifia simple. Arma muy débil
	ARI	10		1	4	5	50%, con posible pifia simple. Arias > versos fatales
	DOC	10		3	3	4	50%, con posibilidad alta de fallo. Doctor
	TA1	10		0	2	8	20%, sin pifias. Tamer > invocar
	TA2	10		2	3	5	50%, con posible pifia doble > hacer algo con el familiar
	
	B10	3		0	2	1	66%, sin pifia
	B11	3		1	1	1	66%, con posible pifia
	B21	3		1	0	2	33%, con posible pifia
	B31	3		0	3	0	100%, sin pifia
	B32	3		1	2	0	100%, con posible pifia
	
*/
var dicePrefix = '00GENERIC';
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
