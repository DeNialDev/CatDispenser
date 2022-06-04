<?php include 'conectar.php';

    $conexion = connectDB();

	$json = file_get_contents('php://input');
 
	 // decoding the received JSON and store into $obj variable.
	 $obj = json_decode($json,true);
	 
     $catName = $obj['catName'];
	
     $catWeight = $obj['catWeight'];
     

	if($obj['catName']!="")
	{
	
	$result= $conexion->query("SELECT * FROM Cat where catName='$catName'");
	
	
		if($result->num_rows>0){
			echo json_encode('cat already exist');  // alert msg in react native		 		
		}
		else
		{		
		   $add = $conexion->query("insert into Cat (catName, catWeigth) values('$catName','$catWeight')");
			
			if($add){
				echo  json_encode('Catgistered Successfully'); // alert msg in react native
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