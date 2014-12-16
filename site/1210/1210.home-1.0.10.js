window.nsMydigtalstructure = {};

Function.prototype.method = function(name, func)
{
	if (!this.prototype[name])
	{
		this.prototype[name] = func;
		return this;
	}
};

String.method('trim', function () {return this.replace(/^\s+|\s+$/g, '');});

$(function() 
{	
	$('#h3RegisterNow').click(function() 
	{
		registerNow();
	});

	$('#banner_home').click(function() 
	{
		registerNow();
	});
	
	if (msOnDemandDocumentId == 42989)
	{
		interfaceHomeShowSignUpShow({emailDocumentID: 42824});
	}
	
	prettyPrint();

	methodAttributesInit();

	initGetFields();
});
		
function registerNow()
{	
	var aHTML = [];
	
	aHTML.push('<table style="width: 100%" cellspacing="0" border="0">');
	aHTML.push('<tr><td>First Name *</td></tr>');
	aHTML.push('<tr>');
	aHTML.push('<td style="width: 100%"><input id="inputFirstName" style="width: 100%"></td>');
	aHTML.push('</tr>');
	aHTML.push('<tr><td style="padding-top:10px;">Last Name</td></tr>');
	aHTML.push('<tr>');
	aHTML.push('<td style="width: 100%"><input id="inputLastName" style="width: 100%"></td>');
	aHTML.push('</tr>');
	aHTML.push('<tr><td style="padding-top:10px;">Email *</td></tr>');
	aHTML.push('<tr>');
	aHTML.push('<td style="width: 100%"><input id="inputEmail" style="width: 100%"></td>');
	aHTML.push('</tr>');
	aHTML.push('<tr><td style="padding-top:10px;">Comments</td></tr>');
	aHTML.push('<tr>');
	aHTML.push('<td style="width: 100%"><textarea style="width: 100%" rows="4" cols="35" id="inputComments"' +
					' class="inputInterfaceMainTextMulti"></textarea>');
	aHTML.push('</tr>');
	aHTML.push('</table>');
	
	$('#divRegisterNow').html(aHTML.join(''));
	
	$('#divRegisterNow').dialog({
			height: 500,
			width: 400,
			title: 'Register Now',
			modal: true,
			buttons: {
				"Cancel" : function(){
					$('#divRegisterNow').dialog( "close" );
				},
				"Register" : function(){
					registerNowProcess();
				}
			}
	});
}

function registerNowProcess(oParam, oResponse)
{
	if (oResponse == undefined)
	{	
	
		if (interfaceMasterFormatSave($('#inputFirstName').val()) == '' || interfaceMasterFormatSave($('#inputEmail').val()) == '')
		{
			alert('We are pretty laid back, but our event co-ordinator will kill us if we don\'t at least get your first name and email.');
		}
		else
		{
			var aHTML = [];
			var sParam = 'referenceprefix=DEVWITH';
	
			sParam += '&firstname=' + interfaceMasterFormatSave($('#inputFirstName').val());
			sParam += '&surname=' + interfaceMasterFormatSave($('#inputLastName').val());
			sParam += '&email=' + interfaceMasterFormatSave($('#inputEmail').val());
			sParam += '&notes=' + interfaceMasterFormatSave($('#inputComments').val());
		
			aHTML.push('<table style="width: 100%" cellspacing="0" border="0">');
			aHTML.push('<tr><td>Processing your registration...</td></tr>');
			aHTML.push('</table>');
			
			$('#divRegisterNow').html(aHTML.join(''));
			
			$.ajax(
			{
				type: 'POST',
				url: '/ondemand/site/?method=SITE_ENQUIRY_ADD&id=849',
				data: sParam,
				dataType: 'json',
				async: true,
				cache: false,
				success: function(data) 
				{
					registerNowProcess(oParam, data);
				}
			});
		}
	}
	else
	{
		var aHTML = [];
		
		aHTML.push('<table style="width: 100%" cellspacing="0" border="0">');
		aHTML.push('<tbody>');
		
		if (oResponse.status == 'ER')
		{	
			aHTML.push('<tr><td>Sorry, but there has been an error processing your registration, please contact ibCom @ <a href="mailto:developwith@ibcom.biz">developwith@ibcom.biz</a> and we will sort it out for you.</td></tr>');
		}
		else
		{
			aHTML.push('<tr><td>All done!<br /><br />Thanks for registering and we look forward to catching up at the get together.<br /><br />If you have any questions, please contact us at:<br /><br /><a href="mailto:developwith@ibcom.biz">developwith@ibcom.biz</a><br /><br />Get the latest news at:<br /><br /><a href="http://twitter.com/mydsondemand" target="_blank">twitter.com/mydsondemand</a></td></tr>');
		}	
	
		aHTML.push('</tbody>');
		aHTML.push('</table>');
		
		$('#divRegisterNow').html(aHTML.join(''));
		
		$('#divRegisterNow').dialog({
			height: 500,
			width: 400,
			title: 'Register Now - All Done!',
			modal: true,
			buttons: {
				"Close" : function(){
					$('#divRegisterNow').dialog( "close" );
				}
			}
	});
				
	}	
}

