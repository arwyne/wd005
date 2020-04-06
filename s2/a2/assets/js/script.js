

const Toast = Swal.mixin({
	toast : true,
	position: 'top-end',
	showConfirmButton : false,
	time : 3000
})

document.querySelector('#registerButton').addEventListener('click', function() {
	let errors = 0
	let username = document.querySelector("#username").value
	let password = document.querySelector("#password").value
	let email = document.querySelector("#email").value
	let pass2 = document.querySelector("#pass2").value

	if(username.length < 10) {
		document.querySelector("#userErr").innerHTML = `<small class='alert-danger'>Kulang linagay mo!!</small>`
		errors++
	}
	else {
		document.querySelector("#userErr").innerHTML = `<small class='alert-success'>Pwede yung username!</small>`
	}


	if (!email.includes('@')) {
		document.querySelector("#emailErr").innerHTML = `<small class="alert-danger">Hindi tama linagay mo!!</small>`
		errors++
	} else {
		document.querySelector("#emailErr").innerHTML = `<small class="alert-success">Pwede yung email!</small>`
	}


	if (password.length < 8) {
		document.querySelector("#passErr").innerHTML = `<small class="alert-danger">Mahina yung password mo!!</small>`
		errors++
	} else {
		document.querySelector("#passErr").innerHTML = `<small class="alert-success">Malakas to!!</small>`
	}


	if (password !== pass2) {
		document.querySelector("#pass2Err").innerHTML = `<small class="alert-danger">Hindi tugma linagay mo!!</small>`
		errors++
	} else {
		document.querySelector("#pass2Err").innerHTML = `<small class="alert-success">Tugma!</small>`
	}


	if(errors > 0) {
		Toast.fire({
			type : 'error',
			title : 'May mali sa iyong form!!'
		})
	} else {
		Toast.fire({
			type : 'success',
			title : 'Ayos success!'
		})

		// syntax localStorage.setItem("key", value)
		localStorage.setItem("username", username);
		localStorage.setItem("password", password);
		localStorage.setItem("email", email);
		localStorage.setItem("etoYungKey", "thisIsTheValue");

		// if user registered successfully, the user will be redirected to profile page
		window.location.href="./profile.html"
		// window.location.href="https://www.google.com"


	}

})



// upon clicking the register button, it should execute the following validations:
// username should be greater than or equal to 10 chars
// password should be atleast 8 characters
// email should include the @ symbol
// use the Javascript includes() method to check if the email has an @ symbol
// password and pass2 should match
// all input boxes should not be empty
// create an errors variable that will check if there are any errors
// increment the errors variable every time we encounter an error in our input validations


// solution ni sir
// document.querySelector('#registerButton').addEventListener('click', function() {

// 	// declare an errors variable and assign 0 as its intial value
// 	// declare an username variable to store the value of the username input
// 	// declare a password variable to store the value of the password input
// 	// declare an email variable to store the value of the email input
// 	// declare an pass2 variable to store the value of the confirm password input
// 	let errors = 0
// 	let username = document.querySelector("#username").value
// 	let password = document.querySelector("#password").value
// 	let email = document.querySelector("#email").value
// 	let pass2 = document.querySelector("#pass2").value

// 	console.log('this is the value of username' + username)
// 	console.log('this is the value of password' + password)
// 	console.log('this is the value of email' + email)
// 	console.log('this is the value of pass2' + pass2)

// 	// username should have atleast 10 characters
// 	// console.log(username.length); returns the number of characters for #username input
// 	// guilty until proven innocent
// 	if(username.length < 10) {
// 		// document.querySelector("#userErr").innerHTML = "<small class='alert-danger'>Username should be atleast 10 characters</small>"
// 		// document.querySelector("#userErr small").style.color ="yellow" //need to delete bootstrap class name
// 		// backtic
// 		document.querySelector("#userErr").innerHTML = `<small class='alert-danger'>Username should be atleast 10 characters</small>`
// 		errors++
// 	}
// 	else {
// 		// value inside #username is valid
// 		document.querySelector("#userErr").innerHTML = `<small class='alert-success'>Username is available</small>`
// 	}


// 	// email should include the @ symbol
// 	// use the Javascript's includes function
// 	if (!email.includes('@')) {
// 		document.querySelector("#emailErr").innerHTML = `<small class="alert-danger">Enter a valid email</small>`
// 		errors++
// 	} else {
// 		document.querySelector("#emailErr").innerHTML = `<small class="alert-success">This is a valid email</small>`
// 	}


// 	//password should be atleast 8 characters
// 	if (password.length < 8) {
// 		document.querySelector("#passErr").innerHTML = `<small class="alert-danger">Please provide a stronger password</small>`
// 		errors++
// 	} else {
// 		document.querySelector("#passErr").innerHTML = `<small class="alert-success">This is a strong password</small>`
// 	}


// 	// confirm if the value of password is equal to pass2
// 	if (password !== pass2) {
// 		document.querySelector("#pass2Err").innerHTML = `<small class="alert-danger">Passwords do not match</small>`
// 		errors++
// 	} else {
// 		document.querySelector("#pass2Err").innerHTML = `<small class="alert-success">Passwords match</small>`
// 	}


// 	//if the value of errors is greater than 0, return false else 
// 	// create an alert message that says successfully registered! then
// 	//return true
// 	if(errors > 0) {
// 		// alert("something went wrong")
// 		Toast.fire({
// 			type : 'error',
// 			title : 'Something went wrong!'
// 		})
// 	} else {
// 		// alert("registered successfuly")
// 		Toast.fire({
// 			type : 'success',
// 			title : 'Registered Successfully!'
// 		})
// 	}

// })