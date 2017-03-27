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
	var enemy = document.elementFromPoint(this.xPos, this.yPos);
	if (enemy != undefined && enemy.id != "particleContainer" && enemy.id != "") {
		this.checkCollission(enemy);
	};

	switch(this.xDirection) {
		case "forward":
				if (this.xPos < (this.container.offsetWidth - this.particle.offsetWidth)) {
					this.moveXForward();
				}
				else {
					this.onXCollission();
				}
			break;
		case "backward":
				if (this.xPos >= 1) {
					this.moveXBackward();
				}
				else {
					this.onXCollission();
				}
			break;
	}

	switch(this.yDirection) {
		case "forward":
				if (this.yPos < (this.container.offsetWidth - this.particle.offsetWidth)) {
					this.moveYForward();
				}
				else {
					this.onYCollission();
				};
			break;
		case "backward":
				if (this.yPos >= 1) {
					this.moveYBackward();
				}
				else {
					this.onYCollission();
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

Particle.prototype.onXCollission = function(){
	this.xDirection = this.xDirection === "forward" ? "backward" : "forward"
	this.particle.style.background = this.getNewColour(this.particle.style.background);
}

Particle.prototype.onYCollission = function(){
	this.yDirection = this.yDirection === "forward" ? "backward" : "forward"
	this.particle.style.background = this.getNewColour(this.particle.style.background);
}

Particle.prototype.checkCollission = function(enemy){
	var rectEnemy = enemy.getBoundingClientRect();
	var rectParticle = this.particle.getBoundingClientRect();

	var xOverlap = !(rectEnemy.right < rectParticle.left || rectEnemy.left > rectParticle.right);
	var yOverlap = !(rectEnemy.bottom < rectParticle.top || rectEnemy.top > rectParticle.bottom)

	if (xOverlap){
		this.onXCollission();
	}

	if (yOverlap){
		this.onYCollission();
	}

	// var circlePar = {radius: 5, x: rectParticle.left, y: rectParticle.top};
	// var circleEnemy = {radius: 5, x: rectEnemy.left, y: rectEnemy.top};

	// var dx = circlePar.x - circleEnemy.x;
	// var dy = circlePar.y - circleEnemy.y;
	// var distance = Math.sqrt(dx * dx + dy * dy);

	// if (distance < circlePar.radius + circleEnemy.radius) {
	//     this.onXCollission();
	//     this.onYCollission();
	// }
}