function interfaceMasterFormatSave(sValue)
{

	if (sValue == undefined || sValue == 'undefined') { sValue = ''; }
	
	return encodeURIComponent(sValue)

}

function interfaceHomeShowSignUpShow(aParam)
{
	
	var aHTML = [];
	var h = -1;
		
	aHTML[++h] = '<table id="tableInterfaceHomeSignUp" class="interfaceMain">';
	
	aHTML[++h] = '<tr id="trInterfaceHomeSignUpSpaceName" class="interfaceMain">' +
					'<td id="tdInterfaceHomeSignUpSpaceName" class="interfaceMain">' +
					'Business or Organisation Name (optional)' +
					'</td></tr>' +
					'<tr id="trInterfaceHomeSignUpSpaceNameValue" class="interfaceMain">' +
					'<td id="tdInterfaceHomeSignUpSpaceNameValue" class="interfaceMainText">' +
					'<input id="inputInterfaceHomeSignUpSpaceName" class="inputInterfaceHomeText" style="width:350px;height:30px;font-size:1.25em;">' +
					'</td></tr>';	
					
	aHTML[++h] = '<tr id="trInterfaceHomeSignUpFirstName" class="interfaceMain">' +
					'<td id="tdInterfaceHomeSignUpFirstName" class="interfaceMain" style="padding-top:15px;">' +
					'First Name' +
					'</td></tr>' +
					'<tr id="trInterfaceHomeSignUpFirstNameValue" class="interfaceMain">' +
					'<td id="tdInterfaceHomeSignUpFirstNameValue" class="interfaceMainText">' +
					'<input id="inputInterfaceHomeSignUpFirstName" class="inputInterfaceHomeText validate" style="width:350px;height:30px;font-size:1.25em;">' +
					'</td></tr>';	
					
	aHTML[++h] = '<tr id="trInterfaceHomeSignUpLastName" class="interfaceMain">' +
					'<td id="tdInterfaceHomeSignUpLastName" class="interfaceMain" style="padding-top:15px;">' +
					'Last Name' +
					'</td></tr>' +
					'<tr id="trInterfaceHomeSignUpLastNameValue" class="interfaceMain">' +
					'<td id="tdInterfaceHomeSignUpLastNameValue" class="interfaceMainText">' +
					'<input id="inputInterfaceHomeSignUpLastName" class="inputInterfaceHomeText validate" style="width:350px;height:30px;font-size:1.25em;">' +
					'</td></tr>';	
					
	aHTML[++h] = '<tr id="trInterfaceHomeSignUpEmail" class="interfaceMain">' +
					'<td id="tdInterfaceHomeSignUpEmail" class="interfaceMain" style="padding-top:15px;">' +
					'Email' +
					'</td></tr>' +
					'<tr id="trInterfaceHomeSignUpEmailValue" class="interfaceMain">' +
					'<td id="tdInterfaceHomeSignUpEmailValue" class="interfaceMainText">' +
					'<input id="inputInterfaceHomeSignUpEmail" class="inputInterfaceHomeText validate" style="width:350px;height:30px;font-size:1.25em;">' +
					'</td></tr>';		
	
	aHTML[++h] = '<tr id="trInterfaceHomeSignUpEmailConfirm" class="interfaceMain">' +
					'<td id="tdInterfaceHomeSignUpEmailConfirm" class="interfaceMain" style="padding-top:15px;">' +
					'Confirm Email' +
					'</td></tr>' +
					'<tr id="trInterfaceHomeSignUpEmailConfirmValue" class="interfaceMain">' +
					'<td id="tdInterfaceHomeSignUpEmailConfirmValue" class="interfaceMainText">' +
					'<input id="inputInterfaceHomeSignUpEmailConfirm" class="inputInterfaceHomeText validate" style="width:350px;height:30px;font-size:1.25em;">' +
					'</td></tr>';		
	
	aHTML[++h] = '</table>';	
			
	aHTML[++h] = '<table id="tableInterfaceHomeSignUpAction" class="interfaceMain">';
		
	aHTML[++h] = '<tr><td style="text-align:right;padding-top:10px;" id="tdInterfaceHomeSignUpAction" class="interfaceMainAction">' +
					'<span id="spanInterfaceHomeSignUp">Sign Up</span>' +
					'</td></tr>';
	
	aHTML[++h] = '</table>';					
	
	$('#tdInterfaceHomeSignUp').html(aHTML.join(''));			
	
	$('#spanInterfaceHomeSignUp').button(
	{
		label: "Sign Up"
	})
	.click(function() {
		interfaceHomeShowSignUp(aParam);
	})
	
	$('.validate').keyup(function()
	{
		interfaceHomeSignupValidation();
	});	
	
	interfaceHomeSignupValidation();
}

