// define a callback function, which accepts the returned JSON data as its only argument
/*
function response(data) {
    // JSON data in form of a JavaScript object
    console.log(data);
}
// create a script tag with the external request URL
// include "response" as value of the GET param "callback" in the URL
var script = document.createElement('script');
script.src = 'https://somewhere/api/?callback=response';
document.body.appendChild(script);
*/
//add all locations on here: 
var businessName = "Hooks Fish - Chips"; //make sure you update this for every business - DON'T USE SPECIAL CHARS LIKE &,....
var businessLogo = "layout/img/Logo/HooksFishAndChipsBrooklynParkAndStPaulMN.png"; //add business logo here
//note: you need to update the hours for every day on the pickup time - addHours function and if(showCurrentElement == 'pickUpTimeSection'){}
var getLocations = [
	{
		"id" : 0,
		"randLocationId" : 658658, //random loca. id than other locations
		"locationNumber" : 1, // location number
		"location" : "Burnsville",
		"locationValue" : "Burnsville",
		"locationAddress" : "1234 sample, Burnsville MN 54235", //location address
		"phoneNumber" : "612 644 1634", //location phone number
		"taxes" : 7.878, //current location taxes - up to 3 decimals
		"menu_url" : "Burnsville.json"
	},
	{
		"id" : 1,
		"randLocationId" : 475285,
		"locationNumber" : 2, 
		"location" : "St_Paul",
		"locationValue" : "St-Paul",
		"locationAddress" : "1234 sample, St Paul MN 54235", 
		"phoneNumber" : "612 501 4314",
		"taxes" : 8.46, 
		"menu_url" : "StPaul.json"
	}
];
//show all payment that this account can accept:
var getPaymentType = [ //payment type, accept payment?, which location will use this payment type. 
	{ "paymentType": "stripe", "acceptPayment": "yes", "applyToLocationNumber" : getLocations[0].id },
	{ "paymentType": "stripe", "acceptPayment": "yes", "applyToLocationNumber" : getLocations[1].id },
	{ "paymentType": "paypal", "acceptPayment": "no", "applyToLocationNumber" : getLocations[0].id },
	{ "paymentType": "paypal", "acceptPayment": "yes", "applyToLocationNumber" : getLocations[1].id }
];
//my categories
var categories = [ "Dinners", "Lunch", "Breakfast", "Side Orders", "Specials", "Sandwiches" ];
var customSelectDown = [
					{id:1, "item":"small", "price": 2.99}, //0
					{id:2, "item":"medium", "price": 3.99}, //1
					{id:3, "item":"large", "price": 4.99},//2
					{id:4, "item":"Cook Meduim", "price": 0.99},//3
					{id:5, "item":"Well Done", "price": 0.99},//4
					{id:6, "item":"X.Hard", "price": 0.00}//5
				];
//custom each item - to have these extras on it when click on custom button
var customDinners = [
		//each custom item is unique (id)
	{	"id" : 1, "custItem" : "Extra Meat", "price": 2.49}, //0 & 1 index
	{	"id" : 2, "custItem" : "Upgrade Lemonade", "price": 1.49},
	{	"id" : 3, "custItem" : "Extra Sauce", "price": 0.49},
	{	"id" : 4, "custItem" : "Burgers and Wings", "price": 3.99},
	{	"id" : 5, "custItem" : "Double Cheese Burger", "price": 1.99},
	{	"id" : 6, "custItem" : "No Vege", "price": 0.00},
	{	"id" : 7, "custItem" : "Extra Vege", "price": 0.99},
	{	"id" : 8, "custItem" : "Extra Cheese", "price": 0.79},
	{	"id" : 9, "custItem" : "No Cheese", "price": 0.00},
];
//don't use & or any special char on any string
var Menu = { "Menu" :
	[
	{
		"id"			: 1, //item unique id number
		"Category" 		: categories[5], //choose the category to be displayed under
		"Item"			: "Cheese Burger", //item name
		"Price"			: 4.99, //item price
		"IsCustomItem"	: true, //show custom button if is true
		"CustomItem"	: [
									customDinners[4],
									customDinners[5],
									customDinners[6],
									customDinners[7],
									customDinners[8],
								], //invoke only if IsCustomItem is true
		"HaveImage"		: true, //show image?
		"ImgUrl"		: "layout/img/Design/Food-Images.png",//invoke only if HaveImage is true
		"IsDescriped"	: false, //no description
		"Description"	: "This is one of our favorite dish for Catfish & Shrimp", //description is. can be empty if IsDescriped is false
		"Active"		: true //it is valid item
	},
	{
		"id"			: 2,
		"Category" 		: categories[0],
		"Item"			: "Chicken Tender and Perch",
		"Price"			: 10.99,
		"IsCustomItem"	: true,
		"CustomItem"	: [customDinners[1]], //invoke only if IsCustomItem is true
		"HaveImage"		: true,
		"ImgUrl"		: "layout/img/Design/Food-Images.png",//invoke only if HaveImage is true
		"IsDescriped"	: true,
		"Description"	: "This is one of our favorite dish for Chicken Tender & Perch",
		"Active"		: true
	},
	{
		"id"						: 3,
		"Category" 			: categories[0],
		"Item"					: "Catfish and Shrimp",
		"Price"					: 15.99,
		"IsCustomItem"	: true,
		"CustomItem"		: [ 
										customDinners[0],
										customDinners[0],
										customDinners[0],
										customDinners[2]
									], //invoke only if IsCustomItem is true
		"HaveImage"		: true,
		"ImgUrl"				: "layout/img/Design/Food-Images.png",//invoke only if HaveImage is true
		"IsDescriped"		: true,
		"Description"			: "This is one of our favorite dish for Catfish & Shrimp",
		"Active"				: true
	},
	{
		"id"			: 4,
		"Category" 		: categories[0],
		"Item"			: "Philly Steak",
		"Price"			: 10.99,
		"IsCustomItem"	: false,
		"CustomItem"	: [customDinners[1]], //invoke only if IsCustomItem is true
		"HaveImage"		: true,
		"ImgUrl"		: "layout/img/Design/Food-Images.png",//invoke only if HaveImage is true
		"IsDescriped"	: true,
		"Description"	: "This is one of our favorite dish for Chicken Tender & Perch",
		"Active"		: true
	},
	{
		"id"			: 5,
		"Category" 		: categories[0],
		"Item"			: "Meat Lovers",
		"Price"			: 10.99,
		"IsCustomItem"	: true,
		"CustomItem"	: [customDinners[0]], //invoke only if IsCustomItem is true
		"HaveImage"		: true,
		"ImgUrl"		: "layout/img/Design/Food-Images.png",//invoke only if HaveImage is true
		"IsDescriped"	: true,
		"Description"	: "This is one of our favorite dish for Wings & Gizzards",
		"Active"		: false
	},
	{
		"id"			: 6,
		"Category" 		: categories[1],
		"Item"			: "Burgers",
		"Price"			: 10.99,
		"IsCustomItem"	: true,
		"CustomItem"	: [customDinners[0]], //invoke only if IsCustomItem is true
		"HaveImage"		: true,
		"ImgUrl"		: "layout/img/Design/Food-Images.png",//invoke only if HaveImage is true
		"IsDescriped"	: true,
		"Description"	: "This is one of our favorite dish for Philly Steak",
		"Active"		: true
	},
	{
		"id"			: 7,
		"Category" 		: categories[0],
		"Item"			: "Make Your Own",
		"Price"			: 10.99,
		"IsCustomItem"	: true,
		"CustomItem"	:  [ 
										customDinners[2],
										customDinners[3],
										customDinners[4],
										customDinners[5],
										customDinners[7]
									], //invoke only if IsCustomItem is true
		"HaveImage"		: true,
		"ImgUrl"		: "layout/img/Design/Food-Images.png",//invoke only if HaveImage is true
		"IsDescriped"	: true,
		"Description"	: "This is one of our favorite dish for Philly Steak",
		"Active"		: true
	},
	/*
	{
		"id"			: 7, //every item must be unique
		"Category" 		: categories[0], //add this item to which category
		"Item"			: "Catfish & Shrimp", //item name
		"Price"			: 15.99, //item price
		"IsCustomItem"	: true, //if this item can be custom
		"CustomItem"	:   [ //add custom options for this item
										customDinners[0],
										customDinners[0],
										customDinners[1],
										customDinners[0],
										customDinners[0],
										customDinners[1]
									]	//invoke only if IsCustomItem is true
		"HaveImage"		: true, //if item can have an image
		"ImgUrl"		: "layout/img/Design/Food-Images.png",//invoke only if HaveImage is true
		"IsDescriped"	: true, //show description
		"Description"	: "This is one of our favorite dish for Catfish & Shrimp", //only if IsDescriped is true
		"Active"		: true //if item is available
	}
	*/
	]
};
/*
	Test:
	var customDinners = [
		{	"custItem" : "Extra Meat", "price": 15.99 } ,
		{	"custItem" : "Upgrade Lemonade", "price": 5.99 } 
	];
	for(x in customDinners) console.log(customDinners[x].custItem + '' + customDinners[x].price)
	Result:
	Extra Meat ..........  15.99
	Upgrade Lemonade ..........  5.99

	Test: for getting the values of CustomItem
	for(x in Menu[0].CustomItem)
    console.log(Menu[0].CustomItem[x].custItem + ' ........\n\t\t\t\t\t\t ' + Menu[0].CustomItem[x].price)

*/
/*
	- First Main Page to select locations
	1.0.0 : Show All Locations
			1.0.1: read json file data
	1.1.0 : Select Location 
			1.1.1: Click on on View Menu Btn
			1.1.2: No Error if a location is selected
			1.1.3: Show Error if no location is selected
	1.2.0 : render the appropriate menu:

	ex: show value of json data with drop down
	https://www.w3schools.com/js/tryit.asp?filename=tryjson_html_table_dynamic
*/
var addBtnGlyphicon = '<span class="glyphicon glyphicon-plus" aria-hidden="true"></span>';
var minusBtnGlyphicon = '<span class="glyphicon glyphicon-minus" aria-hidden="true"></span>';
var clearHTMLDiv = '<div class="clearfix"></div>';
function selectElement(elementName){ //select element by id
	return document.getElementById(elementName);
}
function getElementValue(elementName){ //input/select/radio/checkbox
	return selectElement(elementName).value;
}
function setElementValue(elementName, msg){ // add a message to an element
	selectElement(elementName).innerHTML = msg;
	return msg;
}
function styleElement(elementName){
	//selectLocationDropDown
	return document.getElementById(elementName).style;
}
function test(msg){ //console.log a message
	return console.log(msg);
}
//load any script:
function dynamicallyLoadScript(url) {
    var script = document.createElement("script"); // Make a script DOM node
    script.src = url; // Set it's src to the provided URL

    document.head.appendChild(script); // Add it to the end of the head section of the page (could change 'head' to 'body' to add it to the end of the body section instead)
}
//loading an img - may be used for onloading specific data
function loadingImg(id){
	selectElement(id).innerHTML = 
		"<img src='layout/img/Design/loading1.gif' style='width:50px' class='img-responsive img-rounded center-block' alt='' title='loading'/>";
}
//load main Image after selecting the location
function loadingMainImgAfterLocationIsSelected(id){
	selectElement(id).innerHTML = "<img src='layout/img/Design/what-is-on-the-menu-is.png' class='img-responsive img-rounded center-block' alt='' title='loading'/>";
}
//set cookies : cookiesName, When does it expire
function setCookie(cname, cvalue, extraHours) {
    var d = new Date();
    d.setTime(d.getTime() + ( extraHours * 60 * 60 * 1000 ) ); //if days: 24*60*60*1000, if 1 hour: 1*60*60()*1000(ms)
    var expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}
