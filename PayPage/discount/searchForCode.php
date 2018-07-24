<?php 
	if(isset($_GET['getCouponCode'])){
		$getCouponCode = $_GET['getCouponCode'];
		//connect to db first: if this order id isn't not on the db, then redirect to main page:
		//if any one just accessing the page without index.php?orderId=xxxxxxx, it will redirect
		include_once '../../db/connect_db.php'; 
		include_once '../../Controller/functions.php';
		$findCouponCode = mysql_query("select * from `dicount` 
																				where 
																					discount_code = '$getCouponCode'  and 
																					DATE(expire_on) >= DATE(NOW())  and 
																					active = 1 
																limit 1");
		if(mysql_num_rows($findCouponCode) < 1){
			echo "Not Valid";
		}else{ //if not active, not paid, show the form to pay
			//1. the order id that will add the info to it.
			//get business name:
			$row = mysql_fetch_array($findCouponCode);
			$discount_code = $row['discount_code'];
			$discount_rate = $row['discount_rate'];
			$discount_type = $row['discount_type'];
			$min_spending_in_us_dollars = $row['min_spending_in_us_dollars'];
			$expire_on = $row['expire_on'];
			$dicount_id = $row['dicount_id'];
			if($discount_type == "percentage"){
				echo "Found - $discount_rate% (must be min. $$min_spending_in_us_dollars)";
			}else if($discount_type == "dollars"){
				echo "Found - $$discount_rate off (must be min. $$min_spending_in_us_dollars)";
			}
		}
	}
?>