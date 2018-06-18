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
var customSelectDown = [
					{id:1, "item":"small", "price": 2.99},
					{id:2, "item":"medium", "price": 3.99},
					{id:3, "item":"large", "price": 4.99},
					{id:4, "item":"Cook Meduim", "price": 0.99},
					{id:5, "item":"Well Done", "price": 0.99},
					{id:6, "item":"X.Hard", "price": 0.00}
				];
var customDinners = [
		//each custom item is unique (id)
	{	"id" : 1, "custItem" : "Extra Meat", "price": 15.99, 
		"type": "dropdownList", "options": [customSelectDown[1],customSelectDown[2] ] },
	{	"id" : 2, "custItem" : "Upgrade Lemonade", "price": 5.99, "type": "checkbox" , 
		"options": [ customSelectDown[0] ] },
	{	"id" : 3, "custItem" : "Chilly", "price": 19.99, "type": "number" , 
		"options": [ customSelectDown[3] ] }
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
		"CustomItem"	: [customDinners[0]], //invoke only if IsCustomItem is true
		"HaveImage"		: true,
		"ImgUrl"		: "layout/img/Design/Food-Images.png",//invoke only if HaveImage is true
		"IsDescriped"	: true,
		"Description"	: "This is one of our favorite dish for Chicken Tender & Perch",
		"Active"		: true
	},
	{
		"id"			: 3,
		"Category" 		: categories[0],
		"Item"			: "Catfish & Shrimp",
		"Price"			: 15.99,
		"IsCustomItem"	: true,
		"CustomItem"	: [ 
							customDinners[0],
							customDinners[0],
							customDinners[1],
							customDinners[0],
							customDinners[0],
							customDinners[1]
						   ], //invoke only if IsCustomItem is true
		"HaveImage"		: true,
		"ImgUrl"		: "layout/img/Design/Food-Images.png",//invoke only if HaveImage is true
		"IsDescriped"	: true,
		"Description"	: "This is one of our favorite dish for Catfish & Shrimp",
		"Active"		: true
	},
	{
		"id"			: 4,
		"Category" 		: categories[0],
		"Item"			: "Chicken Tender & Perch",
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
		"Item"			: "Wings & Gizzards",
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
		"Item"			: "Philly Steak",
		"Price"			: 10.99,
		"IsCustomItem"	: true,
		"CustomItem"	: [customDinners[0]], //invoke only if IsCustomItem is true
		"HaveImage"		: true,
		"ImgUrl"		: "layout/img/Design/Food-Images.png",//invoke only if HaveImage is true
		"IsDescriped"	: true,
		"Description"	: "This is one of our favorite dish for Philly Steak",
		"Active"		: true
	},
	/*
	{
		"id"			: 7,
		"Category" 		: categories[0],
		"Item"			: "Catfish & Shrimp",
		"Price"			: 15.99,
		"IsCustomItem"	: true,
		"CustomItem"	:   [ {
								"type_checkbox" : [
									customDinners[0],
									customDinners[0],
									customDinners[1],
									customDinners[0],
									customDinners[0],
									customDinners[1]
								],"type_radio" : [
									customDinners[0],
									customDinners[0],
									customDinners[1],
									customDinners[0],
									customDinners[0],
									customDinners[1]
								]
							  }
						   ], //invoke only if IsCustomItem is true
		"HaveImage"		: true,
		"ImgUrl"		: "layout/img/Design/Food-Images.png",//invoke only if HaveImage is true
		"IsDescriped"	: true,
		"Description"	: "This is one of our favorite dish for Catfish & Shrimp",
		"Active"		: true
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
	txt1 += '<div class="col-xm-12 col-sm-8"><h3>Choose Your Menu!</h3><select class="form-control text-center" id="showCategoriesName" onchange="getRelatedMenu(this.value)"> <option value="">Select Menu</option></select><br>';
	//show the related menu based on the value of the #showCategoriesName
	txt1 += "<div class='text-left' id='addRelatedMenu'></div></div><div class='col-xm-12 col-sm-4' id='renderOrderedItems'><h3>Your Order!</h3></div>";
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
//check if an item is descriped
function checkDescription(x){
	var descriptionSection = "";
	if(Menu['Menu'][x].IsDescriped == true){
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
		addSelectedItems += '<option value="'+Menu['Menu'][menuIndex].CustomItem[CustomItemIndex]["options"][DropDownListItemIndex]["price"]+'">'+Menu['Menu'][menuIndex].CustomItem[CustomItemIndex]["options"][DropDownListItemIndex]["item"]+'</option>';
	}
	return addSelectedItems;
}
var addBtnGlyphicon = '<span class="glyphicon glyphicon-plus" aria-hidden="true"></span>';
var minusBtnGlyphicon = '<span class="glyphicon glyphicon-minus" aria-hidden="true"></span>';
var clearHTMLDiv = '<div class="clearfix"></div>';
//get related menu item:
function getRelatedMenu(value){
	if(value.length == 0 || value == "")
		test('No Value is Selected!');
	else{
		test(value + ' is Selected!');
		//match selected item
		var itemName, itemPrice, itemId, 
			customOrder, descriptionRslt, 
			descriptionSection, itemDescriped,
			itemCustom, itemCustomButtons, customItemDetails,
			customItemAre, customItemTitle = "";
		selectElement("addRelatedMenu").innerHTML = "<p class='lead'>"+ value +"</p>";
		//get all items on the menu
		for(x in Menu['Menu']){
			if(Menu['Menu'][x].Category == value && Menu['Menu'][x].Active == true){
				console.log(Menu['Menu'][x].Item + ' ........\n\t\t\t\t\t\t $' + Menu['Menu'][x].Price);
				itemName = Menu['Menu'][x].Item,
				itemPrice = Menu['Menu'][x].Price;
				itemId	= Menu['Menu'][x].id;
				itemDescriped = Menu['Menu'][x].IsDescriped;
				descriptionRslt	= Menu['Menu'][x].Description;
				itemCustom	= Menu['Menu'][x].IsCustomItem;
				customItemAre = Menu['Menu'][x].CustomItem;
				//check if description is true, if so -> show description section				
				if(itemDescriped == true)
					descriptionSection = "<label class='text-muted itemDescription'>- "+descriptionRslt + "</label>";
				else
					descriptionSection = ""; //keep empty
				//show custom info: IsCustomItem
				if(itemCustom == true ){
					itemCustomButtons = '<div class="orderBtnSection"><button type="button" class="col-xs-3 btn btn-info" data-toggle="collapse" href="#collapseItem_'+itemId+'" role="button" aria-expanded="false" aria-controls="collapseItem_'+itemId+'">Custom</button><span class="col-xs-6"></span>';
				}
				else
					itemCustomButtons = '<div class="orderBtnSection"><span class="col-xs-3"></span><span class="col-xs-6"></span>';
				
				//show custom item title:
				customItemTitle  =  '<div class="col-xs-12 customItemOptions">';
				customItemTitle += '<div class="col-xs-5">Item</div>';
				customItemTitle  += '<div class="col-xs-2"> Price</div>';
				customItemTitle  += '<div class="col-xs-5"> Choose</div></div>'+clearHTMLDiv;
				//show item name, description, custom btn, add btn, custom item options as well
				customOrder = '<div class="col-xm-12 menuItemsSmall"><span id= "item_name_'+itemId+'" class="itemName col-xs-10">'+ itemName + "</span><span class='itemPrice col-xs-2'>$" + itemPrice;
				customOrder +='</span><div class="clearfix"></div>'+ descriptionSection +' <div class="clearfix"></div>' + itemCustomButtons;
				customOrder += '<button type="button" class="col-xs-3 btn btn-primary">'+addBtnGlyphicon+'</button></span><div class="clearfix"></div>';
				customOrder += '<div class="collapse" id="collapseItem_'+itemId+'"><div class="addTitleToCustomItems">'+customItemTitle+'<div class="gridSection mt-12" id="showCustomItemsHere_'+itemId+'"></div></div></div></div>'; //add in between the custom items
				selectElement("addRelatedMenu").innerHTML +=  customOrder;
				//get all dropdown list items on each dropdown:
				//get all extra custom items option: for(x in Menu['Menu'][3].CustomItem) console.log(Menu['Menu'][3].CustomItem[x].custItem);
				for(y in customItemAre){
					customItemDetails =  '<div id="addCustomItemTitle_'+Menu['Menu'][x].CustomItem[y].id+'"></div><div class="col-xs-12 customItemOptions">';
					customItemDetails += '<div class="col-xs-5 eachItemCustomName">' + Menu['Menu'][x].CustomItem[y].custItem + ' </div>';
					customItemDetails += '<div class="col-xs-2"> $' + Menu['Menu'][x].CustomItem[y].price + '</div>';
					customItemDetails += '<div class="col-xs-5 btn-group" role="group" aria-label="Show add and subtract">';	
					//show radio btn, dropdown list, dropdown numebr, checkbox
					//get a dropdown list of items:
					if(Menu['Menu'][x].CustomItem[y]["type"] == "dropdownList"){ //if type selected is a dropdownList
						customItemDetails += '<select class="custom-select" id="inp01"><option selected>Choose...</option>'+ getDropDownList(x,y) +'</select>';
					}else if(Menu['Menu'][x].CustomItem[y]["type"] == "checkbox"){//if type selected is a checkbox
						customItemDetails += '<input type="checkbox" class="btn btn-primary eachCustomItemsBtn" value="Add Now">Add Now</input>';
					}else if(Menu['Menu'][x].CustomItem[y]["type"] == "number"){ //if type selected is number
						customItemDetails += '<button type="button" class="btn btn-primary eachCustomItemsBtn" onclick="function addCustomItem('+Menu['Menu'][x].CustomItem[y].id+')">'+addBtnGlyphicon+'</button>';
						customItemDetails += '<input type="number" class="btn btn-primary eachCustomItemsBtn" value="Add Now"/>';
						customItemDetails += '<button type="button" class="btn btn-primary eachCustomItemsBtn" onclick="function addCustomItem('+Menu['Menu'][x].CustomItem[y].id+')">'+minusBtnGlyphicon+'</button>';
					}
					customItemDetails += '</div>';
					customItemDetails += '</div>';
					selectElement("showCustomItemsHere_"+itemId).innerHTML +=  customItemDetails; //must be called after appending customOrder btn, so it can read it "showCustomItemsHere_"+itemId
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