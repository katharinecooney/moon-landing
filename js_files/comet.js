class Comet {
  constructor(canvas, y){
    this.canvas = canvas; 
    this.ctx = this.canvas.getContext('2d');
    this.size = 40;
    this.x = this.canvas.width + this.size/2;
    this.y = y;
    this.speed = 3;
    this.direction = -2;
    this.image = new Image();
    this.image.src = "./images/comet.png";
  }
  draw = () => this.ctx.drawImage(this.image, this.x, this.y, this.size, this.size);
  
  update = () => this.x = this.x + this.direction * this.speed;
}
