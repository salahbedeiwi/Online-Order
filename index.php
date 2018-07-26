<!-- 
	Name: 		Salah Bedeiwi
	Date: 		6/12/2018
	Updated on: 		7/26/2018
	Cell: 		+1 612.644.1634
	Version : 	Version 1.0.0 on 6/12/2018
	Contact:	Bedei001@umn.edu
-->
<?php
	$no_maintainance_rqrd = true; // change to false if in maintainace mode
	if($no_maintainance_rqrd){ //if no maint. rqrd
?>
		<!DOCTYPE html>
		<html lang="en">
		<head>
			<!-- Include head -->
			<?php 
				include 'routers.php';
				include $func; //call in functions page
				include $db; //call db page
				_include_routers(); #call in routers page
				_getHeaderTags(); #call in header tags from headerTags.php - include title
			?>
		</head>
		<body>
			<!-- Include header nav -->
			<header id="header"><?php include $getPages['headerNav']; ?></header>
			<!-- Include main page order -->
			<section id="mainPage"><?php include $getPages['mainContent']; ?></section>
			<!-- Include footer -->
			<footer id="header"><?php include $getPages['footer']; ?></footer>
			<!-- Include Stripe Payment -->
			<!--
			<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
			<script src="https://js.stripe.com/v3/"></script>
			<script src="layout/javascript/chargeStripe.js"></script>
			-->
			<!-- Include main js -->
			<script src=<?php echo $src['js']; ?>></script>
		</body>
		</html>
<?php
	}else{
		include 'routers.php';
		include $func;
		include $src['maintaincePage']; //call in maintainace page for message
	}
?>