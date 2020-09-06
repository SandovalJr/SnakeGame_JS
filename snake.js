// creamos el constructor
function Snake() {
  this.x = 0;
  this.y = 0;
  this.xspeed = 1;
  this.yspeed = 0;

  //   le pasamos valores x , y para darle direccion al objeto
  // en este caso el objeto es la serpiente
  this.dir = function (x, y) {
    this.xspeed = x;
    this.yspeed = y;
  };

  // para estar actualizando los valores
  this.update = function () {
    this.x = this.x + this.xspeed;
    this.y = this.y + this.yspeed;
  };

  // para mostrar y dibujar un rectangulo
  this.show = function () {
    //   pintamos el rectangulo blanco
    fill(255);
    //   hacemos el rectangulo de 10x10
    rect(this.x, this.y, 10, 10);
  };
}
