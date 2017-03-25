function particle(){
	var origin = 0;
	var xPos = 0;
	var yPos = 0;
	var direction = "forward"

	var particle = document.getElementById("particle");
	$("#particle").css({"background":"white"});

	var id = setInterval(move, 10);

	function move(){
		switch(direction) {
			case "forward":
					if (origin < 350) {
						moveForward();
					}
					else {
						direction = "backward"
					}
				break;
			case "backward":
					if (origin >= 1) {
						moveBackward();
					}
					else {
						direction = "forward"
					}
				break;
		}
	}

	function moveForward(){
			origin++;
			particle.style.top = origin + 'px';
			particle.style.left = origin + 'px'
	}

	function moveBackward(){
		origin--;
		particle.style.top = origin + 'px';
		particle.style.left = origin + 'px'
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

document.addEventListener("click", particle);