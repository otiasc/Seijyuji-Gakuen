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
	Ataques débiles no específicos de exorcistas. Como mucho se hace una herida leve
*/

//  DADO 01
actions.push({prefix:'CC', equation:'F', name:'Atacar/Cuerpo a cuerpo/Puñetazo', bonus:new Array(
	'+1|El enemigo no te ve (ataque por sorpresa)',
	//
	'-F/3|El exorcista (tú) tiene herida leve en mano',
	'-F/2|El exorcista (tú) tiene herida grave (lesión) en mano o brazo'
), results: new Array(
	'+1 o más: Ataque con éxito. [u]Herida leve[/u]',
	'0: Ataque fallido.',
	'-1 a -3: Ataque fallido. Golpeas en mal sitio. [u]Herida leve en la mano[/u]',
	'-4 o menos: Ataque fallido. Golpeas en mal sitio. [u]Herida grave (lesión) en la mano[/u]'
)});

actions.push({prefix:'CC', equation:'F', name:'Atacar/Cuerpo a cuerpo/Patada', bonus:new Array(
	'+1|El enemigo no te ve (ataque por sorpresa)',
	//
	'-F/3|El exorcista (tú) tiene herida leve en pie',
	'-F/2|El exorcista (tú) tiene herida grave (lesión) en pie o pierna'
), results: new Array(
	'+1 o más: Ataque con éxito. [u]Herida leve[/u]',
	'0: Ataque fallido.',
	'-1 a -3: Ataque fallido. Golpeas en mal sitio. [u]Herida leve en la mano[/u]',
	'-4 o menos: Ataque fallido. Golpeas en mal sitio. [u]Herida grave (lesión) en la mano[/u]'
)});



/*
	CATEGORÍA Atacar/Arma blanca
	Ataques débiles si no se tiene habilidad de esgrima
*/

actions.push({prefix:'ARM', equation:'1+ESG', name:'Atacar/Arma blanca/De una mano (daga, etc.)', bonus:new Array(
	'+1|El enemigo no te ve (ataque por sorpresa)',
	//
	'-ESG/3|El exorcista (tú) tiene herida leve en mano',
	'-ESG/2|El exorcista (tú) tiene herida grave (lesión) en mano o brazo'
), results: new Array(
	'+1 o más: Ataque con éxito. [u]Herida leve[/u]',
	'0: Ataque fallido.',
	'-1 a -3: Ataque fallido. El arma se queda clavada en suelo o pared. Para recuperarla realizar acción: [u]Otras/Recuperar arma[/u]',
	'-4 o -5: Ataque fallido. Hieres al compañero más cercano en lugar no crítico. [u]Herida grave[/u]',
	'-6: Ataque fallido. Te hieres a ti mismo en la pierna. [u]Herida grave en pierna[/u]'
)});

actions.push({prefix:'ARM', equation:'ESG', name:'Atacar/Arma blanca/De dos manos (espada, etc.)', bonus:new Array(
	'+1|El enemigo no te ve (ataque por sorpresa)',
	//
	'-ESG/3|El exorcista (tú) tiene herida leve en una mano',
	'-ESG*2/3|El exorcista (tú) tiene herida grave (lesión) en una mano o brazo',
	'-ESG|El exorcista (tú) tiene heridas en ambas manos o brazos'
), results: new Array(
	'+2 o más: Ataque con éxito. [u]Herida grave[/u]',
	'0 a +1: Ataque fallido.',
	'-1 a -3: Ataque fallido. El arma se queda clavada en suelo o pared. Para recuperarla realizar acción: [u]Otras/Recuperar arma[/u]',
	'-4 o menos: Ataque fallido. Hieres al compañero más cercano. [u]Herida muy grave[/u]'
)});


/*
	CATEGORÍA Atacar/Arma cuerpo a cuerpo
	Ataques débiles si no se tiene fuerza
*/

actions.push({prefix:'ACC', equation:'F-3', name:'Atacar/Arma cuerpo a cuerpo/Contundente (martillo, porra, etc.)', bonus:new Array(
	'+1|El enemigo no te ve (ataque por sorpresa)',
	//
	'-F/3+2|El exorcista (tú) tiene herida leve en mano',
	'-F/2|El exorcista (tú) tiene herida grave (lesión) en mano o brazo'
), results: new Array(
	'+2 o más: Ataque con éxito. [u]Herida grave en lugar crítico[/u]',
	'+1: Ataque con éxito. [u]Herida grave[/u]',
	'0: Ataque fallido.',
	'-1 a -3: Ataque fallido. Te hieres a ti mismo. [u]Herida grave[/u]',
	'-4 o menos: Ataque fallido. Hieres al compañero más cercano. [u]Herida leve[/u]',
	'-5: Ataque fallido. Hieres al compañero más cercano. [u]Herida grave[/u]'
)});
actions.push({prefix:'AC2', equation:'F', name:'Atacar/Arma cuerpo a cuerpo/No contundente (bastón, vara, k\'rik, etc.)/Golpear', bonus:new Array(
	'+1|El enemigo no te ve (ataque por sorpresa)',
	//
	'-F/3|El exorcista (tú) tiene herida leve en mano',
	'-F*2/3|El exorcista (tú) tiene herida grave (lesión) en mano o brazo'
), results: new Array(
	'+2 o más: Ataque con éxito. [u]Herida grave en lugar crítico[/u]',
	'+1: Ataque con éxito. [u]Herida leve[/u]',
	'0: Ataque fallido.',
	'-1 o -2: Ataque fallido. Hieres al compañero más cercano. [u]Herida leve[/u]',
	'-3 o menos: Ataque fallido. Hieres al compañero más cercano. [u]Herida leve[/u]'
)});
actions.push({prefix:'ACC', equation:'F * PUN + 1', name:'Atacar/Arma cuerpo a cuerpo/No contundente (bastón, vara, k\'rik, etc.)/Lanzar a distancia', bonus:new Array(
	'-F*PUN/4|El enemigo está lejos',
	'-F*PUN/3|El enemigo está muy lejos',
	'-F*PUN|El enemigo no se ve',
	'-F*PUN+1|El enemigo se mueve',
	//
	'-1|El exorcista (tú) tiene herida leve en mano',
	'-2|El exorcista (tú) tiene herida grave (lesión) en mano o brazo'
), results: new Array(
	'+3 o más: Ataque con éxito. Das en la diana [u]Herida grave en lugar crítico[/u]',
	'+1 o +2: Ataque con éxito. Clavas el objeto pero en otro sitio [u]Herida grave[/u]',
	'0: Ataque fallido. El arma cae cerca del enemigo. Para recuperarlo realizar la acción [u]Otras/Buscar objeto en suelo[/u]',
	'-1 a -3: Ataque fallido. No se sabe dónde cae el arma. Para recuperarlo realizar la acción [u]Otras/Buscar objeto en suelo[/u]',
	'-4 o menos: Ataque fallido. Hieres a un compañero. [u]Herida grave[/u]'
)});

