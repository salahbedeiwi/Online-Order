<?php 
	//class
	include_once 'routers.php';
	include_once $_controllers.'functions.php';
?>
<?php 
	function _getHeaderTags(){
		include_once 'headerTags.php';
	}
	function _getRoutersControllersFunctions(){
		include_once 'routers.php'; #all shortcuts
	}
	function _include_routers(){
		include_once 'routers.php';
	}
?>