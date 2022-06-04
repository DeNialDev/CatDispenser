<?php include 'conectar.php';
    $conexion = connectDB();


	$json = file_get_contents('php://input');
 
	 // decoding the received JSON and store into $obj variable.
	 $obj = json_decode($json,true);
	 
	
     $ip = $obj['Ip'];

	if($obj['Ip']!="")
	{
	
		
		   $add = $conexion->query("update ip set ipDevice = '$ip' where id = 1");
			
			if($add){
				echo  json_encode('Ip'); // alert msg in react native
			}
			else{
			   echo json_encode('check internet connection'); // our query fail 		
			}
				
	}	
	
	
	

	
?>