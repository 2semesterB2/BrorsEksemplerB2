<?php 
$c1="";
$c2="";
$c3="";
if ($current==1) {$c1 ="class='current'";}; 
if ($current==2) {$c2 ="class='current'";}; 
if ($current==3) {$c3 ="class='current'";}; 

?>

	<header>
		<p id="logo" class="logo"><a href="/"><img src="img/logo.jpg" alt="BrorLogo" /></a></p>
		<p class="company">Usability matters</p>
		<nav>
			<ul>
				<?php
				echo "
				<li $c1><a href='.'>Home</a></li
				><li $c2><a href='about.php'>About</a></li
				><li $c3><a href='contact.php'>Contact</a></li>
				";
// weird looking html ><li> solves https://css-tricks.com/fighting-the-space-between-inline-block-elements/

				?>

			</ul>
		</nav>
	</header>
	<div class="clearfix"></div>
