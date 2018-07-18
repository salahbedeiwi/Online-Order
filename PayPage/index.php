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
	<h2 class="text-center my-4">Intro to react course [$50]</h2>
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