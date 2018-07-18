<?php 
	require_once('vendor/autoload.php');
	//now include our server side key now: secret key
	\Stripe\Stripe::setApiKey('sk_test_7xFG5mkB4iPPXPtthHCEL8ni');
	//now, we need to get the form data that has been submitted.
	//first filter and sanitize my data, before submitting it.
	//SANITIZE POST ARRAY
	$POST = filter_var_array($_POST, FILTER_SANITIZE_STRING); //FILTER ALL POST VARS
	$buyerFname  = $POST['buyerFname']; //Fname
	$buyerLname  = $POST['buyerLname']; //Lname
	$buyerEmail  = $POST['buyerEmail']; //Email
	$stripeToken = $POST['stripeToken']; //Stripe Token: really important
	echo $stripeToken; //every time you submit, it will display different token unique number
	
	//now let's create a customer on stripe: https://stripe.com/docs/api/php#create_customer
	$customer = \Stripe\Customer::create(array(
												"email" => $buyerEmail,
												"source"  => $stripeToken //that's my token number
										));
	
	//now need to charge the customer: https://stripe.com/docs/api/php#charge_object
										//note, i can create an array like array() or []
	$charge = \Stripe\Charge::create([
										'amount' => 1990, //charge $20, no decimal point, $990 -> 9.90
			 							'currency' => 'usd', //currency type
			 							'description' => 'Online Order Payment', //currency type
			  							'customer' => $customer->id //get the id of the customer who bought it.
									]);
	print_r($charge); //will show all data i need FOR CURRENT TRANSACTION
	
	
	
	//to delete all test data, or testing orders: business settings -> data -> delete test data
	// echo "Yes, submitted!";

	//I can retrieve data from my $charge


	//redirect to success: 
	header('Location: success.php?transId='.$charge->id.'&totalCharged='.$charge->amount.'&paymentFor='.$charge->description);
?>