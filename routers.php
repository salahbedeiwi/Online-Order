<?php 
	$_routers = 'routers.php';
	$src = 'layout/';
	$js = $src.'javascript/';
	$css = $src.'css/';
	$img = $src.'img/';
	$designImg = $img.'Design/';
	$content = 'Content/';
	$DesignPage = 'Templates/';
	$_controllers = 'Controller/';
	$func = $_controllers.'functions.php';
	$_myControllers = "myControllers.php";
	$_maintaincePage = "maintaincePage.php";
	$_maintaincePage_css = "maintainancePage.css";
	$css_bootstrap = 'https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css';
	$jquery = 'https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js';
	$js_bootstrap = 'https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js';
	//sources:
	$src = array(
		'css' => $css.'style.css',
		'css_maintaincePage' => $css.$_maintaincePage_css,
		'images' => $img,
		'js' => $js.'script.js',
		'bootstrapCss' => $css_bootstrap,
		'jQuery' => $jquery,
		'bootstrapJs' => $js_bootstrap,
		'maintaincePage' => $content.$_maintaincePage,
	);
	//pages: shortcut for pages being called by include
	$headerPage = 'header.php';
	$footerPage = 'footer.php';
	$mainPage = 'main.php'; #main first page
	//url to get specific page
	$getPages = array(
		'headerNav' => $content.$DesignPage.$headerPage ,
		'footer' => $content.$DesignPage.$footerPage ,
		'mainContent' => $content.$DesignPage.$mainPage
	);
?>