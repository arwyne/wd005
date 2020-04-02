// add task
document.querySelector("#button1").addEventListener("click", function() {
	let x = document.querySelector("#input1").value;
	document.querySelector("#li1").innerHTML =  x
	document.querySelector("#input1").value = ""
})

document.querySelector("#button2").addEventListener("click", function() {
	let x = document.querySelector("#input2").value;
	document.querySelector("#li2").innerHTML =  x
	document.querySelector("#input2").value = ""
})

document.querySelector("#button3").addEventListener("click", function() {
	let x = document.querySelector("#input3").value;
	document.querySelector("#li3").innerHTML =  x
	document.querySelector("#input3").value = ""
})

document.querySelector("#button4").addEventListener("click", function() {
	let x = document.querySelector("#input4").value;
	document.querySelector("#li4").innerHTML =  x
	document.querySelector("#input4").value = ""
})

document.querySelector("#button5").addEventListener("click", function() {
	let x = document.querySelector("#input5").value;
	document.querySelector("#li5").innerHTML =  x
	document.querySelector("#input5").value = ""
})



// delete task
document.querySelector("#li1").addEventListener("dblclick", () => {
	document.querySelector("#li1").innerHTML = ""
})

document.querySelector("#li2").addEventListener("dblclick", () => {
	document.querySelector("#li2").innerHTML = ""
})
document.querySelector("#li3").addEventListener("dblclick", () => {
	document.querySelector("#li3").innerHTML = ""
})

document.querySelector("#li4").addEventListener("dblclick", () => {
	document.querySelector("#li4").innerHTML = ""
})

document.querySelector("#li5").addEventListener("dblclick", () => {
	document.querySelector("#li5").innerHTML = ""
})