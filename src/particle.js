function particle(xPosition, yPosition, name){
	var container = document.getElementById('particleContainer');
	var colours = ["yellow", "blue", "red", "green", "fuchsia", "white"];

	var xDirection = xPosition >= (container.offsetWidth/2) ? "forward" : "backward";
	var yDirection = yPosition >= (container.offsetHeight/2) ? "forward" : "backward";

	var particle = document.getElementById(name);

	var xPos = xPosition;
	var yPos = yPosition;

	var id = setInterval(move, 10);

	function move(){
		// var enemy = document.elementFromPoint(xPos, yPos);
		// if (enemy != undefined && enemy.id != "particleContainer" && enemy.id != "") {
		// 	if (enemy.offsetLeft >= xPos && enemy.offsetLeft <= (xPos + 50)) {
		// 		xDirection = xDirection === "forward" ? "backward": "forward";
		// 	};
		// 	if (enemy.offsetTop <= (yPos + 50) && enemy.offsetTop >= yPos) {
		// 	yDirection = yDirection === "forward" ? "backward": "forward";
		// 	};	
		// };

		switch(xDirection) {
			case "forward":
					if (xPos < (container.offsetWidth - particle.offsetWidth)) {
						moveXForward();
					}
					else {
						xDirection = "backward"
						particle.style.background = getNewColour(particle.style.background);
					}
				break;
			case "backward":
					if (xPos >= 1) {
						moveXBackward();
					}
					else {
						xDirection = "forward"
						particle.style.background = getNewColour(particle.style.background);
					}
				break;
		}

		switch(yDirection) {
			case "forward":
					if (yPos < (container.offsetWidth - particle.offsetWidth)) {
						moveYForward();
					}
					else {
						yDirection = "backward"
						particle.style.background = getNewColour(particle.style.background);
					};
				break;
			case "backward":
					if (yPos >= 1) {
						moveYBackward();
					}
					else {
						yDirection = "forward"
						particle.style.background = getNewColour(particle.style.background);
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

	function getNewColour(currentColour){
		var newColour = "";
		while(newColour == currentColour || newColour == ""){
			newColour = colours[Math.floor(Math.random() * colours.length)];
		};
		return newColour;
	}
}
