/*
	BATTLE SYSTEM ACTIONS
	ATACAR
	
	INCLUYE
	Cuerpo a cuerpo
		Puñetazo
		Patada
	Arma blanca
		De una mano (daga, etc.)
		De dos manos (espada, etc.)
	Arma cuerpo a cuerpo
		Contundente (martillo, porra, etc)
		No contundente (bastón, vara, K’rik)
	Arma de fuego
		Automática (ametralladora)
		Manual (pistola, escopeta)
	Arma demoniaca
		Espada demoniaca
	Etc
		Lanzar objeto

*/

/*
	CATEGORÍA Atacar/Cuerpo a cuerpo
*/

actions.push({prefix:'0002', equation:'F', name:'Atacar/Cuerpo a cuerpo/Puñetazo', bonus:new Array(
	'+1|El enemigo no te ve (ataque por sorpresa)',
	// Repetir esquema con Atacar/Cuerpo a cuerpo/Patada
	'-1|Herida en mano',
	'-2|Lesión en mano o brazo'
), results: new Array(
	'+3 o más: Ataque con éxito en lugar crítico. [u]Herida leve[/u]',
	'+1 o +2: Ataque con éxito. [u]Herida leve[/u]',
	'0 o -1: Ataque fallido.',
	'-2 o -3: Ataque fallido. Golpeas en mal sitio. [u]Herida leve en la mano[/u]',
	'-4 o menos: Ataque fallido. Golpeas en mal sitio. [u]Herida grave (lesión) en la mano[/u]'
)});

actions.push({prefix:'0002', equation:'F', name:'Atacar/Cuerpo a cuerpo/Patada', bonus:new Array(
	'+1|El enemigo no te ve (ataque por sorpresa)',
	// Repetir esquema con Atacar/Cuerpo a cuerpo/Patada
	'-1|Herida en mano',
	'-2|Lesión en mano o brazo'
), results: new Array(
	'+3 o más: Ataque con éxito en lugar crítico. [u]Herida leve[/u]',
	'+1 o +2: Ataque con éxito. [u]Herida leve[/u]',
	'0 o -1: Ataque fallido.',
	'-2 o -3: Ataque fallido. Golpeas en mal sitio. [u]Herida leve en la mano[/u]',
	'-4 o menos: Ataque fallido. Golpeas en mal sitio. [u]Herida grave (lesión) en la mano[/u]'
)});



/*
	CATEGORÍA Atacar/Arma blanca
*/

actions.push({prefix:'0002', equation:'F', name:'Atacar/Arma blanca/De una mano (daga, etc.)', bonus:new Array(
	'+1|El enemigo no te ve (ataque por sorpresa)',
	// Repetir esquema con Atacar/Cuerpo a cuerpo/Patada
	'-1|Herida en mano',
	'-2|Lesión en mano o brazo'
), results: new Array(
	'+3 o más: Ataque con éxito en lugar crítico. [u]Herida grave[/u]',
	'+1 o +2: Ataque con éxito. [u]Herida grave[/u]',
	'0 o -1: Ataque fallido.',
	'-2 o -3: Ataque fallido. El arma se queda clavada en suelo o pared. Para recuperarla realizar acción: [u]Otras/Recuperar arma[/u]',
	'-4 o -5: Ataque fallido. Hieres al compañero más cercano en lugar no crítico. [u]Herida grave[/u]',
	'-6: Ataque fallido. Te hieres a ti mismo en la pierna. [u]Herida grave en pierna[/u]'
)});

actions.push({prefix:'0002', equation:'F-1', name:'Atacar/Arma blanca/De dos manos (espada, etc.)', bonus:new Array(
	'+1|El enemigo no te ve (ataque por sorpresa)',
	// Repetir esquema con Atacar/Cuerpo a cuerpo/Patada
	'-1|Herida en mano',
	'-2|Lesión en mano o brazo'
), results: new Array(
	'+3 o más: Ataque con éxito. [u]Herida muy grave en lugar crítico[/u]',
	'+1 o +2: Ataque con éxito. [u]Herida muy grave[/u]',
	'0 o -1: Ataque fallido.',
	'-2 o -3: Ataque fallido. El arma se queda clavada en suelo o pared. Para recuperarla realizar acción: [u]Otras/Recuperar arma[/u]',
	'-4 o menos: Ataque fallido. Hieres al compañero más cercano. [u]Herida muy grave[/u]'
)});


/*
	CATEGORÍA Atacar/Arma cuerpo a cuerpo
*/

