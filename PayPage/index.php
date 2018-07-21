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
?>
<!DOCTYPE html>
<head>
	<meta lang="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<meta http-equiv="X-UA-Compatible" content="ie-edge">
	<link rel="stylesheet" href="css/style.css">
	<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.2/css/bootstrap.min.css" integrity="sha384-Smlep5jCw/wG7hdkwQ/Z5nLIefveQRIY9nfy6xoR1uRYBtpZgI6339F5dgvm/e9B" crossorigin="anonymous">
	<title>Stripe Pay Page</title>
</head>

<body>
<!-- 0. https://stripe.com/docs/stripe-js/elements/quickstart  -->
<div class="container">		
	<h4 class="text-center my-3">Complete payment to proceed</h4>
	<form action="./charge.php" method="post" id="payment-form">
	  <div class="form-row">
	    <input type="text" class="form-control mb-3 StripeElement StripeElement--empty" name="buyerFname" placeholder="First Name"></input>
	    <input type="text" class="form-control mb-3 StripeElement StripeElement--empty" name="buyerLname" placeholder="Last Name"></input>
	    <input type="email" class="form-control mb-3 StripeElement StripeElement--empty" name="buyerEmail" placeholder="Email Address"></input>
	    <div id="card-element" class="form-control">
	      <!-- A Stripe Element will be inserted here. -->
	    </div>
	    
	    <!-- Used to display form errors. -->
	    <div id="card-errors" role="alert"></div>
	  </div>
	  <button class="form-control btn btn-success">Submit Payment</button>
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