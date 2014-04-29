<?php
session_start(); 
if(!isset($_SESSION['UserId']))
{	
	header("Location: Logout.php"); 
}
?>

<!DOCTYPE html>
<html>
	<head>
		<title>Doo-Dah - Administrator Portal</title>
		<script type="text/javascript" src="./js/jquery-1.11.0.js"></script>
		<script type="text/javascript" src="./js/jquery-ui-1.10.4/ui/jquery-ui.js"></script>
		<script type="text/javascript" src="./js/Enums.js"></script>
		<script type="text/javascript" src="./js/ViewScripts/Admin.js"></script>	
		<link rel="stylesheet" type="text/css" href="./css/Admin.css"/>

	</head>

	<body style="background-color: black;">
		<div class="page-content">
			<div id="welcome-activities">
				<h1 id="header-text" style="color: red;">Administrator Portal</h1>
					<div class="pnl-logout"><a href='./Logout.php' class='link-logout'>Logout</a></div>
						<div id="admin-tools-menu" class="pnl-admin-tools">
							<ul id="adminPortal">
								<li><div id="addUser" class="admin-links">Add User</div></li>
								<li><div id="deleteUser" class="admin-links">Delete User</div></li>
								<!--<li><div id="addActivity" class="admin-links">Add Activity</div></li>-->
							</ul>
						</div>
			</div>
		</div>
		<div id="footer" class="footer">
			<p>Copyright &#169; 2014 Doo-Dah, LLC</p>
		</div>

	</body>

</html>