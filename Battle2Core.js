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

function process() {
	var R, V, F, I, D;
	
	R = 0;//parseInt($('#iframeContent').contents().find('#profile_field_10_1').attr('value'));
	V = parseInt($('#profileIframe').contents().find('#profile_field_10_3').attr('value'));
	F = parseInt($('#profileIframe').contents().find('#profile_field_10_1').attr('value'));
	I = parseInt($('#profileIframe').contents().find('#profile_field_10_2').attr('value'));
	D = parseInt($('#profileIframe').contents().find('#profile_field_10_4').attr('value'));
	
	var FD; // Fuerza demoniaca
	FD = 0;
	
	var PUN, DOC, ESG, MEM, FAM
	PUN = parseInt($('#profileIframe').contents().find('#profile_field_10_5').attr('value'));
	DOC = parseInt($('#profileIframe').contents().find('#profile_field_10_7').attr('value'));
	ESG = parseInt($('#profileIframe').contents().find('#profile_field_10_6').attr('value'));
	MEM = parseInt($('#profileIframe').contents().find('#profile_field_10_9').attr('value'));
	FAM = parseInt($('#profileIframe').contents().find('#profile_field_10_8').attr('value'));
	
	var Rb, Vb, Fb, Ib, Db;
	
	Rb = 0;//parseInt($('#iframeContent').contents().find('#profile_field_10_1').attr('value'));
	Vb = parseInt($('#enemyIframe').contents().find('#field_id3 .field_uneditable').html());
	Fb = parseInt($('#enemyIframe').contents().find('#field_id1 .field_uneditable').html());
	Ib = parseInt($('#enemyIframe').contents().find('#field_id2 .field_uneditable').html());
	Db = parseInt($('#enemyIframe').contents().find('#field_id4 .field_uneditable').html());
	
	var FD; // Fuerza demoniaca
	FD = 0;
	
	var PUNb, DOCb, ESGb, MEMb, FAMb;
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
	alert(t)
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
			
			$('#contextmenu a').click(function(e) {
				alert($(this).attr('href'));
            });
		});
	});
	$('#usersearch').focus(function(e) {
		toggle();
	});
	$('#usersearch').keyup(function(e) {
		toggle();
    });
});