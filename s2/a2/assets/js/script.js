// upon clicking the register button, it should execute the following validations:

//username should be greater than or equal to 10 chars
//password should be atleast 8 characters
//email should include the @ symbol
//use the Javascript includes() method to check if the email has an @ symbol
//password and pass2 should match
//all input boxes should not be empty
//create an errors variable that will check if there are any errors
//increment the errors variable every time we encounter an error in our input validations


	// declare an errors variable and assign 0 as its intial value
	// declare an username variable to store the value of the username input
	// declare a password variable to store the value of the password input
	// declare an email variable to store the value of the email input
	// declare an pass2 variable to store the value of the confirm password input



	// username should have atleast 10 characters


	//email should include the @ symbol
	// use the Javascript's includes function


	//password should be atleast 8 characters

	// confirm if the value of password is equal to pass2



	//if the value of errors is greater than 0, return false else 
	// create an alert message that says successfully registered! then
	//return true


let userName = document.querySelector('#username')
let email = document.querySelector('#email')
let password = document.querySelector('#password')
let pass2 = document.querySelector('#pass2')


document.querySelector('#registerButton').addEventListener('click', function() {

		if (userName.value.length >= 10) {
			console.log('tama yung username')
		} else {
			console.log('kulang linagay mo!')
		}

		if (email.value.includes('@')) {
			console.log('tama yung email')
		} else {
			console.log('walang @')
		}

		if (password.value.length >= 8) {
			console.log('tama yung password mo')
		} else {
			console.log('kulang linagay mo sa password!!')
		}

		if (password.value == pass2.value) {
			console.log('match po')
		} else {
			console.log('hindi po tugma ang iyong password')
		}

		if (userName.value.length >= 10 && email.value.includes('@') && password.value.length >= 8 && password.value == pass2.value) {
			alert('ayos success')
		} else {
			alert('may mali sa iyong form')
		} return false
		
	return true	
})
