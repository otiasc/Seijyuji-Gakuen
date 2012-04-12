function hey() {
	alert($(parent.document).find('#text_editor_textarea').attr('value'));
}

var param = new Array(0,0,0,0);
var attr = new Array('Rango', 'Fuerza', 'Velocidad', 'Inteligencia');
var ranks = new Array('Exwire', '2ª Baja', '1ª Baja', '2ª Media', '1ª Media', '2ª Alta', '1ª Alta', 'Honor', 'Arc', 'Paladin');
var currentPage = '';
function nextPage(action) {
	// Sistema para cambiar de página
	currentPage = action;
	// Next pages
	loadPage();
}
function loadPage() {
	// Cargar la barra superior
	var cpa = currentPage.split('/');
	$('#navBar').html('');
	
	var newLi2 = $('<li></li>');
	
	var newA2 = $('<a />', {
		href: 'javascript:void(0)',	text: 'Índice',	onclick: 'nextPage(\"\")'
	}).appendTo(newLi2);
	
	newLi2.appendTo('#navBar');
	
	var previous = '';
	for (var j=0; j<cpa.length-1; j++) {
		previous += cpa[j] + '/'
		var newLi = $('<li></li>');
		var newA = $('<a />', {
			href: 'javascript:void(0)',	text: cpa[j], onclick: 'nextPage(\"' + previous +  '\")'
		}).appendTo(newLi);
		
		// Poner en la lista
		newLi.appendTo('#navBar');
	}
	// Cargar todo lo que sea currentPage
	// EJ currentPage = 'Atacar/Tamer'
	var i = 0;
	
	// Última cosa de la lista (solo para comprobar que no se repiten
	var lastAction = '';
	$('#actionList').html('');
	while(i<actionsIndex.length) {

		// Posición en la que se encuentra
		var posicion = actionsIndex[i].indexOf(currentPage);
		// EJ índice de 'Atacar/Tamer/'
		
		if (posicion==0) {
			// Disponible para avanzar en subcategoría
			
			// Texto de la siguiente acción
			var t = actionsIndex[i].slice(currentPage.length);
			// EJ 'Invocación/Invocar familiar'
			
			// Si el texto tiene barras, quedarnos solo con lo primero
			if (t.indexOf('/')!=-1) {t = t.slice(0, t.indexOf('/'))}
			// EJ 'Invocación'
			
			// Si la acción es la primera vez que se realiza, adelante
			if (t!=lastAction) {
				// EJ 'Invocacion' != ''
				
				// Preparar elemento de menú
				var newLi = $('<li></li>');
				var newA = $('<a />', {
					href: 'javascript:void(0)',
					text: t,
					onclick: 'nextPage(\"' + currentPage + t + '/' +  '\")'
				}).appendTo(newLi);
				
				// Poner en la lista
				newLi.appendTo('#actionList');
				lastAction = t;
			}
			
		}
		i++;
	}
}
function loadAction(index) {
	$('#actionId').attr('value', actionId);
	var extras = actions[actionId].bonus;
	var i = 0;
	
	$('#plusList').html('');
	
	while(i<extras.length) {
		var newLi = $('<li></li>');
		var newLabel = $('<label />');
		var newInput = $('<input type="checkbox" value="' + extras[i].slice(0,extras[i].indexOf('|')) +'" />', {
			name: 'p' + i,
			id: 'p' + i + 'i',
		}).appendTo(newLabel);
		newLabel.html( newLabel.html() + extras[i].slice(extras[i].indexOf('|')+1) );
		newLabel.appendTo(newLi);
		newLi.appendTo('#plusList');
		i++;
	}
}

