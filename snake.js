// creamos el constructor
function Snake() {
  this.x = 0;
  this.y = 0;
  this.xspeed = 1;
  this.yspeed = 0;
  this.total = 0;
  //   cola
  this.tail = [];

  //   le pasamos valores x , y para darle direccion al objeto
  // en este caso el objeto es la serpiente
  this.dir = function (x, y) {
    this.xspeed = x;
    this.yspeed = y;
  };

  // esta funcion recibe una posicion
  // la cual nos dice donde esta la comida
  this.eat = function (pos) {
    var d = dist(this.x, this.y, pos.x, pos.y);
    // aqui vemos si la serpiente alcanzo la comida
    // si la alcanso es verdadero
    // si no la alcanzo es falso
    if (d < 1) {
      this.total++;
      return true;
    } else {
      return false;
    }
  };

  // para estar actualizando los valores
  this.update = function () {
    if (this.total === this.tail.length) {
      for (var i = 0; i < this.tail.length - 1; i++) {
        // aqui se van a estar trasladando los lugares del array
        this.tail[i] = this.tail[i + 1];
      }
    }
    this.tail[this.total - 1] = createVector(this.x, this.y);

    this.x = this.x + this.xspeed * scl;
    this.y = this.y + this.yspeed * scl;

    /* 
    Aqui le decimos toma el valor de x pero restringelo con el ancho de la pantalla 
    para que no se salga de lo que le indicamos 
    */
    this.x = constrain(this.x, 0, width - scl);
    this.y = constrain(this.y, 0, width - scl);
  };

  // para mostrar y dibujar un rectangulo
  this.show = function () {
    fill(255);
    for (var i = 0; i < this.tail.length ; i++) {
        // aqui se van a estar trasladando los lugares del array
        rect(this.tail[i].x, this.tail[i].y, scl, scl);
    }
    //   hacemos el rectangulo de 10x10
    rect(this.x, this.y, scl, scl);
  };
}
