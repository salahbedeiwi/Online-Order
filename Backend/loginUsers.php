<?php 
		include_once '../db/connect_db.php'; 
		include_once '../Controller/functions.php';
		$loginUserEmail = $_POST['loginUserEmail'];
		$loginUserPassword = $_POST['loginUserPassword'];
		//first, find users matching email and pass
		$findIfClientIsFound = mysql_query("select * from `users` where 
																		users_email = '$loginUserEmail' 
																		and 
																		users_pass = '$loginUserPassword' 
																		and 
																		active = 1 
																	limit 1"); //must be active
		$findIfClientIsFound_num_rows = mysql_num_rows($findIfClientIsFound); //counts and finds if the email is there already
		if($findIfClientIsFound_num_rows < 1){ //if users is not found
			echo "<p style='color:red'>You pass/email may be wrong, you may try again.</p>";
			echo "<p style='color:red'>You may be not registered. you may register now as a new user.</p>";
			echo '<button class="btn btn-info  addCustomOrderToCart" onclick="showThisSection(\'getCustomerRecordSection\')">Log in or Register now!</button>';
		}else{ //if found,
			if($findIfClientIsFound){ //if user is added successfully
				$row = mysql_fetch_assoc($findIfClientIsFound);
				$id = $row['id'];
				$users_id = $row['users_id'];
				$users_email = $row['users_email'];
				$users_name = $row['users_name'];
				// Say thanks for login
				echo "<p>Thank you $users_name! Click next to proceed this order!</p>";
				echo "<p>Customer Id is: <span id='currentCustomerUniqueId'>$users_id</span></p>"; //userLogInId
				echo "<p>Name is: <span id='currentCustomerUniqueName'>".ucwords($users_name)."</span></p>"; //userLogInName
				echo "<p>Email is: <span id='currentCustomerUniqueEmail'>".ucwords($users_email)."</span></p>"; //userLogInEmail
				echo '<br/><button class="btn btn-info showGetPaymentBtn" onclick="showThisSection(\'paymentSection\')">Next</button><br/>';
			}
		}
?>