function calculate() {
	// Cadena a mostrar
	var copyString = '[hr]';
	//
	var actionString = '';
	var conditionsString = '';
	var conditions2String = '';
	var rollString = '';
	var resultsString = '';
	
	// Acción
	var actionId = $('#actionId').attr('value');
	var base = actions[actionId].equation.split('+');
	
	// Por cada base
	var R, V, F, I
	R = 3;//parseInt($('#iframeContent').contents().find('#profile_field_10_1').attr('value'));
	V = 3;//parseInt($('#iframeContent').contents().find('#profile_field_10_1').attr('value'));
	F = 2;//parseInt($('#iframeContent').contents().find('#profile_field_10_1').attr('value'));
	I = 1;//parseInt($('#iframeContent').contents().find('#profile_field_10_1').attr('value'));
	
	var i = 0;
	var points = 0;
	var basePoints = 0;
	
	while (i<base.length) {
		// Razón
		var variable = parseInt(base[i]);
		if (isNaN(variable)) {
			var calc = eval(base[i]);
			points +=calc;
			
			if (calc>0) {
				conditionsString += '+' + calc;
			} else if (calc<0) {
				conditionsString += calc;
			}
			if (calc!=0) {
				if (base[i].indexOf('F')!=-1) {conditionsString += ' por fuerza,'}
				if (base[i].indexOf('V')!=-1) {conditionsString += ' por velocidad,'}
				if (base[i].indexOf('I')!=-1) {conditionsString += ' por inteligencia,'}
				if (base[i].indexOf('R')!=-1) {conditionsString += ' por rango (' + ranks[R] + '),'}
				conditionsString = conditionsString.slice(0,-1);
				conditionsString += '\n';
			}
		} else {
			basePoints += variable;
			points += basePoints;
		}
		i++;
	}
	actionString = 'Acción: ' + actions[actionId].name + ' (' + points + ')';
	
	// Parámetros
	
	// Positivos y negativos
	// Cadena con las condiciones extra
	
	// Numero de dados extra
	conditions2String = '';
	var extraDices = 0;
	$('#plusList input[type=checkbox]').each(function(index, element) {
		if ($(this).attr('checked')) {
			conditions2String += '-' + $(this).parent('label').text() + ' (' + $(this).attr('value') + ')' + '\n'
			extraDices += parseInt( $(this).attr('value'), 10);
		}
    });
	
	// Resultado
	if (param[0]*base[0]>0) {conditionsString+= '+' + (param[0]*base[0]) + ' por ' + attr[0] + ':' + ranks[param[0]] + '\n'};
	if (param[1]*base[1]>0) {conditionsString+= '+' + (param[1]*base[1]) + ' por ' + attr[1] + '\n'};
	if (param[2]*base[2]>0) {conditionsString+= '+' + (param[2]*base[2]) + ' por ' + attr[2] + '\n'};
	if (param[3]*base[3]>0) {conditionsString+= '+' + (param[3]*base[3]) + ' por ' + attr[3] + '\n'};
	
	var alertString = '';
	
	alertString += actionString + '\n';
	alertString += 'Base: ' + basePoints + '\n';
	alertString += conditionsString + '\n';
	alertString += '\nDados extra: ' + extraDices + '\n';
	alertString += conditions2String;
	
	alert(alertString);
	
	copyString = '\n[hr]';
	copyString+= '[spoiler=Tirada: ' + actionString + ', Extra: ' + extraDices + ']';
	copyString+= 'Base: ' + basePoints + '\n';
	copyString+= conditionsString + '\n';
	
	copyString+= 'Dados extra:\n';
	copyString+= conditions2String;
	copyString+= '[/spoiler]';
	copyString+='';
	
	copyString+='[roll=\"' + dicePrefix + actions[actionId].prefix + '\"]' + points + '[/roll]';
	
	var extraDiceName
	if (extraDices<0) {extraDiceName='Penalización'} else {extraDiceName='Bonificación'}
	if (extraDices!=0) {
		copyString+='[roll=\"' + extraDiceName + '\"]' + Math.abs(extraDices) + '[/roll]';
	}
	copyString+= '\n';
	copyString+= '[spoiler=Consecuencias de la acción]';
	copyString+= actions[actionId].results.join('\n');
	copyString+= '[/spoiler]';
	
	var t = $(parent.document).find('#text_editor_textarea').attr('value');
	$(parent.document).find('#text_editor_textarea').attr('value', t + copyString);
}
$(document).ready(function(e) {
	loadPage();
});