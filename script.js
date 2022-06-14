const container = document.getElementById("container");

function changeBackgroundColor() {
	if (this.style.backgroundColor == "black") {
		this.style.backgroundColor = "white";
	}
	else {
		this.style.backgroundColor = "black";
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
		div.addEventListener('click', changeBackgroundColor)
	}
}






