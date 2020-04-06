const buttons = document.getElementsByClassName("btn")

// ideally this should work
// buttons.addEventListener("click", function(){
// 	alert("hi!")
// })

// console.log(buttons)
// buttons[0].addEventListener("click", function(){
// 	alert('hi')
// })

// buttons[1].addEventListener("click", function(){
// 	alert('hi')
// })

// buttons[2].addEventListener("click", function(){
// 	alert('hi')
// })

for(let x=0; x<buttons.length; x++) {
	console.log(x)
	// x == 0
	// x == 1
	// x == 2
	buttons[x].addEventListener("click", () => {
		alert("hi")
	})
}

// nodeList and HTML collection are both collection of nodes. HTML collection is more specific since
// JS is sure you are selecting elements via class names while querySelectorAll can select different
// types of nodes like a tag, attribute, etc

// const boxes = document.getElementsByClassName("box");
const boxes = document.querySelectorAll(".box");

console.log(boxes)

// boxes[0].style.backgroundColor = "red";

// let count;
// for(count = 0; count < boxes.length; count++){
// 	// console.log(count) value of count is from 0-6
// 	boxes[count].style.backgroundColor = "red"
// 	// put a text red box inside each .box
// 	boxes[count].innerHTML = "red box"
// }



const colors = ['red', 'orange', 'yellow', 'green', 'violet', 'indigo', 'blue'];

// boxes[0].style.backgroundColor = colors[0] //red
// boxes[1].style.backgroundColor = colors[1] //orange
// boxes[2].style.backgroundColor = colors[2] //yellow

// for(count = 0; count < boxes.length ; count++) {
// 	boxes[count].style.backgroundColor = colors[count]
// }

// create a variable y and store the last element length of the colors array to it
// create a for loop that will execute the same output

// let y = colors.length -1
// for(count = 0; count < boxes.length ; count++) {
// 	console.log('this is the value of count: ' + count)
// 	console.log('this is the value of y: ' + y)
// 	// count 0, 1, 2, 3, 4, 5, 6
// 	// y 6,6,6,6,6,6,6
// 	boxes[count].style.backgroundColor = colors[y]
// 	y--
// }


let count = 0
// while loop
// while(count < boxes.length) {
// 	boxes[count].style.backgroundColor = colors[count]
// 	boxes[count].style.width = 50 + (10*count) + "px"
// 	boxes[count].style.height = 50 + (10*count) + "px"
// 	// boxes[0].style.width = 50 + (10*0) + px
// 	// boxes[0].style.width = 50px
// 	count ++
// }


// forEach
boxes.forEach(function(box) {
	box.innerHTML = colors[count]
	box.style.backgroundColor = colors[count]
	box.style.width = 50 + (10*count) + "px"
	box.style.height = 50 + (10*count) + "px"
	count++
})