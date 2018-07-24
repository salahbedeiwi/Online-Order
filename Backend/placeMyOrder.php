<?php 
		include_once '../db/connect_db.php'; 
		include_once '../Controller/functions.php';
		$myOrderTblRecords = $_POST['myOrderTblRecords']; //this is a string of an array - my order
		$myCustomerAndTotalAndBusinessTblRecords = $_POST['myBusinessAndCustomerTblRecords']; //this is a string of an array - my total, business, customer info
		$myPickUpDateAndTimeRecords = $_POST['myOrderDateAndTimeTblRecords']; //this is a string of an array - my pickup date and time
		function convertAnArrayToString($myData) {
			$myOrderTblRecords_html = htmlentities(htmlspecialchars($myData)); //say value is &quote Wings &quote
			// echo $myOrderTblRecords_html;
			$myOrderTblRecords_decode_html = html_entity_decode(htmlspecialchars_decode($myData)); //it will be transfered to [{"itemName":"Wings"},{"itemName":"Chicken"}]
			// echo $myOrderTblRecords_decode_html;//show json format of the objects/data passed
			//now convert data to json, so we can display them:
			$myJsonArrayOf_myOrderTblRecords_decode_html = json_decode($myOrderTblRecords_decode_html, true);
			return $myJsonArrayOf_myOrderTblRecords_decode_html;
		}
		$myOrderTblRecords_db = convertAnArrayToString($myOrderTblRecords);
		$myCustomerAndTotalAndBusinessTblRecords_db = convertAnArrayToString($myCustomerAndTotalAndBusinessTblRecords);
		$myBussCussTotalInfo = "";
		// foreach($myCustomerAndTotalAndBusinessTblRecords_db as $val){
			// $myBussCussTotalInfo =$val[];
		// }
		$customerId = ""; //get customer id
		$businessId = ""; //get business id
		$totalToPay = ""; //get my total to pay
		foreach($myCustomerAndTotalAndBusinessTblRecords_db as $val){ //must be in a foreach loop to get all data inside, even if only array
			$customerId = $val['getUserId']; //get customer id
			$businessId = $val['getBusinessUniqueId']; //get business id
			$totalToPay = number_format( (float)$val['getBusinessTotalAfterTaxes'], 2, '.', '' ); //get my total to pay - make any number as a decimal
		}
		$myPickUpDateAndTimeRecords_db = convertAnArrayToString($myPickUpDateAndTimeRecords);
		$myPickUpDate = "";
		$myPickUpTime = "";
		foreach($myPickUpDateAndTimeRecords_db as $val){
			$myPickUpDate = $val['orderDate']; //get pick up date
			$myPickUpTime = $val['orderTime']; //get pick up time
		}
		echo "<p>Your order summary before payment: <a href='#showPaymentBtns'>Pay Now</a></p><ul class='list-group col-sm-6'>";
		foreach($myOrderTblRecords_db as $val){
				echo "<li class='list-group-item'>".$val['itemName']." <span class='badge'>$".$val['itemPrice']."</span></li>";
		}
		echo "</ul>";
		//first, find users email.
		$ip = getMyIp(); // get the ip address
		$orderId = generateRandomNumber($length = 9); // Create random id for each client	
		$findIfOrderIdIsFound = mysql_query("select * from `place_orders` where order_id = '$orderId'");
		$findIfOrderIdIsFound_num_rows = mysql_num_rows($findIfOrderIdIsFound); //counts and finds if the order id is exsiting.
		if($findIfOrderIdIsFound_num_rows < 1){ //if order_id is not found, then add it
			$orderId = $orderId;
		}else{ //if found, choose another number
			$orderId = generateRandomNumber($length = 9);
		}
		date_default_timezone_set("America/Chicago");
		$dicountAmount =0.00;
		//note, order, order_is_paid, order_is_refunded is not active (0) by default, till it is paid, convert them all  to active (1), keep payment info empty till customer pay, keep coupon empty
		$addMyOrderNow = mysql_query("insert into `place_orders` values(
																	'',
																	'$orderId',
																	0,
																	'$ip',
																	NOW(),
																	'$myPickUpDate',
																	'$myPickUpTime',
																	'$customerId',
																	'$businessId',
																	$totalToPay,
																	'$myOrderTblRecords',
																	' ',
																	'$myCustomerAndTotalAndBusinessTblRecords',
																	0,
																	0,
																	'',
																	$dicountAmount
								)");
		if($addMyOrderNow){ //if user is added successfully
			// if order is placed successfully, add these info on these two p's
			echo "<p id='showMyPaymentToProcess'>Your almost done, please pay now!</p>"; //note, i will check this p size, so i can add my payment
			echo "<p class='hide' id='showMyOrderId'>$orderId</p>"; //note, i will check this p id, so i can it to my payment
		}else{
			//if order not success or not added, add place order btn again: and keep next two p's just empty
			echo "<p id='showMyPaymentToProcess'></p>"; //note, i will check this p size, so i can add my payment
			echo "<p class='hide' id='showMyOrderId'></p>"; //note, i will check this p id, so i can it to my payment
			//make sure to place the 
		}
?>