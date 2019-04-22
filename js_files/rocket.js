'use strict';

class Rocket{
  constructor(canvas) {
    this.canvas = canvas;
    this.ctx = this.canvas.getContext('2d');
    this.x = 50;
    this.y = 100;
    this.size = 50;
    this.speed = 10;
    this.xDirection = 0;
    this.yDirection = 0;
    this.starCounter = 0;
    this.image = new Image();
    this.image.src = "./images/start-up.png";
  }
  draw = () => this.ctx.drawImage(this.image, this.x, this.y, this.size, this.size);

  update = () => {
    let newX = this.x + this.xDirection * this.speed;
    let newY = this.y + this.yDirection * this.speed;
  
    if (newX < 0 || newX > this.canvas.width - this.size){
      return this.x;
    } else {
      this.x = this.x + this.xDirection * this.speed;
    }
  
    if (newY < 0 || newY > this.canvas.height - this.size) {
      return this.y;
    } else {
      this.y = this.y + this.yDirection * this.speed;
    }
  }

  setYdirection = (newDirection) => this.yDirection = newDirection;
  
  setXdirection = (newDirection) => this.xDirection = newDirection;

  countStarsCaught = () => this.starCounter++;
  
  countCometsStruck = () => this.starCounter--;

  checkForStars = (star) => {
    const collisionRight = this.x + this.size / 2 > star.x - star.size / 2;
    const collisionLeft = this.x - this.size / 2 < star.x + star.size / 2;
    const collisionTop = this.y - this.size / 2 < star.y + star.size / 2;
    const collisionBottom = this.y + this.size / 2 > star.y - star.size / 2;
    return collisionRight && collisionLeft && collisionTop && collisionBottom;
  }

  checkForComets = (comet) => {
    const collisionRight = this.x + this.size / 2 > comet.x - comet.size / 2;
    const collisionLeft = this.x - this.size / 2 < comet.x + comet.size / 2;
    const collisionTop = this.y - this.size / 2 < comet.y + comet.size / 2;
    const collisionBottom = this.y + this.size / 2 > comet.y - comet.size / 2;
    return collisionRight && collisionLeft && collisionTop && collisionBottom;
  }
}