function interfaceHomeSignupValidation()
{
	var bValidationIssues = false;
	
	if ($('#inputInterfaceHomeSignUpFirstName').val() == '')
	{
		$('#inputInterfaceHomeSignUpFirstName').addClass('interfaceNotValid');
		bValidationIssues = true;
	}
	else
	{
		$('#inputInterfaceHomeSignUpFirstName').removeClass('interfaceNotValid');
	}
	
	if ($('#inputInterfaceHomeSignUpLastName').val() == '')
	{
		$('#inputInterfaceHomeSignUpLastName').addClass('interfaceNotValid');
		bValidationIssues = true;
	}
	else
	{
		$('#inputInterfaceHomeSignUpLastName').removeClass('interfaceNotValid');
	}
	
	if ($('#inputInterfaceHomeSignUpEmail').val() == '')
	{
		$('#inputInterfaceHomeSignUpEmail').addClass('interfaceNotValid');
		bValidationIssues = true;
	}
	else
	{
		$('#inputInterfaceHomeSignUpEmail').removeClass('interfaceNotValid');
	}
	
	if ($('#inputInterfaceHomeSignUpEmail').val() != $('#inputInterfaceHomeSignUpEmailConfirm').val())
	{
		$('#inputInterfaceHomeSignUpEmailConfirm').addClass('interfaceNotValid');
		bValidationIssues = true;
	}
	else
	{
		$('#inputInterfaceHomeSignUpEmailConfirm').removeClass('interfaceNotValid');
	}
	
	$('#spanInterfaceHomeSignUp').button({disabled: bValidationIssues})
}

function interfaceHomeShowSignUp(aParam, sReturn)
{
	var iEmailDocumentID = 34873;
	
	if (aParam != undefined)
	{
		if (aParam.emailDocumentID != undefined) {iEmailDocumentID = aParam.emailDocumentID}
	}	
	
	if (sReturn == undefined)
	{
		var sReturn;
		var sParam = 'method=REGISTER_SPACE&site=475';
			
		sParam = sParam + '&firstname=' + encodeURIComponent($('#inputInterfaceHomeSignUpFirstName').val()) +
							'&surname=' + encodeURIComponent($('#inputInterfaceHomeSignUpLastName').val()) +
							'&email=' + encodeURIComponent($('#inputInterfaceHomeSignUpEmail').val()) +
							'&spacename=' + encodeURIComponent($('#inputInterfaceHomeSignUpSpaceName').val()) +
							'&emaildocument=' + iEmailDocumentID;
		
		$('#tdInterfaceHomeSignUp').html('<img src="/site/1210/ajax-loader.gif">');
		
		$.ajax(
		{
			type: 'POST',
			url: '/directory/ondemand/register.asp?' + sParam,
			dataType: 'text',
			success: function(data) {interfaceHomeShowSignUp(aParam, data)}
		});
		
	}
	else
	{	
	
		var aReturn = sReturn.split('|');
		
		if (aReturn[0] == 'ER')
		{
			alert('This email has already been registered with this site!');
			interfaceHomeShowSignUpShow({emailDocumentID: 42824});
			return false;
		}
		else 
		{
		
			$('#tdInterfaceHomeSignUp').html('Thank you for signing up.' +
					'<br/><br />An email has been sent to you with your logon details.' +
					'<br/><br />It was sent by ' + aReturn[3] + '.' +
					'<br/><br /><a href="/gettingstarted">Getting Started</a>' +
					'<br/><br /><a href="/gettingstarted_first_app_ide">Building your first app using simple jQuery IDE</a>');
					
			$('#spanInterfaceMasterLogonShow').button(
			{
				label: "Logon Now"
			})
			.click(function() 
			{
				document.location.href = 'http://1blankspace.com';
			});	
			
		}
	}	
}

