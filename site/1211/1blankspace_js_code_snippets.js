//WORKING WITH JSON RESPONSE FROM ONDEMAND

if (oResponse.data.rows.length == 0)
{
}
else
{
	$.each(oResponse.data.rows, function()
	{	
		//this.
	});
}
		
$('#tdInterfaceMessagingConversationHomeMostLikely').html(aHTML.join(''));



//ADVANCED SEARCH

var oSearch = new AdvancedSearch();
oSearch.endPoint = 'contact';
oSearch.method = 'CONTACT_PERSON_SEARCH';
oSearch.addField('firstname,surname,contactbusiness,contactbusinesstext,title,titletext,position,workphone,fax,mobile,email,' +
						 'customerstatus,customerstatustext,primarycontactfor,gender,gendertext,' +
						 'streetaddress1,streetaddress2,streetsuburb,streetstate,streetpostcode,streetcountry,' +
						 'mailingaddress1,mailingaddress2,mailingsuburb,mailingstate,mailingpostcode,mailingcountry');
oSearch.addFilter('id', 'EQUAL_TO', sSearchContext);
oSearch.getResults(function(data) {interfaceContactPersonShow(aParam, data)});



//WORKING WITH JSON RESPONSE FROM ONDEMAND - XHTML TABLE

var aHTML = [];

if (oResponse.data.rows.length == 0)
{
	aHTML.push('<table id="tableInterfaceMessagingConversationHomeMostLikely">');
	aHTML.push('<tr class="trInterfaceMessagingConversationHomeMostLikelyNothing">');
	aHTML.push('<td class="tdInterfaceMessagingConversationHomeMostLikelyNothing">Click New to create a MessagingConversation item.</td>');
	aHTML.push('</tr>');
	aHTML.push('</table>');
}
else
{

	aHTML.push('<table id="tableInterfaceBewsHomeMostLikely">');
	aHTML.push('<tr>');
	aHTML.push('<td class="interfaceMain">MOST LIKELY</td>');
	aHTML.push('</tr>');
	
	$.each(oResponse.data.rows, function()
	{	
		aHTML.push('<tr class="interfaceMainRow">');
		aHTML.push('<td id="interfaceMessagingConversationHomeMostLikely_Title-' + this.id + 
								'" class="interfaceHomeMostLikely">' +
								this.title +
								'</td>');
		aHTML.push('</tr>');
	});
	
	aHTML.push('</tbody></table>');
				
}
		
$('#tdInterfaceMessagingConversationHomeMostLikely').html(aHTML.join(''));	

//REUSABLE DIV

interfaceMasterViewportOptionsShow({
			xhtmlElementID: sXHTMLElementID,
			offsetLeft: -251,
			offsetTop: 6,
			xhtml: aHTML.join(''),
			forceShow: true
		});
		
		
//AJAX

var sData = 'message=' + interfaceMasterFormatSave()

sData += 

$.ajax(
{
	type: 'POST',
	url: '/ondemand/network/?method=NETWORK_USER_SEARCH',
	data: sData,
	dataType: 'json',
	success: function(data){interfaceMessagingConversationParticipantsAdd(aParam, data)}
});		

//GET ID

var aXHTMLElementID = sXHTMLElementID.split('-');
var sElementID = aXHTMLElementID[0];
var sElementContext = aXHTMLElementID[1];
	
//DELAYED SEARCH FOR TYPING

$('#inputInterfaceMasterViewportControlSearch').keyup(function(event)
{
	if (giKeyPressTimeoutId != 0) {clearTimeout(giKeyPressTimeoutId)};
	giKeyPressTimeoutId = setTimeout("interfaceMessagingSearch('inputInterfaceMasterViewportControlSearch')", giWaitForStop);
});