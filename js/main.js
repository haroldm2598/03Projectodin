const gridBox = document.querySelector('.gridBox');
const button = document.querySelector('button');

window.addEventListener('load', setDefault());

function setDefault() {
	createDivs(16, 16);
}

// To create grid Divs using for loop and function declaration
function createDivs(cols, rows) {
	// Create function for random RGB
	function randomColor() {
		const r = Math.floor(Math.random() * 256);
		const g = Math.floor(Math.random() * 256);
		const b = Math.floor(Math.random() * 256);
		return (bgColor = `rgb(${r}, ${g}, ${b})`);
	}

	// Loop the grid cols and rows
	for (let i = 0; i < cols * rows; i++) {
		const div = document.createElement('div');
		div.style.cssText = `border: 1px solid #000;`;
		gridBox.setAttribute(
			'style',
			`	height: 500px;
				width: 500px;
				display: grid;
				grid-template-columns: repeat(${cols}, 1fr); 
				grid-template-rows: repeat(${rows}, 1fr); `
		);
		gridBox.appendChild(div).classList.add('box');

		// Add mouseout or hover for the grid
		div.addEventListener('mouseout', (event) => {
			event.target.style.background = randomColor();

			setInterval(() => {
				event.target.style.background = '';
			}, 5000);
		});
	}
}

// FIND A SOLUTION FOR CREATE NEW TILES IN GRID
function newSize() {
	const column = parseInt(prompt('Enter column'));
	const row = parseInt(prompt('Enter row'));
	return createDivs(column, row);
}

button.addEventListener('click', (e) => {
	if (button > 64) {
		alert('only 1-64');
	} else {
		e.target.innerHTML = newSize();
	}
});

// CONSOLE OR TESTING AREA
// console.log(gridBox);
// console.log(button);
