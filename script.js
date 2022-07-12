const container = document.getElementById("container");
const marker = document.getElementById("marker");
const easer = document.getElementById("easer");
let markerOn = true;

easer.addEventListener('click', () => {
	markerOn = false;
})

marker.addEventListener('click', () => {
	markerOn = true;
})

function changeBackgroundColor() {
	if (markerOn) {
		this.style.backgroundColor = "black";
	}
	else {
		this.style.backgroundColor = "white";
	}
}

for (let n = 0; n < 16; n++) {
	let row = document.createElement("div");
	row.classList.add('row');
	container.appendChild(row);
	for (let i = 0; i < 16; i++) {
		let div = document.createElement("div");
		div.classList.add('grid');
		row.appendChild(div);
		div.addEventListener('mouseover', changeBackgroundColor)
	}
}






