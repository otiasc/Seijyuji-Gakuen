/*

	SEIJYUJI GAKUEN PRESENTS
	NEW BATTLE SYSTEM.
	
	VERSION 3

*/


/*
	1. VARIABLES GLOBALES NECESARIAS
	----------------------------------------------------------------
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
	----------------------------------------------------------------
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
	$('#nonSelectedTarget').removeClass('disabled');
	$('#selectedTarget').addClass('disabled');
	
	$('#targetList').removeClass('disabled');
	
	$('#actionSearch').addClass('disabled');
	$('#navBar').addClass('disabled');
	$('#actionList').addClass('disabled');
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
	loadActionsMenu('');
	//
	// Introducir un evento load en el iframe de memberlist
	//
	$('#memberlistIframe').load(function(e) {
		loadTargetList();
	});
	$('#actionSearch').keyup(function(e) {
		//
		//
		//
		var text = $('#actionSearch').attr('value');
		
		if (text.length>0) {
			loadActionsMenu('*' + text);
		} else {
			loadActionsMenu('');
		}
    });
}
/*

	FUNCIÓN LOADACTIONSMENU
	Cargar menú de acciones
		str page	página a cargar (en blanco para cargar el inicio). Ejemplos
					'Atacar'
					'Atacar/Cuerpo a Cuerpo'
		str search	*Atacar

*/

