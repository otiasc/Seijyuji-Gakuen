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
actions.push({prefix:'B11', equation:'V', name:'Defensa propia/Alejarse', bonus:new Array(
), results: new Array(
	'+1 o más: Consigues alejarte',
	'0: No consigues alejarte lo suficiente',
	'-1 o menos: Tropiezas y caes al suelo'
)});
actions.push({prefix:'B11', equation:'V', name:'Defensa propia/Esquivar al enemigo', bonus:new Array(
), results: new Array(
	'+1 o más: Consigues alejarte',
	'0: No consigues alejarte lo suficiente',
	'-1 o menos: Tropiezas y caes al suelo'
)});
actions.push({prefix:'B11', equation:'F', name:'Defensa propia/Soltarte del enemigo', bonus:new Array(
), results: new Array(
	'+1 o más: Consigues alejarte',
	'0: No consigues alejarte lo suficiente',
	'-1 o menos: Tropiezas y caes al suelo'
actions.push({uniqueId:'D4', prefix:'B11', equation:'F', name:'Defensa propia/Soltarte del enemigo', bonus:new Array(
), results: new Array(
	'+1 o más: Consigues soltarte',
	'0: No consigues soltarte',
	'-1 o menos: Al forcejear te dañas. [u]Herida leve[/u]'
)});
actions.push({prefix:'B10', equation:'V', name:'Defender a otro/Interponerse', bonus:new Array(
), results: new Array(
	'+1 o más: Consigues ponerte en medio y recibes el ataque en su lugar',
	'0: No llegas a tiempo',
	'-1 o menos: Caes sobre la otra persona. Ambos recibís el ataque'
)});
actions.push({prefix:'B11', equation:'I', name:'Defender a otro/Distraer', bonus:new Array(
), results: new Array(
	'+7 o más: Distracción conseguida. El demonio se va a otra parte',
	'0 a +6: El demonio no se distrae',
	'-1 o menos: El demonio no se distrae y te localiza'
)});
actions.push({prefix:'B21', equation:'I', name:'Defender a otro/Llamar la atención sobre uno mismo', bonus:new Array(
), results: new Array(
	'+3 o más: Distracción conseguida. El demonio va a por ti',
	'0 a +2: El demonio no se distrae',
	'-1 a -6: El demonio no se distrae',
	'-7 o menos: El demonio se ceba más con la persona a la que estaba atacando'
)});