function particle(e){
	var direction = "forward"

	var parentOffset = document.getElementById('particleContainer'); 
   var xPos = e.pageX - parentOffset.offsetLeft;
   var yPos = e.pageY - parentOffset.offsetTop;
   console.log(parentOffset)
   console.log(e);
	var particle = document.getElementById("particle");
	$("#particle").css({"background":"white"});
	$("#particle").offset({left:xPos,top:yPos});

	var id = setInterval(move, 10);

	function move(){
		switch(direction) {
			case "forward":
					if (xPos < 350 && yPos < 350) {
						moveForward();
					}
					else {
						direction = "backward"
					}
				break;
			case "backward":
					if (xPos >= 1 && yPos >= 1) {
						moveBackward();
					}
					else {
						direction = "forward"
					}
				break;
		}
	}

	function moveForward(){
		yPos++;
		xPos++;
		particle.style.top = yPos + 'px';
		particle.style.left = xPos + 'px'
	}

	function moveBackward(){
		yPos--;
		xPos--;
		particle.style.top = yPos + 'px';
		particle.style.left = xPos + 'px'
	}
	// function moveXForward(){

	// }

	// function moveYForward(){
		
	// }

	// function moveXBackward(){

	// }

	// function moveYBackward(){
		
	// }
}

$('#particleContainer').click(function(e) {  
    particle(e)
});

//document.addEventListener("click", particle);