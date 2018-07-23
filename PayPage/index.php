<?php 
	if(isset($_GET['orderId'])){
		//connect to db first: if this order id isn't not on the db, then redirect to main page:
		//if any one just accessing the page without index.php?orderId=xxxxxxx, it will redirect
		include_once '../db/connect_db.php'; 
		include_once '../Controller/functions.php';
		$orderIdIs = $_GET['orderId'];
		//search in db for this orderId in db, must be found and not active, not paid, not refunded - very much if any of the previous values are 0, then redirect
		$findIfOrderIdIsFound = mysql_query("select * from `place_orders` 
																				where 
																					order_id = '$orderIdIs'  and 
																					order_active = 0 and 
																					order_is_paid = 0 and 
																					order_is_refunded = 0 
																limit 1");
		if(mysql_num_rows($findIfOrderIdIsFound) < 1){
			header('Location: ../index.php'); //if order is is active or not found, then redirect
		}else{ //if not active, not paid, show the form to pay
		//first get these info to pass two main things: 
		//1. the order id that will add the info to it.
		//get business name:
		$row = mysql_fetch_array($findIfOrderIdIsFound);
		$totalIs = $row['total_is'];
		$order_id = $row['order_id'];
		$customer_id = $row['customer_id'];
		$total_business_customer_info = $row['total_business_customer_info'];
		//get user name from above:
		$getBusinesInfo = json_decode($total_business_customer_info, true);
		$customerName = "";
		$businessName = "";
		foreach($getBusinesInfo as $val){ //must be in a foreach loop to get all data inside, even if only array
			$customerName = $val['getUserName'];
			$businessName = $val['getBusinessName'];
		}
		//2. amount to be paid
		
?>
<!DOCTYPE html>
<head>
	<meta lang="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<meta http-equiv="X-UA-Compatible" content="ie-edge">
	<link rel="stylesheet" href="css/style.css">
	<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.2/css/bootstrap.min.css" integrity="sha384-Smlep5jCw/wG7hdkwQ/Z5nLIefveQRIY9nfy6xoR1uRYBtpZgI6339F5dgvm/e9B" crossorigin="anonymous">
	<title>Pay now to <?php echo $businessName; ?> - Salah Bedeiwi Development</title>
</head>

<body>
<!-- 0. https://stripe.com/docs/stripe-js/elements/quickstart  -->
<div class="container">		
	<h4 class="text-center my-3">Complete payment to proceed or <a href="" class="text-right-right btn btn-danger">Cancel My Order</a></h4>
	<form action="./charge.php" method="post" id="payment-form">
	  <div class="form-row">
	    <input value="<?php echo $customerName;?>" type="text" class="form-control mb-3 StripeElement StripeElement--empty" id="buyerFullName" name="buyerFullName" placeholder="Your Full Name"></input>
	    <input value="<?php echo $order_id;?>" type="text" class="form-control mb-3 StripeElement StripeElement--empty" style="display:none;" name="orderId" placeholder="OrderId"></input>
	    <input type="text" value="<?php echo $totalIs;?>" class="form-control mb-3 StripeElement StripeElement--empty" style="display:none;" name="OrderTotal" placeholder="OrderTotal"></input>
	    <input type="text" value="<?php echo $businessName;?>" class="form-control mb-3 StripeElement StripeElement--empty" style="display:none;" name="businessName" placeholder="businessName"></input>
	    <!--<input type="email" class="form-control mb-3 StripeElement StripeElement--empty" name="buyerEmail" placeholder="Email Address"></input>-->
	    <div id="card-element" class="form-control">
	      <!-- A Stripe Element will be inserted here. -->
	    </div>
	    
	    <!-- Used to display form errors. -->
	    <div id="card-errors" role="alert"></div>
	  </div>
	  <button class="form-control btn btn-success">Submit Payment of $<?php echo $totalIs;?></button>
	</form>
	<!-- 3.  -->
	<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
	<script src="https://js.stripe.com/v3/"></script>
	<script src="js/charge.js"></script>
</div>
</body>

</html>
<?php
	}
	}else{
		header('Location: ../index.php');
	}
?>
<!--
	- Go to stripe-php on git hub - https://github.com/stripe/stripe-php
	- use this command to install composter: composer require stripe/stripe-php
	- then require : require_once('vendor/autoload.php');
	- or do it manually: require_once('/path/to/stripe-php/init.php');

	- Download composer: getcomposer.org, then download and install it.
	- Or download bash/powershell, right click on current main file, git bash command
	- or go to visual studio code editor, click on terminal and write the "composer require stripe/stripe-php"
	- this should download the vendor file for you.

	Now inside charge.php, require_once('vendor/autoload.php');
-->