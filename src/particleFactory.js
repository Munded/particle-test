function particleFactory(){
	var noOfParticles = 0;

	$('#particleContainer').click(function(e) {  

		noOfParticles++
		var parentOffset = document.getElementById('particleContainer'); 
	  var xPos = e.pageX - parentOffset.offsetLeft;
	  var yPos = e.pageY - parentOffset.offsetTop;
	  var name = "particle" + noOfParticles;

	  var colours = ["yellow", "blue", "red", "green", "fuchsia", "white"];
	  var colour = colours[Math.floor(Math.random() * colours.length)];
		var newParticle = document.createElement("div");
		newParticle.setAttribute("class", "particle");
		newParticle.setAttribute("id", name);
		newParticle.setAttribute("style", "left:" + xPos
			+ "; top:" + yPos
			+ "; background: " + colour+";");
		// newParticle.setAttribute("offsetLeft", xPos);
		// newParticle.setAttribute("offsetTop", yPos);

		var parentDiv = document.getElementById('particleContainer'); 
		parentDiv.appendChild(newParticle)

		particle(xPos, yPos, name);
	});

}

$(document).ready(function(){
	particleFactory();
})

