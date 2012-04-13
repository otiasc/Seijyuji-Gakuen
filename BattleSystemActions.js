var dicePrefix = 'GOB';
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
	
	Obligatorio separar por sumas
	1 + R*2 + -V*2
*/
