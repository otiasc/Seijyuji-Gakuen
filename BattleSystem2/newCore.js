/*

	SEIJYUJI GAKUEN PRESENTS
	NEW BATTLE SYSTEM.
	
	VERSION 3

*/


/*
	1. VARIABLES GLOBALES NECESARIAS
	-----------------------------------------------------------------
		1.1. Variables de usuario atacante
			int aF		Fuerza del atacante
			int aV		Velocidad del atacante
			int aI		Inteligencia del atacante
			int aD		Determinación (Fuerza de Voluntad) del atacante
			
			int aARI	Memoria del atacante
			int aDOC	Conocimientos en medicina del atacante
			int aDRA	Puntería del atacante
			int aKNI	Habilidad con la espada del atacante
			int aTAM	Habilidad Tamer del atacante
		1.2. Variables de enemigo defensor
			int dF, dV, dI, dD, dARI, dDOC, dDRA, dKNI, dTAM
		
		1.3. Lista de todos los ataques
			arr actions
				str uniqueId
					Identificador del ataque
					Ej: A12
				
				str diceEq
					Ecuación 1. Define la cantidad de dados que se usarán en la acción
				
				str levelEq
					Ecuación 2. Define la dificultad de la acción
				
				str name
					Nombre compuesto del ataque.
					Ej: Atacar/Armas blanca/De una mano
				
				arr bonus
					Lista de todos los extra del ataque. Cada elemento se compone de value|text, en donde:
						value	ecuación del +/-
						text	texto que se muestra de la opción
				
				arr results
					Lista de todos los posibles resultados del ataque. Cada elemento es un min|max|text, en donde:
						min		número mínimo para que se cumpla la acción. NEGATIVE_INFINITY si se omite
						max		número máximo para que se cumpla la acción. POSITIVE_INFINITY si se omite
						text	texto de la acción
		
	2. FUNCIONES
	-----------------------------------------------------------------
		Start
			Inicia el programa
		
		loadActionsMenu
			Carga el menú de acciones
		
		Elegir oponente
			Se ejecuta cuando el usuario ha elegido un oponente
			Cargar datos del oponente
		
		Elegir acción
			Se ejecuta cuando el usuario ha elegido una acción
			Cargar datos de la acción
		
		Calcular resultado
			Se ejecuta cuando elegir acción y elegir oponente se han llevado a cabo

*/

/*
	VARIABLES DE USUARIOS
*/
var aF, aV, aI, aD, aARI, aDOC, aDRA, aKNI, aTAM;
var dF, dV, dI, dD, dARI, dDOC, dDRA, dKNI, dTAM;

/*
	VARIABLES INTERNAS DE PROGRAMA
*/
var chosenAction;


/*------------------------------

	2. FUNCIONES
	
------------------------------*/

/*

	FUNCIÓN START
		Cargar datos del usuario

*/
function start() {
	//
	// Introducir un evento load en el iframe de usuario
	//
	$('#profileIframe').load(function(e) {
		//
		// Cargar datos del usuario
		//
		aV = parseInt($('#profileIframe').contents().find('#profile_field_10_3').attr('value'));
		aF = parseInt($('#profileIframe').contents().find('#profile_field_10_1').attr('value'));
		aI = parseInt($('#profileIframe').contents().find('#profile_field_10_2').attr('value'));
		aD = parseInt($('#profileIframe').contents().find('#profile_field_10_4').attr('value'));
		
		aPUN = parseInt($('#profileIframe').contents().find('#profile_field_10_5').attr('value'));
		aDOC = parseInt($('#profileIframe').contents().find('#profile_field_10_7').attr('value'));
		aESG = parseInt($('#profileIframe').contents().find('#profile_field_10_6').attr('value'));
		aMEM = parseInt($('#profileIframe').contents().find('#profile_field_10_9').attr('value'));
		aFAM = parseInt($('#profileIframe').contents().find('#profile_field_10_8').attr('value'));
    });
	//
	// Mostrar el menú de acciones
	//
	loadActionsMenu('')
}
/*

	FUNCIÓN LOADACTIONSMENU
	Cargar menú de acciones
		str page	página a cargar (en blanco para cargar el inicio). Ejemplos
					'Atacar'
					'Atacar/Cuerpo a Cuerpo'

*/

function loadActionsMenu(page) {
	//
	// Vaciar el menú
	//
	$('#actionList').html('');
	//
	// Comprobar una a una, cuál tiene coincidencia con page
	//
	
	//
	// previous. Variable usada para que cada acción solo aparezca UNA VEZ y no cuatromil
	//
	var previous = '';
	for (var i=0; i<actions.length; i++) {
		var action = actions[i];
		//
		// Si la coincidencia es exacta
		// Cargar la página de la Acción
		// -Opciones de +/- puntos, etc.
		//
		if (action.name == page) {
			//
			// Rellenar el formulario
			//
			$('#actionId').attr('value', action.id);
			
			//
			// Extras de bonificación y penalización
			//
			var extras = action.bonus;
			$('#plusList').html('');
			for (var j = 0; j<extras.length; j++) {
				var extraValue = extras[j].slice(0,extras[j].indexOf('|'));
				var extraName = extras[j].slice(extras[j].indexOf('|')+1);
				
				var newLi = $('<li></li>');
				var newLabel = $('<label />');
				var newInput = $('<input type="checkbox" value="' + extraValue +'" />', {
					name: 'p' + j,
					id: 'p' + j + 'i',
				}).appendTo(newLabel);
				newLabel.html( newLabel.html() + extraName );
				newLabel.appendTo(newLi);
				newLi.appendTo('#plusList');
				i++;
			}
		
		//
		// Si la coincidencia no es exacta
		// Cargar la página con las acciones hijas
		//
		} else if (action.name.indexOf(page)) {
			//
			// Tiene coincidencia.
			// Obtener texto (hasta la siguiente '/')
			//
			var text = actions[i].name.split('/')[0];
			//
			// Crear el elemento li
			//
			var newLi = $('<li></li>');
			var newA = $('<a />', {
				href: 'javascript:void(0)',
				text: text,
				onclick: 'loadActionsMenu(\"' + page + '/' + text + '\")'
			}).appendTo(newLi);
			//
			// Poner en la lista
			//
			newLi.appendTo('#actionList');
		}
	}
	//
	// 
	//
}


/*
	FUNCIÓN
	ELEGIR OPONENTE
*/
function chooseOponent() {
	
}

$(document).ready(function(e) {
	start();
});