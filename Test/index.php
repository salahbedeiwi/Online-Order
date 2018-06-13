<!-- 
	Name: 		Salah Bedeiwi
	Date: 		6/12/2018
	Version : 	1.0.0
	Contact:	Bedei001@umn.edu
-->
<?php
	$no_maintainance_rqrd = true; //
	if($no_maintainance_rqrd){ //if no maint. rqrd
?>
		<!DOCTYPE html>
		<html lang="en">
		<head>
			<!-- Include head -->
			<?php 
				include 'routers.php';
				include $func;
				_getRoutersControllersFunctions(); #call in controllers, functions and routers
				_getHeaderTags(); #call in header tags from headerTags.php
			?>
		</head>
		<body>
			<!-- Include header nav -->
			<header id="header"><?php include $getPages['headerNav']; ?></header>
			<!-- Include main page order -->
			<section id="mainPage"><?php include $getPages['mainContent']; ?></section>
			<!-- Include footer -->
			<footer id="header"><?php include $getPages['footer']; ?></footer>
			<!-- Include main js -->
			<script src=<?php echo $src['js']; ?>></script>
		</body>
		</html>
<?php
	}else{
		include 'routers.php';
		include $func;
		include $src['maintaincePage'];
	}
?>