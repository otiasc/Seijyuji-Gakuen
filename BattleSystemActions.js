var dicePrefix = 'GOB';
var actionsIndex = new Array(
	'Atacar/Cuerpo a cuerpo/Puñetazo',
	'Atacar/Cuerpo a cuerpoPatada',
	'Atacar/Arma blanca/De una mano (daga, etc.)',
	'Atacar/Arma blanca/De dos manos (espada, etc.)'
);
var actions = new Array();
//cantidad de dados
/*
	Cómo hacer una ecuación
	R = rango
	F = fuerza
	I = inteligencia
	V = velocidad
	
	Obligatorio separar por sumas
	1 + R*2 + -V*2
*/
actions.push({prefix: 'ESCAP', equation:'1 + V*2', name: 'Huir/A un lugar lejano (fuera del tema)', bonus: new Array(
	'+2|Va en vehículo motorizado',
	'+1|Va en patinete, bici... no motorizado',
	'-1|Lesionado'
), results: new Array(
	'+1 o más: Huída conseguida',
	'0: Huía no conseguida',
	'-1 o -2: El exorcista ha tropezado',
	'-3 o menos: El exorcista ha tropezado y se le han caído las llaves'
)});
$.getScript('BattleSystemActions_Atacar');