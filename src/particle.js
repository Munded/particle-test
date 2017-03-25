function particle(xPosition, yPosition, name){
	var xDirection = "forward"
	var yDirection = "forward"

	var particle = document.getElementById(name);

	var xPos = xPosition;
	var yPos = yPosition;

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
