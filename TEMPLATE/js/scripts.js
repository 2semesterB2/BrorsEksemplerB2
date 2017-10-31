// javascript file to demo some general aspects of programming
// Author: Bror Arnfast
// Multimedia Design and Communications 2017

//alert("script running");


// variable  +  built-in function Date() and object Math

var end = new Date('01/04/2018');
var now = new Date();  
// empty argument on Date function means today
var distance = end - now;
alert(distance);
var days = Math.floor(distance / (1000 * 60 * 60 * 24));

document.getElementById('count').innerHTML +=  
	'<p class="company">' + days + ' days left </p>';








// programmer defined function example

function filip(){
//	alert('This is Filip');
	document.getElementById('count').innerHTML = 'UPS';  
	
}









// for loop
// var pictureBatch = document.getElementsByClassName("over");

pictureBatch =  document.getElementById("all").childNodes;
alert("all nodes " + pictureBatch.length);
for (var i = 0; i < pictureBatch.length; i++ ) {
	// console.log(pictureBatch[i].height);
    pictureBatch[i].onclick =function()
    	{
			this.style.display = 'none';  
	    };
}










// testing for keydown and reacting to right arrow
document.onkeydown = move;

logoposition = Number(document.getElementById("logo").style.marginLeft);
function move(whichkey){
	console.log(logoposition);
	//console.log(whichkey.keyCode);
	if(whichkey.keyCode==65){
		logoposition +=5  ;
		document.getElementById("logo").style.marginLeft = logoposition + "px";
	}
}







// Playing  sound   
//		When this is in HTML
//    <audio id="audio" src="http://www.soundjay.com/button/beep-07.wav" autostart="false" ></audio>
//    <a onclick="playSound();"> Play</a>


function playSound() {
      var sound = document.getElementById("audio");
      sound.play();
}
