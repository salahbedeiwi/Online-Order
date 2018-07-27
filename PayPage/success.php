<?php 
	//now retrieve all data live for this current customer: 
	if( !empty( $_GET['transId'] ) && !empty( $_GET['totalCharged'] ) && !empty( $_GET['paymentFor'] ) && !empty( $_GET['orderId'] ) && !empty( $_GET['realPrice'] ) && isset( $_GET['couponCode'] ) ){
		$GET = filter_var_array($_GET, FILTER_SANITIZE_STRING);
		$orderId = $GET['orderId'];
		$transId = $GET['transId'];
		$paymentFor = $GET['paymentFor'];
		$totalCharged = $GET['totalCharged'];
		$realPrice = $GET['realPrice'];
		$couponCode = $GET['couponCode'];
	}else{ //redirect if not found
		header('Location: index.php');
	}
	include_once '../db/connect_db.php'; 
	include_once '../Controller/functions.php';
	$mYorderIsIs = $GET['orderId'];
	//find order date and time, as well as business address & phone number
	$findOrderDetails = mysql_query("select * from `place_orders` where order_id = '$mYorderIsIs' limit 1");
	$row = mysql_fetch_array($findOrderDetails);
	$myOrderIs = $row['my_order_is']; //get date
	$time = $row['pickup_time']; //get time
	$date = $row['pickup_date']; //get time
	$orderDate = date("m/d/Y", strtotime($date));
	$orderTime = date("H:i A", strtotime($time));
	$total_business_customer_info = $row['total_business_customer_info']; //get all business info
	//get user name from above:
	$getBusinesInfo = json_decode($total_business_customer_info, true);
	$customerName = "";
	$businessName = "";
	$getBusinessAddress = "";
	$getPhoneNumber = "";
	$getBusinessTotalBeforeTaxes = "";
	$getBusinessSalesTaxes = "";
	$getBusinessSalesTaxTotal = "";
	foreach($getBusinesInfo as $val){ //must be in a foreach loop to get all data inside, even if only array
		$customerName = $val['getUserName'];
		$businessName = $val['getBusinessName'];
		$getBusinessAddress = $val['getBusinessAddress'];
		$getPhoneNumber = $val['getPhoneNumber'];
		$getBusinessTotalBeforeTaxes = $val['getBusinessTotalBeforeTaxes'];//get total before sales taxes
		$getBusinessSalesTaxes = $val['getBusinessSalesTaxes']; //sales taxes percentage
		$getBusinessSalesTaxTotal = $val['getBusinessSalesTaxTotal']; //total sales taxes
	}
	// \Stripe\Stripe::setApiKey("sk_test_7xFG5mkB4iPPXPtthHCEL8ni");

	// // \Stripe\Charge::retrieve("ch_1CpH3iG2IHfWh8Q2xY0HJPaK");
	// \Stripe\Charge::retrieve($cust_id); //get all data related to this custome id.

	// //redirect to success: 
	// header('Location: success.php?transId='.$charge->id.'&totalCharged='.$charge->amount.'&paymentFor='.$charge->description);
	$addPaymentToMyDb = mysql_query("update `place_orders` 
																	set
																		order_is_paid = 1 ,
																		order_active = 1 ,
																		coupon = '$couponCode' ,
																		final_price = '$totalCharged' ,
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
	<link rel="stylesheet" href="css/style.css">
	<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.2/css/bootstrap.min.css" integrity="sha384-Smlep5jCw/wG7hdkwQ/Z5nLIefveQRIY9nfy6xoR1uRYBtpZgI6339F5dgvm/e9B" crossorigin="anonymous">
	<title>Thank you - <?php echo $paymentFor;?></title>
	<style>
		body{
			background-image: url(img/paymentBackground.jpg);
			padding: 10px;
			background-size: inherit;
			background-repeat: inherit;
			color: aliceblue;	
		}
		.proceedMyOrderNow, .proceedMyOrderNow:hover {
			color: #fff;
			background-color: #1c4288;
			border-color: #ffffff;
		}
		.bgColor {
			background-color: rgba(0, 0, 0, 0.54);
			border-radius: 10px;
			padding: 5px;
		}
		.text-primary {color: #c1c7d2!important}
		.text-success {
			color: #4f82de!important;
		}
		.list-group-item {
			position: relative;
			display: block;
			padding: .75rem 1.25rem;
			margin-bottom: -1px;
			background-color: #000;
			border: 1px solid rgb(28, 66, 136);
		}
	</style>
</head>

<body>
<div class="container mt-4 bgColor">		
	<h1 class="text-center">Payment Confirmation</h1><br>
	<p class="text-center">Thank you &quot;<?php echo ucwords($customerName);?>&quot; for making an online order to &quot;<?php echo $businessName;?>&quot;.</p>
	<div class="table-responsive"> 
        <table class="table table-bordered">
            <title>Your Order Details</title>
			<thead>
                <tr>
                    <th>Transaction Id</th>
                    <th  class="text-success"><?php echo $transId;?></th>
                </tr>
                <tr>
                    <th>Order Number</th>
                    <th  class="text-success"><?php echo $orderId;?></th>
                </tr>
				<tr>
                    <th>Pick up</th>
                    <th class="text-primary">on <?php echo $orderDate;?> at <?php echo $orderTime; ?></th>
                </tr>
				<tr>
                    <th>Address</th>
                    <th class="text-success"><?php echo $getBusinessAddress	;?></th>
                </tr>
				<tr>
                    <th>Sub Total</th>
                    <th  class="text-success">$<?php echo $getBusinessTotalBeforeTaxes;?></th>
                </tr>
				<tr>
                    <th>Sales Taxes @ <?php echo $getBusinessSalesTaxes;?>%</th>
                    <th  class="text-success">$<?php echo $getBusinessSalesTaxTotal;?></th>
                </tr>
                <tr>
                    <th>Total</th>
                    <th  class="text-success">$<?php echo $realPrice;?></th>
                </tr>
                <tr>
					<?php
						$discounted = "";
						if($realPrice > $totalCharged) {
							$discounted = "<span class='text-success'>(Discounted)</span>";
						}
					?>
                    <th>Total Paid <?php echo $discounted;?></th>
                    <th class="text-success">$<?php echo $totalCharged;?></th>
                </tr>
            </thead>
            <tbody>
            <caption><p class="text-center text-primary">- Have any questions, Call <a href="tel:<?php echo $getPhoneNumber;  ?>"><?php echo $getPhoneNumber;  ?></a></p></caption>
        </table>
    </div>
	<div>
		<div class="" onclick="showHideDeletingDiscount()">
			<span style="vertical-align:top">View My Order: </span>
			<label class="switch"><input type="checkbox" id="showCouponBtnOrder">
			<span class="slider round"></span>
		</div>
		<div style="display:none;" id="showCouponOrderSection">
			<div style="background-color: black;">
				
				<ul  class='list-group col-sm-6'>
				<?php 
					function convertAnArrayToString($myData) {
						$myOrderTblRecords_html = htmlentities(htmlspecialchars($myData)); //say value is &quote Wings &quote
						// echo $myOrderTblRecords_html;
						$myOrderTblRecords_decode_html = html_entity_decode(htmlspecialchars_decode($myData)); //it will be transfered to [{"itemName":"Wings"},{"itemName":"Chicken"}]
						// echo $myOrderTblRecords_decode_html;//show json format of the objects/data passed
						//now convert data to json, so we can display them:
						$myJsonArrayOf_myOrderTblRecords_decode_html = json_decode($myOrderTblRecords_decode_html, true);
						return $myJsonArrayOf_myOrderTblRecords_decode_html;
					}
					$myOrderIs_db = convertAnArrayToString($myOrderIs);
					foreach($myOrderIs_db as $val){
							echo "<li class='list-group-item'>".$val['itemName']." <span class='badge' style='float:right'>$".$val['itemPrice']."</span></li>";
					}
				?>
				</ul>
			</div>
		</div>
	</div>
	<!-- Cancel my order -->
	<div class="clearfix"></div>
	<div class="text-right">
		<a href="index.php"><button class="mt-4 btn btn-success proceedMyOrderNow">Go to Home Page</button></a>
	</div>
</div>
</body>
<script>
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

</html>