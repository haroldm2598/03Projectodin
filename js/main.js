const gridBox = document.querySelector('.gridBox');
const button = document.querySelector('button');

window.addEventListener('load', setDefault);
button.addEventListener('click', newSize);

function setDefault() {
	createDivs(16, 16);
}

// To create grid Divs using for loop and function declaration
function createDivs(cols, rows) {
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

// Create function for random RGB
function randomColor() {
	const r = Math.floor(Math.random() * 256);
	const g = Math.floor(Math.random() * 256);
	const b = Math.floor(Math.random() * 256);
	return (bgColor = `rgb(${r}, ${g}, ${b})`);
}

// Function for newsize of grid
function newSize() {
	let column = parseInt(prompt('Enter column'));
	let row = parseInt(prompt('Enter row'));

	if (column !== null && row !== null) {
		if (column < 1 || column > 64 || row < 1 || row > 64) {
			alert('Only 1-64');
			newSize();
		} else {
			removeGrid();
			createDivs(column, row);
		}
	}
}

// Function for removing the default of grid and insert new grid
function removeGrid() {
	const gridArray = Array.from(gridBox.childNodes);
	gridArray.forEach((element) => {
		gridBox.removeChild(element);
	});
}
