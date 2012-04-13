/*
	BATTLE SYSTEM ACTIONS
	ATACAR
	
	INCLUYE
	Cuerpo a cuerpo
		Puñetazo
		Patada
	Arma blanca
		Espada
	Arma cuerpo a cuerpo
		Contundente (martillo, porra, etc)
		No contundente (bastón, vara, K’rik)
	Arma de fuego
		Ametralladora
		Otra
	Arma demoniaca
		Espada demoniaca
	Etc
		Lanzar objeto contundente

*/

/*
	CATEGORÍA Atacar/Cuerpo a cuerpo
*/

actions.push({prefix:'0002', equation:'F', name:'Atacar/Cuerpo a cuerpo/Puñetazo', bonus:new Array(
	'+1|El enemigo no te ve (ataque por sorpresa)',
	'+1|El enemigo está cerca',
	// Repetir esquema con Atacar/Cuerpo a cuerpo/Patada
	'-1|Herida en puños',
	'-2|Lesión en puño o brazo'
), results: new Array(
	'+3 o más: Puñetazo con éxito en lugar crítico. Daño causado = Fuerza x 2',
	'+1 o +2: Puñetazo con éxito. Daño causado = Fuerza',
	'0 o -1: Puñetazo fallido.',
	'-2: Puñetazo fallido. Te haces una herida en la mano',
	'-4 o menos: Puñetazo fallido. Te lesionas el brazo'
)});




/*
	CATEGORÍA Atacar/Arma blanca
*/

actions.push({prefix:'0002', equation:'F', name:'Atacar/Arma blanca/Espada', bonus:new Array(
	'+1|El enemigo no te ve (ataque por sorpresa)',
	'+1|El enemigo está cerca',
	// Repetir esquema con Atacar/Cuerpo a cuerpo/Patada
	'-1|Herida en puños',
	'-2|Lesión en puño o brazo'
), results: new Array(
	'+3 o más: Puñetazo con éxito en lugar crítico. Daño causado = Fuerza x 2',
	'+1 o +2: Puñetazo con éxito. Daño causado = Fuerza',
	'0 o -1: Puñetazo fallido.',
	'-2: Puñetazo fallido. Te haces una herida en la mano',
	'-4 o menos: Puñetazo fallido. Te lesionas el brazo'
)});