<!DOCTYPE html>
<html>
<?php 
//  Show images from a folder on server
//  
include "settings.php";

?>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title><?php echo $title ?></title>
		<style>
			.show img {
				width:100%;
			}
			.show  {
				display:block;
			}
			#article_list {
				clear:both;
			}
			article {
				width: 210px;
				height: 320px;
				margin: 10px;
				float: left;
			}
			h1 {
				float:left;
				font-size:1.8cm;
			}
			body {background-color: #aaa;}
		</style>
	</head>
    <body>
   		<h1 id="titleH1"><?php echo $title ; ?></h1>

        <div id="article_list">
			<?php
			// find files in folder  and sort by filename
			$allFiles = scandir($sti,1);
			sort($allFiles);
			// and show them BUT only if they are jpg
			$howMany = count($allFiles);
			for($i=0;$i<$howMany;$i++){
				if (".jpg"==substr($allFiles[$i],-4)) {
				echo "
				<article class='show' onClick=\" swop(this) \">		
					<img src=\"$sti/$allFiles[$i]\" />
					<div class='cover' onClick=\" swop2(this) \"></div>
				</article>	";
				} else {
					echo("<!-- ".$allFiles[$i]."-->");
				}
			}
			?>
        </div>
    </body>
</html>