//delete cookies : cookiesName, When does it expire
function deleteCookie(cname) {
    var expires = "expires="+ "Thu, 01 Jan 1970 00:00:00 UTC";
    document.cookie = cname + "=;" + expires + ";path=/";
}
//check if cookie does exists:
function getCookie(name) {
    var dc = document.cookie;
    var prefix = name + "=";
    var begin = dc.indexOf("; " + prefix);
    if (begin == -1) {
        begin = dc.indexOf(prefix);
        if (begin != 0) return null;
    }
    else
    {
        begin += 2;
        var end = document.cookie.indexOf(";", begin);
        if (end == -1) {
        end = dc.length;
        }
    }
    // because unescape has been deprecated, replaced with decodeURI
    //return unescape(dc.substring(begin + prefix.length, end));
    return decodeURI(dc.substring(begin + prefix.length, end));
}
//delete cookie if exists
function deleteCookieIfExists(cookieName) {
    var myCookie = getCookie(cookieName);
    if (myCookie == null) {
        // do cookie doesn't exist stuff;
    }
    else {
        // do cookie exists stuff
        deleteCookie(cookieName);//delete cookie on selecting new location or page reload
    }
}
//1.0.0
function loadJsonData(RenderAt, src) {
	var xhr = "";
	if(window.XMLHttpRequest){ //if my browser supports: chrome, firefox, ie 7+, safari
		xhr = new XMLHttpRequest();
	}else{ //if my browser supports: ie < 6
		xhr = new ActiveXObject("Microsoft.XMLHTTP");
	}
	//xhr.overrideMimeType("application/json");
	xhr.onreadystatechange = function () {
		if(this.readyState == 4 && this.status == 200){
			document.getElementById(RenderAt).innerText = this.responseText;
			//var jsObj = JSON.parse( xhr.responseText );
			//document.getElementById(RenderAt).innerText = jsObj[0].location;
		}else if (this.readyState < 4 && this.readyState > 0){
			document.getElementById(RenderAt).innerText = "<img src='layout/img/Design/loading1.gif' style='width:50px' class='img-responsive img-rounded center-block' alt='' title='loading'/>";
		}else{ //if not found 404 || readyState is 0
			document.getElementById(RenderAt).innerText = "<p style='color:red'>Your page request is not initialized/defined!</p>";
			document.getElementById(RenderAt).innerText += "<p style='color:red'>Status is:"+this.status+"</p>"; //show error message
		}
	};
	xhr.open('GET', src, true);
	xhr.send();
}; //1.0.1 : loads any json file data in json format
//load all categories
var	 txt0 = "";
function loadMyCategories(rslt){
	txt0 += '<option value="">Select Menu</option>';
    for (x in categories) {
        txt0 += "<option value="+ categories[x] +">"+ categories[x] + "</option>";
   	}
    selectElement(rslt).innerHTML = txt0;
}
//this will show both sections for 1. showing your menu select & categories & menu items sections 2. your order sections
var	 txt1 = "";
function loadMenu(rslt){
	//See whole body content: main menu, order items checkout, select pickup time, login page, payment page and then confirmation order #
	//add a select dropdown for all categories:
	txt1 += '<div class="mainMenuAndCheckoutOrder"><div class="col-xm-12 col-sm-8 myMainMenu"><h3>Choose Your Menu!</h3><select class="form-control text-center" id="showCategoriesName" onchange="getRelatedMenu(this.value)"> <option value="">Select Menu</option></select><br>';
	//show the related menu section based on the value of the #showCategoriesName and also show your order section - select all items from menu here
	txt1 += "<div class='text-left' id='addRelatedMenu'></div></div><div class='col-xm-12 col-sm-4 myMainOrderDisplay' id='renderOrderedItems'><h3 class='text-center'>";
	txt1 += 	'<button class="pull-left btn btn-info" onclick="showThisSection(\'pickUpTimeSection\')" id="viewPickUpTimeBtn-0" style="display:none">Next</button> Your Order!'; //make sure id is between two ''
	txt1 += 	'<button class="pull-right btn btn-info  addCustomOrderToCart" onclick="removeAllCurrentItem(\'addYourOrderHere\')">Clear All</button></h3>'+clearHTMLDiv; //make sure id is between two ''
	txt1 += 	"<div class='table-responsive checkOutHeaderTitle'><table class='table'><thead><th>Action</th><th class='text-center'>Item(s)</th><th class='pricesTitle'>Price($)</th></thead></table></div>";
	txt1 += 	"<div class='table-responsive tableCheckOrder'><table class='table'><tbody id='addYourOrderHere'></tbody>";
	txt1 += 	"</table></div>";
	txt1 += 	"<div class='table-responsive checkOutBottomTitle'><table class='table'><tfoot>"+
							"<tr><th></th><th class='text-center'>Taxes(<span id='selectedLocationTaxes'></span>%)</th><th class='pricesTitle'>$<span id='addTaxTotalHere'>0.00</span></th></tr>" +
							"<tr><th></th><th class='text-center'>Sub Total</th><th class='pricesTitle'><span>$</span><span class='addSubTotalHere' id='getSubTotalHere'>0.00</span></th></tr>"+
							"<tr><th></th><th class='text-center'>Total</th><th class='pricesTitle'><span>$</span><span class='addTotalHere' id='AddFinalTotalHere'>0.00</span></th></tr>"+
					"</tfoot></table></div><br><button class='pull-right btn btn-info col-xs-12 showOnBottomOfThePage' onclick='showThisSection(\"pickUpTimeSection\")' style='display:none' id='viewPickUpTimeBtn-1'>Next</button>";
	txt1  += '<p style="display:none">Pick up time : <span class="timePicked">---</span></p>'+
								  '<p  style="display:none">Pick up date : <span class="datePicked">---</span></p>'; //add both pick up time and date here
	txt1 += '</div></div>'; //end of col-sm-4 and mainMenuAndCheckoutOrder div - see your orders that have been added
	txt1 += '<div class="hide pickUpTimeSection"></div>'; //pick UpTime Section
	txt1 += '<div class="hide getCustomerRecordSection"></div>'; //get Customer Record Section
	txt1 += '<div class="hide paymentSection"></div>'; //payment Section
	txt1 += '<div class="hide confirmationOrderSection"></div>'; //confirmation Order Section
    selectElement(rslt).innerHTML = txt1;
    loadingMainImgAfterLocationIsSelected("addRelatedMenu"); //load this image and then later append the menu
	//also show the current tax percentage
	getCurrentTaxesOf('selectedLocationTaxes', 'locationSelectedNumber');
	selectCurrentDateToTheMainMenu('datePicked');//add date automatically to the main page
} // load my menu
function showThisSection(showCurrentElement){
	//hide all but current - showCurrentElement
	var parentElementDivLength = document.querySelectorAll('.'+showCurrentElement)[0].parentElement.children.length;
	for(i = 0; i < parentElementDivLength; i++){
		document.querySelectorAll('.'+showCurrentElement)[0].parentElement.children[i].style.display = 'none';
	}
	document.querySelectorAll('.'+showCurrentElement)[0].style.display = 'block'; //show main menu - note [0], since querySelector return an array
	document.querySelectorAll('.'+showCurrentElement)[0].classList.remove('hide'); //show main menu - note [0], since querySelector return an array
	if(showCurrentElement == 'pickUpTimeSection'){ //if selected element is pick up form
		document.querySelector('.pickUpTimeSection').innerHTML = pickUpTimeForm(); //get pickUp time form
		//add current date by default	
		selectCurrentDateByDefault('pickupDateIs');
		document.getElementById('pickupTimeIs').value = document.querySelector('.timePicked').innerText;//let the value be the same as selected before
		document.getElementById('pickupDateIs').value = document.querySelector('.datePicked').innerText;//let the value be the same as selected before
		showOrHideNextBtnToShowCustomerRecordForm(); //show or hide the next btn based on date/time picked up empty or not
		getTodayDateForMyCalendar();//make the dates selected to be at least todays date
		//add hours to be picked
		//note every day is different, so choose hours for every date:
		var todayDayIs = new Date();
		if( todayDayIs.getDay() == 0 ) addHours(9, 21, 'pickupTimeIs'); //if Sun from 10 am to 10pm
		else if(todayDayIs.getDay() == 1) addHours(9, 21, 'pickupTimeIs'); //if Mon
		else if(todayDayIs.getDay() == 2) addHours(9, 21, 'pickupTimeIs'); //if Tue
		else if(todayDayIs.getDay() == 3) addHours(9, 21, 'pickupTimeIs'); //if Wed
		else if(todayDayIs.getDay() == 4) addHours(10, 19, 'pickupTimeIs'); //if Thu - from 11 am to 8 pm
		else if(todayDayIs.getDay() == 5) addHours(9, 21, 'pickupTimeIs'); //if Fri
		else if(todayDayIs.getDay() == 6) addHours(9, 21, 'pickupTimeIs'); //if Sat
	}
	if(showCurrentElement == 'getCustomerRecordSection'){ //if selected element is get customer info (login/register/guest) form
		document.querySelector('.getCustomerRecordSection').innerHTML = getCustomerRecord(); //get pickUp time form
	}
	if(showCurrentElement == 'paymentSection'){ //if selected to get a payment forms
		document.querySelector('.paymentSection').innerHTML = getPaymentForms(); //get payment form
	}
	if(showCurrentElement == 'confirmationOrderSection'){ //if selected to show confirmation
		document.querySelector('.confirmationOrderSection').innerHTML = getConfirmationForms(); //get confirmationOrderSection form
	}
}
//pick up time and date form
function pickUpTimeForm(){
	var 	pickUpForm 	  = "<div class='col-sm-12'>"; //main form
			pickUpForm  += "<div>";
			pickUpForm  += "<button class='pull-left btn btn-info  addCustomOrderToCart' onclick='showThisSection(\"mainMenuAndCheckoutOrder\")'>Update My Order</button>"; //update my order
			pickUpForm  += "<button class='pull-right btn btn-info  showGetCustomerBtn' style='display:none' onclick='showThisSection(\"getCustomerRecordSection\")'>Next</button>"; //get customer record
			pickUpForm  += "</div>";
			pickUpForm  += clearHTMLDiv;
			pickUpForm  += "<div>";
			pickUpForm  += mainPickUpTimeSection(); //get body of the pickup order
			pickUpForm  += "</div>"; 
			pickUpForm  += "</div>"; 
	return pickUpForm;
}
//select Current Date By Default
function selectCurrentDateByDefault(addTo) {
    var d = new Date();
    var y = d.getFullYear();
    var day = d.getDate();
    var month = d.getMonth()+1;
    if(month < 10){ month = ("0"+month).toString()} //add 0 to the beginning of the value if less than 10
    if(day < 10){ day = ("0"+day).toString()}//add 0 to the beginning of the value if less than 10
    var n = (y+"-"+month+"-"+day).toString();
    document.getElementById(addTo).value = n;
}
function selectCurrentDateToTheMainMenu(addTo) {
    var d = new Date();
    var y = d.getFullYear();
    var day = d.getDate();
    var month = d.getMonth()+1;
    if(month < 10){ month = ("0"+month).toString()} //add 0 to the beginning of the value if less than 10
    if(day < 10){ day = ("0"+day).toString()}//add 0 to the beginning of the value if less than 10
    var n = (y+"-"+month+"-"+day).toString();
    document.querySelector('.'+addTo).innerText = n;
}
//add hours
function addHours(start, end, addTo){
	var dailyHours = [1,2,3,4,5,6,7,8,9,10,11,12,1,2,3,4,5,6,7,8,9,10,11,12]; //get all hours in order
	var dividedHours = [00,15,30,45]; //divide every hour as i like
	var addEasily = document.getElementById(addTo); //where to add the results
	//now for every hours division like 00,15,30,45. add it the each of the hours
	//pick the time to start from: 0 - means 12 am
	var startTime = start; //9 means starts at 10 am 
	//pick the time to end from: 15 - means 4 pm
	var endTime = end; //21 means ends at 10 pm
	for(var i = startTime; i < endTime; i++){
		for(var n = 0; n < dividedHours.length; n++){
			if(i <= 11){
				var hours = dailyHours[i]+":"+dividedHours[n];
				var hoursVal = dailyHours[i]+":"+dividedHours[n]+" AM";
			}else if(i > 11 && i <=22){
				var hours = dailyHours[i]+12+":"+dividedHours[n]; //MAKE SURE I ADD 12 to the value so it can be stored on db correctly in 24 hours format
				var hoursVal = dailyHours[i]+":"+dividedHours[n]+" PM";
			}
			addEasily.innerHTML += "<option value="+hours+">"+hoursVal+"</option>";
		}
	}
}
//get body of the pickup order
function mainPickUpTimeSection(){
	var 	myForm   = '<div>';
			myForm += '<div class="form-group">'+
								  '<label for="pickupDateIs">Pick Date:</label>'+
								  '<input type="date" class="form-control" id="pickupDateIs" required="required">'+
								  '<span class="help-block">What day do you like to pick up your order?</span>'+
								'</div>';
			myForm += '<div class="form-group">'+
								  '<label for="pickupTimeIs">Pick Time:</label>'+
								  '<select class="form-control" id="pickupTimeIs"></select>'+
								  // '<input type="time" class="form-control" id="pickupTimeIs" required="required">'+
								  '<span class="help-block">What time do you like to pick up your order?</span>'+
								'</div>';
			myForm += '<div class="form-group">'+
								  '<button class="btn btn-info" onclick="addOrderPickUpTimeAndDate(\'pickupTimeIs\',\'pickupDateIs\')">Select Date & Time</button>'+
								'</div>';
			/* 
			//note: this is being added on the main page
			myForm += '<div class="form-group">'+
								  '<p>Pick up time : <span class="timePicked"></span></p>'+
								  '<p>Pick up date : <span class="datePicked"></span></p>'+
								'</div>';
			*/
			myForm += '</div>';
			
	return myForm;
}
//on click on add Order Time and Pickup: 
function addOrderPickUpTimeAndDate(getTimeEntered, getDateEntered){
	var selectedTimeId = document.getElementById(getTimeEntered);
	var selectedDateId = document.getElementById(getDateEntered);
	var timeIs = selectedTimeId.value;
	var dateIs = selectedDateId.value;
	if(timeIs == "" || timeIs.length == 0){
		 selectedTimeId.nextSibling.innerHTML = "You must select time to pick up your order on!";
		 selectedTimeId.nextSibling.classList.add('error');
		 selectedTimeId.style.border = "1px solid rgb(148, 11, 11)";
		 document.querySelector('.timePicked').innerText = '';
	}else{
		 selectedTimeId.nextSibling.innerHTML = "Time is added - You can update it still";
		 selectedTimeId.nextSibling.classList.remove('error');
		 selectedTimeId.style.border = "1px solid rgb(14, 105, 59)";
		 document.querySelector('.timePicked').innerText = timeIs; //enter time on success
	}
	if(dateIs == "" || dateIs.length == 0){
		 selectedDateId.nextSibling.innerHTML = "You must select date to pick up your order on!";
		 selectedDateId.nextSibling.classList.add('error');
		 selectedDateId.style.border = "1px solid rgb(148, 11, 11)";
		 document.querySelector('.datePicked').innerText = '';
	}else{
		 selectedDateId.nextSibling.innerHTML = "What day do you like to pick up your order?";
		 selectedDateId.nextSibling.classList.remove('error');
		 selectedDateId.style.border = "1px solid rgb(14, 105, 59)";
		 document.querySelector('.datePicked').innerText = dateIs; //enter date on success
	}
	showOrHideNextBtnToShowCustomerRecordForm(); //show or hide the next btn based on date/time picked up empty or not
}
//auto function to show and hide show customer record btn from pickUp Form
function showOrHideNextBtnToShowCustomerRecordForm() { 
	var selectedTimeId = document.querySelector('.timePicked');
	var selectedDateId = document.querySelector('.datePicked');
	var timeIs = selectedTimeId.length;
	var dateIs = selectedDateId.length;
	if(selectedTimeId.innerText == "---" || selectedTimeId.innerText == "" || selectedDateId.innerText == "" || selectedDateId.innerText == "---" ){
		 document.querySelector('.showGetCustomerBtn').style.display = 'none'; //hide next btn to show customer records
	}else{
		 document.querySelector('.showGetCustomerBtn').style.display = 'block'; //show next btn to show customer records
	}
 };
 function showOrHideNextBtnToShowPickUpTimeForm(){
	 var firstBtn = document.getElementById('viewPickUpTimeBtn-0'),
			secondBtn = document.getElementById('viewPickUpTimeBtn-1'),
			checkOrderLength = document.getElementById('addYourOrderHere').children.length;
	//now check if checkout has no orders:
	if(checkOrderLength == 0){
		firstBtn.style.display = 'none';
		secondBtn.style.display = 'none';
	}else{
		firstBtn.style.display = 'block';
		secondBtn.style.display = 'block';
	}
 }
