/*
	BATTLE SYSTEM ACTIONS
	HABILIDADES
	
	INCLUYE
	Aria
		Versos fatales
	Doctor
		Curar herida espiritual
	Tamer
		Invocación de familiar
		Ataque de familiar

*/

/*
	CATEGORÍA Aria
*/
actions.push({prefix:'ARM', equation:'I', name:'Aria/Versos fatales/Corto', bonus:new Array(
	'+1|Sin presión',
	// Repetir esquema con Atacar/Cuerpo a cuerpo/Patada
	'-1|Distracciones'
), results: new Array(
	'Requiere un total de +10 para que se lleven a cabo. Son acumulativos. Se pueden realizar entre varias personas',
	'Si se saca -4 en una tirada se interrumpen los versos fatales',
	'Cuando se completa, el enemigo recibe daño leve por todo el cuerpo'
)});

actions.push({prefix:'ARM', equation:'I', name:'Aria/Versos fatales/Medio', bonus:new Array(
	'+1|Sin presión',
	// Repetir esquema con Atacar/Cuerpo a cuerpo/Patada
	'-1|Distracciones'
), results: new Array(
	'Requiere un total de +15 para que se lleven a cabo. Son acumulativos. Se pueden realizar entre varias personas',
	'Si se saca -4 en una tirada se interrumpen los versos fatales y hay que empezar',
	'Recibe daño grave por todo el cuerpo'
)});

actions.push({prefix:'ARM', equation:'I', name:'Aria/Versos fatales/Largo', bonus:new Array(
	'+1|Sin presión',
	// Repetir esquema con Atacar/Cuerpo a cuerpo/Patada
	'-1|Distracciones'
), results: new Array(
	'Requiere un total de +30 para que se lleven a cabo. Son acumulativos. Se pueden realizar entre varias personas',
	'Si se saca -4 en una tirada se interrumpen los versos fatales',
	'Recibe daño grave por todo el cuerpo'
)});

/*
	CATEGORÍA Doctor
*/
actions.push({prefix:'DOC', equation:'I+R', name:'Doctor/Curar', bonus:new Array(
	'+1|Herida leve',
	'-1|Herida grave',
	'-2|Herida muy grave'
), results: new Array(
	'+3: Cura 2 partes del cuerpo dañado',
	'+1 o +2: Cura 1 parte del cuerpo dañado',
	'0: Falla la curación',
	'-2 o -3: Hieres al cuerpo dañado. [u]La herida se agrava (si es leve pasa a grave, si es grave pasa a muy grave)[/u]',
	'-4 o -5: Hieres al cuerpo dañado. [u]La herida pasa a muy grave[/u]',
	'-6 o menos: Una parte sana se daña. [u]Herida grave[/u]'
)});

/*
	CATEGORÍA Tamer
*/
actions.push({prefix:'TA1', equation:'D', name:'Tamer/Invocación de familiar', bonus:new Array(
	'-1|Lugar difícil de escribir'
), results: new Array(
	'+1 o más:Invocación conseguida',
	'0 o menos: Falla la invocación'
)});
actions.push({prefix:'TA2', equation:'D', name:'Tamer/Ataque de familiar', bonus:new Array(
	'+1|Herida leve',
	'-1|Herida grave',
	'-2|Herida muy grave'
), results: new Array(
	'+3 o más: Ataque conseguido. [u]Daño dependiendo del ataque en zona crítica[/u]',
	'+1 o +2: Ataque conseguido. [u]Daño dependiendo del ataque[/u]',
	'0 a -2: Ataque fallido',
	'-3 o -4: Baja tu determinación. Debes realizar una tirada de [u]Tamer/Recuperar control de familiar[/u]',
	'-5: El familiar se vuelve contra ti. [u]Herida leve[/u]',
	'-6 o menos: El familiar se vuelve contra ti. [u]Herida grave[/u]'
)});
actions.push({prefix:'TA2', equation:'D', name:'Tamer/Habilidad especial de familiar', bonus:new Array(
	'+1|Herida leve',
	'-1|Herida grave',
	'-2|Herida muy grave'
), results: new Array(
	'+3 o más: Habilidad realizada con mucho éxito',
	'+1 o +2: Habilidad realizada con éxito',
	'0 a -2: Ataque fallido',
	'-3 o -4: Baja tu determinación. Debes realizar una tirada de [u]Tamer/Recuperar control de familiar[/u]',
	'-5: El familiar se vuelve contra ti. [u]Herida leve[/u]',
	'-6 o menos: El familiar se vuelve contra ti. [u]Herida grave[/u]'
)});
actions.push({prefix:'B10', equation:'D', name:'Tamer/Recuperar control de familiar', bonus:new Array(
	'-1|Lugar difícil de escribir'
), results: new Array(
	'+1 o más:Invocación conseguida',
	'0 o menos: Falla la invocación'
)});