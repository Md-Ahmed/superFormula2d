var m = 8, n1 = 1, n2 = 1, n3 = 1, color = false, cclear = true;
window.onload = function() {
	document.getElementById("canvas");

	var width = canvas.width = window.innerWidth;
	var height = canvas.height = window.innerHeight;

	var a = 1, b = 1, hue = 0;

	canvas.onmousemove = function(e) {
		a = (e.clientX - width/2)/100;
		b = (e.clientY - height/2)/100;
		draw();
	}

	canvas.addEventListener("touchmove", touchHandle, false);

	function touchHandle(e) {
		e.preventDefault();
		a = (e.touches[0].clientX - width/2)/100;
		b = (e.touches[0].clientY - height/2)/100;
		draw();
	}

	var ctx = canvas.getContext('2d');

	ctx.translate(width/2, height/2);
	ctx.scale(1, -1);

	//Superformula:
	function superFormula(theta, a, b, m, n1, n2, n3) {
		return Math.pow(Math.pow(Math.abs(Math.cos(m*theta/4))/a,n2)+Math.pow(Math.abs(Math.sin(m*theta/4))/b, n3),-(1/n1));
	}

	function draw() {
		if (cclear)
			ctx.clearRect(-width/2, -height/2, width, height);
		if (color)
			ctx.fillStyle = "hsl("+ hue++ + ", 100%, 50%)";
		else
			ctx.fillStyle = "#000";
		for (theta = 0.00; theta <= 2.00 * Math.PI; theta += 0.001) {
			var rad = superFormula(theta,
					a, //a
					b, //b
					m, //m
					n1, //n1
					n2, //n2
					n3  //n3
			);
			var x = rad * Math.cos(theta) * 50;
			var y = rad * Math.sin(theta) * 50;
			ctx.fillRect(x, y, 1, 1);
		}
	}
} 