function methodAttributesInit(iStep)
{
	if (iStep == undefined) {iStep = 1}

	if (iStep == 1)
	{
		if (window.nsMydigtalstructure.rpc == undefined)
		{
			$.ajax(
			{
				type: 'GET',
				url: '/jscripts/1blankspace.rpc-1.0.1.json',
				dataType: 'json',
				success: function(data) {
					window.nsMydigtalstructure.rpc = data.methods;
					methodAttributesInit(2);
				}
			});
		}
		else
		{
			methodAttributesInit(2);
		}
	}	

	if (iStep == 2)
	{
		if (window.nsMydigtalstructure.advancedsearch == undefined)
		{
			$.ajax(
			{
				type: 'GET',
				url: '/jscripts/1blankspace.advancedsearch-1.0.0.json',
				dataType: 'json',
				success: function(data) {
					window.nsMydigtalstructure.advancedsearch = data.methods;
					methodAttributesSet();
				}
			});
		}
		else
		{
			methodAttributesSet();
		}	
	}	
}

function methodAttributesSet()
{
	var aHTML = [];

	if ($.inArray(window.document.title, window.nsMydigtalstructure.rpc) != -1)
	{
		aHTML.push('<a href="/advancedsearch"><img border=0 title="Advanced Search" src="/site/1210/mydigitalstructure_AS.png" alt="Advanced Search" width="26" height="20" /></a>');
	}
	if ($.inArray(window.document.title, window.nsMydigtalstructure.advancedsearch) != -1)
	{
		aHTML.push('<img title="RPC" src="/site/1210/mydigitalstructure_RPC.png" alt="RPC" width="34" height="20" />');

		var sURL = $('.onDemandMethodReferenceHeaderMethodURL:first').html();
		sURL = sURL.replace('/ondemand', '/rpc');
		$('.onDemandMethodReferenceHeaderMethodURL:first').html(sURL);
	}

	$('.onDemandMethodReferenceHeaderStatus:first').html(aHTML.join(''));

}

function initGetFields()
{
	var aHTML = [];

	$('.onDemandMethodReferenceParametersHeaderColumn4:first').css('text-align', 'right');
	$('.onDemandMethodReferenceParametersHeaderColumn4:first').html('<span id="getFields" style="color: #999999; font-size: 0.875em; cursor: pointer;">Get List</span>');
	$('#getFields').click(function()
	{
		$('.onDemandMethodReferenceParametersColumn2').each
		(
			function ()
			{
				if ( ($(this).html()).toLowerCase().indexOf('audit fields') == -1 && ($(this).html()).toLowerCase() != '&nbsp;')
				{
					aHTML.push( ($(this).html()).toLowerCase() );
				}	
			}
		);

		$('.onDemandMethodReferenceParametersHeaderColumn4:first').closest('table')
		.css('table-layout', 'fixed')
		.css('word-wrap','break-word');

		$('.onDemandMethodReferenceParametersHeaderColumn4:first').parent().after
		('<tr><td></td><td colspan=3 style="width:500px; overflow: hidden; color: #666666; font-size: 0.875em; font-family: courier new;">' + aHTML.join(',') + '</td></tr>');

		$('.onDemandMethodReferenceParametersHeaderColumn4:first').html('&nbsp;');
	});
}


