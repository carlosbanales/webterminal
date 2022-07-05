let prompt = document.getElementById('prompt');
let conatainer = document.getElementById('container');
let down = 0;

// Checklist
// - save input data to variable
// - display saved data on previous line when the enter key is pressed
// - allow up and down key to step though saved inputs
// - create commands
// - add a header and a set of instructions

function moveDown() {
	down+=40;
	prompt.style.top = down + 'px';
}

window.addEventListener('keypress', (e) => {
	if (e.key === 'Enter') {
		moveDown();	
	}
});