actions.push({prefix:'0002', equation:'F-2', name:'Atacar/Arma cuerpo a cuerpo/Contundente (martillo, porra, etc.)', bonus:new Array(
	'+1|El enemigo no te ve (ataque por sorpresa)',
	// Repetir esquema con Atacar/Cuerpo a cuerpo/Patada
	'-1|Herida en mano',
	'-2|Lesión en mano o brazo'
), results: new Array(
	'+2 o más: Ataque con éxito. [u]Herida grave en lugar crítico[/u]',
	'+1: Ataque con éxito. [u]Herida grave[/u]',
	'0 o -1: Ataque fallido.',
	'-2 o -3: Ataque fallido. Te hieres a ti mismo. [u]Herida grave[/u]',
	'-4 o menos: Ataque fallido. Hieres al compañero más cercano. [u]Herida leve[/u]',
	'-5: Ataque fallido. Hieres al compañero más cercano. [u]Herida grave[/u]'
)});
actions.push({prefix:'0002', equation:'F', name:'Atacar/Arma cuerpo a cuerpo/No contundente (bastón, vara, k\'rik, etc.)/Golpear', bonus:new Array(
	'+1|El enemigo no te ve (ataque por sorpresa)',
	// Repetir esquema con Atacar/Cuerpo a cuerpo/Patada
	'-1|Herida en mano',
	'-2|Lesión en mano o brazo'
), results: new Array(
	'+2 o más: Ataque con éxito. [u]Herida grave en lugar crítico[/u]',
	'+1: Ataque con éxito. [u]Herida leve[/u]',
	'0 a -3: Ataque fallido.',
	'-4 o menos: Ataque fallido. Hieres al compañero más cercano. [u]Herida leve[/u]'
)});
actions.push({prefix:'0002', equation:'F-1', name:'Atacar/Arma cuerpo a cuerpo/No contundente (bastón, vara, k\'rik, etc.)/Lanzar a distancia', bonus:new Array(
	'-1|El enemigo está lejos',
	'-2|El enemigo está muy lejos',
	'-3|El enemigo no se ve',
	'-2|El enemigo se mueve',
	// Repetir esquema con Atacar/Cuerpo a cuerpo/Patada
	'-1|Herida en mano',
	'-2|Lesión en mano o brazo'
), results: new Array(
	'+3 o más: Ataque con éxito. Das en la diana [u]Herida grave en lugar crítico[/u]',
	'+1 o +2: Ataque con éxito. Clavas el objeto pero en otro sitio [u]Herida grave[/u]',
	'0 a -3: Ataque fallido. El arma cae cerca del enemigo. Para recuperarlo realizar la acción [u]Otras/Buscar objeto en suelo[/u]',
	'-4 o -5: Ataque fallido. No se sabe dónde cae el arma. Para recuperarlo realizar la acción [u]Otras/Buscar objeto en suelo[/u]',
	'-6 o menos: Ataque fallido. Hieres a un compañero. [u]Herida grave[/u]'
)});

/*
	CATEGORÍA Atacar/Arma de fuego
*/

actions.push({prefix:'0002', equation:'F-1', name:'Atacar/Arma de fuego/Automática (ametralladora, etc.)', bonus:new Array(
	'+1|El enemigo no te ve (ataque por sorpresa)',
	// Repetir esquema con Atacar/Cuerpo a cuerpo/Patada
	'-1|Herida en mano',
	'-2|Lesión en mano o brazo'
), results: new Array(
	'+2 o más: Ataque con éxito. [u]Herida grave en varios lugares[/u]',
	'+1: Ataque con éxito. [u]Herida leve en varios lugares[/u]',
	'0 a -3: Ataque fallido.',
	'-4 o menos: Ataque fallido. Hieres al compañero más cercano. [u]Herida grave[/u]'
)});
actions.push({prefix:'0002', equation:'F', name:'Atacar/Arma de fuego/Manual (pistola, escopeta, etc.)', bonus:new Array(
	'+1|El enemigo no te ve (ataque por sorpresa)',
	// Repetir esquema con Atacar/Cuerpo a cuerpo/Patada
	'-1|Herida en mano',
	'-2|Lesión en mano o brazo'
), results: new Array(
	'+2 o más: Ataque con éxito. [u]Herida grave en lugar crítico[/u]',
	'+1: Ataque con éxito. [u]Herida grave[/u]',
	'0 a -3: Ataque fallido.',
	'-4 o menos: Ataque fallido. Hieres al compañero más cercano. [u]Herida grave[/u]'
)});

/*
	CATEGORÍA: Atacar/Arma demoniaca
*/
actions.push({prefix:'0002', equation:'F', name:'Atacar/Arma demoniaca/Espada demoniaca', bonus:new Array(
	'+1|El enemigo no te ve (ataque por sorpresa)',
	// Repetir esquema con Atacar/Cuerpo a cuerpo/Patada
	'-1|Herida en mano',
	'-2|Lesión en mano o brazo'
), results: new Array(
	'+3 o más: Ataque con éxito. [u]Herida muy grave en lugar crítico[/u]',
	'+1 o +2: Ataque con éxito. [u]Herida muy grave[/u]',
	'0 o -1: Ataque fallido.',
	'-2 o -3: Ataque fallido. El arma se queda clavada en suelo o pared. Para recuperarla realizar acción: [u]Otras/Recuperar arma[/u]',
	'-4: Ataque fallido. Hieres al compañero más cercano. [u]Herida muy grave[/u]',
	'-5: se rompe'
)});

/*
	CATEGORÍA: Atacar/Etc
*/
actions.push({prefix:'0002', equation:'F+1', name:'Atacar/Etc/Lanzar objeto', bonus:new Array(
	'+1|Objeto ligero',
	'-1|Objeto pesado',
	'-1|El objetivo está lejos',
	'+1|El objetivo está cerca',
	//
	'-1|Herida en mano',
	'-2|Lesión en mano o brazo'
), results: new Array(
	'+3 o más: Ataque con éxito. Das en la diana [u]Herida leve en lugar crítico[/u]',
	'+1 o +2: Ataque con éxito. Clavas el objeto pero en otro sitio [u]Herida leve[/u]',
	'0 a -3: Ataque fallido. El objeto cae cerca del enemigo. Para recuperarlo (si se desea) realizar la acción [u]Otras/Buscar objeto en suelo[/u]',
	'-4 o -5: Ataque fallido. No se sabe dónde cae el arma. Para recuperarlo (si se desea) realizar la acción [u]Otras/Buscar objeto en suelo[/u]',
	'-6 o menos: Ataque fallido. Hieres a un compañero. [u]Herida grave[/u]'
)});