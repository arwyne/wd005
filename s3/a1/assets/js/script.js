let firstQtr = document.querySelector('#input1')
let secondQtr = document.querySelector('#input2')
let thirdQtr = document.querySelector('#input3')
let fourthQtr = document.querySelector('#input4')

let average = document.querySelector('#average')
let pof = document.querySelector('#pof')
let qpi = document.querySelector('#qpi')

let grades = document.querySelector('#grades')

document.querySelector('#compute').addEventListener('click', function(){
	// console.log(firstQtr.value)
	// console.log(secondQtr.value)
	// console.log(thirdQtr.value)
	// console.log(fourthQtr.value)

	grades.innerHTML = parseInt(firstQtr.value) + " + " + parseInt(secondQtr.value) + " + " + parseInt(thirdQtr.value) + " + " + parseInt(fourthQtr.value)


	let averageScore = (parseInt(firstQtr.value) + parseInt(secondQtr.value) + parseInt(thirdQtr.value) + parseInt(fourthQtr.value))/4;
	

	if (!isNaN(averageScore)) {
	// if averageScore is a number, execute this
	// console.log('the average score is: ' + averageScore);
	average.innerHTML = averageScore
	
	// grade range from 0 - <55
	if (averageScore >= 0 && averageScore < 55) {
		// console.log('the qpi is: 5.0 and the student\'s status is failed');
		pof.innerHTML = 'Failed'
		qpi.innerHTML = '5.0'

	// grade range from 0 - <55
	} else if(averageScore >=55 && averageScore < 60) {
		// console.log('the qpi is: 4.0 and the student\'s status is failed');
		pof.innerHTML = 'Failed'
		qpi.innerHTML = '4.0'

	// grade range from 60 - <65
	} else if(averageScore >= 60 && averageScore < 65) {
		// console.log('the qpi is: 3.0 and the student\'s status is passed');
		pof.innerHTML = 'Passed'
		qpi.innerHTML = '3.0'
	
	// grade range from 65 - <70	
	} else if(averageScore >= 65 && averageScore < 70) {
		// console.log('the qpi is: 2.75 and the student\'s status is passed');
		pof.innerHTML = 'Passed'
		qpi.innerHTML = '2.75'
		
	// grade range from 70 - <75
	} else if(averageScore >= 70 && averageScore < 75) {
		// console.log('the qpi is: 2.5 and the student\'s status is passed');
		pof.innerHTML = 'Passed'
		qpi.innerHTML = '2.5'

	// grade range from 75 - <80
	} else if(averageScore >= 75 && averageScore < 80) {
		// console.log('the qpi is: 2.25 and the student\'s status is passed');
		pof.innerHTML = 'Passed'
		qpi.innerHTML = '2.25'

	// grade range from 80 - <84
	} else if(averageScore >= 80 && averageScore < 84) {
		// console.log('the qpi is: 2 and the student\'s status is passed');
		pof.innerHTML = 'Passed'
		qpi.innerHTML = '2'
		
	// grade range from 84 - <87	
	} else if(averageScore >= 84 && averageScore < 87) {
		// console.log('the qpi is: 1.75 and the student\'s status is passed');
		pof.innerHTML = 'Passed'
		qpi.innerHTML = '1.75'
	
	// grade range from 87 - <90
	} else if(averageScore >= 87 && averageScore < 90) {
		// console.log('the qpi is: 1.5 and the student\'s status is passed');
		pof.innerHTML = 'Passed'
		qpi.innerHTML = '1.5'
	
	// grade range from 90 - <93	
	} else if(averageScore >= 90 && averageScore < 93) {
		// console.log('the qpi is: 1.25 and the student\'s status is passed');
		pof.innerHTML = 'Passed'
		qpi.innerHTML = '1.25'
	
	// grade range from 93 - 100	
	} else if(averageScore >= 93 && averageScore <= 100) {
		// console.log('the qpi is: 1 and the student\'s status is passed');
		pof.innerHTML = 'Passed'
		qpi.innerHTML = '1'
	
	} else {
		// console.log('out of bounds');
		average.innerHTML = 'out of bounds'
	}

} else {
	// console.log('not a number');
	average.innerHTML = 'not a number'

} 

	firstQtr.value = ''
	secondQtr.value = ''
	thirdQtr.value = ''
	fourthQtr.value = ''

})