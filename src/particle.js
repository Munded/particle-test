var Particle = function(xPosition, yPosition, name){
	this.container = document.getElementById('particleContainer');
	this.colours = ["yellow", "blue", "red", "green", "fuchsia", "white"];

	this.xDirection = xPosition >= (this.container.offsetWidth/2) ? "forward" : "backward";
	this.yDirection = yPosition >= (this.container.offsetHeight/2) ? "forward" : "backward";

	this.particle = document.getElementById(name);

	this.xPos = xPosition;
	this.yPos = yPosition;
}

Particle.prototype.move = function(){
	// var enemy = document.elementFromPoint(xPos, yPos);
	// if (enemy != undefined && enemy.id != "particleContainer" && enemy.id != "") {
	// 	if (enemy.offsetLeft >= xPos && enemy.offsetLeft <= (xPos + 50)) {
	// 		xDirection = xDirection === "forward" ? "backward": "forward";
	// 	};
	// 	if (enemy.offsetTop <= (yPos + 50) && enemy.offsetTop >= yPos) {
	// 	yDirection = yDirection === "forward" ? "backward": "forward";
	// 	};	
	// };

	switch(this.xDirection) {
		case "forward":
				if (this.xPos < (this.container.offsetWidth - this.particle.offsetWidth)) {
					this.moveXForward();
				}
				else {
					this.xDirection = "backward"
					this.particle.style.background = this.getNewColour(this.particle.style.background);
				}
			break;
		case "backward":
				if (this.xPos >= 1) {
					this.moveXBackward();
				}
				else {
					this.xDirection = "forward"
					this.particle.style.background = this.getNewColour(this.particle.style.background);
				}
			break;
	}

	switch(this.yDirection) {
		case "forward":
				if (this.yPos < (this.container.offsetWidth - this.particle.offsetWidth)) {
					this.moveYForward();
				}
				else {
					this.yDirection = "backward"
					this.particle.style.background = this.getNewColour(this.particle.style.background);
				};
			break;
		case "backward":
				if (this.yPos >= 1) {
					this.moveYBackward();
				}
				else {
					this.yDirection = "forward"
					this.particle.style.background = this.getNewColour(this.particle.style.background);
				};
			break;
	}
}


Particle.prototype.moveXForward = function(){
	this.xPos++;
	this.particle.style.left = this.xPos + 'px'
}

Particle.prototype.moveYForward = function(){
	this.yPos++;
	this.particle.style.top = this.yPos + 'px';
}

Particle.prototype.moveXBackward = function(){
	this.xPos--
	this.particle.style.left = this.xPos + 'px'
}

Particle.prototype.moveYBackward = function(){
	this.yPos--
	this.particle.style.top = this.yPos + 'px';
}

Particle.prototype.getNewColour = function(currentColour){
	var newColour = "";
	while(newColour == currentColour || newColour == ""){
		newColour = this.colours[Math.floor(Math.random() * this.colours.length)];
	};
	return newColour;
}