//get custom record form
function getCustomerRecord(){
	var 	pickUpForm 	= "<div class='col-sm-12'>"; //main form
			pickUpForm  += "<div class='mb30'>";
			pickUpForm  += "<button class='btn btn-info  addCustomOrderToCart' onclick='showThisSection(\"mainMenuAndCheckoutOrder\")'>Update My Order</button>"; //update my order
			pickUpForm  += "<button class='btn btn-info  addCustomOrderToCart' onclick='showThisSection(\"pickUpTimeSection\")'>Update PickUp Time</button>"; //update PickUp Time
			pickUpForm  += checkToGetPaymentPageOrNot(); //show add go to payment btn
			pickUpForm  += "</div>";
			pickUpForm  += clearHTMLDiv;
			pickUpForm  += checkCustomerIsLoggedIn(); //add customer info or the forms (login/guest/register)
			pickUpForm  += "</div>"; 
	return pickUpForm;
}
//show my order as in html:
function myOrderHtml(){
	//view my orders as well, so he can confirm
	var myHtmlOrder = document.querySelector('.checkOutHeaderTitle');	//get title info:
			myHtmlOrder += document.querySelector('.tableCheckOrder');	//get order info
			myHtmlOrder += document.querySelector('.checkOutBottomTitle');	//get bottom tax/total info
	return myHtmlOrder;
}
//get payment  form
function getPaymentForms(){
	var 	pickUpForm 	= "<div class='col-sm-12' id='placeAnOrderAndPaymentSection'>"; //Place an Order & Payment Section
			pickUpForm  += "<div id='hideCurrentBtnsOnPlacingMyOrder'>";
			pickUpForm  += "<button class='btn btn-info  addCustomOrderToCart' onclick='showThisSection(\"mainMenuAndCheckoutOrder\")'>Update My Order</button>"; //update my order
			pickUpForm  += "<button class='btn btn-info  addCustomOrderToCart' onclick='showThisSection(\"pickUpTimeSection\")'>Update PickUp Time</button>"; //update PickUp Time
			pickUpForm  += "<button class='btn btn-info  addCustomOrderToCart' onclick='showThisSection(\"getCustomerRecordSection\")'>Update Custom Info</button>"; //update customer Login Info
			//pickUpForm  += "<button class='pull-right btn btn-info' onclick='showThisSection(\"confirmationOrderSection\")'>Confirmation</button>"; //go to Confirmation order section
			pickUpForm  += "</div>"; 
			pickUpForm  += clearHTMLDiv;
			pickUpForm  += "<div id='showPlaceOrderBtn'>";
			pickUpForm  += placeMyCurrentOrderBtn(); //show place an order btn
			// pickUpForm  += clearHTMLDiv+"<br><p>Below is my summary of my order - Now place your order to proceed</p>"; //show place an order btn
			// pickUpForm  += myOrderHtml(); //show my order to be confirmed
			pickUpForm  += "<div id='showPlaceOrderBtnError'>"; //show placing order errors
			pickUpForm  += "</div>"; 
			pickUpForm  += "</div>"; 
			pickUpForm  += "<div id='showPaymentBtns' style='display:none'>";
			pickUpForm  += ''; //you will add  payForOrderBtn() btn to click to payment form
			pickUpForm  += "<div id='showPaymentBtnsError'>"; //show payment order errors
			pickUpForm  += "</div>"; 
			pickUpForm  += "</div>"; 
			pickUpForm  += "</div>"; 
	return pickUpForm;
}
function placeMyCurrentOrderBtn(){
	//place an order btn:
	var  myPlaceOrderBtn  = "<p>Click below to confirm your order is correct.</p>"+
												"<p class='text-primary'>Note: if you like to make changes to your order, click any of the update links above</p>"+
												"<p class='text-danger'>Warning: Don't refresh your page or click back/forward buttons - these actions will remove your order.</p>";
			myPlaceOrderBtn  += "<button class='btn btn-info' onclick='placeMyOrderNow(this)'>Yes, I like to proceed</button>";
			myPlaceOrderBtn += "<div id='showPlacingOrderError'></div>";//show errors here
			
			return myPlaceOrderBtn;
}
function payForOrderBtn(){
	//then show all payment options:
		   var getPlacedOrderId = document.getElementById('showMyOrderId').innerHTML;
			// var getPlacedOrderTotal = document.getElementById('showMyOrderTotal').innerHTML;
			var myLinkToGoTo = "PayPage/index.php?orderId="+ getPlacedOrderId;
			var showMyPaymentBtns = "<a href='"+myLinkToGoTo+"'><button class='btn btn-info  addCustomOrderToCart'>I'm ready to pay now</button></a>";					
			return showMyPaymentBtns;

}
function downloadScriptsForStripe(){
	var myScriptElements = '<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>'+
						'<script src="https://js.stripe.com/v3/"></script>'+
						'<script src="layout/javascript/chargeStripe.js"></script>';
	return myScriptElements;
}
//place my order now:
function placeMyOrderNow(currentBtn){
	//first save my order on an array:
	var myOrder = document.getElementById('addYourOrderHere');
	var myOrderLength = myOrder.rows.length;
	var myOrderTblRecords = [];
	for(var i = 0; i< myOrderLength; i++){
		myOrderTblRecords.push( { itemName: myOrder.rows[i].cells[1].innerHTML, itemPrice: myOrder.rows[i].cells[2].innerHTML } )
	}
	test(myOrderTblRecords);
	//i also need to pass business info to an array: business Id, business Address, CustomerInfo (Id,name, email), total before and after taxes, taxes, sales tax total 
	var  getUserId = document.querySelector('.logInId').innerHTML, //get User Logged Id
			getUserName = document.querySelector('.logInName').innerHTML, //get users Logged In Name
			getUserEmail = document.querySelector('.logInEmail').innerHTML,//get users Logged In Email
			getBusinessUniqueId = document.getElementById('locationSelectedNumber').innerHTML, //unique store id
			getBusinessName = businessName, //get store business name
			getBusinessAddress = document.getElementById('locationSelectedAddress').innerHTML, //get location address
			getBusinessSalesTaxes = document.getElementById('selectedLocationTaxes').innerHTML, //say 7.87
			getBusinessSalesTaxTotal = document.getElementById('addTaxTotalHere').innerHTML, //
			getBusinessTotalBeforeTaxes = document.getElementById('getSubTotalHere').innerHTML,
			getBusinessTotalAfterTaxes = document.getElementById('showTotalOnHeader').innerHTML;
			//get location phone number:
			getPhoneNumber = "";
			function getPhoneNumberNow(){
				for(x in getLocations) {
					if(getLocations[x]["randLocationId"] == getBusinessUniqueId){ //only get location number that is the same as the location number selected
						getPhoneNumber = getLocations[x]["phoneNumber"];
					}
				}
				return getPhoneNumber;
			}
			getPhoneNumber = getPhoneNumberNow();
	var myBusinessAndCustomerTblRecords = [];		
	myBusinessAndCustomerTblRecords.push({
		getUserId : getUserId,
		getUserName : getUserName,
		getUserEmail : getUserEmail,
		getBusinessUniqueId : getBusinessUniqueId , //note, this is the unique store id, not the store number
		getBusinessName : getBusinessName,
		getBusinessAddress :  getBusinessAddress,
		getBusinessSalesTaxes : getBusinessSalesTaxes,
		getBusinessSalesTaxTotal : getBusinessSalesTaxTotal,
		getBusinessTotalBeforeTaxes : getBusinessTotalBeforeTaxes,
		getBusinessTotalAfterTaxes : getBusinessTotalAfterTaxes,
		getPhoneNumber : getPhoneNumber
	});
	test(myBusinessAndCustomerTblRecords);
	//get Order date and time:
	var  orderDate = document.getElementById('pickupDateIs').value,
			orderTime = document.getElementById('pickupTimeIs').value;
	// function formatDate(orderDate) {
	  // return orderDate.getFullYear() + '-' + (orderDate.getMonth() < 9 ? '0' : ") + (orderDate.getMonth()+1) + '-' + (orderDate.getDate() < 10 ? '0' : ") + orderDate.getDate();
	// }
	// var orderDate_to_mysql = formatDate(orderDate);
	var myOrderDateAndTimeTblRecords = [{
		orderDate : orderDate,
		orderTime : orderTime
	}];
	test(myOrderDateAndTimeTblRecords);
	
	var mySrc = "Backend/placeMyOrder.php";
	var viewResults = "showPlaceOrderBtn";
	var viewErrors = "showPlaceOrderBtnError";	
	var myHtmlOrder = document.querySelector('.checkOutHeaderTitle');	//get title info:
			myHtmlOrder += document.querySelector('.tableCheckOrder');	//get order info
			myHtmlOrder += document.querySelector('.checkOutBottomTitle');	//get bottom tax/total info
	//var passParam = "myOrderDateAndTimeTblRecords="+ myOrderDateAndTimeTblRecords +"&myBusinessAndCustomerTblRecords="+ myBusinessAndCustomerTblRecords + "&myOrderTblRecords="+myOrderTblRecords;
	var passParam = "myOrderDateAndTimeTblRecords="+ JSON.stringify(myOrderDateAndTimeTblRecords) +//convert array to string, later 
											"&myBusinessAndCustomerTblRecords="+ JSON.stringify(myBusinessAndCustomerTblRecords) + 
												"&myHtmlOrder="+ JSON.stringify(myHtmlOrder) +  //that's my order in the table as html
												"&myOrderTblRecords=" + JSON.stringify(myOrderTblRecords);//to view these array after passing it, var myArr = JSON.parse(myArrString)
	processMyOrder(viewResults, viewErrors, mySrc, passParam); 
	//now on calling the php to store these data, make sure to return the orderIdNumber, so i can pass that along with the payment info: - hide that info as a return 
	//now i need to pass these info 
	//hide current parent div
}
function processToPaymentSection(){
	// currentBtn.parentElement.style.display = "none";
	//hide my btns options on the top of the page:
	selectElement('hideCurrentBtnsOnPlacingMyOrder').style.display = "none";
	//show next div: payment form:
	document.getElementById('showPaymentBtns').style.display = "block";
}
function processMyOrder(GoodResultsAt,ErrorResultsAt, src, params) {
	var xhr = "";
	if(window.XMLHttpRequest){ //if my browser supports: chrome, firefox, ie 7+, safari
		xhr = new XMLHttpRequest();
	}else{ //if my browser supports: ie < 6
		xhr = new ActiveXObject("Microsoft.XMLHTTP");
	}
	//xhr.overrideMimeType("application/json");
	xhr.onreadystatechange = function () {
		if(this.readyState == 4 && this.status == 200){
			//view success result
			document.getElementById(GoodResultsAt).innerHTML = this.responseText; //return the response from my src
			//if current p#showMyPaymentToProcess that have a value on it, then show payment section
			if(document.getElementById('showMyPaymentToProcess').innerHTML.length > 1 && document.getElementById('showMyOrderId').innerHTML.length > 1 ){
				 processToPaymentSection();
				 document.getElementById('showPaymentBtns').innerHTML = payForOrderBtn();//add btns with the order number here
			}else{
				//click on place order again
				document.getElementById(GoodResultsAt).innerHTML += ''+
																						'<br><p class="red">Something went wrong, click below button to go back and place your order once again</p>'+
																						'<button class="btn btn-info" onclick="showThisSection(\'paymentSection\')">Go back to place my order</button>';
			}
			//var jsObj = JSON.parse( xhr.responseText ); //if my response is in json format
		}else if (this.readyState < 4 && this.readyState > 0){
			document.getElementById(ErrorResultsAt).innerHTML = "<img src='layout/img/Design/loading1.gif' style='width:50px' class='img-responsive img-rounded center-block' alt='' title='loading'/>";
		}else{ //if not found 404 || readyState is 0
			document.getElementById(ErrorResultsAt).innerHTML = "<p style='color:red'>Your page request is not initialized/defined! Try again.</p>";
			document.getElementById(ErrorResultsAt).innerHTML += "<p style='color:red'>Status is:"+this.status+"</p>"; //show error message
		}
	};
	xhr.open('POST', src, true);
	xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	//xhr.send("addSuccessResults=addSuccessResults&newUserEmail=Ford");
	// params = getNewUserParam();
	xhr.send(params);
};
//get confirmation  form
function getConfirmationForms(){
	var 	pickUpForm 	= "<div class='col-sm-12'>"; //main form
			pickUpForm  += "<div>";
			pickUpForm  += "<button class='btn btn-info  addCustomOrderToCart'>Go To Our Website</button>"; //go to website
			pickUpForm  += "</div>"; 
			pickUpForm  += clearHTMLDiv;
			pickUpForm  += "<p>Thank you! Your order number is # xxxxx </p>"; //show confirmation info
			pickUpForm  += "</div>"; 
	return pickUpForm;
}
//add Customer Info or let customer login/register/guest forms
function checkCustomerIsLoggedIn(){
	var 	custDataId = document.querySelector('.logInId'), //get customer id
			custDataName = document.querySelector('.logInName'),//get customer name
			showPaymentBtn = document.querySelector('.showGetPaymentBtn'),//get next payment btn
			custDataNameIs = custDataName.innerText,
			custDataIdIs = custDataId.innerText,
			result = '';
	if(custDataIdIs == "" || custDataIdIs.length <=1 || custDataNameIs == "" || custDataNameIs.length <=1 ){
		result += "<div id='showFeedBackResponse'>"; //show customer login/guest/register forms
		result += showCustomerLoginRegisterGuestForm(); //show customer login/guest/register forms
		result += "</div>"; //show customer login/guest/register forms
	}else{
		result += "<div id='showFeedBackResponse'>"; //show customer login/guest/register forms
		result += showCustomerInfo(); //show customer Info
		result += "</div>"; //show customer login/guest/register forms
	}
	return result;
}
//check if customer is logged in or not, to show go to payment btn
function checkToGetPaymentPageOrNot(){
	var 	custDataId = document.querySelector('.logInId'), //get customer id
			custDataName = document.querySelector('.logInName'),//get customer name
			custDataNameIs = custDataName.innerText,
			custDataIdIs = custDataId.innerText,
			result = '';
	if(custDataIdIs == "" || custDataIdIs.length <=1 || custDataNameIs == "" || custDataNameIs.length <=1 ){
		result += "<button class='btn btn-info showGetPaymentBtn hide' onclick='showThisSection(\"paymentSection\")' >Next</button>"
	}else{
		result += "<button class='btn btn-info showGetPaymentBtn' onclick='showThisSection(\"paymentSection\")' >Next</button>"
	}
	return result;
}
//show Customer Login/guest/register forms
function showCustomerLoginRegisterGuestForm(){
	var 	result = '<br />';
			result += '<ul class="nav nav-pills nav-justified">'+
							  '<li class="active"><a data-toggle="pill" href="#mainLoginForm">Login</a></li>'+
							  '<li><a data-toggle="pill" href="#newUserForm">New User</a></li>'+
							  '<li><a data-toggle="pill" href="#guestForm">Guest</a></li>'+
							'</ul>'+
							'<div class="tab-content">'+
							  '<div id="mainLoginForm" class="tab-pane fade in active">'+
								'<h3>Existing Customer</h3>'+
								 mainLoginFormSection()+
							  '</div>'+
							  '<div id="newUserForm" class="tab-pane fade">'+
								'<h3>New User Registeration</h3>'+
								mainCreateNewUserFormSection()+
							  '</div>'+
							  '<div id="guestForm" class="tab-pane fade">'+
								'<h3>Guest Registeration</h3>'+
								mainCreateGuestUserFormSection()+
							  '</div>'+
							'</div>';
	return result;
}
//show main Login Form Section
function mainLoginFormSection(){
	var 	result = '<div class="form-horizontal">';
			result += 	'<div class="input-group">'+
							  '<span class="input-group-addon"><i class="glyphicon glyphicon-envelope"></i></span>'+
							  '<input id="loginUserEmail" type="email" class="form-control" name="loginUserEmail" placeholder="Enter Your Email" required="required">'+
							  '<span class="help-block error"></span>'+
							'</div>'+
							'<br>'+
							'<div class="input-group">'+
							  '<span class="input-group-addon"><i class="glyphicon glyphicon-lock"></i></span>'+
							  '<input id="loginUserPassword" type="password" class="form-control" name="loginUserPassword" placeholder="Enter Your Password" required="required">'+
							  '<span class="help-block error"></span>'+
							'</div>'+
							'<br>'+
							'<div class="input-group">'+
							  '<button type="submit" class="pull-right btn btn-info" onclick="getNormalUserParamValidate()" >Login</button>'+
							'</div>'+
							'<br>'+
							'<div class="input-group">'+
							  '<div id="showErrorsHere"></div>'+
							'</div>';
							
			result += '</div>'; 
	return result;
}
//show main new user Form Section
function mainCreateNewUserFormSection(){
	var 	result = '<div class="form-horizontal">';
			result += 	'<div class="input-group">'+
							  '<span class="input-group-addon"><i class="glyphicon glyphicon-user"></i></span>'+
							  '<input id="newUserName" type="email" class="form-control" name="newUserName" placeholder="Enter Your Name" required="required">'+
								'<span class="help-block error"></span>'+
							'</div>'+
							'<br>'+
							'<div class="input-group">'+
							  '<span class="input-group-addon"><i class="glyphicon glyphicon-envelope"></i></span>'+
							  '<input id="newUserEmail" type="email" class="form-control" name="newUserEmail" placeholder="Enter Your Email" required="required">'+
								'<span class="help-block error"></span>'+
							'</div>'+
							'<br>'+
							'<div class="input-group">'+
							  '<span class="input-group-addon"><i class="glyphicon glyphicon-lock"></i></span>'+
							  '<input id="newUserPassword" type="password" class="form-control" name="newUserPassword" placeholder="Enter Your Password" required="required">'+
								'<span class="help-block error"></span>'+
							'</div>'+
							'<br>'+
							'<div class="input-group">'+
							  '<span class="input-group-addon"><i class="glyphicon glyphicon-lock"></i></span>'+
							  '<select id="newUserSubscribedToDeals" name="newUserSubscribedToDeals" class="form-control">'+
							  '<option value="1">Yes, I like to get rewards</option>'+
							  '<option value="0">No rewards for me today</option></select>'+
							'</div>'+
							'<br>'+
							'<div class="input-group">'+
							  '<button type="submit" class="pull-right btn btn-info newUserAccess" onclick="getNewUserParamValidate()">Create New Account</button>'+
							'</div>'+
							'<br>'+
							'<div class="input-group">'+
							  '<div id="showErrorsHere"></div>'+
							'</div>';
			result += '</div>'; 
	return result;
}
//show main guest user Form Section
function mainCreateGuestUserFormSection(){
	var 	result = '<div class="form-horizontal">';
			result += 	'<div class="input-group">'+
							  '<span class="input-group-addon"><i class="glyphicon glyphicon-user"></i></span>'+
							  '<input id="guestUserName" type="text" class="form-control" name="guestUserName" placeholder="Enter Your Name" required="required">'+
								'<span class="help-block error"></span>'+
							'</div>'+
							'<br>'+
							'<div class="input-group">'+
							  '<button type="submit" class="pull-right btn btn-info" onclick="getGuestUserParamValidate()" >Login</button>'+
							'</div>'+
							'<br>'+
							'<div class="input-group">'+
							  '<div id="showErrorsHere"></div>'+
							'</div>';
			result += '</div>'; 
	return result;
}
//make the min date to be selected is today.
function getTodayDateForMyCalendar(){
	var todaysDateIs = new Date().toISOString().split('T')[0];
	document.getElementById("pickupDateIs").setAttribute('min', todaysDateIs);
	document.getElementById("pickupDateIs").setAttribute('value', todaysDateIs); //month/day/year
	// document.getElementById('pickupDateIs').value = new Date().toDateInputValue();
}
//verify customer login Info
// $(document).ready(function(){	
		
		// $('.newUserAccess').click(function() {
			  
			  // $.ajax({
				// type: "POST",
				// url: "../../Backend/createNewUser.php",
				// data: { 
					// newUserName: $('#newUserName').val(),
					// newUserEmail: $('#newUserEmail').val(),
					// newUserPassword: $('#newUserPassword').val()
					// }
			  // }).done(function( msg ) {
				// $( "#showFeedBackResponse" ).html( msg ); //view Results Here from searchByCheckNumber.php"
			// });
		// });
		// test("Create new user is clicked!");
