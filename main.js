canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");

greencar_width = 75;
greencar_height = 100;

background_image = "parkingLot.jpg";
greencar_image = "car2.png";

greencar_x = 5;
greencar_y = 225;

function add() {
	
function add() {
    background_imgTag = new Image();
    background_imgTag.onload = uploadbackground;
    background_imgTag.src = background_image;
}

function uploadBackground() {
	function uploadbackground() {
		ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
	}

	function greencar() {
		ctx.drawImage(greencar_imgTag, greencar_x, greencar_y, greencar_width, greencar_height);
	}




window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
	
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
	
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
		
		
}

function up()
{
if(greencar_y >= 0) {
			greencar_y -= 10;
			console.log("When up arrow is pressed=" + greencar_x + "-" + greencar_y);
			uploadbackground();
	
			uploadgreencar();
		}
	}

}

function down()
{
	if (rover_y >= 0) {
		greencar_y -= 10;
		console.log("When up arrow is pressed=" + greencar_x + "-" + greencar_y);
		uploadbackground();

		uploadgreencar();
	}
}
}

function left()
{
	if (rover_y >= 0) {
		greencar_y -= 10;
		console.log("When up arrow is pressed=" + greencar_x + "-" + greencar_y);
		uploadbackground();

		uploadgreencar();
	}
}

function right()
{
	if (rover_y >= 0) {
		greencar_y -= 10;
		console.log("When up arrow is pressed=" + greencar_x + "-" + greencar_y);
		uploadbackground();

		uploadgreencar();
	}
}

