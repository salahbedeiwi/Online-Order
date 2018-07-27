<?php 
		include_once '../db/connect_db.php'; 
		include_once '../Controller/functions.php';
		$newUserName = $_POST['newUserName'];
		$newUserEmail = $_POST['newUserEmail'];
		$newUserPassword = $_POST['newUserPassword'];
		$newUserSubscribedToDeals = $_POST['newUserSubscribedToDeals'];
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
		date_default_timezone_set("America/Chicago");
		//if users it not found by email, add now:
		$addNewUsers = mysql_query("insert into `users` values(
																	'',
																	'$client_id',
																	'$newUserName',
																	'$newUserEmail',
																	'$newUserPassword',
																	'$ip',
																	NOW(),
																	$newUserSubscribedToDeals,
																	1
								)");
		if($addNewUsers){ //if user is added successfully
			// Say thanks for subscribing
			echo "<p>Thank you $newUserName for registering with us! Click next to proceed this order!</p>";
			echo "<p>Customer Id is: <span id='currentCustomerUniqueId'>$client_id</span></p>"; //userLogInId
			echo "<p>Name is: <span id='currentCustomerUniqueName'>".ucwords($newUserName)."</span></p>"; //userLogInName
			echo "<p>Email is: <span id='currentCustomerUniqueEmail'>".ucwords($newUserEmail)."</span></p>"; //userLogInEmail
			echo '<br><button class="btn btn-info showGetPaymentBtn" onclick="showThisSection(\'paymentSection\')">Next</button><br>';
		}
?>