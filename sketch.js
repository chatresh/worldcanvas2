
var pencil = []

function setup(){
    canvas = createCanvas(500,500);
    database = firebase.database();
    canvas.parent('canvascontainer');
    var clearbutton = select('#clearbutton');

    clearbutton.mousePressed(clearDrawing);
    
}
function mouseDragged() {
   var position ={
        x: mouseX,
        y: mouseY
    }
    pencil.push(position);
    var drawingRef = database.ref('pencil')
    drawingRef.set({
        "d": drawing
    })
   }
var drawing = [];
function draw(){
   
   background(125);
     beginShape();
      stroke(250);
      strokeWeight(5);
      fill(125);
   for(var i = 0; i < pencil.length ; i++){
    vertex(pencil[i].x,pencil[i].y);
   }
   endShape();
    
}
function readData() {
    database.ref('pencil/').on('value', (data) => {
        pencil = data.val().d
    })
}

function clearDrawing(){
    drawing = [];
    var Ref = database.ref('pencil');
    Ref.remove()
}
