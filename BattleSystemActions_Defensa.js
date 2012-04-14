/*
	BATTLE SYSTEM ACTIONS
	DEFENSA
	
	INCLUYE
	Defensa propia
		Alejarse
	Defender a otro
		Interponerse
		Distraer
		Llamar la atención sobre uno mismo

*/

/*
	CATEGORÍA Atacar/Cuerpo a cuerpo
*/
actions.push({prefix:'B11', equation:'10', name:'Defensa propia/Alejarse', bonus:new Array(
), results: new Array(
	'+1 o más: Consigues alejarte',
	'0 a -6: No consigues alejarte lo suficiente',
	'-7 o menos: Tropiezas. Próxima acción obligatoria [u]Acciones obligatorias/Levantarse del suelo[/u]'
)});
actions.push({prefix:'B10', equation:'10', name:'Defender a otro/Interponerse', bonus:new Array(
), results: new Array(
	'+1 o más: Consigues ponerte en medio y recibes el ataque en su lugar',
	'0 a -6: No llegas a tiempo',
	'-7 o menos: Caes sobre la otra persona. Ambos recibís el ataque'
)});
actions.push({prefix:'B11', equation:'10', name:'Defender a otro/Distraer', bonus:new Array(
), results: new Array(
	'+7 o más: Distracción conseguida. El demonio se va a otra parte',
	'-6 a +6: El demonio no se distrae',
	'-7 o menos: El demonio no se distrae y te localiza'
)});
actions.push({prefix:'B21', equation:'10', name:'Defender a otro/Llamar la atención sobre uno mismo', bonus:new Array(
), results: new Array(
	'+3 o más: Distracción conseguida. El demonio va a por ti',
	'-6 a +2: El demonio no se distrae',
	'-7 o menos: El demonio no se distrae y te localiza'
)});