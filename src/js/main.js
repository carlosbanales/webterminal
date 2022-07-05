let prompt = document.getElementById('prompt');
let container = document.getElementById('container');
let down = 0;
let prevCmdWithPrompt;
let prevCmd;
let prevCmdList = [];
const guestPrompt = "guest@carlosbananas.com:~$ "
const rootPrompt = "root@carlosbananas.com:~$ "

// Checklist
// - create config file to load on pageload
// - save input data to variable
// - display saved data on previous line when the enter key is pressed
// - allow up and down key to step though saved inputs
// - create commands
// - add a header and a set of instructions

function onPageLoad() {
	const newDiv = document.createElement("div");
	newDiv.setAttribute('id', 'user');
	const node = document.createTextNode(guestPrompt);
	newDiv.appendChild(node);
	const element = prompt;
	const child = document.getElementById("command");
	element.insertBefore(newDiv, child);
}

function savePrevCommand() {
	const input = document.getElementById("command").value;
	prevCmd = input;
	prevCmdList.push(input);
	prevCmdWithPrompt = guestPrompt.concat(prevCmd); 
}

function insertPrevCommand() {
	const newDiv = document.createElement("div");
	const node = document.createTextNode(prevCmd);
	const newSpan = document.createElement("span");
	const node2 = document.createTextNode(guestPrompt)
	newSpan.appendChild(node2);
	newSpan.setAttribute("id","user");
	newDiv.appendChild(newSpan);
	newDiv.appendChild(node);
	const element = container;
	const child = prompt;
	element.insertBefore(newDiv, child);
}

onPageLoad();

window.addEventListener('keypress', (e) => {
	if (e.key === 'Enter') {
		savePrevCommand();
		insertPrevCommand();
		document.getElementById('command').value = "";
		console.log(prevCmdList);
	}
});
