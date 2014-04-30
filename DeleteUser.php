<?php

include("const_db.inc");

	$deleteUser = $_POST['Username']; 
				
	$link = mysqli_connect($host, $username, $password, $dbname, $port);

	if (mysqli_connect_errno()) 
	{
		printf("Connect failed: %s\n", mysqli_connect_errno());
		exit();
	}
	 
	$queryString = "DELETE FROM User WHERE UserName = '".$deleteUser."'"; 
	
	$queryDeleteUser = mysqli_query($link, $queryString);   
		
	if(!$queryDeleteUser)
	{
		echo $queryString;  
	}
	else
	{
		echo "The username ".$deleteUser." has been deleted successfully"; 
		echo "<p><a href='./AdministratorView.php'>Return to Administrator Portal</a></p>"; 
	}
	
	mysqli_close($link);
?>