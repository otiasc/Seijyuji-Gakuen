/*
	BATTLE SYSTEM ACTIONS
	ATACAR
	
	INCLUYE
	> Cuerpo a cuerpo
		A1	Puñetazo
		A18	Espachurrar
		A2	Patada o pisotón
		A3	Empujar
		A13	Cabezazo
		A14	Agarrar del cuello
		A15 Codazo o rodillazo
	> Arma blanca
		A4	De una mano (daga, etc.)
		A5	De dos manos (espada, etc.)
	> Arma cuerpo a cuerpo
		A6	Contundente (martillo, porra, etc)
		> No contundente (bastón, vara, K’rik)
			A7	Golpear
			A10	Lanzar a distancia
	> Arma de fuego
		A8	Automática (ametralladora)
		A9	Manual (pistola, escopeta)
	> Arma demoniaca
		A11	Espada demoniaca
		A16	Llamas demoniacas
	> Etc
		A12	Lanzar objeto
		A17 Agua Bendita

*/

/*
	CATEGORÍA Atacar/Cuerpo a cuerpo
	Ataques débiles no específicos de exorcistas. Como mucho se hace una herida leve
*/

//  DADO 01
actions.push({uniqueId:'A1', prefix:'X4', equation:'F', name:'Atacar/Cuerpo a cuerpo/Puñetazo', bonus:new Array(
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

actions.push({uniqueId:'A18', prefix:'R7', equation:'F', name:'Atacar/Cuerpo a cuerpo/Espachurrar (enemigos pequeños)', bonus:new Array(
	'-1|El enemigo se mueve',
	'-F/3|El exorcista (tú) tiene herida leve en mano',
	'-F/2|El exorcista (tú) tiene herida grave (lesión) en mano o brazo'
), results: new Array(
	'+1 o más: Agarras al enemigo',
	'0: Fallido.',
	'-1 o menos: Fallido. Agarras al enemigo pero te hace daño [u]Admin. o moderador eligen las consecuencias[/u]'
)});

actions.push({uniqueId:'A2', prefix:'6', equation:'F', name:'Atacar/Cuerpo a cuerpo/Patada o pisotón', bonus:new Array(
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

actions.push({uniqueId:'A3', prefix:'X4', equation:'F', name:'Atacar/Cuerpo a cuerpo/Empujar', bonus:new Array(
	'+1|El enemigo no te ve (ataque por sorpresa)',
	//
	'-F/4|El exorcista (tú) tiene herida leve en mano',
	'-F/3|El exorcista (tú) tiene herida grave (lesión) en mano o brazo'
), results: new Array(
	'+3 o más: Ataque con éxito. Desplazas al enemigo y cae al suelo',
	'+1 o +2: Ataque con éxito. Desplazas al enemigo',
	'0: Ataque fallido.',
	'-1 a -2: Ataque fallido. Retrocedes tú',
	'-3 o menos: Ataque fallido. Desequilibras y caes al suelo'
)});
actions.push({uniqueId:'A13', prefix:'X6', equation:'F', name:'Atacar/Cuerpo a cuerpo/Cabezazo', bonus:new Array(
	'+1|El enemigo no te ve (ataque por sorpresa)',
	//
	'-F/4|El exorcista (tú) tiene herida leve la cabeza',
	'-F/3|El exorcista (tú) tiene herida grave (lesión) en la cabeza'
), results: new Array(
	'+3 o más: Ataque con éxito. Herida leve al enemigo',
	'+1 o +2: Ataque con éxito. Herida leve a ambos jugadores',
	'0: Ataque fallido. Te haces una herida leve en la cabeza',
	'-1 o menos: Ataque fallido. Te haces una herida leve en la cabeza y te caes al suelo'
)});
actions.push({uniqueId:'A14', prefix:'X6', equation:'F', name:'Atacar/Cuerpo a cuerpo/Agarrar del cuello', bonus:new Array(
	'+1|El enemigo no te ve (ataque por sorpresa)',
	//
	'-F/4|El exorcista (tú) tiene herida leve la cabeza',
	'-F/3|El exorcista (tú) tiene herida grave (lesión) en la cabeza'
), results: new Array(
	'+3 o más: Ataque con éxito. Herida leve al enemigo',
	'+1 o +2: Ataque con éxito. Herida leve a ambos jugadores',
	'0: Ataque fallido. Te haces una herida leve en la cabeza',
	'-1 o menos: Ataque fallido. Te haces una herida leve en la cabeza y te caes al suelo'
)});
actions.push({uniqueId:'A15', prefix:'X6', equation:'F', name:'Atacar/Cuerpo a cuerpo/Codazo o rodillazo', bonus:new Array(
	'+1|El enemigo no te ve (ataque por sorpresa)',
	//
	'-F/2|El exorcista (tú) tiene herida leve en el codo o rodilla',
	'-F*2/3|El exorcista (tú) tiene herida grave (lesión) en el codo o rodilla'
), results: new Array(
	'+1 o más: Ataque con éxito. Herida leve',
	'0: Ataque fallido',
	'-1 o menos: Ataque fallido. Te haces una herida leve en el codo o rodilla'
)});

/*
	CATEGORÍA Atacar/Arma blanca
	Ataques débiles si no se tiene habilidad de esgrima
*/

actions.push({uniqueId:'A4', prefix:'R7', equation:'1+ESG', name:'Atacar/Arma blanca/De una mano (daga, etc.)', bonus:new Array(
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

actions.push({uniqueId:'A5', prefix:'R7', equation:'ESG', name:'Atacar/Arma blanca/De dos manos (espada, etc.)', bonus:new Array(
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

actions.push({uniqueId:'A6', prefix:'7', equation:'F-3', name:'Atacar/Arma cuerpo a cuerpo/Contundente (martillo, porra, etc.)', bonus:new Array(
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
actions.push({uniqueId:'A7', prefix:'8', equation:'F', name:'Atacar/Arma cuerpo a cuerpo/No contundente (bastón, vara, k\'rik, etc.)/Golpear', bonus:new Array(
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
actions.push({uniqueId:'A10', prefix:'8', equation:'F * PUN + 1', name:'Atacar/Arma cuerpo a cuerpo/No contundente (bastón, vara, k\'rik, etc.)/Lanzar a distancia', bonus:new Array(
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
actions.push({uniqueId:'A8',prefix:'6', equation:'F * PUN - 4', name:'Atacar/Arma de fuego/Automática (ametralladora, etc.)',  bonus:new Array(
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
actions.push({uniqueId:'A9', prefix:'7', equation:'F * PUN -2', name:'Atacar/Arma de fuego/Manual (pistola, escopeta, etc.)', bonus:new Array(
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
actions.push({uniqueId:'A11', prefix:'8', equation:'1+ESG', name:'Atacar/Arma demoniaca/Espada demoniaca', bonus:new Array(
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
actions.push({uniqueId:'A16', prefix:'6', equation:'FD * D', name:'Atacar/Etc/Llamas demoníacas', bonus:new Array(
	'-F*D/4|Escuchas la llamada de Gehena'
), results: new Array(
	'+3 o más: Provocas quemaduras graves en el objetivo. Herida grave',
	'+1 o +2: Fuego en el enemigo. Herida leve',
	'0: Ataque fallido. Provocas una llama cerca de ti',
	'-1: Ataque fallido. Provocas un incendio a tu alrededor',
	'-2 o -3 Ataque fallido. Quemas a un compañero',
	'-4 a -6: Ataque fallido. Quemas a un compañero y pierdes el control de ti mismo',
	'-7 o menos: Provocas una Noche Azul. Consecuencias desconocidas'
)});

/*
	CATEGORÍA: Atacar/Etc
*/
actions.push({uniqueId:'A12', prefix:'7', equation:'F * PUN + 1', name:'Atacar/Etc/Lanzar objeto', bonus:new Array(
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

actions.push({uniqueId:'A17', prefix:'6', equation:'4', name:'Atacar/Etc/Agua bendita', bonus:new Array(
	'+1|El objetivo está quieto',
	'+1|Necesitas muy poca agua (un vaso)',
	'-1|Necesitas bastante agua (garrafa)',
	'-3|Necesitas mucha agua (barril)',
	'-1|El objetivo está lejos',
	'-2|El objetivo está muy lejos'
), results: new Array(
	'+2 o más: Ataque con éxito. Das solo en la diana',
	'+1: Ataque con éxito. Dejas rastro entre tu objetivo y tú',
	'0: Das a tu objetivo y a tu alrededor',
	'-1: Empapas a un compañero',
	'-2: Empapas a un compañero y su alrededor'
)});