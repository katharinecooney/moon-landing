class BackgroundImage {
  constructor(canvas){
    this.img = new Image();
    this.img.src = "./images/seamless-space.PNG";
    this.speed = -2;
    this.canvas = canvas;
    this.ctx = this.canvas.getContext("2d");
    this.x = 0;
  }
  draw = () => {
    this.ctx.drawImage(this.img, this.x, 0, this.img.width - 200, this.canvas.height);
    this.ctx.drawImage(this.img, this.x+this.img.width - 200, 0, this.img.width,this.canvas.height);
    };
    move = () => {
      if(this.x < 0 - this.img.width + 800){
        this.x = 0
      } else {
        this.x += this.speed;
      }
     };
};