function loadActionsMenu(page) {
	var sea = false;
	if (page.indexOf('*')==0) {
		sea = true;
	}
	$('#result').addClass('disabled');
	//
	// Vaciar el menú
	//
	$('#actionList').html('');
	//
	// Comprobar una a una, cuál tiene coincidencia con page
	//
	
	//
	// Crear la lista de navegación
	//
	var nav = page.split('/');
	var diceLevel = '';
	$('#navBar').html('');
	var newLi = $('<li></li>')
		.append(
			$('<a />', {href: 'javascript:void(0)',	text: 'Inicio', onclick: 'loadActionsMenu(\"\")'})
		);
	newLi.appendTo('#navBar');
	
	for (var i=0; i<nav.length-1; i++) {
		diceLevel += nav[i] + '/';
		var newLi = $('<li></li>')
			.append(
				$('<a />', {href: 'javascript:void(0)',	text: nav[i], onclick: 'loadActionsMenu(\"' + diceLevel +  '\")'})
			);
		newLi.appendTo('#navBar');
	}
	
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
		if (action.name == page.slice(0,-1) ) {
			$('#result').removeClass('disabled');
			//
			// Rellenar el formulario
			//
			$('#actionIndex').attr('value', i);
			
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
			}
		
		//
		// Si la coincidencia no es exacta
		// Cargar la página con las acciones hijas
		//
		} else if (action.name.indexOf(page)==0) {
			//
			// Tiene coincidencia.
			// Obtener texto (hasta la siguiente '/')
			//
			var text = action.name.slice(page.length).split('/')[0];
			if (text!=previous) {
				previous = text;
				//
				// Crear el elemento li
				//
				var newLi = $('<li></li>');
				var newA = $('<a />', {
					href: 'javascript:void(0)',
					text: text,
					onclick: 'loadActionsMenu(\"' + page + text + '/'+ '\")'
				}).appendTo(newLi);
				//
				// Poner en la lista
				//
				newLi.appendTo('#actionList');
			}
		} else if  (sea && action.name.toLowerCase().indexOf(page.slice(1).toLowerCase())!=-1) {
			//
			// Crear el elemento li
			//
			var newLi = $('<li></li>');
			var newA = $('<a />', {
				href: 'javascript:void(0)',
				text: action.name,
				onclick: 'loadActionsMenu(\"' + action.name + '/'+ '\")'
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
	CARGAR LOS TARGETS
*/
function loadTargetList() {
	var h = $('#memberlistIframe').contents().find('#memberlist tbody tr .avatar-mini a').each(function(index, element) {
		var imgSrc = $(this).children('img').attr('src');
		var text = $(this).text().slice(1);
		var id = $(this).attr('href');
		
		var dd = $('<dd></dd>')
			.append(
				$('<a></a>').attr('href', 'javascript:selectTarget(\"' + text + '\", \"' + id + '\")').text(text)
			);
		var dt = $('<dt></dt>').append( $('<img />').attr('src', imgSrc) );
		
		$('#targetList').append(dt).append(dd);
	})
}

/*
	FUNCIÓN
	SELECCIONAR EL TARGET
*/
function selectTarget(userName, userLink) {
	$('#nonSelectedTarget').addClass('disabled');
	$('#selectedTarget').removeClass('disabled');
	
	$('#selectedTarget').html('Objetivo: ' + userName + ' <a href="javascript:void(0)" onclick="start()">(Cambiar)</a>');
	
	$('#targetList').addClass('disabled');
	$('#actionSearch').removeClass('disabled');
	
	$('#navBar').removeClass('disabled');
	$('#actionList').removeClass('disabled');
	
	$('#usersearch').attr('value', userName);
	$('#enemyIframe').attr('src', userLink);
	
	$('#enemyIframe').load(function(e) {
        loadEnemyData();
    });
}

/*
	FUNCIÓN
	LOADENEMYDATA
*/
function loadEnemyData() {
	dV = parseInt($('#enemyIframe').contents().find('#profile_field_10_3').attr('value'));
	dF = parseInt($('#enemyIframe').contents().find('#profile_field_10_1').attr('value'));
	dI = parseInt($('#enemyIframe').contents().find('#profile_field_10_2').attr('value'));
	dD = parseInt($('#enemyIframe').contents().find('#profile_field_10_4').attr('value'));
	
	dPUN = parseInt($('#enemyIframe').contents().find('#profile_field_10_5').attr('value'));
	dDOC = parseInt($('#enemyIframe').contents().find('#profile_field_10_7').attr('value'));
	dESG = parseInt($('#enemyIframe').contents().find('#profile_field_10_6').attr('value'));
	dMEM = parseInt($('#enemyIframe').contents().find('#profile_field_10_9').attr('value'));
	dFAM = parseInt($('#enemyIframe').contents().find('#profile_field_10_8').attr('value'));	
}

/*
	FUNCIÓN
	CALCULATE
*/
function calculate() {
	//
	// Parámetros de la acción
	//
	var actionIndex = $('#actionIndex').attr('value');
	var chosenAction = actions[actionIndex];
	//
	// Dados normales
	//
	var diceAmount = eval(chosenAction.equation);
	var diceLevel  = eval(chosenAction.equation2);
	
	if (diceLevel>=5.5) {diceSecondName = '10'}
	if (diceLevel>=4 && diceLevel<5.5) {diceSecondName = '9'}
	if (diceLevel>=3 && diceLevel<4) {diceSecondName = '8'}
	if (diceLevel>=2 && diceLevel<3) {diceSecondName = '7'}
	if (diceLevel>=1.5 && diceLevel<2) {diceSecondName = '6'}
	if (diceLevel>=1 && diceLevel<1.5) {diceSecondName = '5'}
	
	if (diceLevel>=0.80 && diceLevel<1) {diceSecondName = '4'}
	if (diceLevel>=0.60 && diceLevel<0.80) {diceSecondName = '4X'}
	if (diceLevel>=0.40 && diceLevel<0.60) {diceSecondName = '3'}
	if (diceLevel>=0.30 && diceLevel<0.40) {diceSecondName = '3X'}
	if (diceLevel>=0.20 && diceLevel<0.30) {diceSecondName = '2'}
	if (diceLevel>=0.17 && diceLevel<0.20) {diceSecondName = '2X'}
	if (diceLevel>=0.15 && diceLevel<0.17) {diceSecondName = '1'}
	if (diceLevel>=0.13 && diceLevel<0.15) {diceSecondName = '1X'}
	if (diceLevel>=0.11 && diceLevel<0.13) {diceSecondName = '0'}
	if (diceLevel<0.11) {diceSecondName = '0X'}
	
	var diceName = dicePrefix + diceSecondName;
	
	//
	// Dados extra
	//	
	var extraDices = 0;
	
	$('#plusList input[type=checkbox]').each(function(index, element) {
		if ($(this).attr('checked')) {
			extraDices += parseInt( eval( $(this).attr('value') ), 10);
		}
    });
	if (extraDices<0) {extraDiceName='Penalización'} else {extraDiceName='Bonificación'}
	
	//
	// CADENA A COPIAR EN EL POST
	//
	var actionString = '';
	actionString += 'Acción: ' + chosenAction.name + ' ( ' + chosenAction.uniqueId + ' )\n';
	actionString += '[roll=\"' + diceName + '\"]' + diceAmount + '[/roll]';
	if (extraDices!=0) {
		actionString +='[roll=\"' + extraDiceName + '\"]' + Math.abs(extraDices) + '[/roll]';
	}
	actionString += '\n';
	actionString += '[spoiler=Consecuencias de la acción]';
	actionString += chosenAction.results.join('\n');
	actionString += '[/spoiler]';
	alert(actionString);
}

$(document).ready(function(e) {
	start();
});