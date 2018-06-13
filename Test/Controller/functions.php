<?php 
	//class
	include 'routers.php';
	include $_controllers.'myControllers.php';
?>
<?php 
	function _getHeaderTags(){
		include 'headerTags.php';
	}
	function _getRoutersControllersFunctions(){
		include 'routers.php'; #all shortcuts
		include $_controllers.'myControllers.php';
	}
	function _include_routers(){
		include 'routers.php';
	}
?>