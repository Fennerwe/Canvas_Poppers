var drawTimer, ctx;
var popperArr = new Array();

var WIDTH = 1000;
var HEIGHT = 600;

$(document).ready(function(){
	drawTimer = init();
});

function init(){
	ctx = $('#imageCanvas')[0].getContext("2d");
    //popperArr.push(new PartyPopper(-500, -500, -90, ctx, "blue"));
	popperArr.push(new PartyPopper(150, 500, 135, ctx, "blue"));
	popperArr.push(new PartyPopper(500, 500, 180, ctx, "red"));
	popperArr.push(new PartyPopper(850, 500, -135, ctx, "green"));
	popperArr.push(new PartyPopper(150, 100, 45, ctx, "blue"));
	popperArr.push(new PartyPopper(500, 100, 0, ctx, "red"));
	popperArr.push(new PartyPopper(850, 100, -45, ctx, "green"));
	
	return setInterval(draw, 20);
}

function draw(){
	clear();
	
	for(var i = 0; i < popperArr.length; i++){
		var popper = popperArr[i];
		
		if(popper.complete()){
			//if(shouldPopperPop()) popperArr[i].pop();
			popper.draw();
		}
	}
	
	/*if(imageData == null){
		imageData = ctx.getImageData(0, 0, WIDTH, HEIGHT);
	}*/
}

function clear(){
	ctx.fillStyle = '#000000';
	ctx.fillRect(0, 0, WIDTH, HEIGHT);
}
