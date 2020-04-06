let num;

document.querySelector('#checker').addEventListener('blur', function(){
	// alert('hello')

	// store in to the num variable the value of the input box #checker
	num = parseInt(document.querySelector('#checker').value)
	// log in the console the value of num

	// console.log('this is the value of num: ' + num)

	// check if num is a number of not
	if( !isNaN(num) ) {
		// code block will execute if num is a number
		// console.log(num + " is a number")

		// determine if num is odd or even
		if(num%2 === 0) {
			// console.log(num + " is even")
			// document.querySelector("#output").innerHTML ="<p>" + num + " is even" + "</p>"

			// template literals
			// variables/expressions syntax : ${variable name}
			document.querySelector("#output").innerHTML = `<p> ${num} is even </p> <p>Hooray</p>`
		} else {
			// console.log(num + " is odd")
			document.querySelector("#output").innerHTML = `<p> ${num} is odd </p>`
		}	
	} else {
		// will fall back to the else statement if num is not a number
		// console.log("please enter a number")
		document.querySelector("#output").innerHTML = `<p> please input a number </p>`
	}

})