<html>
<head>
<title>test notif
</title>
<script type="text/javascript" src="jquery.js"></script>
<script>
function testSend()  {
   // var id = "dAb-rUsoRuaCcbxdXt01-c:APA91bEk4o-OupiS4OZNeBaBJGCSBun3eUiRUdACsserFFmKgn2PBA0-iLn3sQKAo5owsj9lw2PYClHBYFx2nQImnEd0axPd0r4eLvchQeJEJyhss023b7weZ2M7QzueJhzY_8xET3J0";
    //var id="test";
    $.ajax({
		type:"POST",
		url:"send.php",
	
		success: function(data){
			alert(data);
		}
	});
}
</script>
</head>
<body>
<button onclick="testSend()">Click me!</button>
</body>
</html>

