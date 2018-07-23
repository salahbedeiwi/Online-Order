<?php 
	//now retrieve all data live for this current customer: 
	if( !empty( $_GET['transId'] ) && !empty( $_GET['totalCharged'] ) && !empty( $_GET['paymentFor'] ) && !empty( $_GET['orderId'] ) ){
		$GET = filter_var_array($_GET, FILTER_SANITIZE_STRING);
		$orderId = $GET['orderId'];
		$transId = $GET['transId'];
		$paymentFor = $GET['paymentFor'];
		$totalCharged = $GET['totalCharged'];
	}else{ //redirect if not found
		header('Location: index.php');
	}
	// \Stripe\Stripe::setApiKey("sk_test_7xFG5mkB4iPPXPtthHCEL8ni");

	// // \Stripe\Charge::retrieve("ch_1CpH3iG2IHfWh8Q2xY0HJPaK");
	// \Stripe\Charge::retrieve($cust_id); //get all data related to this custome id.

	// //redirect to success: 
	// header('Location: success.php?transId='.$charge->id.'&totalCharged='.$charge->amount.'&paymentFor='.$charge->description);
	include_once '../db/connect_db.php'; 
	include_once '../Controller/functions.php';
	$addPaymentToMyDb = mysql_query("update `place_orders` 
																	set
																		order_is_paid = 1 ,
																		order_active = 1 ,
																		 trans_id = '$transId'
																	where 
																		order_id = '$orderId' 
														limit 1"); //activate payment and order is paid, also make sure to add the payment info such as transId, Total Paid.
?>
<!DOCTYPE html>
<head>
	<meta lang="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<meta http-equiv="X-UA-Compatible" content="ie-edge">
	<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.2/css/bootstrap.min.css" integrity="sha384-Smlep5jCw/wG7hdkwQ/Z5nLIefveQRIY9nfy6xoR1uRYBtpZgI6339F5dgvm/e9B" crossorigin="anonymous">
	<title>Thank you!</title>
</head>

<body>
<div class="container mt-4">		
	<p>Thank you!</p>
	<p><?php echo $paymentFor;?></p>
	<p>Your transaction id is: <?php echo $transId;?></p>
	<p>Your Order Number is: <?php echo $orderId;?></p>
	<p>You successfully paid an amount of: $<?php echo $totalCharged;?></p>

	<a href="index.php"><button class="mt-4 btn btn-success">Go to Home Page</button></a>
</div>
</body>

</html>