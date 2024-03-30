const canvas = document.getElementById('drawingCanvas');
const ctx = canvas.getContext('2d');

canvas.width = 800;
canvas.height = 600;

let isDrawing = false;
let prevX = 0;
let prevY = 0;

ctx.lineWidth = 10;
ctx.lineCap = 'round';
ctx.strokeStyle = '#000000';

canvas.addEventListener('mousedown', startDraw);
canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mouseup', endDraw);
canvas.addEventListener('mouseout', endDraw);

function startDraw(event) {
    isDrawing = true;
    prevX = event.clientX - canvas.offsetLeft;
    prevY = event.clientY - canvas.offsetTop;
}

function draw(event) {
    if (!isDrawing) return;
    const currentX = event.clientX - canvas.offsetLeft;
    const currentY = event.clientY - canvas.offsetTop;
    ctx.beginPath();
    ctx.moveTo(prevX, prevY);
    ctx.lineTo(currentX, currentY);
    ctx.stroke();
    prevX = currentX;
    prevY = currentY;
}

function endDraw() {
    isDrawing = false;
}

const colorPicker = document.getElementById('colorPicker');
const brushSize = document.getElementById('brushSize');

colorPicker.addEventListener('change', () => {
    ctx.strokeStyle = colorPicker.value;
});

brushSize.addEventListener('input', () => {
    ctx.lineWidth = brushSize.value;
});
