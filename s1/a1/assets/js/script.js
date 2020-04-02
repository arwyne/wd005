// color palette activity
// given the current HTML document and styling, find a way that when I click on the element
// #red, the element #red-box will have a background color of red.
// same goes for #orange, #yellow, #green, #blue, #indigo and their corresponding boxes.
// the element #violet when clicked, should apply the violet background color across all boxes.

document.getElementById("red").onclick = () => {
	// document.getElementById("red-box").style.backgroundColor = "red"
	// document.getElementById("red-box").style.transition = "1s"

	document.getElementById("red-box").style.backgroundImage = "url(./assets/images/spiderman.jpg)"
	document.getElementById("red-box").style.backgroundPosition = "center"
	document.getElementById("red-box").style.backgroundSize = "cover"

}

document.getElementById("orange").onclick = () => {
	// document.getElementById("orange-box").style.backgroundColor = "orange"
	// document.getElementById("orange-box").style.transition = "1s"

	document.getElementById("orange-box").style.backgroundImage = "url(./assets/images/thor.jpg)"
	document.getElementById("orange-box").style.backgroundPosition = "center"
	document.getElementById("orange-box").style.backgroundSize = "cover"
}

document.getElementById("yellow").onclick = () => {
	// document.getElementById("yellow-box").style.backgroundColor = "yellow"
	// document.getElementById("yellow-box").style.transition = "1s"

	document.getElementById("yellow-box").style.backgroundImage = "url(./assets/images/ironman.jpg)"
	document.getElementById("yellow-box").style.backgroundPosition = "center"
	document.getElementById("yellow-box").style.backgroundSize = "cover"
}

document.getElementById("green").onclick = () => {
	// document.getElementById("green-box").style.backgroundColor = "green"
	// document.getElementById("green-box").style.transition = "1s"

	document.getElementById("green-box").style.backgroundImage = "url(./assets/images/hulk.jpg)"
	document.getElementById("green-box").style.backgroundPosition = "center"
	document.getElementById("green-box").style.backgroundSize = "cover"
}

document.getElementById("blue").onclick = () => {
	// document.getElementById("blue-box").style.backgroundColor = "blue"
	// document.getElementById("blue-box").style.transition = "1s"

	document.getElementById("blue-box").style.backgroundImage = "url(./assets/images/blackwidow.jpg)"
	document.getElementById("blue-box").style.backgroundPosition = "center"
	document.getElementById("blue-box").style.backgroundSize = "cover"
}

document.getElementById("indigo").onclick = () => {
	// document.getElementById("indigo-box").style.backgroundColor = "indigo"
	// document.getElementById("indigo-box").style.transition = "1s"

	document.getElementById("indigo-box").style.backgroundImage = "url(./assets/images/hawkeye.jpg)"
	document.getElementById("indigo-box").style.backgroundPosition = "center"
	document.getElementById("indigo-box").style.backgroundSize = "cover"
}

document.getElementById("violet").onclick = () => {
	document.getElementById("red-box").style.backgroundImage = ''
	document.getElementById("orange-box").style.backgroundImage = ''
	document.getElementById("yellow-box").style.backgroundImage = ''
	document.getElementById("green-box").style.backgroundImage = ''
	document.getElementById("blue-box").style.backgroundImage = ''
	document.getElementById("indigo-box").style.backgroundImage = ''

	// document.getElementById("violet-box").style.backgroundColor = "violet"
	// document.getElementById("red-box").style.backgroundColor = "violet"
	// document.getElementById("orange-box").style.backgroundColor = "violet"
	// document.getElementById("yellow-box").style.backgroundColor = "violet"
	// document.getElementById("green-box").style.backgroundColor = "violet"
	// document.getElementById("blue-box").style.backgroundColor = "violet"
	// document.getElementById("indigo-box").style.backgroundColor = "violet"	
	// document.getElementById("violet-box").style.transition = "1s"
}

// document.getElementById("white").onclick = () => {
// 	document.getElementById("violet-box").style.backgroundColor = "white"
// 	document.getElementById("red-box").style.backgroundColor = "white"
// 	document.getElementById("orange-box").style.backgroundColor = "white"
// 	document.getElementById("yellow-box").style.backgroundColor = "white"
// 	document.getElementById("green-box").style.backgroundColor = "white"
// 	document.getElementById("blue-box").style.backgroundColor = "white"
// 	document.getElementById("indigo-box").style.backgroundColor = "white"
// 	document.getElementById("white-box").style.transition = "1s"	
// }
