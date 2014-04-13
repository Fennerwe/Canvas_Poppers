var confettiColors = new Array();
var NUM_CONFETTI_PARTICLES = 200;
var PI = Math.PI;
var audioEmbedded = false;
var xCoordClick = null;
var yCoordClick = null;
var imageData = null;

$(document).ready(function(){
	for(var i = 0; i < 100; i++){
		confettiColors.push(new fillColor(Math.floor(Math.random()*256), Math.floor(Math.random()*256), Math.floor(Math.random()*256), 0.8));
	}

	$('.popperCanvas').click(function(event){
		var parentOffset = $(this).parent().offset();
		xCoordClick = event.pageX - parentOffset.left;
		yCoordClick = event.pageY - parentOffset.top;
	});
});

function PartyPopper(x1, y1, angle1, ctx1, color1){
	var confetti = new Array();
	var x = x1;
	var y = y1;
	var angle = angle1;
	var color = color1;
	var popped = false;
	var ctx = ctx1;
	
	if(!audioEmbedded) {
		$(document.body).append("<audio id='partyPopperPopAudio'><source src='pop.mp3' type='audio/mpeg'><source src='pop.ogg' type='audio/ogg'><embed height='1' width='1' src='pop.mp3'></audio>");
		audioEmbedded = true;
	}
	var offsetX, offsetY;
	var imageSrc = "img/party_popper_"+color+".png";
	var poppedImage = new Image();
	poppedImage.src = "img/party_popper_"+color+"-popped.png";
	var image = new Image();
	image.onload = function(){
		offsetX = image.width/2;
		offsetY = image.height/2;
		for(var i = 0; i < NUM_CONFETTI_PARTICLES; i++){
		var r = Math.random()*5+2;
		confetti[i] = new Circle(x+offsetY*Math.sin(angle*PI/180), y+offsetY*Math.cos(-angle*PI/180), r, angle);
		}
	};
	image.src = imageSrc;
	
	this.complete = function(){return image.complete;}
		
	this.draw = drawPopper;
	
	function drawPopper(){
		
	
		ctx.save();
		ctx.translate(x, y);
		ctx.rotate(-angle*Math.PI/180);
		if(!popped){
			ctx.rect(-offsetX, -offsetY, image.width, image.height);
			if(ctx.isPointInPath(xCoordClick, yCoordClick)){
				popPopper();
			}
		}
		ctx.drawImage(image, -offsetX, -offsetY);
		ctx.restore();
		
		if(popped){
			for(var i = 0; i < NUM_CONFETTI_PARTICLES; i++){
				var P = confetti[i];
				
				P.x += P.vx;
				P.y += P.vy;
				
				P.vx *= .99;
				P.vy += .08;
				
				ctx.beginPath();
				ctx.fillStyle = P.fillStyle;
				ctx.arc(P.x, P.y, P.r, 0, PI*2);
				ctx.closePath();
				ctx.fill();
			}
		}
	};
	
	this.pop = popPopper;
	
	function popPopper(){
		image = poppedImage;
		popped = true;
		$('#partyPopperPopAudio')[0].play();
	}
	
	function isPointValid(){
		
	}
}

function Circle(x, y, r, angle){
	angle += Math.random()*20-10;
	this.x = x;
	this.y = y;
	this.r = r;
	this.vx = Math.random()*15*Math.sin(angle*(PI/180))+Math.random()*5-2.5;
	this.vy = Math.random()*15*Math.cos(angle*(PI/180))+Math.random()*5-2.5;
	this.color = confettiColors[Math.floor(Math.random()*confettiColors.length)];
	this.fillStyle = this.color.rgba;
}

function fillColor(r, g, b, a){
	this.r = r;
	this.g = g;
	this.b = b;
	this.rgba = "rgba("+r+","+g+","+b+","+a+")";
}
