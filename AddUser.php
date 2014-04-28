<?php

include("const_db.inc");

	$firstName = $_POST['FirstName']; 
	$lastName = $_POST['LastName'];
	$email = $_POST['Email'];
	$newUsername = $_POST['UserName'];
	$newPassword = $_POST['Password'];  
				
	$link = mysqli_connect($host, $username, $password, $dbname, $port);

	if (mysqli_connect_errno()) 
	{
		printf("Connect failed: %s\n", mysqli_connect_errno());
		exit();
	}
	
	$currentDate = getDate();
	
	$month = $currentDate["mon"];
	$day = $currentDate["mday"]; 
	$year = $currentDate["year"];
	
	$dateString = "".$month."/".$day."/".$year.""; 
	 
	$queryString = "INSERT INTO User (FirstName, LastName, Email, UserName, Password)
	Values('".$firstName."', '".$lastName."', '".$email."', '".$newUsername."', '".$newPassword."')"; 
	
	$queryAddUser = mysqli_query($link, $queryString);   
		
	if(!$queryAddUser)
	{
		echo $queryString;  
	}
	else
	{
		echo "Added"; 
	}
	
	mysqli_close($link);

?>