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



CC	'Atacar/Cuerpo a cuerpo/Puñetazo'
CC	'Atacar/Cuerpo a cuerpo/Patada',
ARM	'Atacar/Arma blanca/De una mano (daga, etc.)',
ARM	'Atacar/Arma blanca/De dos manos (espada, etc.)',
ACC	'Atacar/Arma cuerpo a cuerpo/Contundente (martillo, porra, etc.)',
AC2	'Atacar/Arma cuerpo a cuerpo/No contundente (bastón, vara, k\'rik, etc.)/Golpear',
ACC	'Atacar/Arma cuerpo a cuerpo/No contundente (bastón, vara, k\'rik, etc.)/Lanzar a distancia',
ARM	'Atacar/Arma de fuego/Automática (ametralladora, etc.)',
ARM	'Atacar/Arma de fuego/Manual (pistola, escopeta, etc.)',
ARM	'Atacar/Arma demoniaca/Espada demoniaca/Usar como espada',
ARM	'Atacar/Arma demoniaca/Espada demoniaca/Habilidad especial',
ACC	'Atacar/Etc/Lanzar objeto',
ARI	'Aria/Versos fatales/Corto',
ARI	'Aria/Versos fatales/Medio',
ARI	'Aria/Versos fatales/Largo',
DOC	'Doctor/Curar',
TA1	'Tamer/Invocación de familiar',
TA2	'Tamer/Ataque de familiar',
TA2	'Tamer/Habilidad especial',
60%	'Defensa propia/Alejarse',
50%	'Defender a otro/Interponerse',
70%	'Defender a otro/Distraer',
70%	'Defender a otro/Llamar la atención sobre otro',
90%	'Huir/Salir del subforo',
100	'Otras/Pedir refuerzos',
70%	'Otras/Buscar objeto en suelo',
70%	'Otras/Recuperar arma',
80%	'Acciones obligadas/Buscar las llaves',
40%	'Acciones obligadas/Levantarse del suelo'
	
*/
var dicePrefix = '01AST';
var actionsIndex = new Array(
	'Atacar/Cuerpo a cuerpo/Puñetazo',
	'Atacar/Cuerpo a cuerpo/Patada',
	'Atacar/Arma blanca/De una mano (daga, etc.)',
	'Atacar/Arma blanca/De dos manos (espada, etc.)',
	'Atacar/Arma cuerpo a cuerpo/Contundente (martillo, porra, etc.)',
	'Atacar/Arma cuerpo a cuerpo/No contundente (bastón, vara, k\'rik, etc.)/Golpear',
	'Atacar/Arma cuerpo a cuerpo/No contundente (bastón, vara, k\'rik, etc.)/Lanzar a distancia',
	'Atacar/Arma de fuego/Automática (ametralladora, etc.)',
	'Atacar/Arma de fuego/Manual (pistola, escopeta, etc.)',
	'Atacar/Arma demoniaca/Espada demoniaca/Usar como espada',
	'Atacar/Arma demoniaca/Espada demoniaca/Habilidad especial',
	'Atacar/Etc/Lanzar objeto',
	'Aria/Versos fatales/Corto',
	'Aria/Versos fatales/Medio',
	'Aria/Versos fatales/Largo',
	'Doctor/Curar',
	'Tamer/Invocación de familiar',
	'Tamer/Ataque de familiar',
	'Tamer/Habilidad especial',
	'Defensa propia/Alejarse',
	'Defender a otro/Interponerse',
	'Defender a otro/Distraer',
	'Defender a otro/Llamar la atención sobre otro',
	'Huir/Salir del subforo',
	'Otras/Pedir refuerzos',
	'Otras/Buscar objeto en suelo',
	'Otras/Recuperar arma',
	'Acciones obligadas/Buscar las llaves',
	'Acciones obligadas/Levantarse del suelo'
);
var actions = new Array();
//cantidad de dados
/*
	Cómo hacer una ecuación
	R = rango
	F = fuerza
	I = inteligencia
	V = velocidad
	D = Determinación
	
	Obligatorio separar por sumas
	1 + R*2 + -V*2
*/
