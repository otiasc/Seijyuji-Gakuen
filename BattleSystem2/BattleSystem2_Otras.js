/*
	BATTLE SYSTEM ACTIONS
	OTRAS ACCIONES
	
	INCLUYE
	Otras
		O1	Pedir refuerzos
		O2	Buscar objeto en suelo
		O3	Recuperar arma
		O4	Buscar las llaves
		O5	Levantarse del suelo


*/

/*
	CATEGORÍA Otras/Pedir refuerzos
*/
actions.push({uniqueId:'O1', prefix:'N0', equation:'1', equation2:'1', name:'Otras/Pedir refuerzos', bonus:new Array(
), results: new Array(
	'+1: Conseguido',
	'0: No conseguido'
)});
actions.push({uniqueId:'O2', prefix:'X2', equation:'1+aI', equation2:'1', name:'Otras/Buscar objeto en suelo', bonus:new Array(
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
actions.push({uniqueId:'O3', prefix:'X6', equation:'2+aI', equation2:'1', name:'Otras/Recuperar arma', bonus:new Array(
), results: new Array(
	'+1: recuperado',
	'0: no recuperado'
)});
actions.push({uniqueId:'O4', prefix:'X6', equation:'2+aI', equation2:'1', name:'Otras/Buscar las llaves', bonus:new Array(
	'-1|Es de noche'
), results: new Array(
	'+1 o más: Encontradas',
	'0 o menos: No encontradas'
)});
actions.push({uniqueId:'O5', prefix:'X4', equation:'aF+1', equation2:'1', name:'Otras/Levantarse del suelo', bonus:new Array(
	'-aF*1/3|Tiene heridas graves',
	'-aF*2/3|Tiene heridas muy graves'
), results: new Array(
	'+1 o más: Consiguió levantarse',
	'0: No consiguió levantarse',
	'-1 o menos: No consiguió levantarse y encima resultas herido.'
)});