/*
	BATTLE SYSTEM ACTIONS
	OTRAS ACCIONES
	
	INCLUYE
	Otras
		Pedir refuerzos
		Buscar objeto en suelo
		Recuperar arma
	Acciones obligatorias
		Buscar las llaves
		Levantarse del suelo


*/

/*
	CATEGORÍA Otras/Pedir refuerzos
*/
actions.push({prefix:'B31', equation:'1', name:'Otras/Pedir refuerzos', bonus:new Array(
), results: new Array(
	'+1: Conseguido',
	'0: No conseguido'
)});
actions.push({prefix:'B11', equation:'4', name:'Otras/Buscar objeto en suelo', bonus:new Array(
	'+1|Objeto grande',
	'+1|Objeto brillante',
	'-1|Objeto pequeño',
	//
	'+1|Se sabe con aproximación dónde ha caído',
	'-1|Es de noche'
), results: new Array(
	'+1 o más: recuperado',
	'0 o menos: no recuperado'
)});
actions.push({prefix:'B11', equation:'1', name:'Otras/Recuperar arma', bonus:new Array(
), results: new Array(
	'+1: recuperado',
	'0: no recuperado'
)});
actions.push({prefix:'B11', equation:'4', name:'Otras/Buscar las llaves', bonus:new Array(
	'-1|Es de noche'
), results: new Array(
	'+1 o más: Encontradas',
	'0 o menos: No encontradas'
)});
actions.push({prefix:'B21', equation:'F', name:'Otras/Levantarse del suelo', bonus:new Array(
	'-F*1/3|Tiene heridas graves',
	'-F*2/3|Tiene heridas muy graves'
), results: new Array(
	'+1 o más: Consiguió levantarse',
	'0: No consiguió levantarse',
	'-1 o menos: No consiguió levantarse y encima resultas herido.'
)});