let username = localStorage.getItem('username')

console.log(username)

// document.querySelector("#username").innerHTML = "Hello, " + username;




// what is my if statement?
// if no username is logged in, #profileName should display Hello, Guest
// else, #profileName should display Hello, <value of username>


if(username === null) {
	// no user is logged in/registered
	document.querySelector('#username').innerHTML = "Hello, Guest"
} else {
	document.querySelector("#username").innerHTML = "Hello, " + username;
}