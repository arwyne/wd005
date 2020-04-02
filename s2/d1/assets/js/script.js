// alert("external js")


// syntax - document.selector.action = "value"


// we want to change the innerHTML/content of #headingtext
// document.getElementById("btnContent").onclick = () => {
// 	document.getElementById("headingText").innerHTML = "Arwyne De Guzman"
// }


// document.querySelector("#btnContent").onclick = function() {
// 	document.querySelector("#headingText").innerHTML = "Arwyne De Guzman"
// }

// arrow notation
// document.querySelector("#btnContent").onclick = () => {
// 	document.querySelector("#headingText").innerHTML = "Arwyne De Guzman"
// }



// addEventListener method
// we attach the addEventListener method to a 
// selector(querySelector, getElementById) so that it can execute/run
// the manipulation upon the trigger of an event indicated

// basic syntax
// document.selector.addEventListener("event", function() {})
	// function to be executed upon trigger of the indicated event

document.querySelector("#btnContent").addEventListener("click", function() {
	document.querySelector("#headingText").innerHTML = "Arwyne De Guzman"
})

// add/remove classes 
// classList property returns the list of classes for that selected element
console.log(document.querySelector("#headingText").classList);

// the add method adds the class indicated in its parameter
// we want to add a class called newClass
document.querySelector("#btnStyle").addEventListener("click", function() {
	document.querySelector("#headingText").classList.add("newClass")
	// the remove method removes the class indicated in its parameter
	document.querySelector("#headingText").classList.remove("head-tag")
})


// upon double clicking the element #btnStyle, remove #headingText's newClass class name and
// add the head-tag class name.

document.querySelector("#btnStyle").addEventListener("dblclick", function() {
	document.querySelector("#headingText").classList.remove("newClass")
	document.querySelector("#headingText").classList.add("head-tag")
})
