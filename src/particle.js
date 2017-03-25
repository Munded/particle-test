function particle(e){
	var xDirection = "forward"
	var yDirection = "forward"

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
		switch(xDirection) {
			case "forward":
					if (xPos < 350) {
						moveXForward();
					}
					else {
						xDirection = "backward"
					}
				break;
			case "backward":
					if (xPos >= 1) {
						moveXBackward();
					}
					else {
						xDirection = "forward"
					}
				break;
		}

		switch(yDirection) {
			case "forward":
					if (yPos < 350) {
						moveYForward();
					}
					else {
						yDirection = "backward"
					};
				break;
			case "backward":
					if (yPos >= 1) {
						moveYBackward();
					}
					else {
						yDirection = "forward"
					};
				break;
		}
	}


	function moveXForward(){
		xPos++;
		particle.style.left = xPos + 'px'
	}

	function moveYForward(){
		yPos++;
		particle.style.top = yPos + 'px';
	}

	function moveXBackward(){
		xPos--
		particle.style.left = xPos + 'px'
	}

	function moveYBackward(){
		yPos--
		particle.style.top = yPos + 'px';
	}
}

$('#particleContainer').click(function(e) {  
    particle(e)
});

//document.addEventListener("click", particle);