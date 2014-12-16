// References:
// - /jscripts/jquery-1.4.3.min.js
// - /jscripts/jqueryui/jqueryui-1.8.6.min.js

$(function()
{

	$('.interfaceWatermark').live('focus', function() 
	{
		if ($(this).hasClass('interfaceWatermark'))
		{
			$(this).val('');
			$(this).removeClass('interfaceWatermark');
		}	
	});		

	if (msOnDemandDocumentId == 34111)
	{
		interfaceHomeShowSignUpShow();
	}
	
	if (msOnDemandDocumentId == 33704)
	{
		interfaceHomeLogonShow();
	}	
	
	if (window.location.hash == '/#PASSWORDEXPIRED')
	{
	
	}
	
})

function interfaceHomeLogonHide(aParam)
{
	$('#divLogOn').html('<span id="spanLogOn">LOG ON</span>');
}

function interfaceHomeLogonShow(aParam)
{
	
	var aHTML = [];
	var h = -1;

	aHTML[++h] = '<form method="POST" action="https://start.1blankspace.com/directory/ondemand/logon.asp">';

	aHTML[++h] = '<input type="hidden" class="inputtext" name="reload" id="reload" value="1" />';

	
	aHTML[++h] = '<table id="tableInterfaceHomeLogon" class="interfaceHomeLogon">';
	
	aHTML[++h] = '<tr id="trInterfaceHomeLogonName" class="interfaceHomeLogon">' +
					'<td id="tdInterfaceHomeLogonNameValue" class="interfaceHomeLogon">' +
					'<input id="logon" name="logon" class="interfaceHomeLogon">' +
					'</td>';
					
	aHTML[++h] = '<td id="tdInterfaceHomeLogonPasswordValue" class="interfaceHomeLogon">' +
					'<input id="password" name="password" class="interfaceHomePassword interfaceMasterWatermark" type="password">' +
					'</td>';

	aHTML[++h] = '<td id="tdInterfaceHomeLogon" class="interfaceHomeLogon" colspan=2>' +
					'&nbsp;<input class="interfaceHomeSubmit" value="LOGON" tabindex="4" type="submit" id="submit" />' +
					' |&nbsp;<span id="spanInterfaceHomeSignUp"><a class="home" href="/signup">SIGNUP</a></span>' +
					'&nbsp;|&nbsp;<span id="spanInterfaceHomeMobile"><a class="home" href="/mobileapps">MOBILE</a></span>' +
					'</td>' +
					'</tr>';
					
	/* aHTML[++h] = '<tr id="trInterfaceHomeLogonSendPassword" class="interfaceHomeLogon">' +
					'<td id="tdInterfaceHomeLogonSendPassword" class="interfaceHomeLogon" colspan=2>' +
					'<a href="#" id="aInterfaceHomeLogonSendPassword">Send Password</a>' +
					'</td>' +
					'</tr>'; */
					
	aHTML[++h] = '<tr id="trInterfaceHomeLogonStatus" class="interfaceHomeLogon">' +
					'<td id="tdInterfaceHomeLogonStatus" class="interfaceHomeLogon" colspan=2>' +
					'&nbsp;' +
					'</td>' +
					'</tr>';
					
	aHTML[++h] = '</table>';					
	
	aHTML[++h] = '</form>';					
	
	$('#divLogOn').html(aHTML.join(''));
	
	var sLogonName = $.cookie('mydigitalspaceidlogonname')
	
	if (sLogonName != '' && sLogonName != null)
	{
		$('#logon').val(sLogonName);
		$('#password').focus();
	}
	else
	{
		$('#logon').focus();
	}
	
	$('#aInterfaceHomeLogonSendPassword').click(function()
	{
		InterfaceHomeLogonSendPasswordShow();
	});
	
}

function interfaceHomeShowSignUpShow()
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
					'<input id="inputInterfaceHomeSignUpSpaceName" class="inputInterfaceHomeText">' +
					'</td></tr>';	
					
	aHTML[++h] = '<tr id="trInterfaceHomeSignUpFirstName" class="interfaceMain">' +
					'<td id="tdInterfaceHomeSignUpFirstName" class="interfaceMain">' +
					'First Name' +
					'</td></tr>' +
					'<tr id="trInterfaceHomeSignUpFirstNameValue" class="interfaceMain">' +
					'<td id="tdInterfaceHomeSignUpFirstNameValue" class="interfaceMainText">' +
					'<input id="inputInterfaceHomeSignUpFirstName" class="inputInterfaceHomeText validate">' +
					'</td></tr>';	
					
	aHTML[++h] = '<tr id="trInterfaceHomeSignUpLastName" class="interfaceMain">' +
					'<td id="tdInterfaceHomeSignUpLastName" class="interfaceMain">' +
					'Last Name' +
					'</td></tr>' +
					'<tr id="trInterfaceHomeSignUpLastNameValue" class="interfaceMain">' +
					'<td id="tdInterfaceHomeSignUpLastNameValue" class="interfaceMainText">' +
					'<input id="inputInterfaceHomeSignUpLastName" class="inputInterfaceHomeText validate">' +
					'</td></tr>';	
					
	aHTML[++h] = '<tr id="trInterfaceHomeSignUpEmail" class="interfaceMain">' +
					'<td id="tdInterfaceHomeSignUpEmail" class="interfaceMain">' +
					'Email' +
					'</td></tr>' +
					'<tr id="trInterfaceHomeSignUpEmailValue" class="interfaceMain">' +
					'<td id="tdInterfaceHomeSignUpEmailValue" class="interfaceMainText">' +
					'<input id="inputInterfaceHomeSignUpEmail" class="inputInterfaceHomeText validate">' +
					'</td></tr>';		
	
	aHTML[++h] = '<tr id="trInterfaceHomeSignUpEmailConfirm" class="interfaceMain">' +
					'<td id="tdInterfaceHomeSignUpEmailConfirm" class="interfaceMain">' +
					'Confirm Email' +
					'</td></tr>' +
					'<tr id="trInterfaceHomeSignUpEmailConfirmValue" class="interfaceMain">' +
					'<td id="tdInterfaceHomeSignUpEmailConfirmValue" class="interfaceMainText">' +
					'<input id="inputInterfaceHomeSignUpEmailConfirm" class="inputInterfaceHomeText validate">' +
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
		interfaceHomeShowSignUp();
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
	
	if (sReturn == undefined)
	{
		var sReturn;
		var sParam = 'method=REGISTER_SPACE&site=475';
			
		sParam = sParam + '&firstname=' + encodeURIComponent($('#inputInterfaceHomeSignUpFirstName').val()) +
							'&surname=' + encodeURIComponent($('#inputInterfaceHomeSignUpLastName').val()) +
							'&email=' + encodeURIComponent($('#inputInterfaceHomeSignUpEmail').val()) +
							'&spacename=' + encodeURIComponent($('#inputInterfaceHomeSignUpSpaceName').val()) +
							'&emaildocument=34873';
		
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
			return false;
		}
		else 
		{
		
			$('#tdInterfaceHomeSignUp').html('Thank you for signing up.' +
					'<br/><br />An email has been sent to you with your logon details.' +
					'<br/><br />It was sent by ' + aReturn[3] + '.' +
					'<br/><br />The first 30 days are free and then we will ask for your credit card details to continue using the service.' +
					'<br/><br />If you have an iPhone or iPad, search the AppStore for "1blankspace".')
					
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


