console.log('loading external scripts...');

// the DOM (Document Object Model) treats HTML elements, which are basically words, as objects
// This means that it has PROPERTIES and METHODS that we can use to SELECT and MANIPULATE
// HTML elements

console.log(document); // returns the HTML document that refers to this JS file

// DOM selectors
// getElementsByTagName()
// getElementsByClass()
// getElementById()
// querySelector()

// basic syntax
// document - will refer to the HTML document that this js file is linked to
// selector - the element you want to select inside the document
// event listener/action - the trigger that executes the manipulation

// .innerHTML - to change the inner contents of elements
// .style - to apply CSS changes

console.log(document.getElementById("firstTag")); // h1 element with the id firstTag
// document.getElementById("firstTag").innerHTML = "Charles Quimpo"

// or you can assign it to an event so that the manipulation won't execute on load
document.getElementById("firstTag").onclick = function () {
	document.getElementById("firstTag").innerHTML = "Charles Quimpo"
}

const headingSelector = document.getElementById("firstTag")
headingSelector.onclick = function() {
	headingSelector.innerHTML = "Charles Quimpo";
	headingSelector.style.backgroundColor = "indianred";
	// alert("nagalert ako on click");
	console.log("nag log ako sa console on click")
}


// js can also change styles

// on click #btnHide, hide all elements inside #all
document.getElementById("btnHide").onclick = function () {
	document.getElementById("all").style.display = "none"
}


// show all elements inside #all
document.getElementById("btnShow").onclick = () => {
	document.getElementById("all").style.display = "block"
}


// js can change attribute values
document.getElementById("btnHeight").onclick = () => {
	// alert("changing the height of the image...")
	document.getElementById("attr").height = 100;
}


document.getElementById("btnImg").onclick = () => {
	console.log("changing the profile picture...")
	document.getElementById("attr").src = "./assets/images/thor.jpg"
}

// js can get and manipulate values
document.getElementById("btnSum").onclick = () => {
	console.log('computing the sum...')

	let x = document.getElementById("input1").value;
	console.log('this is the value of the element with the id input1: ' + x);

	let y = document.getElementById("input2").value;
	console.log('this is the value of the element with the id input1: ' + y);

	let total = parseInt(x) + parseInt(y)
	console.log('the total sum is ' + total)

	document.getElementById("sum").innerHTML = total;

}