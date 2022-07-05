let prompt = document.getElementById('prompt');
let conatainer = document.getElementById('container');
let down = 0;
let prevCmdWithPrompt;
let prevCmd;
let prevCmdList = [];
const guest = "guest@carlosbananas.com:~$ "
const root = "root@carlosbananas.com"

// Checklist
// - save input data to variable
// - display saved data on previous line when the enter key is pressed
// - allow up and down key to step though saved inputs
// - create commands
// - add a header and a set of instructions



function savePrevCommand() {
	const input = document.getElementById("command").value;
	prevCmd = input;
	prevCmdList.push(input);
	prevCmdWithPrompt = guest.concat(prevCmd); 
}

function insertPrevCommand() {
	const createDiv = document.createElement("div");
	const node = document.createTextNode(prevCmdWithPrompt);
	createDiv.appendChild(node);
	const element = document.getElementById("container");
	const child = document.getElementById("prompt");
	element.insertBefore(createDiv, child);
}

function movePromptDown() {
	down+=30;
	prompt.style.top = down + 'px';
}

window.addEventListener('keypress', (e) => {
	if (e.key === 'Enter') {
		savePrevCommand();
		movePromptDown();
		insertPrevCommand();
		console.log(prevCmdList);
	}
});
