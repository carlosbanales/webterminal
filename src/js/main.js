let prompt = document.getElementById('prompt');
let conatainer = document.getElementById('container');
let down = 0;

function moveDown() {
	down+=40;
	prompt.style.top = down + 'px';
}

window.addEventListener('keypress', (e) => {
	if (e.key === 'Enter') {
		moveDown();	
	}
});
