<?php include 'conectar.php';
    $conexion = connectDB();

	$json = file_get_contents('php://input'); 	
	$obj = json_decode($json,true);

	$userName = $obj['username'];
	
	$password = $obj['password'];
	
	if($obj['username']!=""){	
	
	$result= $conexion->query("SELECT * FROM Users where userName='$userName' and password='$password'");
	
		if($result->num_rows==0){
			echo json_encode('Wrong Details');				
		}
		else{		
		echo json_encode('ok');				
		}
	}	
	else{
	  echo json_encode('try again');
	}

?>