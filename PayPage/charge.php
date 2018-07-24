<?php 
	require_once('vendor/autoload.php');
	//now include our server side key now: secret key
	\Stripe\Stripe::setApiKey('sk_test_7xFG5mkB4iPPXPtthHCEL8ni');
	//now, we need to get the form data that has been submitted.
	//first filter and sanitize my data, before submitting it.
	//SANITIZE POST ARRAY
	$POST = filter_var_array($_POST, FILTER_SANITIZE_STRING); //FILTER ALL POST VARS
	$buyerFullName  = $POST['buyerFullName']; //buyerFullName
	$businessName  = $POST['businessName']; //Lname
	$myValidDiscountCode  = $POST['myValidDiscountCode']; //get discount code
	$OrderTotal  = $POST['OrderTotal']; //totalIs
	//now convert total to real number and make sure number has no zeros on it.
	$order_id  = $POST['orderId']; //order_id
	$stripeToken = $POST['stripeToken']; //Stripe Token: really important
	//first, get the real total from db, more secured just in case if customers changed the numebrs:
	include_once '../db/connect_db.php'; 
	include_once '../Controller/functions.php';
	//search in db for this orderId in db, must be found and not active, not paid, not refunded - very much if any of the previous values are 0, then redirect
	$findTotalAmount = mysql_query("select * from `place_orders` where order_id = '$order_id' limit 1");
	$row = mysql_fetch_array($findTotalAmount);
	$totalIs = $row['total_is'];
	$realPrice = $row['total_is'];
	//now check if customer have coupons entered:
	$findCouponCode = mysql_query("select * from `dicount` where discount_code = '$myValidDiscountCode'  and DATE(expire_on) >= DATE(NOW())  and active = 1 limit 1");
	$row = mysql_fetch_array($findCouponCode);
	$discount_code = $row['discount_code'];
	$discount_rate = $row['discount_rate'];
	$discount_type = $row['discount_type'];
	$min_spending_in_us_dollars = $row['min_spending_in_us_dollars'];
	$expire_on = $row['expire_on'];
	$dicount_id = $row['dicount_id'];
	
	//if coupon is found, valid and matching min total
	if(mysql_num_rows($findCouponCode) >= 1 && $discount_code == $myValidDiscountCode && $OrderTotal >= $min_spending_in_us_dollars){
		if($discount_type == "percentage" ){ //if type is percentage: say 50% off
			$totalIs = $totalIs - ($discount_rate/100 * $totalIs); //100 - (0.50 *100) = 100 - 50 = 50
		}else if($discount_type == "dollars"){ //if type is dollars: say $50 off
			$totalIs = $totalIs - $discount_rate; //100 - 50 =  50
		}else{
			$totalIs = $totalIs; //don't change my total
		}
	}else{
		$totalIs = $totalIs; //don't change my total
	}
	$filterNumberToBeUsedForPayment = str_replace('.', '', $totalIs);//delete the decimal point from number like 12.50 to be 1250
	//now let's create a customer on stripe: https://stripe.com/docs/api/php#create_customer
	$customer = \Stripe\Customer::create(array(
												// "email" => $buyerEmail,
												"source"  => $stripeToken //that's my token number
										));
	
	//now need to charge the customer: https://stripe.com/docs/api/php#charge_object
										//note, i can create an array like array() or []
	$charge = \Stripe\Charge::create([
										'amount' => $filterNumberToBeUsedForPayment, //charge $20, no decimal point, $990 -> 9.90
			 							'currency' => 'usd', //currency type
			 							'description' => 'Pay to '.$businessName, //Describe Payment
			  							'customer' => $customer->id //get the id of the customer who bought it.
									]);
	print_r($charge); //will show all data i need FOR CURRENT TRANSACTION
	
	//make sure to update my db that the order is already paid.
	
	//to delete all test data, or testing orders: business settings -> data -> delete test data
	// echo "Yes, submitted!";

	//I can retrieve data from my $charge


	//redirect to success: 
	header('Location: success.php?transId='.$charge->id.'&totalCharged='.$totalIs.'&paymentFor='.$charge->description.'&orderId='.$order_id.'&realPrice='.$realPrice.'&couponCode='.$discount_code);
?>