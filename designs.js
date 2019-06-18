// Select color input
// Select size input
// When size is submitted by the user, call makeGrid()
/* jQuery */

const table = document.getElementById("pixel_canvas");
let gridHeight, gridWidth, box, row;

pickedColor = document.getElementById("colorPicker").value;

function makeGrid() {
    "use strict";
    table.innerHTML = "";

    gridHeight = document.getElementById("input_height").value;
    gridWidth = document.getElementById("input_width").value;

    for (let i=0 ; i<gridHeight ; i++){
        row = table.insertRow(i);
        for (let j=0 ; j<gridWidth ; j++){
            box = row.insertCell(j);
        }
    }
}

$("#sizePicker").submit(function(event){
    event.preventDefault();
    makeGrid();
});

$('#pixel_canvas').click(function(event){
	let pickedColor = document.getElementById("colorPicker").value;
    $(event.target).css("background-color" , pickedColor);
});
 

