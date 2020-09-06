// SandovalJr


// variable de la serpiete
var s;
// creamos una variable que sera la escala
var scl = 20;

var food;

function setup() {
  createCanvas(600, 600);
  s = new Snake();
  // reducimos los cuadros por segundo
  frameRate(10);

  pickLocation();
}

function pickLocation() {
  // necestimos el numero de columnas
  var cols = floor(width / scl);
  // numero de filas
  var rows = floor(height / scl);
  food = createVector(floor(random(cols)), floor(random(rows)));
  food.mult(scl);
}

function draw() {
  background(51);
  s.death();
  s.update();
  s.show();

  // si tomo la comida vuelve a aparecer otra aleatoriamente
  if (s.eat(food)) {
    pickLocation();
  }
  // colocamos el color de la comida y le mandamos las posiciones para que aparezca aleatoriamente
  fill(255, 0, 100);
  rect(food.x, food.y, scl, scl);
}

function keyPressed() {
  if (keyCode === UP_ARROW) {
    s.dir(0, -1);
  } else if (keyCode === DOWN_ARROW) {
    s.dir(0, 1);
  } else if (keyCode === RIGHT_ARROW) {
    s.dir(1, 0);
  } else if (keyCode === LEFT_ARROW) {
    s.dir(-1, 0);
  }
}
