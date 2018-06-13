//add all locations on here: 
var getLocations = [
	{
		"location" : "Burnsville",
		"locationValue" : "Burnsville",
		"locationAddress" : "1234 sample, Burnsville MN",
		"phoneNumber" : "612 644 1634",
		"menu_url" : "Burnsville.json"
	},
	{
		"location" : "St Paul",
		"locationValue" : "St_Paul",
		"locationAddress" : "1234 sample, St Paul MN",
		"phoneNumber" : "644 644 644",
		"menu_url" : "StPaul.json"
	}
];
var categories = [ "Dinners", "Lunch", "Breakfast", "Side Orders", "Specials" ];
var customDinners = [
	{	"custItem" : "Extra Meat", "price": 15.99 } ,
	{	"custItem" : "Upgrade Lemonade", "price": 5.99 } 
];
var Menu = { "Menu" :
	[
	{
		"Category" 		: categories[0],
		"Item"			: "Catfish & Shrimp",
		"Price"			: 15.99,
		"IsCustomItem"	: true,
		"CustomItem"	: customDinners, //invoke only if IsCustomItem is true
		"HaveImage"		: true,
		"ImgUrl"		: "layout/img/Design/Food-Images.png",//invoke only if HaveImage is true
		"IsDescriped"	: true,
		"Description"	: "This is one of our favorite dish",
		"Active"		: true
	},
	{
		"Category" 		: categories[0],
		"Item"			: "Chicken Tender & Perch",
		"Price"			: 10.99,
		"IsCustomItem"	: true,
		"CustomItem"	: customDinners, //invoke only if IsCustomItem is true
		"HaveImage"		: true,
		"ImgUrl"		: "layout/img/Design/Food-Images.png",//invoke only if HaveImage is true
		"IsDescriped"	: true,
		"Description"	: "This is one of our favorite dish",
		"Active"		: true
	},
	{
		"Category" 		: categories[0],
		"Item"			: "Catfish & Shrimp",
		"Price"			: 15.99,
		"IsCustomItem"	: true,
		"CustomItem"	: customDinners, //invoke only if IsCustomItem is true
		"HaveImage"		: true,
		"ImgUrl"		: "layout/img/Design/Food-Images.png",//invoke only if HaveImage is true
		"IsDescriped"	: true,
		"Description"	: "This is one of our favorite dish",
		"Active"		: true
	},
	{
		"Category" 		: categories[0],
		"Item"			: "Chicken Tender & Perch",
		"Price"			: 10.99,
		"IsCustomItem"	: true,
		"CustomItem"	: customDinners, //invoke only if IsCustomItem is true
		"HaveImage"		: true,
		"ImgUrl"		: "layout/img/Design/Food-Images.png",//invoke only if HaveImage is true
		"IsDescriped"	: true,
		"Description"	: "This is one of our favorite dish",
		"Active"		: true
	},
	{
		"Category" 		: categories[0],
		"Item"			: "Wings & Gizzards",
		"Price"			: 10.99,
		"IsCustomItem"	: true,
		"CustomItem"	: customDinners, //invoke only if IsCustomItem is true
		"HaveImage"		: true,
		"ImgUrl"		: "layout/img/Design/Food-Images.png",//invoke only if HaveImage is true
		"IsDescriped"	: true,
		"Description"	: "This is one of our favorite dish",
		"Active"		: false
	},
	{
		"Category" 		: categories[1],
		"Item"			: "Philly Steak",
		"Price"			: 10.99,
		"IsCustomItem"	: true,
		"CustomItem"	: customDinners, //invoke only if IsCustomItem is true
		"HaveImage"		: true,
		"ImgUrl"		: "layout/img/Design/Food-Images.png",//invoke only if HaveImage is true
		"IsDescriped"	: true,
		"Description"	: "This is one of our favorite dish",
		"Active"		: true
	}
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
function selectElement(elementName){
	return document.getElementById(elementName);
}
function getElementValue(elementName){
	return selectElement(elementName).value;
}
function setElementValue(elementName, msg){
	selectElement(elementName).innerHTML = msg;
	return msg;
}
function styleElement(elementName){
	//selectLocationDropDown
	return document.getElementById(elementName).style;
}
function test(msg){
	return console.log(msg);
}
//load any script:
function dynamicallyLoadScript(url) {
    var script = document.createElement("script"); // Make a script DOM node
    script.src = url; // Set it's src to the provided URL

    document.head.appendChild(script); // Add it to the end of the head section of the page (could change 'head' to 'body' to add it to the end of the body section instead)
}
//load an img
function loadingImg(id){
	selectElement(id).innerHTML = 
		"<img src='layout/img/Design/loading1.gif' style='width:50px' class='img-responsive img-rounded center-block' alt='' title='loading'/>";
}
//load main Image after selecting the location
function loadingMainImgAfterLocationIsSelected(id){
	selectElement(id).innerHTML = 
		"<img src='layout/img/Design/Screen-Shot-2018-04-24-at-1.49.12-PM-e1524694734911.png' class='img-responsive img-rounded center-block' alt='' title='loading'/>";
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
        deleteCookie(cookieName);
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
var	 txt0 = "";
function loadMyCategories(rslt){
	txt0 += '<option value="">Select Menu</option>';
    for (x in categories) {
        txt0 += "<option value="+ categories[x] +">"+ categories[x] + "</option>";
   	}
    selectElement(rslt).innerHTML = txt0;
}
var	 txt1 = "";
function loadMenu(rslt){
	//add a select dropdown for all categories:
	txt1 += '<div class="col-xm-12 col-sm-6"><h3>Choose Your Menu!</h3><select class="form-control text-center" id="showCategoriesName" onchange="getRelatedMenu(this.value)"> <option value="">Select Menu</option></select><br>';
	//show the related menu based on the value of the #showCategoriesName
	txt1 += "<div id='addRelatedMenu'></div></div><div class='col-xm-12 col-sm-6' id='renderOrderedItems'><h3>Your Order!</h3></div>";
    /*
	txt1 += "<table border='1'>";
    for (x in getLocations) {
            txt1 += "<tr><td>" + getLocations[x].location + "</td></tr>";
    }
    txt1 += "</table>";
    */
    selectElement(rslt).innerHTML = txt1;
    loadingMainImgAfterLocationIsSelected("addRelatedMenu");
} // load my menu
function loadLocations(rslt){
   var txt = "";
   txt += '<select class="form-control text-center" id="showLocationsName" required="required"> <option value="">Choose Location</option>';
    for (x in getLocations) {
           // txt += "<option value="+ getLocations[x].menu_url +">"+ getLocations[x].location + "</option>";
            txt += "<option value="+ getLocations[x].locationValue +">"+ getLocations[x].location + "</option>";
    }
    txt += '</select>';
    selectElement(rslt).innerHTML = txt;
} //get all location on selecting locations
selectElement("getLocations").addEventListener("load", loadLocations("getLocations")); // fire the locations on page load
selectElement("showLocationsName").addEventListener("change", function(){
	//delete existed location
	test("Cookie is to : " + document.cookie); //cookie before
    deleteCookieIfExists("LocationSelectedIs");//delete location cookie, because customer is changing the location
	test("Cookie is to : " + document.cookie); //cookie after
}); // when changing the location, update the existed location cookie
// 1.1.0
var getLocationBtn 	= selectElement("selectMenuBtn");
getLocationBtn.addEventListener("click", displayLocationMenu); // 1.1.1
function displayLocationMenu(){
	if(	getElementValue("showLocationsName").length > 1 ){
		test(getElementValue("showLocationsName") +" is selected!");
		setElementValue("showLocationError", ""); // 1.1.2
		// 1.2.0
		loadingImg("addProperMenuHere");
		setTimeout(loadContent, 3000);
		function loadContent(){
			// loadJsonData("addProperMenuHere", 'Content/Business/businessLocations.js');
			loadMenu("addProperMenuHere"); // view related menu
			loadMyCategories("showCategoriesName");// show all categories as a select dropdown list
		}
		// then hide the select dropdown
		var selectedLocation = getElementValue("showLocationsName");
		//add a cookie for the location: make it exprie after an hour from now
		setCookie("LocationSelectedIs", selectedLocation, 0.5); //cookie: LocationSelectedIs
		selectElement("selectLocationDropDown").innerText = selectedLocation; //show selected location
	// selectLocationDropDown
	}
	else
		setElementValue("showLocationError", "Must Select Location!"); // 1.1.3
}
//get related menu item:
function getRelatedMenu(value){
	if(value.length == 0 || value == "")
		test('No Value is Selected!');
	else{
		test(value + ' is Selected!');
		//match selected item
		var itemName, itemPrice = "";
		selectElement("addRelatedMenu").innerHTML = "<p class='lead'>"+ value +"</p>";
		for(x in Menu['Menu']){
			if(Menu['Menu'][x].Category == value && Menu['Menu'][x].Active == true){
				console.log(Menu['Menu'][x].Item + ' ........\n\t\t\t\t\t\t $' + Menu['Menu'][x].Price);
				itemName = Menu['Menu'][x].Item,
				itemPrice = Menu['Menu'][x].Price;
				//addResult = addMenu(itemName,itemPrice); 
				selectElement("addRelatedMenu").innerHTML +=  "<p class='col-xm-12 lead menuItemsSmall'>" + itemName + "<br><span class='text-right'>$" + itemPrice + "</span>"+"</p>"; 
			}
		}
	}
}; // when changing the location, update the existed location cookie
function addMenu(itemName,itemPrice){
	var myDiv = 	"<div class='col-xm-12 col-sm-6'>";
		myDiv += 	"<p class='lead'>" + itemName + "<label class='text-right'>$" + itemPrice + "</label>"+"</p>";
		myDiv += 	"</div>";
}