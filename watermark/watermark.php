<?php
// Brors "polaroid" example
// based on Doyles watermark example chap 17
// adding cropping (line 16ff)
// adding white borders (line 26ff)

$myImage = imagecreatefromjpeg( "lucky.jpg" );
$myLogo = imagecreatefrompng( "bror2.png" );
$myLogo = imagescale($myLogo, 38, 38);
$myColor = imagecolorallocate( $myImage, 255, 255, 255 );

$destWidth = imagesx( $myImage );
$destHeight = imagesy( $myImage );
$srcWidth = imagesx( $myLogo );
$srcHeight = imagesy( $myLogo );

// next 7 lines to crop the image
// are from  http://php.net/manual/en/function.imagecrop.php
$crop_measure = min($destHeight, $destWidth);
$offsetX= ($destWidth-$crop_measure)/2;
$offsetY= ($destHeight-$crop_measure)/2;
$to_crop_array = array('x' => (0+$offsetX) , 'y' => (0+$offsetY), 'width' => $crop_measure, 'height'=> $crop_measure);
$myImage = imagecrop($myImage, $to_crop_array);
$destWidth = imagesx( $myImage );
$destHeight = imagesy( $myImage );


// add white rectangles as borders make it look like polaroid (tm)
imagefilledrectangle( $myImage, 0, 0, $destWidth, 30, $myColor );
imagefilledrectangle( $myImage, 0, 0, 30, $destHeight, $myColor );
imagefilledrectangle( $myImage, $destWidth-30, 0, $destWidth, $destHeight, $myColor );

$destX = 0;
$destY = ($destHeight - $srcHeight);


$white = imagecolorexact( $myLogo, 255, 255, 255 );
//imagecolortransparent( $myLogo, $white );


imagefilledrectangle( $myImage, 0, $destY-$srcHeight, $destWidth, $destHeight, $myColor );


imagecopymerge( $myImage, $myLogo, $destX+10, $destY-1, 0, 0, $srcWidth, $srcHeight, 79 );

$black = imagecolorallocate( $myImage, 0, 0, 0 );
imagestring( $myImage, 4 , 285, $destY+0.5*$srcHeight, "image (c) Matt Doyle", $black);


// This is to make browser believe an image is coming
header( "Content-type: image/jpeg" );
// This sends the image to the browser 
// (it could have been saved on the server instead)
imagejpeg( $myImage );

// Cleaning up
imagedestroy( $myImage );
imagedestroy( $myLogo );



?>