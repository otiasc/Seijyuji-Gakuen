/*
	BATTLE SYSTEM ACTIONS
	HABILIDADES
	
	INCLUYE
	> Aria
		> Versos fatales
			H1	Corto
			H2	Medio
			H3	Largo
	> Doctor
		H4 Curar
	> Tamer
		H5	Invocación de familiar
		H6	Ataque de familiar
		H7	Curación
		H8	Recuperar control de familiar

*/

/*
	CATEGORÍA Aria
*/
actions.push({uniqueId:'H1', prefix:'7', equation:'I', name:'Aria/Versos fatales/Corto', bonus:new Array(
	'+1|Sin presión',
	// Repetir esquema con Atacar/Cuerpo a cuerpo/Patada
	'-I/2|Distracciones'
), results: new Array(
	'Requiere un total de +10 para que se lleven a cabo. Son acumulativos. Se pueden realizar entre varias personas',
	'Si se saca -1 o menos en una misma tirada se interrumpen los versos fatales',
	'Cuando se completa, el enemigo recibe daño leve por todo el cuerpo'
)});

actions.push({uniqueId:'H2', prefix:'7', equation:'I', name:'Aria/Versos fatales/Medio', bonus:new Array(
	'+1|Sin presión',
	// Repetir esquema con Atacar/Cuerpo a cuerpo/Patada
	'-I/2|Distracciones'
), results: new Array(
	'Requiere un total de +15 para que se lleven a cabo. Son acumulativos. Se pueden realizar entre varias personas',
	'Si se saca -4 en una tirada se interrumpen los versos fatales y hay que empezar',
	'Cuando se completa, el enemigo recibe daño grave por todo el cuerpo'
)});

actions.push({uniqueId:'H3', prefix:'7', equation:'I', name:'Aria/Versos fatales/Largo', bonus:new Array(
	'+1|Sin presión',
	// Repetir esquema con Atacar/Cuerpo a cuerpo/Patada
	'-I/2|Distracciones'
), results: new Array(
	'Requiere un total de +30 para que se lleven a cabo. Son acumulativos. Se pueden realizar entre varias personas',
	'Si se saca -4 en una tirada se interrumpen los versos fatales',
	'Cuando se completa, el enemigo recibe daño muy grave por todo el cuerpo'
)});

/*
	CATEGORÍA Doctor
*/
actions.push({uniqueId:'H4', prefix:'6', equation:'DOC', name:'Doctor/Curar', bonus:new Array(
	'+I|Se quiere curar herida leve',
	'-DOC/3|Se quiere curar herida grave',
	'-DOC/2|Se quiere curar herida muy grave'
), results: new Array(
	'+1 o más: Cura la parte dañada',
	'0: Falla la curación',
	'-1: Hieres al cuerpo dañado. [u]La herida se agrava (si es leve pasa a grave, si es grave pasa a muy grave)[/u]',
	'-2: Hieres al cuerpo dañado. [u]La herida pasa a muy grave (si ya estaba en muy grave, se daña una parte sana)[/u]',
	'-3 o menos: Una parte sana se daña. [u]Herida grave[/u]'
)});

/*
	CATEGORÍA Tamer
*/
actions.push({uniqueId:'H5', prefix:'6', equation:'D*FAM', name:'Tamer/Invocación de familiar', bonus:new Array(
), results: new Array(
	'+1 o más:Invocación conseguida',
	'0 o menos: Falla la invocación'
)});
actions.push({uniqueId:'H6', prefix:'7', equation:'D+FAM', name:'Tamer/Ataque de familiar', bonus:new Array(
	'-1|El exorcista (tú) duda (fuerza de voluntad baja)',
	//
	'+1|El objetivo es causar herida leve',
	'-D/3|El objetivo es causar herida grave',
	'-D/2|El objetivo es causar herida muy grave'
), results: new Array(
	'+1 o más: Ataque conseguido. [u]Daño dependiendo del ataque[/u]',
	'0: Ataque fallido',
	'-1 a -3: Tu familiar se descontrola. Debes realizar una tirada de [u]Tamer/Recuperar control de familiar[/u]',
	'-4: El familiar se vuelve contra ti. [u]Te provoca una herida leve[/u]',
	'-5 o menos: El familiar se vuelve contra ti. [u]Te provoca una herida grave[/u]'
)});
actions.push({uniqueId:'H7', prefix:'6', equation:'D+FAM*DOC', name:'Tamer/Curación', bonus:new Array(
	'+1|Se quiere curar herida leve',
	'-FAM*DOC/4|Se quiere curar herida grave',
	'-FAM*DOC/3|Se quiere curar herida muy grave'
), results: new Array(
	'+3 o más: Habilidad realizada con mucho éxito',
	'+1 o +2: Habilidad realizada con éxito',
	'0: Ataque fallido',
	'-1 o -2: Baja tu determinación. Debes realizar una tirada de [u]Tamer/Recuperar control de familiar[/u]',
	'-3: El familiar no te hace caso. Hieres el cuerpo dañado [u]Herida leve[/u]. Debes realizar una tirada de [u]Tamer/Recuperar control de familiar[/u]',
	'-4 o menos: El familiar se vuelve contra ti. Te ataca [u]Herida grave[/u]. Debes realizar una tirada de [u]Tamer/Recuperar control de familiar[/u]'
)});
actions.push({uniqueId:'H8', prefix:'6', equation:'D', name:'Tamer/Recuperar control de familiar', bonus:new Array(
), results: new Array(
	'+1 o más: Control recuperado',
	'0 o menos: Control no recuperado'
)});