// });
//1.0.0
//create new user
function addNewUser(myParams){
	var src = 'Backend/createNewUser.php'; //note, i am telling to go to this src from my main index.php
	var addSuccessResults = 'showFeedBackResponse';
	var addErrorResults = 'showErrorsHere';
	loadMyData(addSuccessResults,addErrorResults, src, myParams);
}
function addNormalUser(myParams){
	var src = 'Backend/loginUsers.php'; //note, i am telling to go to this src from my main index.php
	var addSuccessResults = 'showFeedBackResponse';
	var addErrorResults = 'showErrorsHere';
	loadMyData(addSuccessResults,addErrorResults, src, myParams);
}
function addGuestUser(myParams){
	var src = 'Backend/guestUser.php'; //note, i am telling to go to this src from my main index.php
	var addSuccessResults = 'showFeedBackResponse';
	var addErrorResults = 'showErrorsHere';
	loadMyData(addSuccessResults,addErrorResults, src, myParams);
}
//validate each of these fields for adding new user
var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
function getNewUserParamValidate(){
	var newUserName = document.getElementById('newUserName').value;
	var newUserEmail = document.getElementById('newUserEmail').value;
	var newUserPassword = document.getElementById('newUserPassword').value;
	var isValidUserName = true;
	var isValidUserEmail = true;
	var isValidUserPass = true;
	//validate userName
	if(newUserName == "" || newUserName.length <= 5){
		//show an error:
		document.getElementById('newUserName').style.border = "1px solid rgb(148, 11, 11)";
		document.getElementById('newUserName').nextSibling.innerText = "Enter a valid name! At least 6 Chars./Digits/Signs";
		isValidUserName = false;
	}else {
		document.getElementById('newUserName').style.border = "inherit";
		document.getElementById('newUserName').nextSibling.innerText = "";
		isValidUserName = true;
	}
	//validate user email
	if (newUserEmail == "" || newUserEmail.length <= 0 || !newUserEmail.match(mailformat)){
		//show an error:
		document.getElementById('newUserEmail').style.border = "1px solid rgb(148, 11, 11)";
		document.getElementById('newUserEmail').nextSibling.innerText = "Enter a valid email! something@something.something";
		isValidUserEmail = false;
	}else {
		document.getElementById('newUserEmail').style.border = "inherit";
		document.getElementById('newUserEmail').nextSibling.innerText = "";
		isValidUserEmail = true;
	}
	//validate user pass.
	if(newUserPassword == "" || newUserPassword.length <= 5){
		//show an error:
		document.getElementById('newUserPassword').style.border = "1px solid rgb(148, 11, 11)";
		document.getElementById('newUserPassword').nextSibling.innerText = "Enter a password! At least 6 Chars./Digits/Signs";
		isValidUserPass = false;
	} else{
		document.getElementById('newUserPassword').style.border = "inherit";
		document.getElementById('newUserPassword').nextSibling.innerText = "";
		isValidUserPass = true;
	}
	//if all is validated and true!
	if(isValidUserName && isValidUserEmail && isValidUserPass) { //if all true & validated
		//you can add user now
		addNewUser(getNewUserParam());
	}
}

