import { getRandomInteger, getRandomColor } from "../utilities.js";
class Disk {
	constructor() {
		this.canvas = document.getElementById("canvas");
		this.ctx = canvas.getContext("2d");
        this.setCanvasWidth();
        this.setCanvasHeight();
		canvas.addEventListener("click", (e) => {
			console.log(this.canvas.offsetLeft);
			this.drawBubble(
				e.clientX - (this.canvas.offsetLeft - this.canvas.width / 2),
				e.clientY - (this.canvas.offsetTop - this.canvas.height / 2)
			);
		});
	}
	setCanvasWidth() {
		this.canvas.width = this.canvas.clientWidth;
	}
	setCanvasHeight() {
		this.canvas.height = this.canvas.clientHeight;
	}
	drawBubble(posX, posY) {
		console.log("test");
		let rayon = getRandomInteger(10, 50);
		let color = getRandomColor();
		this.ctx.beginPath();
		this.ctx.arc(posX, posY, rayon, 0, 2 * Math.PI);
		this.ctx.fillStyle = color;
		this.ctx.strokeStyle = color;
		this.ctx.fill();
		this.ctx.closePath();
		this.ctx.stroke();
	}
}
export default Disk;
