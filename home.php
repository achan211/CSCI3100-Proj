<?php
// We need to use sessions, so you should always start sessions using the below code.
session_start();
// If the user is not logged in redirect to the login page...
if (!isset($_SESSION['loggedin'])) {
	header('Location: index.html');
	exit();
}
?>

<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<title>CU Classroom - Home</title>
		<link href="style.css" rel="stylesheet" type="text/css">
		<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.1/css/all.css">
	</head>
	<body class="loggedin">
        <ol>
            <li class="title"><a href="home.php"><i class="fas fa-calculator"></i>CU Classroom</a></li>
            <li style="float:right"><a href="logout.php"><i class="fas fa-sign-out-alt"></i>Logout</a></li>
        </ol>
		<div class="content">
			<h2>Welcome, <?=$_SESSION['name']?>!</h2>
			<p>Features coming soon...</p>
		</div>
        <footer>Copyright @ 2020 CU Classroom. All rights reserved. </footer>
	</body>
</html>