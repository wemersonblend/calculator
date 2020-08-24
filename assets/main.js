var primaryMemory = null;
var secondMemory = null;
var currentMemory = 1;
var typeOfOperation = null;
var result = null;

function operation(operation) {
	typeOfOperation = operation;
	changeMemoryPosition();
}

function equal() {

	primaryMemory *= 1;
	secondMemory *= 1;

	if(typeOfOperation == "addition") {
		result = primaryMemory + secondMemory;
	}

	if(typeOfOperation == "subtraction") {
		result = primaryMemory - secondMemory;
	}

	if(typeOfOperation == "division") {
		result = primaryMemory / secondMemory;
	}

	if(typeOfOperation == "multiplication") {
		result = primaryMemory * secondMemory;
	}

	console.log(typeOfOperation, primaryMemory, secondMemory, result)

	document.querySelector("#display").innerHTML = result;
}

function clearDisplay() {
	console.log('clear');
	primaryMemory = null;
	secondMemory = null;
	currentMemory = 1;
	typeOfOperation = null;
	result = null;
	document.querySelector("#display").innerHTML = 0;
}

function changeMemoryPosition() {

	console.log(primaryMemory, secondMemory)

	if(currentMemory == 1) {
		currentMemory = 2;
	} else {
		currentMemory = 1;
	}

	document.querySelector("#display").innerHTML = 0;
}

function digit(num) {

	var displayedNum = document.querySelector("#display").innerHTML;
	
	if(displayedNum == 0) {
		displayedNum = "";
	}
	
	displayedNum += "" + num;

	if( currentMemory == 1 ) {
		primaryMemory = displayedNum;
	} else {
		secondMemory = displayedNum;
	}

	document.querySelector("#display").innerHTML = displayedNum;
}