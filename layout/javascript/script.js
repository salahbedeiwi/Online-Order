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
//my categories
var categories = [ "Dinners", "Lunch", "Breakfast", "Side Orders", "Specials" ];
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
	{	"id" : 1, "custItem" : "Extra Meat", "price": 15.99}, //0 & 1 index
	{	"id" : 2, "custItem" : "Upgrade Lemonade", "price": 5.99},
	{	"id" : 3, "custItem" : "Catfish & Shrimp", "price": 9.99},
	{	"id" : 4, "custItem" : "Burgers & Wings", "price": 3.99},
	{	"id" : 5, "custItem" : "Mango Juice & Org.", "price": 1.99},
	{	"id" : 6, "custItem" : "Chilly", "price": 19.99},
	{	"id" : 7, "custItem" : "40 Chx Wings", "price": 29.99},
];
var Menu = { "Menu" :
	[
	{
		"id"			: 1, //item unique id number
		"Category" 		: categories[0], //choose the category to be displayed under
		"Item"			: "Catfish & Shrimp", //item name
		"Price"			: 15.99, //item price
		"IsCustomItem"	: true, //show custom button if is true
		"CustomItem"	: [customDinners[0]], //invoke only if IsCustomItem is true
		"HaveImage"		: true, //show image?
		"ImgUrl"		: "layout/img/Design/Food-Images.png",//invoke only if HaveImage is true
		"IsDescriped"	: false, //no description
		"Description"	: "This is one of our favorite dish for Catfish & Shrimp", //description is. can be empty if IsDescriped is false
		"Active"		: true //it is valid item
	},
	{
		"id"			: 2,
		"Category" 		: categories[0],
		"Item"			: "Chicken Tender & Perch",
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
		"Item"					: "Catfish & Shrimp",
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
	selectElement(id).innerHTML = "<img src='layout/img/Design/Screen-Shot-2018-04-24-at-1.49.12-PM-e1524694734911.png' class='img-responsive img-rounded center-block' alt='' title='loading'/>";
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
	txt1 += 	'<button class="pull-left btn btn-info  addCustomOrderToCart" onclick="showThisSection(\'pickUpTimeSection\')">Next</button> Your Order!'; //make sure id is between two ''
	txt1 += 	'<button class="pull-right btn btn-info  addCustomOrderToCart" onclick="removeAllCurrentItem(\'addYourOrderHere\')">Clear All</button></h3>'+clearHTMLDiv; //make sure id is between two ''
	txt1 += 	"<div class='table-responsive checkOutHeaderTitle'><table class='table'><thead><th>Action</th><th class='text-center'>Item(s)</th><th class='pricesTitle'>Price($)</th></thead></table></div>";
	txt1 += 	"<div class='table-responsive tableCheckOrder'><table class='table'><tbody id='addYourOrderHere'></tbody>";
	txt1 += 	"</table></div>";
	txt1 += 	"<div class='table-responsive checkOutBottomTitle'><table class='table'><tfoot>"+
							"<tr><th></th><th class='text-center'>Taxes(<span id='selectedLocationTaxes'></span>%)</th><th class='pricesTitle'>$<span id='addTaxTotalHere'>0.00</span></th></tr>" +
							"<tr><th></th><th class='text-center'>Sub Total</th><th class='pricesTitle'><span>$</span><span class='addSubTotalHere' id='getSubTotalHere'>0.00</span></th></tr>"+
							"<tr><th></th><th class='text-center'>Total</th><th class='pricesTitle'><span>$</span><span class='addTotalHere' id='AddFinalTotalHere'>0.00</span></th></tr>"+
					"</tfoot></table></div><button class='pull-right btn btn-info  addCustomOrderToCart' onclick='showThisSection(\"pickUpTimeSection\")'>Next</button>";
	txt1  += '<p>Pick up time : <span class="timePicked">---</span></p>'+
								  '<p>Pick up date : <span class="datePicked">---</span></p>'; //add both pick up time and date here
	txt1 += '</div></div>'; //end of col-sm-4 and mainMenuAndCheckoutOrder div - see your orders that have been added
	txt1 += '<div class="hide pickUpTimeSection"></div>'; //pick UpTime Section
	txt1 += '<div class="hide getCustomerRecordSection"></div>'; //get Customer Record Section
	txt1 += '<div class="hide paymentSection"></div>'; //payment Section
	txt1 += '<div class="hide confirmationOrderSection"></div>'; //confirmation Order Section
    selectElement(rslt).innerHTML = txt1;
    loadingMainImgAfterLocationIsSelected("addRelatedMenu"); //load this image and then later append the menu
	//also show the current tax percentage
	getCurrentTaxesOf('selectedLocationTaxes', 'locationSelectedNumber');
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
		document.getElementById('pickupTimeIs').value = document.querySelector('.timePicked').innerText;//let the value be the same as selected before
		document.getElementById('pickupDateIs').value = document.querySelector('.datePicked').innerText;//let the value be the same as selected before
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
			pickUpForm  += "<button class='pull-right btn btn-info  addCustomOrderToCart' onclick='showThisSection(\"getCustomerRecordSection\")'>Next</button>"; //get customer record
			pickUpForm  += "</div>";
			pickUpForm  += clearHTMLDiv;
			pickUpForm  += "<div>";
			pickUpForm  += mainPickUpTimeSection(); //get body of the pickup order
			pickUpForm  += "</div>"; 
			pickUpForm  += "</div>"; 
	return pickUpForm;
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
								  '<input type="time" class="form-control" id="pickupTimeIs" required="required">'+
								  '<span class="help-block">What time do you like to pick up your order?</span>'+
								'</div>';
			myForm += '<div class="form-group">'+
								  '<button class="btn btn-info addCustomOrderToCart" onclick="addOrderPickUpTimeAndDate(\'pickupTimeIs\',\'pickupDateIs\')">Add</button>'+
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
}
//get custom record form
function getCustomerRecord(){
	var 	pickUpForm 	= "<div class='col-sm-12'>"; //main form
			pickUpForm  += "<div>";
			pickUpForm  += "<button class='btn btn-info  addCustomOrderToCart' onclick='showThisSection(\"mainMenuAndCheckoutOrder\")'>Update My Order</button>"; //update my order
			pickUpForm  += "<button class='btn btn-info  addCustomOrderToCart' onclick='showThisSection(\"pickUpTimeSection\")'>Update PickUp Time</button>"; //update PickUp Time
			pickUpForm  += "<button class='pull-right btn btn-info  addCustomOrderToCart' onclick='showThisSection(\"paymentSection\")'>Next</button>"; //go to payment section
			pickUpForm  += "</div>";
			pickUpForm  += clearHTMLDiv;
			pickUpForm  += "<p>Enter Your Customer Info </p>"; //show Customer form
			pickUpForm  += "</div>"; 
	return pickUpForm;
}
//get payment  form
function getPaymentForms(){
	var 	pickUpForm 	= "<div class='col-sm-12'>"; //main form
			pickUpForm  += "<div>";
			pickUpForm  += "<button class='btn btn-info  addCustomOrderToCart' onclick='showThisSection(\"mainMenuAndCheckoutOrder\")'>Update My Order</button>"; //update my order
			pickUpForm  += "<button class='btn btn-info  addCustomOrderToCart' onclick='showThisSection(\"pickUpTimeSection\")'>Update PickUp Time</button>"; //update PickUp Time
			pickUpForm  += "<button class='btn btn-info  addCustomOrderToCart' onclick='showThisSection(\"getCustomerRecordSection\")'>Update Custom Info</button>"; //update customer Login Info
			pickUpForm  += "<button class='pull-right btn btn-info  addCustomOrderToCart' onclick='showThisSection(\"confirmationOrderSection\")'>Confirmation</button>"; //go to Confirmation order section
			pickUpForm  += "</div>"; 
			pickUpForm  += clearHTMLDiv;
			pickUpForm  += "<p>Enter Your Payment Info </p>"; //show payment form
			pickUpForm  += "</div>"; 
	return pickUpForm;
}
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
			selectElement("selectLocationDropDown").style.backgroundColor = "rgb(100, 149, 237)"; //give parentElement a different background
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
																'<button class="btn btn-info addCustomOrderToCart" onclick="addAllCurrentCustomItem(this,\'showCustomAddedOrder_'+itemId+'\',\''+itemId+'\',\'addYourOrderHere\')">Add to Cart</button></h3>'+
																'<button class="pull-right btn btn-danger addCustomOrderToCart" onclick="removeAllCurrentCustomItem(\'showCustomAddedOrder_'+itemId+'\',\''+itemId+'\')">Clear All</button></h3>'+clearHTMLDiv+
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
					customItemDetails += '<button type="button" class="addCustomSelectionBtn btn btn-info col-xs-12" onclick="addCustomItemToPreCheckOut('+Menu['Menu'][x].CustomItem[y].id+ ', \''+ addTo+'\')">'+
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
	//
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
