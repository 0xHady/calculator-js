const screen = document.querySelector(".result");
let buffer = "0";
let prevBuffer = "0";
let Op = "+";
let lastSymbol ="";

function updateScreen() {
	if (buffer === "") buffer = "0";
	screen.innerText = buffer;
}
function setOperand(input) {
	if (input === "+" || input === "-" || input === "/" || input === "X") {
		Op = input;
		prevBuffer = buffer;
		buffer = "";
		updateScreen();
		console.log(Op);
	}
}
function handleNumber(input) {

    if(lastSymbol === "=") buffer = "0";
	if (buffer === "0") buffer = input;
	else buffer = buffer + input;

	updateScreen();
	console.log(buffer);
}

function clearScreen() {
	buffer = "0";
	prevBuffer = "";
	waitOperand = 0;
}
function performOperation() {
	newBuffer = +buffer;
	newPrevBuffer = +prevBuffer;
	if (Op === "+") buffer = newPrevBuffer + newBuffer;
	if (Op === "-") buffer = newPrevBuffer - newBuffer;
	if (Op === "X") buffer = newPrevBuffer * newBuffer;
	if (Op === "/") buffer = newPrevBuffer / newBuffer;
	updateScreen();
}

function handleSymbol(input) {
    lastSymbol = input;

	if (input === "C") {
		clearScreen();
	} else if (input === "<-") {
		buffer = buffer.slice(0, -1);
	} else if (input === "=") {
		performOperation();
	} else setOperand(input);

	updateScreen();
}

function handleInput(input) {
	if (isNaN(input)) {
		handleSymbol(input);
	} else {
		handleNumber(input);
	}
}

function init() {
	document
		.querySelector(".calculator-container")
		.addEventListener("click", (event) => {
			handleInput(event.target.innerText);
		});
}

init();
