// Werners javascript
function wernersOnLoad(){
	var carl=document.getElementById("wernersCanvas");
	var carlCtx=carl.getContext("2d");
// draw here  		
	var nailX=200;
	var farve=0;
	for(var i=0;i<140;i=i+1){	
		carlCtx.beginPath();
		carlCtx.moveTo(200,0);
		carlCtx.lineTo(nailX,450);
		carlCtx.strokeStyle="rgb("+farve+"%,69%,69%)";
		farve=farve+3;
		carlCtx.stroke();
		nailX=nailX+5;
	}


	console.log(nailX);
	farve=0;
	var loopMe = setInterval(function(){

		carlCtx.beginPath();
		carlCtx.moveTo(0,nailX-750);
		carlCtx.lineTo(nailX,450);
		carlCtx.strokeStyle="rgb("+farve+"%,"+(100-farve)+"%,69%)";
		carlCtx.stroke();
		nailX=nailX+7;
		farve=farve+2;
		if (farve>180){
			clearInterval(loopMe);
		}
	
}, 15 
	);
/*
drawagain(carlCtx);
drawagain(carlCtx);



function drawagain(Ctx){
	//  this function will draw random fans
	var nailX=50 + Math.random()*300;
	var nailY=50 + Math.random()*300;
	var nailTO=100 + Math.random()*700;
	var farve=5 + Math.random()*3;
	for(var i=0;i<140;i=i+1){	
		Ctx.beginPath();
		Ctx.moveTo(nailX,nailY);
		Ctx.lineTo(nailTO,nailX);
		Ctx.strokeStyle="rgb("+farve+","+farve+",0)";
		Ctx.stroke();
		farve=farve+3;
		nailX=nailX+8;
	}
	var nailX=-50 + Math.random()*600;
	var nailY=700 +  Math.random()*200;
	var nailTO=100 + Math.random()*700;

	var farve=0;
	for(var i=0;i<240;i=i+1){	
		Ctx.beginPath();
		Ctx.moveTo(nailY,nailX/2);
		Ctx.lineTo(nailX,nailTO-nailX);
		Ctx.strokeStyle="rgb("+farve+",0,"+(farve+55)+")";
		Ctx.stroke();
		farve=farve+3;
		nailX=nailX+9;
	}  
}
*/
}

function wernersDate() {

	alert("Hi there, best date ever: "+ Date());

}