function addMyUser(userName,userId,userEmail){
		document.querySelector('.logInName').innerText = userName;
		document.querySelector('.logInId').innerText = userId;
		document.querySelector('.logInEmail').innerText = userEmail;
}
function getNewUserParam(){
	var newUserName = document.getElementById('newUserName').value;
	var newUserEmail = document.getElementById('newUserEmail').value;
	var newUserPassword = document.getElementById('newUserPassword').value;
	var newUserSubscribedToDeals = document.getElementById('newUserSubscribedToDeals').value;
	return "newUserName="+newUserName+"&newUserEmail="+newUserEmail+"&newUserPassword="+newUserPassword+"&newUserSubscribedToDeals="+newUserSubscribedToDeals;
}
function getNormalUserParam(){
	var loginUserEmail = document.getElementById('loginUserEmail').value;
	var loginUserPassword = document.getElementById('loginUserPassword').value;
	return "loginUserEmail="+loginUserEmail+"&loginUserPassword="+loginUserPassword;
}
function getGuestUserParam(){
	var guestUserName = document.getElementById('guestUserName').value;
	return "guestUserName="+guestUserName;
}
//1. Login User:
function getNormalUserParamValidate(){
	var loginUserEmail = document.getElementById('loginUserEmail').value;
	var loginUserPassword = document.getElementById('loginUserPassword').value;
	var isValidUserEmail = true;
	var isValidUserPass = true;
	//validate user email
	if (loginUserEmail == "" || loginUserEmail.length <= 0 || !loginUserEmail.match(mailformat)){
		//show an error:
		document.getElementById('loginUserEmail').style.border = "1px solid rgb(148, 11, 11)";
		document.getElementById('loginUserEmail').nextSibling.innerText = "Enter a valid email! something@something.something";
		isValidUserEmail = false;
	}else {
		document.getElementById('loginUserEmail').style.border = "inherit";
		document.getElementById('loginUserEmail').nextSibling.innerText = "";
		isValidUserEmail = true;
	}
	//validate user pass.
	if(loginUserPassword == "" || loginUserPassword.length <= 5){
		//show an error:
		document.getElementById('loginUserPassword').style.border = "1px solid rgb(148, 11, 11)";
		document.getElementById('loginUserPassword').nextSibling.innerText = "Enter a password! At least 6 Chars./Digits/Signs";
		isValidUserPass = false;
	} else{
		document.getElementById('loginUserPassword').style.border = "inherit";
		document.getElementById('loginUserPassword').nextSibling.innerText = "";
		isValidUserPass = true;
	}
	//if all is validated and true!
	if(isValidUserEmail && isValidUserPass) { //if all true & validated
		//you can validate and login normal users now
		addNormalUser(getNormalUserParam());
	}
}
function getGuestUserParamValidate(){
	var guestUserName = document.getElementById('guestUserName').value;
	var isValidGuestUserName = true;
	//validate guest user name.
	if(guestUserName == "" || guestUserName.length <= 5){
		//show an error:
		document.getElementById('guestUserName').style.border = "1px solid rgb(148, 11, 11)";
		document.getElementById('guestUserName').nextSibling.innerText = "Enter your first and last name! At least 6 Chars. long";
		isValidGuestUserName = false;
	} else{
		document.getElementById('guestUserName').style.border = "inherit";
		document.getElementById('guestUserName').nextSibling.innerText = "";
		isValidGuestUserName = true;
	}
	//if all is validated and true!
	if(isValidGuestUserName) { //if all true & validated
		//you can validate and login normal users now
		addGuestUser(getGuestUserParam());
	}
}
//update the headers of the login users/new users
function getMyUniqueUserId(){
	var currentCustomerUniqueId = document.getElementById('currentCustomerUniqueId').innerText;
	var currentCustomerUniqueName = document.getElementById('currentCustomerUniqueName').innerText;
	var currentCustomerUniqueEmail = document.getElementById('currentCustomerUniqueEmail').innerText;
	return addMyUser(currentCustomerUniqueName,currentCustomerUniqueId,currentCustomerUniqueEmail);
}
//go to any page 
function loadMyData(GoodResultsAt,ErrorResultsAt, src, params) {
	var xhr = "";
	if(window.XMLHttpRequest){ //if my browser supports: chrome, firefox, ie 7+, safari
		xhr = new XMLHttpRequest();
	}else{ //if my browser supports: ie < 6
		xhr = new ActiveXObject("Microsoft.XMLHTTP");
	}
	//xhr.overrideMimeType("application/json");
	xhr.onreadystatechange = function () {
		if(this.readyState == 4 && this.status == 200){
			document.getElementById(GoodResultsAt).innerHTML = this.responseText; //return the response from my src
			//afer adding new customer, add thier info online:
			getMyUniqueUserId();
			//Show next payment btn
			var showPaymentBtn = document.querySelector('.showGetPaymentBtn');
			showPaymentBtn.classList.remove('hide');
			//var jsObj = JSON.parse( xhr.responseText ); //if my response is in json format
		}else if (this.readyState < 4 && this.readyState > 0){
			document.getElementById(ErrorResultsAt).innerHTML = "<img src='layout/img/Design/loading1.gif' style='width:50px' class='img-responsive img-rounded center-block' alt='' title='loading'/>";
		}else{ //if not found 404 || readyState is 0
			document.getElementById(ErrorResultsAt).innerHTML = "<p style='color:red'>Your page request is not initialized/defined! Try again.</p>";
			document.getElementById(ErrorResultsAt).innerHTML += "<p style='color:red'>Status is:"+this.status+"</p>"; //show error message
		}
	};
	xhr.open('POST', src, true);
	xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	//xhr.send("addSuccessResults=addSuccessResults&newUserEmail=Ford");
	// params = getNewUserParam();
	xhr.send(params);
}; //loads any page and return result
//show Customer Login/Guest/Register forms
function showCustomerInfo(){
	var myInfo = '<p style="padding-top:25px;">You are successfully logged in.</p>';
	return myInfo;
}
//get all location on selecting locations
function loadLocations(rslt){
   var txt = "";
   txt += '<select class="form-control text-center" id="showLocationsName" required="required"> <option value="">Choose Location</option>';
    for (x in getLocations) {
            txt += "<option value="+ getLocations[x].randLocationId +">"+ getLocations[x].location + "</option>";
    }
    txt += '</select>';
    selectElement(rslt).innerHTML = txt;
} //get all location on selecting locations
selectElement("getLocations").addEventListener("load", loadLocations("getLocations")); // fire the locations on page load
selectElement("showLocationsName").addEventListener("change", function(){
	//delete existed location
	test("Cookie is to : " + document.cookie); //cookie before: was there a cookie before? if yes show it, if no- empty cookie
    deleteCookieIfExists("LocationSelectedIs");//delete existing location cookie, if customer is changing the location
	test("Cookie is to : " + document.cookie); //cookie after - new cookie
}); // when changing the location, update the existed location cookie
// 1.1.0
var getLocationBtn 	= selectElement("selectMenuBtn"); //on click on view menu btn of main page
getLocationBtn.addEventListener( "click", displayLocationMenu ); // 1.1.1 - when clicking on view menu btn
//show locations selected and the address from the drop down menu for location
function displayLocationMenu(){ //on selecting a location
	if( getElementValue("showLocationsName").length > 1 ){
			test(getElementValue("showLocationsName") +" is selected!");
			setElementValue("showLocationError", ""); // 1.1.2 - don't show errors
			// 1.2.0
			loadingImg("addProperMenuHere"); //load this image here on addProperMenuHere - div where the menu will be displayed
			setTimeout(loadContent, 1000); //1 second(s) and show loadContent
			function loadContent(){
				loadMenu("addProperMenuHere"); // view both sections for the menu and your order sections
				loadMyCategories("showCategoriesName");// show all categories as a select dropdown on the menu section
			}
			// then hide the select dropdown
			var selectedLocation = getElementValue("showLocationsName"); //this is a location random id:
			//now i need to get location info:
			var yourSelectedLocationIs = "";
			for( x  in getLocations ){ //this could be x-out by users for better look and feeling
				if( getLocations[x].randLocationId == selectedLocation ){ //only show selected location address and location number
					yourSelectedLocationIs = '<p class="text-center hideCurrentSelectedLocation">';
					yourSelectedLocationIs += '<span id="locationSelectedNumber" class="hide">'+getLocations[x].randLocationId+'</span>'; //this location rand id is to be hidden
					yourSelectedLocationIs += '#<span id="locationSelectedNumber">'+getLocations[x].locationNumber+'</span> - '; //location number
					yourSelectedLocationIs += '<span id="locationSelectedAddress">'+getLocations[x].locationAddress+'</span>'; //location Address
					yourSelectedLocationIs += '<span class="close">&times;</span></p>';
				}
			}
			//add a cookie for the location: make it exprie after an hour from now
			setCookie("LocationSelectedIs", selectedLocation, 0.5); //cookie: LocationSelectedIs to be expired in 0.5 day(s)
			selectElement("selectLocationDropDown").innerHTML = yourSelectedLocationIs ; //show location number and address here once selected
			selectElement("selectLocationDropDown").style.backgroundColor = "rgba(57, 81, 101, 0.7)"; //give parentElement a different background
			selectElement("selectLocationDropDown").style.border = "1px solid rgb(181, 120, 45)"; //give parentElement a different background
			exitCurrentAnyItem('close');//this element can be hidden/exit - ok
		// selectLocationDropDown
	}
	else
		setElementValue("showLocationError", "Must Select Location!"); // 1.1.3 - show an error if no selection is made
}
//close out locatoin number and address:
function exitCurrentAnyItem(closeWhatClass){
	var closebtns = document.getElementsByClassName(closeWhatClass);
	var i;
	for (i = 0; i < closebtns.length; i++) {
	  closebtns[i].addEventListener("click", function() { //at which event this happened?
		this.parentElement.parentElement.style.display = 'none'; //hide from parent class: showLocation
	  });
	}
}
//check if an item is descriped
function checkDescription(x){
	var descriptionSection = "";
	if(Menu['Menu'][x].IsDescriped == true){ //if found, have a label to be displayed
		descriptionSection = "<label class='text-muted itemDescription'>- "+descriptionRslt + "</label>";
	}else{
		descriptionSection = ""; //keep empty
	}
	return descriptionSection;
}
//get dropdown items from specific list
function getDropDownList(menuIndex,CustomItemIndex){
	//Menu['Menu'][0].CustomItem[0]["options"][1]["id"]
	var listItemDropDown = Menu['Menu'][menuIndex].CustomItem[CustomItemIndex].options, addSelectedItems = "";
	for(DropDownListItemIndex in listItemDropDown){
		addSelectedItems += '<option value="'+Menu['Menu'][menuIndex].CustomItem[CustomItemIndex]["options"][DropDownListItemIndex]["price"]+'">'+
																			Menu['Menu'][menuIndex].CustomItem[CustomItemIndex]["options"][DropDownListItemIndex]["item"]+'</option>';
	}
	return addSelectedItems;
}

