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
	<h4 class="text-center my-3">Complete payment to proceed</h4>
	<!-- Check For Dicount	 -->
	<div style="float:right">
		<div class="" onclick="showHideDeletingDiscount()">
			<span style="vertical-align:top">Have Coupon: </span>
			<label class="switch"><input type="checkbox" id="showCouponBtnOrder">
			<span class="slider round"></span>
		</div>
		<div style="display:none" id="showCouponOrderSection">
			<div style="float:right">
				<input placeholder="Enter Code Here" class="btn btn-success" type="text" id="myDiscountCode"></input>
				<button class="text-right btn btn-danger" onclick="findCurrentCode()">Use Code</button><br>
				<label id="myDiscountCodeResponse"></label>
				<p>Valid coupons will be applied.</p>
			</div>
		</div>
	</div>
	<div class="clearfix"></div>
	<!-- Charge Customer Now -->
	<form action="./charge.php" method="post" id="payment-form">
	  <div class="form-row">
	    <input value="<?php echo $customerName;?>" type="text" class="form-control mb-3 StripeElement StripeElement--empty" id="buyerFullName" name="buyerFullName" placeholder="Your Full Name"></input>
	    <input value="<?php echo $order_id;?>" type="text" class="form-control mb-3 StripeElement StripeElement--empty" style="display:none;" name="orderId" placeholder="OrderId"></input>
	    <input type="text" value="<?php echo $totalIs;?>" class="form-control mb-3 StripeElement StripeElement--empty" style="display:none;" name="OrderTotal"></input>
	    <input type="text" value="<?php echo $businessName;?>" class="form-control mb-3 StripeElement StripeElement--empty" style="display:none;" name="businessName"></input>
	      <!-- Have my discount code here -->
		<div id="myDiscountCodeRes" style="display:none;">
			<input type="text" style="display:none;" name="myValidDiscountCode" id="myValidDiscountCode" value="">
		</div>
	    <div id="card-element" class="form-control">
	      <!-- A Stripe Element will be inserted here. -->
	    </div>
	    
	    <!-- Used to display form errors. -->
	    <div id="card-errors" role="alert"></div>
	  </div>
	  <button class="form-control btn btn-success">Submit Payment of $<?php echo $totalIs;?></button>
	</form>
	<!-- Cancel my order -->
	<div class="pt25"  style="float:right">
		<div class="" onclick="showHideDeletingMyOrder()"><span style="vertical-align:top">Cancel this order: </span><label class="switch"><input type="checkbox" id="showCancelBtnOrder"><span class="slider round"></span></div>
		<div style="display:none" id="showCancelOrderSection">
			<p>Note: You will no longer retrieve your order when canceling it. You may need to reorder it.</p>
			<form action="" method="post"><button class="text-right btn btn-danger" type="submit" name="cancelOrderNow">Yes, cancel my order now.</button></form>
		</div>
	</div>
	<?php 
		if(isset($_POST['cancelOrderNow'])){
			$deleteOrderNow = mysql_query("delete from `place_orders` 
																where 	
																	order_id = '$orderIdIs'  
												limit 1");
			if($deleteOrderNow){
				header('Location: ../index.php');
			}else{
				echo "<p style='color:red;border:1px solid red;padding:5px;border-radius:5px;text-align:center'>Something went wrong, try cancelling again!</p>";
			}
		}
	?>
	<script>
		function showHideDeletingMyOrder(){
			var  getBtn = document.getElementById('showCancelBtnOrder'),
					getSection = document.getElementById('showCancelOrderSection');
			if(getBtn.checked == true){ //if btn is checked
				getSection.style.display = "block";
			}else{
				getSection.style.display = "none";
			}
		}
		function showHideDeletingDiscount(){
			var  getBtn = document.getElementById('showCouponBtnOrder'),
					getSection = document.getElementById('showCouponOrderSection');
			if(getBtn.checked == true){ //if btn is checked
				getSection.style.display = "block";
			}else{
				getSection.style.display = "none";
			}
		}
		
	</script>
	<!-- 3.  -->
	<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
	<script src="https://js.stripe.com/v3/"></script>
	<script src="js/charge.js"></script>
</div>
	<script>
	function findCurrentCode() {
			var xhr = "";
			var copCodeIs = document.getElementById("myDiscountCode").value;
			if(window.XMLHttpRequest){ //if my browser supports: chrome, firefox, ie 7+, safari
				xhr = new XMLHttpRequest();
			}else{ //if my browser supports: ie < 6
				xhr = new ActiveXObject("Microsoft.XMLHTTP");
			}
			//xhr.overrideMimeType("application/json");
			xhr.onreadystatechange = function () {
				if(this.readyState == 4 && this.status == 200){
					document.getElementById("myDiscountCodeResponse").innerHTML = this.responseText;
					if(this.responseText == "Not Valid"){
						document.getElementById("myDiscountCodeRes").innerHTML = "<input type='text' style='display:none;' value='' name='myValidDiscountCode' id='myValidDiscountCode' ></input>";
					}else{ //if code is valid, add it to the backend
						document.getElementById("myDiscountCodeRes").innerHTML = "<input type='text' style='display:none;' name='myValidDiscountCode' id='myValidDiscountCode' value='"+copCodeIs+"'></input>";
					}
				}else if (this.readyState < 4 && this.readyState > 0){
					document.getElementById("myDiscountCodeResponse").innerHTML = "<img src='img/loading1.gif' style='width:50px' class='img-responsive img-rounded center-block' alt='' title='loading'/>";
				}else{ //if not found 404 || readyState is 0
					document.getElementById("myDiscountCodeResponse").innerHTML = "<p style='color:red'>Your page request is not initialized/defined!</p>";
					document.getElementById("myDiscountCodeResponse").innerHTML += "<p style='color:red'>Status is:"+this.status+"</p>"; //show error message
				}
			};
			xhr.open('GET', "discount/searchForCode.php?getCouponCode="+copCodeIs, true);
			xhr.send();
		}; //search for current coupon code.
	</script>
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