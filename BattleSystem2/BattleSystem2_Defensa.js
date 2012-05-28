/*
	BATTLE SYSTEM ACTIONS
	DEFENSA
	
	INCLUYE
	> Defensa propia
		D1	Alejarse
		D2	Esquivar al enemigo
		D3	Defensa ante posesión
		D4	Soltarte del enemigo
	> Defender a otro
		D5	Interponerse
		D6	Distraer
		D7	Llamar la atención sobre uno mismo

*/

/*
	CATEGORÍA Atacar/Cuerpo a cuerpo
*/
actions.push({uniqueId:'D1', prefix:'7', equation:'V', equation2:'(V+3)/Vb', name:'Defensa propia/Alejarse', bonus:new Array(
), results: new Array(
	'+1 o más: Consigues alejarte',
	'0: No consigues alejarte lo suficiente',
	'-1 o menos: Tropiezas y caes al suelo'
)});
actions.push({uniqueId:'D2', prefix:'7', equation:'V', equation2:'(V+2)/Vb', name:'Defensa propia/Esquivar al enemigo', bonus:new Array(
), results: new Array(
	'+1 o más: Consigues alejarte',
	'0: No consigues alejarte lo suficiente',
	'-1 o menos: Tropiezas y caes al suelo'
)});
actions.push({uniqueId:'D3', prefix:'6', equation:'D', equation2:'D/D', name:'Defensa propia/Defensa ante posesión', bonus:new Array(
), results: new Array(
	'+1 o más: Consigues librarte',
	'0: Te poseee'
)});
actions.push({uniqueId:'D4', prefix:'7', equation:'F', equation2:'F/Fb', name:'Defensa propia/Soltarte del enemigo', bonus:new Array(
), results: new Array(
	'+1 o más: Consigues soltarte',
	'0: No consigues soltarte',
	'-1 o menos: Al forcejear te dañas. No te sueltas. [u]Herida leve[/u]'
)});
actions.push({uniqueId:'D5', prefix:'6', equation:'V', equation2:'V/5', name:'Defender a otro/Interponerse', bonus:new Array(
), results: new Array(
	'+1 o más: Consigues ponerte en medio y recibes el ataque en su lugar',
	'0: No llegas a tiempo',
	'-1 o menos: Caes sobre la otra persona. Ambos recibís el ataque'
)});
actions.push({uniqueId:'D6', prefix:'X4', equation:'I', equation2:'1.1', name:'Defender a otro/Distraer', bonus:new Array(
), results: new Array(
	'+7 o más: Distracción conseguida. El demonio se va a otra parte',
	'0 a +6: El demonio no se distrae',
	'-1 o menos: El demonio no se distrae y te localiza'
)});
actions.push({uniqueId:'D7', prefix:'X4', equation:'I', equation2:'0.7', name:'Defender a otro/Llamar la atención sobre uno mismo', bonus:new Array(
), results: new Array(
	'+3 o más: Distracción conseguida. El demonio va a por ti',
	'0 a +2: El demonio no se distrae',
	'-1 a -6: El demonio no se distrae',
	'-7 o menos: El demonio se ceba más con la persona a la que estaba atacando'
)});