var counterCustomItemAdd = 548; //custom item order unique class
//get related menu item on change the drop down of the categories:
function getRelatedMenu(value){
	if(value.length == 0 || value == ""){
		test('No Value is Selected!');
		selectElement("addRelatedMenu").innerHTML =  "<p class='text-center red' style='color: red; border: 1px solid;'>Must Select Menu Category!</p>"; 
	}
	else{
		test(value + ' is Selected!');
		//match selected item
		var itemName, itemPrice, itemId, 
			customOrder, descriptionRslt, 
			descriptionSection, itemDescriped,
			itemCustom, itemCustomButtons, customItemDetails,
			customItemAre, customItemTitle = "";
		selectElement("addRelatedMenu").innerHTML = "<h3 class='text-center'>"+ value +"</h3>";
		//get all items on the menu - as long as it is active and the value is the same as the category value selected
		for(x in Menu['Menu']){
			if(Menu['Menu'][x].Category == value && Menu['Menu'][x].Active == true){
				console.log(Menu['Menu'][x].Item + ' ........\n\t\t\t\t\t\t $' + Menu['Menu'][x].Price); //test: item name and price
				itemName = Menu['Menu'][x].Item, //get item name
				itemPrice = Menu['Menu'][x].Price;//get item price
				itemId	= Menu['Menu'][x].id;//get item id
				itemDescriped = Menu['Menu'][x].IsDescriped;//is item have a description
				descriptionRslt	= Menu['Menu'][x].Description;//what is the item description
				itemCustom	= Menu['Menu'][x].IsCustomItem;//does item have a custom item
				customItemAre = Menu['Menu'][x].CustomItem; //what are the options for this custom item
				//check if description is true, if so -> show description section				
				if(itemDescriped == true)
					descriptionSection = "<label class='text-muted itemDescription'>- "+descriptionRslt + "</label>";
				else
					descriptionSection = ""; //keep empty
				//show custom info: IsCustomItem - add a custom button to be shown
				if(itemCustom == true ){
					itemCustomButtons = '<div class="orderBtnSection"><button type="button" class="col-xs-3 btn btn-info" data-toggle="collapse" href="#collapseItem_'+
																itemId+'" role="button" aria-expanded="false" aria-controls="collapseItem_'+
																	itemId+'">Custom</button><span class="col-xs-6"></span>';
				}
				else
					itemCustomButtons = '<div class="orderBtnSection"><span class="col-xs-3"></span><span class="col-xs-6"></span>';
				
				//show custom item title:
				customItemTitle  =  '<div class="col-xs-12 customItemOptions">';
				customItemTitle += '<div class="col-xs-5"> Item</div>';
				customItemTitle  += '<div class="col-xs-2"> Price</div>';
				customItemTitle  += '<div class="col-xs-5"> Select</div></div>'+clearHTMLDiv; 
				//show item name, description, custom btn, add btn, custom item options as well
				customOrder = '<div class="col-xm-12 menuItemsSmall"><span id= "item_name_'+itemId+'" class="itemName col-xs-10">'+
																	itemName + "</span><span class='itemPrice col-xs-2'>$" + itemPrice;
				customOrder +='</span><div class="clearfix"></div>'+ descriptionSection +' <div class="clearfix"></div>' + itemCustomButtons;
				customOrder += '<button type="button" class="col-xs-3 btn btn-primary" onclick="addItemToCheckOut('+itemId+", 'addYourOrderHere'"+')">'+
													addBtnGlyphicon+'</button><div class="clearfix"></div>';
				//start a collapse div here
				customOrder += '<div class="collapse" id="collapseItem_'+itemId+'"><div class="addTitleToCustomItems">'+
															customItemTitle+'<div class="gridSection mt-12" id="showCustomItemsHere_'+itemId+
																'"></div></div>'+
																'<button class="btn btn-primary" onclick="addAllCurrentCustomItem(this,\'showCustomAddedOrder_'+itemId+'\',\''+itemId+'\',\'addYourOrderHere\')">Add to Order</button></h3>'+
																'<button class="pull-right btn btn-danger addCustomOrderToCart" onclick="removeAllCurrentCustomItem(\'showCustomAddedOrder_'+itemId+'\',\''+itemId+'\')">Start Over</button></h3>'+clearHTMLDiv+
																'<div class="table-responsive tableCheckOrder"><table class="table"><tbody class="p2 showCustomAddedOrder_'+itemId+'" id="showCustomAddedOrder_'+itemId+'"></tbody></table></div>'+
																'</div></div>';
																//add in between the custom items and also show the custom items being added
				selectElement("addRelatedMenu").innerHTML +=  customOrder;
				//get all dropdown list items on each dropdown:
				//get all extra custom items option: for(x in Menu['Menu'][3].CustomItem) console.log(Menu['Menu'][3].CustomItem[x].custItem);
				var myCustomMenuId, addTo = '';
				for(y in customItemAre){
					addTo = "showCustomAddedOrder_"+itemId;
					countCustomDeleteOrAddAll =  "deleteOrAddOrderId-"+counterCustomItemAdd;
					customItemDetails =  '<div class=' + countCustomDeleteOrAddAll +  ' id="addCustomItemTitle_'+ Menu["Menu"][x].CustomItem[y].id + '" > </div> <div class="col-xs-12 customItemOptions">';
					customItemDetails += '<div class="col-xs-5 eachItemCustomName">' + Menu['Menu'][x].CustomItem[y].custItem + ' </div>';
					customItemDetails += '<div class="col-xs-2"> $' + Menu['Menu'][x].CustomItem[y].price + '</div>';
					customItemDetails += '<div class="col-xs-4 form-group" role="group" aria-label="select item">';	
					customItemDetails += '<button type="button" class="addCustomSelectionBtn btn btn-warning col-xs-12" onclick="addCustomItemToPreCheckOut('+Menu['Menu'][x].CustomItem[y].id+ ', \''+ addTo+'\')">'+
															addBtnGlyphicon + '</button></div>'+
																clearHTMLDiv;
					customItemDetails += '</div>';
					selectElement("showCustomItemsHere_"+itemId).innerHTML +=  customItemDetails; //must be called after appending customOrder btn, so it can read it "showCustomItemsHere_"+itemId
					counterCustomItemAdd += 142; //let second custom order class such as deleteOrderId-### or addOrderId-###
				}
			}
		}
	}
}; // when changing the location, update the existed location cookie
function addMenu(itemName,itemPrice){
	var myDiv = 	"<div class='col-xm-12 col-sm-6'>";
		myDiv += 	"<p class='lead'>" + itemName + "<label class='text-right'>$" + itemPrice + "</label>"+"</p>";
		myDiv += 	"</div></div>";
}
//add order to checkout - front end:
var counterAdd = 541; //start every check order with unique id
function addItemToCheckOut(id, appendTo){
	//create tr
	var tr = document.createElement('tr'); //create an element
			tr.setAttribute("id", counterAdd); //make it a span with remove sign & btn
	var td_action = document.createElement('td'); //create an element
	var td_price = document.createElement('td'); //create an element
		  td_price.setAttribute('class', 'viewMyPriceForThisItem');
	var td_name = document.createElement('td'); //create an element
	var addSpan = document.createElement('span'); //create span element
		    addSpan.setAttribute("type", "button"); //make it a span with remove sign & btn
		    addSpan.setAttribute("class", "removeMeNow glyphicon glyphicon-minus btn btn-danger addCustomSelectionBtn"); //make it a span with remove sign & btn
		    addSpan.setAttribute("onclick", "removeCurrentItem("+counterAdd+")"); //add this function to remove current item 
	var rslt_action,rslt_name,rslt_price = "";//empty text
	//look for this id on the menu & get all its info
	for( c in Menu['Menu'] ){
		if(Menu['Menu'][c].id == id){ //find the matching item with the id 
			var itemName = Menu['Menu'][c].Item; //get item name
			var itemPrice = Menu['Menu'][c].Price;//get item price
			var itemID = Menu['Menu'][c].id;//get item price
			rslt_action = document.createTextNode(''); //add item removed,
			rslt_name = document.createTextNode(itemName); //add item name,
			rslt_price = document.createTextNode(itemPrice); //add item price,
		}
	}
	td_action.appendChild(addSpan);
	addSpan.appendChild(rslt_action); //empty
	td_name.appendChild(rslt_name);
	td_price.appendChild(rslt_price);
	tr.appendChild(td_action); //add qty to this item
	tr.appendChild(td_name); //add name to this item
	tr.appendChild(td_price); //add price to this item
	//append this info to:
	var addAt = document.getElementById(appendTo);
	// addAt.appendChild(tr); //append it to the last item.
	addAt.insertBefore(tr, addAt.childNodes[0]); //append it to the first item.
	counterAdd += 658; //make sure to add random id, so next id will be different - note after clikcing on an item
	addTotalPaymentNow('.addSubTotalHere', '.viewMyPriceForThisItem', 'AddFinalTotalHere'); //update total payments of current order - make sure to add . or # - querySelectorAll
}
function addMainCustomItemToCheckOut(id, appendTo,matchClassName){
	//create tr
	var tr = document.createElement('tr'); //create an element
			tr.setAttribute("id", counterAdd); //make it a span with remove sign & btn
			tr.setAttribute("class", 'class-'+matchClassName); //add same class to current main item, so it can trigger all other classes with same class name
	var td_action = document.createElement('td'); //create an element
	var td_price = document.createElement('td'); //create an element
		  td_price.setAttribute('class', 'viewMyPriceForThisItem');
	var td_name = document.createElement('td'); //create an element
	var addSpan = document.createElement('span'); //create span element
		    addSpan.setAttribute("type", "button"); //make it a span with remove sign & btn
		    addSpan.setAttribute("class", "removeMeNow glyphicon glyphicon-minus btn btn-danger addCustomSelectionBtn"); //make it a span with remove sign & btn
			var addNewClass= 'class-'+matchClassName;
		    addSpan.setAttribute("onclick", 'removeCurrentMainItem("'+addNewClass+'")'); //add this function to remove current main custom item - note its the classname not an id
	var rslt_action,rslt_name,rslt_price = "";//empty text
	//look for this id on the menu & get all its info
	for( c in Menu['Menu'] ){
		if(Menu['Menu'][c].id == id){ //find the matching item with the id 
			var itemName = Menu['Menu'][c].Item; //get item name
			var itemPrice = Menu['Menu'][c].Price;//get item price
			var itemID = Menu['Menu'][c].id;//get item price
			rslt_action = document.createTextNode(''); //add item removed,
			rslt_name = document.createTextNode(itemName); //add item name,
			rslt_price = document.createTextNode(itemPrice); //add item price,
		}
	}
	td_action.appendChild(addSpan);
	addSpan.appendChild(rslt_action); //empty
	td_name.appendChild(rslt_name);
	td_price.appendChild(rslt_price);
	tr.appendChild(td_action); //add qty to this item
	tr.appendChild(td_name); //add name to this item
	tr.appendChild(td_price); //add price to this item
	//append this info to:
	var addAt = document.getElementById(appendTo);
	// addAt.appendChild(tr); //append it to the last item.
	addAt.insertBefore(tr, addAt.childNodes[0]); //append it to the first item.
	counterAdd += 658; //make sure to add random id, so next id will be different - note after clikcing on an item
	addTotalPaymentNow('.addSubTotalHere', '.viewMyPriceForThisItem', 'AddFinalTotalHere'); //update total payments of current order - make sure to add . or # - querySelectorAll
}
//add order to pre checkout - front end - custom each item:
//start every check order with unique id
function addCustomItemToPreCheckOut(id, appendTo){
	//get the item you're in
	var getCurrentItem = document.getElementById('addCustomItemTitle_'+id);
	//get the class name of that id:
	var classNameIs  = getCurrentItem.className; // "deleteOrAddOrderId-"+counterCustomItemAdd;
	//create tr
	var tr = document.createElement('tr'); //create an element
			tr.setAttribute("id", counterAdd); //make it a span with remove sign & btn
			tr.setAttribute("class", classNameIs); //add custom class to each row we create, so we can delete or add all at once
	var td_action = document.createElement('td'); //create an element
	var td_price = document.createElement('td'); //create an element
		  td_price.setAttribute('class', 'viewMyPriceForThisItem-'+id); //change this class name later to viewMyPriceForThisItem-id once moved from precheckout to checkout
	var td_name = document.createElement('td'); //create an element
	var addSpan = document.createElement('span'); //create span element
		    addSpan.setAttribute("type", "button"); //make it a span with remove sign & btn
		    addSpan.setAttribute("class", "removeMeNow glyphicon glyphicon-minus btn btn-danger addCustomSelectionBtn"); //make it a span with remove sign & btn
		    addSpan.setAttribute("onclick", "removeCurrentItemPreChecked("+counterAdd+")"); //add this function to remove current item from custom item
	var rslt_action,rslt_name,rslt_price = "";//empty text
	//look for this id on the customDinners menu & get all its info - note we already know the id, no need to loop through it
		if(customDinners[id-1].id == id){ //find the matching item with the id - //NOTE id-1 since index of array starts at 0
			var itemName = customDinners[id-1].custItem; //get item name
			var itemPrice = customDinners[id-1].price;//get item price
			var itemID = customDinners[id-1].id;//get item price
			rslt_action = document.createTextNode(''); //add item removed,
			rslt_name = document.createTextNode(itemName); //add item name,
			rslt_price = document.createTextNode(itemPrice); //add item price,
		}
	td_action.appendChild(addSpan);
	addSpan.appendChild(rslt_action); //empty
	td_name.appendChild(rslt_name);
	td_price.appendChild(rslt_price);
	tr.appendChild(td_action); //add qty to this item
	tr.appendChild(td_name); //add name to this item
	tr.appendChild(td_price); //add price to this item
	//append this info to:
	var addAt = document.getElementById(appendTo);
	// addAt.appendChild(tr); //append it to the last item.
	addAt.insertBefore(tr, addAt.childNodes[0]); //append it to the first item.
	counterAdd += 658; //make sure to add random id, so next id will be different - note after clikcing on an item
	//counterCustomItemAdd += 548; //this is to add extra 548 for each custom order to be unique
	//addTotalPaymentNow('.addSubTotalHere', '.viewMyPriceForThisItem', 'AddFinalTotalHere'); //update total payments of current order - make sure to add . or # - querySelectorAll
}
//remove current item from checkout:
function removeCurrentItem(findId){
	var item = document.getElementById(findId);
	//clear this item
	item.remove();
	//update total:
	addTotalPaymentNow('.addSubTotalHere', '.viewMyPriceForThisItem', 'AddFinalTotalHere'); // - make sure to add . or # - querySelectorAll
	test(findId + " -  item id is removed!");
}
function removeCurrentMainItem(classNameIs){
	var deleteAllCustomItems = document.querySelectorAll('.'+classNameIs); //since it a class, must have .className
	//clear this all custom item + main custom item
	for(i = 0; i < deleteAllCustomItems.length; i++){
		deleteAllCustomItems[i].remove();
	} //remove all with the same class
	//update total:
	addTotalPaymentNow('.addSubTotalHere', '.viewMyPriceForThisItem', 'AddFinalTotalHere'); // - make sure to add . or # - querySelectorAll
	test(deleteAllCustomItems + " -  items id is removed!");
}
//remove all items from checkout:
function removeAllCurrentItem(findId){
	var item = document.getElementById(findId);
	//clear this item
	item.innerHTML = '';
	//update sub total:
	addTotalPaymentNow('.addSubTotalHere', '.viewMyPriceForThisItem', 'AddFinalTotalHere'); // - make sure to update total when clearing all order
	test(findId + " -  item id is removed!");
}
//remove current each custom item from pre checkout:
function removeCurrentItemPreChecked(findId){
	var item = document.getElementById(findId);
	//clear this item
	item.remove();
	//update total:
	//addTotalPaymentNow('.addSubTotalHere', '.viewMyPriceForThisItem', 'AddFinalTotalHere'); // - make sure to add . or # - querySelectorAll
	test(findId + " -  item id is removed!");
}
//remove all custom items from pre-checkout:
function removeAllCurrentCustomItem(findId, changeItemId){
	var item = document.getElementById(findId);
	//clear this item
	item.innerHTML = '';
	//make sure when clearing all, give it a different class name as well as adding order to checkout, let the main class name to be different so it can be unique
	//get the item you're in
	var getCurrentItem = document.getElementById('addCustomItemTitle_'+changeItemId);
	//get the class name of that id:
	var classNameIs  = getCurrentItem.className; // "deleteOrAddOrderId-"+counterCustomItemAdd;
	getCurrentItem.classList.remove(classNameIs); // remove class name : "deleteOrAddOrderId-"+counterCustomItemAdd;
	getCurrentItem.classList.add('deleteOrAddOrderId-'+counterCustomItemAdd); // add to new class name : "deleteOrAddOrderId-"+counterCustomItemAdd;
	//create tr
	var tr = document.createElement('tr'); //create an element
			tr.setAttribute("id", counterAdd); //make it a span with remove sign & btn
			tr.setAttribute("class", classNameIs); //add custom class to each row we create, so we can delete or add all at once
	//update sub total:
	//addTotalPaymentNow('.addSubTotalHere', '.viewMyPriceForThisItem', 'AddFinalTotalHere'); // - make sure to update total when clearing all order
	test(findId + " - custom items is/are removed!");
	counterCustomItemAdd += 25; //add this number randomaly to next counterCustomItemAdd unique number
}
//add all custom items from pre-checkout to checkout:
var customClassStartsWith = 63;
function addAllCurrentCustomItem(currentElement, findId, changeItemId,appendTo){
	//get all custom items
	var getCurrentTable = currentElement.nextSibling.nextSibling.nextSibling.children[0];
	var getAllRows = getCurrentTable.children[0]; //use .children[] @the end to get every tr
	var getAllRowsLength = getAllRows.children.length;
	for(i = 0; i < getAllRowsLength; i++){ 
		var eachRow = getAllRows.children[i];
		var currentRowId = eachRow.getAttribute('id');
		eachRow.setAttribute('class', 'class-'+customClassStartsWith); //each row with same class name
		eachRow.children[0].children[0].setAttribute('onClick', "removeCurrentItem("+currentRowId+")" ); //each first td on row, to remove individual
		eachRow.children[2].classList.remove('viewMyPriceForThisItem'-changeItemId); //remove custom remove item class
		eachRow.children[2].classList.add('viewMyPriceForThisItem'); //add  regular remove item class
	}
	// add all items now:
	var addAt = document.getElementById(appendTo); //append to
	//create another row with this current item:
	while (getAllRows.childNodes.length > 0) {
		addAt.insertAdjacentElement('afterbegin', getAllRows.childNodes[0]);
		// addAt.insertBefore(getAllRows.childNodes[0]);
		// addAt.insertBefore(getAllRows.childNodes[0]);
	}
	//add main item
	addMainCustomItemToCheckOut(changeItemId, appendTo,customClassStartsWith);
	// //update sub total:
	addTotalPaymentNow('.addSubTotalHere', '.viewMyPriceForThisItem', 'AddFinalTotalHere'); // - make sure to update total when clearing all order
	//getAllRows.innerHTML = '';
	test(customClassStartsWith + " - class custom items is/are removed!");
	customClassStartsWith += 35;
	counterAdd += 25; //add this number randomaly to next counterCustomItemAdd unique number
}
//get Order Tax, Sub Total & Total:
function getTotalForMoreThanOneElement(className){
	var getElement = document.querySelectorAll(className);
	//to get length of items: may be display 
	var total = 0.00;
	for(x = 0; x < getElement["length"]; x++){
		var n = parseFloat(getElement[x].innerText);
		total = total + n;
	}
	test(" -  you calculating payment: " + total.toFixed(2));
	return total.toFixed(2); //return total of items on that specific item, must be decimal number like 12.659 -> 12.66
}
//append sub total, tax total to specific element:
function addTotalPaymentNow( addResultsTo, calcTotalOfThisElelemnt,addFinalPaymentTo ){
	//add subtotal
	var getElement = document.querySelectorAll( addResultsTo ); //make all elements that will have total with the same class
	var myTotalIs = getTotalForMoreThanOneElement( calcTotalOfThisElelemnt );
	for(x = 0; x < getElement["length"]; x++){
		 getElement[x].innerHTML = myTotalIs; //get total of this div and add results to addResultsTo
	}
	//get tax total here:
	addTotalTaxes();
	//get total of all items: 
	var finalTotalIs = document.getElementById( addFinalPaymentTo ); //make all elements that will have total with the same class
	var totalTaxes = parseFloat(addTotalTaxes()); //get Total Taxes
	var subtotalIs = parseFloat(document.getElementById( 'getSubTotalHere' ).innerText); //subtotal
	var finalTotal = (totalTaxes + subtotalIs).toFixed(2);
	finalTotalIs.innerText = finalTotal;
	document.getElementById('showTotalOnHeader').innerText = finalTotal;
	//now show next btn to show pickUpDate and Time if there is an order:
	showOrHideNextBtnToShowPickUpTimeForm();
	test(" -  your subtotal is " + getTotalForMoreThanOneElement(calcTotalOfThisElelemnt) + " & Taxes: !: " + addTotalTaxes()  + " & Total: !: " + finalTotal);
}
//get current selected location taxes:
function getCurrentTaxesOf( addTo, locationId ){
	var locationId = document.getElementById(locationId).innerText; //get the id as a text
	for( x  in getLocations ){ //this could be x-out by users for better look and feeling
		if( getLocations[x].randLocationId == locationId ){ //only show selected location address and location number
			//show location taxes on menu:
			document.getElementById(addTo).innerText = getLocations[x].taxes.toFixed(3); // up to 3 decimals
		}
	}
}
//get total of taxes everytime you add/remove an item
function getTotalOfTaxes( addResultsTo ){
	var addTotalOfTaxes = document.getElementById( addResultsTo ); //get the id as a text
	//note: taxIs, will come from function returnCurrentTaxesOf( locationId ) everytime to add/remove items
	var taxIs = returnCurrentTaxesOf( 'locationSelectedNumber' );
	var subTotalIs = getTotalForMoreThanOneElement('.viewMyPriceForThisItem');
	var taxTotal = ( ( taxIs/100 ) * subTotalIs ); //ex: ( 7.45/100 * 150 )+ 150 = 161.175.toFixed(2) ~ 161.18
	//add results to tax total:
	addTotalOfTaxes.innerText = taxTotal.toFixed(2);
	//return my total of taxes only:
	return taxTotal.toFixed(2);
}
//get taxes:
function returnCurrentTaxesOf( locationId ){
	var locationId = document.getElementById( locationId ).innerText; //get the id as a text
	var tax = 0.000;
	for( x  in getLocations ){ //this could be x-out by users for better look and feeling
		if( getLocations[x].randLocationId == locationId ){ //only show selected location address and location number
			//show location taxes on menu:
			tax = getLocations[x].taxes.toFixed(3); // up to 3 decimals
		}
	}
	return tax; //now this my current taxes selected
}
function addTotalTaxes(){
	var addResultsTo = 'addTaxTotalHere';
	var rslt =  getTotalOfTaxes(addResultsTo);
	return rslt;
}
//my footer: 
(function addMyInfoToFooter(){
	var myFooterSection = selectElement('myFooter');
	myFooter.innerHTML = "<div class='col-sm-4 col-xs-4'><img style='height:30px' src='"+businessLogo+"' title='"+businessName+"' alt='Image for "+businessName+"' class='img-responsive center-block'/></div>";//logo
	myFooter.innerHTML += "<div class='col-sm-4 col-xs-8' style='line-height: 2;'>"+businessName+"</div>"; //business name
	myFooter.innerHTML += "<div class='col-sm-4'  style='line-height: 2;'>Developed By: <a title='Salah Bedeiwi - 612 644 1634' alt='Salah Bedeiwi - 612 644 1634' href='http://salahbedeiwi.com' target='blank'>Salah Bedeiwi</a></div>";
})();