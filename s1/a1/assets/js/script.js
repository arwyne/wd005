// color palette activity
// given the current HTML document and styling, find a way that when I click on the element
// #red, the element #red-box will have a background color of red.
// same goes for #orange, #yellow, #green, #blue, #indigo and their corresponding boxes.
// the element #violet when clicked, should apply the violet background color across all boxes.

document.getElementById("red").onclick = () => {
	document.getElementById("red-box").style.backgroundColor = "red"
}

document.getElementById("orange").onclick = () => {
	document.getElementById("orange-box").style.backgroundColor = "orange"
}

document.getElementById("yellow").onclick = () => {
	document.getElementById("yellow-box").style.backgroundColor = "yellow"
}

document.getElementById("green").onclick = () => {
	document.getElementById("green-box").style.backgroundColor = "green"
}

document.getElementById("blue").onclick = () => {
	document.getElementById("blue-box").style.backgroundColor = "blue"
}

document.getElementById("indigo").onclick = () => {
	document.getElementById("indigo-box").style.backgroundColor = "indigo"
}

document.getElementById("violet").onclick = () => {
	document.getElementById("violet-box").style.backgroundColor = "violet"
	document.getElementById("red-box").style.backgroundColor = "violet"
	document.getElementById("orange-box").style.backgroundColor = "violet"
	document.getElementById("yellow-box").style.backgroundColor = "violet"
	document.getElementById("green-box").style.backgroundColor = "violet"
	document.getElementById("blue-box").style.backgroundColor = "violet"
	document.getElementById("indigo-box").style.backgroundColor = "violet"	
}

document.getElementById("white").onclick = () => {
	document.getElementById("violet-box").style.backgroundColor = "white"
	document.getElementById("red-box").style.backgroundColor = "white"
	document.getElementById("orange-box").style.backgroundColor = "white"
	document.getElementById("yellow-box").style.backgroundColor = "white"
	document.getElementById("green-box").style.backgroundColor = "white"
	document.getElementById("blue-box").style.backgroundColor = "white"
	document.getElementById("indigo-box").style.backgroundColor = "white"	
}
