<?php include 'conectar.php';
    $conexion = connectDB();

	$json = file_get_contents('php://input');
 
	 // decoding the received JSON and store into $obj variable.
	 $obj = json_decode($json,true);
	 
     $userName = $obj['username'];
	
     $password = $obj['password'];

	if($obj['username']!="")
	{
	
	$result= $conexion->query("SELECT * FROM Users where userName='$userName'");
	
	
		if($result->num_rows>0){
			echo json_encode('email already exist');  // alert msg in react native		 		
		}
		else
		{		
		   $add = $conexion->query("insert into Users (userName, password) values('$userName','$password')");
			
			if($add){
				echo  json_encode('User Registered Successfully'); // alert msg in react native
			}
			else{
			   echo json_encode('check internet connection'); // our query fail 		
			}
				
		}
	}
	
	else{
	  echo json_encode('try again');
	}

	
?>