/*
	CATEGORÍA Atacar/Arma de fuego
	Ataques inútiles si no se tiene puntería
*/
actions.push({prefix:'ARM', equation:'F * PUN - 4', name:'Atacar/Arma de fuego/Automática (ametralladora, etc.)', bonus:new Array(
	'+1|El enemigo no te ve (ataque por sorpresa)',
	//
	'-F*PUN/3|El exorcista (tú) tiene herida leve en mano',
	'-F*PUN/2|El exorcista (tú) tiene herida grave (lesión) en mano o brazo'
), results: new Array(
	'+3 o más: Ataque con éxito. [u]Herida grave en varios lugares[/u]',
	'+1 o +2: Ataque con éxito. [u]Herida leve en varios lugares[/u]',
	'0: Ataque fallido.',
	'-1 o -3: Ataque fallido. Te lesionas la mano. [u]Herida grave[/u]',
	'-4 o menos: Ataque fallido. Hieres al compañero más cercano. [u]Herida grave[/u]'
)});
actions.push({prefix:'ARM', equation:'F * PUN -2', name:'Atacar/Arma de fuego/Manual (pistola, escopeta, etc.)', bonus:new Array(
	'+1|El enemigo no te ve (ataque por sorpresa)',
	//
	'-F*PUN/3|El exorcista (tú) tiene herida leve en mano',
	'-F*PUN/2|El exorcista (tú) tiene herida grave (lesión) en mano o brazo'
), results: new Array(
	'+5 o más: Ataque con éxito. [u]Herida grave en lugar crítico[/u]',
	'+1 o +4: Ataque con éxito. [u]Herida grave[/u]',
	'0: Ataque fallido.',
	'-1: Ataque fallido. Te hieres la mano. [u]Herida leve[/u]',
	'-2 o -3: Ataque fallido. Te lesionas la mano. [u]Herida grave[/u]',
	'-4 o menos: Ataque fallido. Hieres al compañero más cercano. [u]Herida grave[/u]'
)});

/*
	CATEGORÍA: Atacar/Arma demoniaca
*/
actions.push({prefix:'ARM', equation:'1+ESG', name:'Atacar/Arma demoniaca/Espada demoniaca', bonus:new Array(
	'+1|El enemigo no te ve (ataque por sorpresa)',
	//
	'-ESG/3|El exorcista (tú) tiene herida leve en mano',
	'-ESG/2|El exorcista (tú) tiene herida grave (lesión) en mano o brazo'
), results: new Array(
	'+5 o más: Ataque con éxito. [u]Herida muy grave en lugar crítico[/u]',
	'+1 o +4: Ataque con éxito. [u]Herida muy grave[/u]',
	'0: Ataque fallido.',
	'-1 a -3: Ataque fallido. El arma se queda clavada en suelo o pared. Para recuperarla realizar acción: [u]Otras/Recuperar arma[/u]',
	'-4: Ataque fallido. Hieres al compañero más cercano. [u]Herida muy grave[/u]',
	'-5: se rompe'
)});

/*
	CATEGORÍA: Atacar/Etc
*/
actions.push({prefix:'ACC', equation:'F * PUN + 1', name:'Atacar/Etc/Lanzar objeto', bonus:new Array(
	'-2|El objeto pesa mucho',
	'-F*PUN/4|El enemigo está lejos',
	'-F*PUN/3|El enemigo está muy lejos',
	'-F*PUN|El enemigo no se ve',
	'-F*PUN+1|El enemigo se mueve',
	//
	'-F*PUN/3|El exorcista (tú) tiene herida leve en mano',
	'-F*PUN/2|El exorcista (tú) tiene herida grave (lesión) en mano o brazo'
), results: new Array(
	'+3 o más: Ataque con éxito. Das en la diana [u]Herida en lugar crítico (según peso de objeto)[/u]',
	'+1 o +2: Ataque con éxito. Das con el objeto [u]Herida leve (según peso de objeto)[/u]',
	'0: Ataque fallido. El objeto cae cerca del enemigo. Para recuperarlo (si se desea) realizar la acción [u]Otras/Buscar objeto en suelo[/u]',
	'-1 a -5: Ataque fallido. No se sabe dónde cae el arma. Para recuperarlo (si se desea) realizar la acción [u]Otras/Buscar objeto en suelo[/u]',
	'-6 o menos: Ataque fallido. Hieres a un compañero. [u]Herida leve[/u]'
)});