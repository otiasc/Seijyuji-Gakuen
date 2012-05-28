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
	
	// Última cosa de la lista (solo para comprobar que no se repiten)
	var lastAction = '';
	$('#actionList').html('');
	while(i<actions.length) {

		// Posición en la que se encuentra
		var posicion = actions[i].name.indexOf(currentPage);
		// EJ índice de 'Atacar/Tamer/'
		
		if (posicion==0) {
			// Disponible para avanzar en subcategoría
			
			// Texto de la siguiente acción
			var t = actions[i].name.slice(currentPage.length);
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
	var j=0;
	$('#plusList').html('');
	$('#result').css('display','none');
	while (j<actions.length) {
		if (actions[j].name==currentPage.slice(0,-1)) {
			loadAction(j);
		}
		j++;
	}
}
function loadAction(actionId) {
	$('#result').css('display','block');
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


function executecalculus(base) {
	var i = 0;
	var points = 0;
	var basePoints = 0;
	
	while (i<base.length) {
		// Razón
		var variable = parseInt(base[i]);
		if (isNaN(variable)) {
			var calc = eval(base[i]);
			points +=calc;
		} else {
			basePoints += variable;
			points += basePoints;
		}
		i++;
	}
	return points;
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
	var base1 = actions[actionId].equation.split('+');
	var base2 = actions[actionId].equation2.split('+');
	
	var p1 = executecalculus(base1);
	var p2 = executecalculus(base2);
	alert(p1 + ":" + p2)
	
	// Por cada base
	
	actionString = 'Acción: ' + actions[actionId].name + ' ( ' + actions[actionId].uniqueId + ' )';
	
	// Parámetros
	
	// Positivos y negativos
	// Cadena con las condiciones extra
	
	// Numero de dados extra
	conditions2String = '';
	var extraDices = 0;
	$('#plusList input[type=checkbox]').each(function(index, element) {
		if ($(this).attr('checked')) {
			conditions2String += '-' + $(this).parent('label').text() + ' ( ' + $(this).attr('value') + ' )' + '\n'
			extraDices += parseInt( eval( $(this).attr('value') ), 10);
		}
    });
	
	// Resultado
	copyString = '\n[hr]';
	copyString+= actionString;
	/*
	copyString+= '[spoiler=' + actionString + ', Extra: ' + extraDices + ']';
	copyString+= 'Base: ' + basePoints + '\n';
	copyString+= conditionsString + '\n';
	
	copyString+= 'Dados extra:\n';
	copyString+= conditions2String;
	copyString+= '[/spoiler]';
	copyString+='';
	*/
	
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
	nextPage('');
}


/*

	OBTENER LISTA DE USUARIOS

*/
function userSelect(i, h) {
	$('#usersearch').attr('value', i);
	$('#enemyIframe').attr('src', h);
	hide();
	$('#enemyIframe').load(function(e) {
        process();
    });
}

var R, V, F, I, D;
var PUN, DOC, ESG, MEM, FAM

var Rb, Vb, Fb, Ib, Db;
var PUNb, DOCb, ESGb, MEMb, FAMb;

function process() {
	
	R = 0;//parseInt($('#iframeContent').contents().find('#profile_field_10_1').attr('value'));
	V = parseInt($('#profileIframe').contents().find('#profile_field_10_3').attr('value'));
	F = parseInt($('#profileIframe').contents().find('#profile_field_10_1').attr('value'));
	I = parseInt($('#profileIframe').contents().find('#profile_field_10_2').attr('value'));
	D = parseInt($('#profileIframe').contents().find('#profile_field_10_4').attr('value'));
	
	var FD; // Fuerza demoniaca
	FD = 0;
	
	PUN = parseInt($('#profileIframe').contents().find('#profile_field_10_5').attr('value'));
	DOC = parseInt($('#profileIframe').contents().find('#profile_field_10_7').attr('value'));
	ESG = parseInt($('#profileIframe').contents().find('#profile_field_10_6').attr('value'));
	MEM = parseInt($('#profileIframe').contents().find('#profile_field_10_9').attr('value'));
	FAM = parseInt($('#profileIframe').contents().find('#profile_field_10_8').attr('value'));
	

	
	Rb = 0;//parseInt($('#iframeContent').contents().find('#profile_field_10_1').attr('value'));
	Vb = parseInt($('#enemyIframe').contents().find('#field_id3 .field_uneditable').html());
	Fb = parseInt($('#enemyIframe').contents().find('#field_id1 .field_uneditable').html());
	Ib = parseInt($('#enemyIframe').contents().find('#field_id2 .field_uneditable').html());
	Db = parseInt($('#enemyIframe').contents().find('#field_id4 .field_uneditable').html());
	
	var FD; // Fuerza demoniaca
	FD = 0;
	
	PUNb = parseInt($('#enemyIframe').contents().find('#field_id5 .field_uneditable').html());
	DOCb = parseInt($('#enemyIframe').contents().find('#field_id7 .field_uneditable').html());
	ESGb = parseInt($('#enemyIframe').contents().find('#field_id6 .field_uneditable').html());
	MEMb = parseInt($('#enemyIframe').contents().find('#field_id9 .field_uneditable').html());
	FAMb = parseInt($('#enemyIframe').contents().find('#field_id8 .field_uneditable').html());
	
	
	var t = 'V' + V + ':' + Vb + '\n';
	t    += 'F' + F + ':' + Fb + '\n';
	t    += 'I' + I + ':' + Ib + '\n';
	t    += 'D' + D + ':' + Db + '\n';
	t    += 'PUN' + PUN + ':' + PUNb + '\n';
	t    += 'DOC' + DOC + ':' + DOCb + '\n';
	t    += 'ESG' + ESG + ':' + ESGb + '\n';
	t    += 'MEM' + MEM + ':' + MEMb + '\n';
	t    += 'FAM' + FAM + ':' + FAMb + '\n';
}

function toggle() {
	$('#contextmenu').removeClass('disabled');
	
	var found = new Array();
	var s = $('#usersearch').attr('value');
	
	if (s.length>0) {
		for (var i=0; i<userArray.length; i++) {
			var f = userArray[i].name.toLowerCase().indexOf(s.toLowerCase());
			if (f!=-1) {
				found.push(userArray[i]);
			}
		}
		
		$('#contextmenu ul').html('');
		for (var j=0; j<found.length; j++) {
			found[j].li.appendTo('#contextmenu ul');
		}
	} else {
		for (var j=0; j<userArray.length; j++) {
			userArray[j].li
				.appendTo('#contextmenu ul');
		}
	}
}
function hide() {
	$('#contextmenu').addClass('disabled');
}

var userArray = new Array();
$(document).ready(function(e) {
	hide();
	$('#memberlistIframe').load(function(e) {
		// tabla con la lista
		var h = $('#memberlistIframe').contents().find('#memberlist tbody tr .avatar-mini a').each(function(index, element) {
			var li = $('<li></li>')
				.append( $('<img />').attr('src', $(this).children('img').attr('src') )  )
				.append( $('<a></a>').attr('href', 'javascript:userSelect(\"' + $(this).text().slice(1) + '\", \"' + $(this).attr('href') + '\")').text( $(this).text().slice(1) ) );
				
			userArray.push({
				name:$(this).text().slice(1),
				a:$(this),
				li:li
			});
			
			toggle();
		});
	});
	$('#usersearch').focus(function(e) {
		$('#usersearch').attr('valie', '');
		toggle();
	});
	$('#usersearch').keyup(function(e) {
		toggle();
    });
});