<?php 

// $idToken = "dAb-rUsoRuaCcbxdXt01-c:APA91bEk4o-OupiS4OZNeBaBJGCSBun3eUiRUdACsserFFmKgn2PBA0-iLn3sQKAo5owsj9lw2PYClHBYFx2nQImnEd0axPd0r4eLvchQeJEJyhss023b7weZ2M7QzueJhzY_8xET3J0";

// $url = 'https://fcm.googleapis.com/fcm/send';

// $notification = array('title' => "title" , 'text' => "test");
// $fields = array (
//         'registration_ids' => array (
//                 $idToken
//         ),
//         'data' => array (
//                 "message" => "test",
//                 'notification' => $notification,
//                 'priority'=>'high'

//         )
// );
// $fields = json_encode ( $fields );

// $headers = array (
//         'Authorization: key=' . "AAAAwr-UvRU:APA91bEcDyk3MHkN1kuA27rmLDC9r_1hUrhL9WwsUkcrBOLlqyA_sE_8ypt4GREJnLflIPI0HyYhG8b0dz3NKZxS1kvuGs8henhxJQPYFFt2iJvXFPwMDuPl6zlt_H8KIfdtMo0SXm_i",
//         'Content-Type: application/json'
// );

// $ch = curl_init ();
// curl_setopt ( $ch, CURLOPT_URL, $url );
// curl_setopt ( $ch, CURLOPT_POST, true );
// curl_setopt ( $ch, CURLOPT_HTTPHEADER, $headers );
// curl_setopt ( $ch, CURLOPT_RETURNTRANSFER, true );
// curl_setopt ( $ch, CURLOPT_POSTFIELDS, $fields );

// $result = curl_exec ( $ch );
// echo $result;
// curl_close ( $ch );

 $url = 'https://fcm.googleapis.com/fcm/send';

            $tokens = array("f_yQ-uHzRFiuxNC5vJtGXZ:APA91bG07B8Y0mQkTtJRyZx9JJ_nfnlongkcCXqRNIddAz3Is0IkLWrnOCE9cGy_rpw9lrekzH_dvjwr5ZSXROXIFTTxxqzVYehiEEbmunJkQ4w5UgaKUdbmHSvik_iwKHiGCQa-ce9d");

            //Title of the Notification.
            $title = "Title";

            //Body of the Notification.
            $body = "Test";

            //Creating the notification array.
            $notification = array('title' =>$title , 'text' => $body, 'priority'=>'high');

            //This array contains, the token and the notification. The 'to' attribute stores the token.
            $arrayToSend = array('registration_ids' => $tokens, 'notification' => $notification, 'foreground' => false);

            //Generating JSON encoded string form the above array.
            $json = json_encode($arrayToSend);
            //Setup headers:
            $headers = array();
            $headers[] = 'Content-Type: application/json';
            $headers[] = 'Authorization: key= AAAAstPSn5U:APA91bH-xhHI3wSYnb4lD1EII2EM6nIGO2cpfTvqW93iULfIqYjC1zO1eeNV3LOwrEWrjPaWjuVNhvK9QFeZXqVWdRtUjCopkRGxV_Ma2-leaRoewB75tDrX22gdMJFpfm_bDTIuPkPD'; // key here

            $ch = curl_init();
            curl_setopt( $ch,CURLOPT_URL, $url );
            curl_setopt( $ch,CURLOPT_POST, true );
            curl_setopt( $ch,CURLOPT_RETURNTRANSFER, true );
            curl_setopt( $ch,CURLOPT_SSL_VERIFYPEER, false );
            curl_setopt($ch, CURLOPT_POSTFIELDS, $json);
            curl_setopt($ch, CURLOPT_HTTPHEADER,$headers);      

            //Send the request
            echo $response = curl_exec($ch);

            //Close request
            curl_close($ch);
            return $response; 
?>