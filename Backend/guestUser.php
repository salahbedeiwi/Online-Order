<?php 
		include_once '../db/connect_db.php'; 
		include_once '../Controller/functions.php';
		$guestUserName = $_POST['guestUserName'];
		//first, find users email.
		$ip = getMyIp(); // get the ip address
		$client_id = generateRandomNumber($length = 9); // Create random id for each client	
		$findIfClientNewNumberIsFound = mysql_query("select * from `users` where users_id = '$client_id'");
		$findIfClientNewNumberIsFound_num_rows = mysql_num_rows($findIfClientNewNumberIsFound); //counts and finds if the email is there already
		if($findIfClientNewNumberIsFound_num_rows < 1){ //if client_id is not found, then add it
			$client_id = $client_id;
		}else{ //if found, choose another number
			$client_id = generateRandomNumber($length = 9);
		}
		$guestEmail = "guest_$client_id@$client_id.now";
		date_default_timezone_set("America/Chicago");
		//if users it not found by email, add now:
		$addNewUsers = mysql_query("insert into `users` values(
																	'',
																	'$client_id',
																	'$guestUserName',
																	'$guestEmail',
																	'$client_id',
																	'$ip',
																	NOW(),
																	0,
																	0
								)"); //note, not active, not subscribed, user id is the same as the pass, email is like guest_userId@userId.now. 
		if($addNewUsers){ //if user is added successfully
			// Say thanks for subscribing
			echo "<p>Thank you $guestUserName! Click next to proceed this order!</p>";
			echo '<br><button class="btn btn-info showGetPaymentBtn" onclick="showThisSection(\'paymentSection\')">Next</button><br/>';
			echo "<p class='hide'>Customer Id is: <span id='currentCustomerUniqueId'>$client_id</span></p>"; //userLogInId
			echo "<p class='hide'>Name is: <span id='currentCustomerUniqueName'>".ucwords($guestUserName)."</span></p>"; //userLogInName
			echo "<p class='hide'>Email is: <span id='currentCustomerUniqueEmail'>".ucwords($guestEmail)."</span></p>"; //userLogInEmail
		}
?>