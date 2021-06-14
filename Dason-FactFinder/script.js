// variable declaration
//-----------------------
var buttons = document.querySelector("#myButtons").children;

// loop through all the child elements of #myButtons and apply an eventListener to each
//------------------------------------------------------------------------------------------
for (let i = 0; i < 5; i++) {
	buttons[i].addEventListener("click", function() {deliverMessage(i);});
}

function deliverMessage(i) {
	var target = document.getElementById("facts");
	
	// display different facts using a switch statement
	//--------------------------------------------------------	
	switch(i) {
	  case 0:
		target.innerHTML = "Seagulls are very clever. They learn, remember and even pass on behaviours, such as \
		stamping their feet in a group to imitate rainfall and trick earthworms to come to the surface."
		break;
	  case 1:
		target.innerHTML = "Seagulls can drink both fresh and salt water. Most animals are unable to do this, \
		but seagulls have a special pair of glands right above their eyes which is specifically designed \
		to flush the salt from their systems through openings in the bill."
		break;
	  case 2:
		target.innerHTML = "Gulls have a complex and highly developed repertoire for communication which includes a \
		range of vocalisations and body movements. <img src='images/seagull.jpg' alt='seagull'>"
		break;
	  case 3:
		target.innerHTML = "There is a great deal of diversity between different gull species, with the smallest \
		being the Little Gull (120 g and 29 cm) and the largest being the Great Black-beaked Gull (1.75 kg and 75 cm)."
		break;
	  default:
		target.innerHTML = "Seagulls are fondly remembered in Utah for helping Mormon settlers deal with a plague \
		of crickets. The seagull is now the state bird of Utah and a monument in Salt Lake City \
		commemorates the event, known as the ‘Miracle of the Gulls’."
	}
}