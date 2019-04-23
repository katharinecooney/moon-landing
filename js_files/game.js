'use strict';

class Game {
  constructor(canvas, level){
    this.rocket = null;
    this.stars = [];
    this.moon = null;
    this.canvas = canvas;
    this.ctx = this.canvas.getContext('2d');
    this.timeRemaining = 20;
    this.gameOver = false;
    this.level = level;
  }

  startLoop = () => {
    this.rocket = new Rocket(this.canvas);
    this.moon = new Moon(this.canvas);
    this.background = new BackgroundImage(this.canvas);
    this.comets = [];
    this.stars = [];
    
    // 'animates' the game when passed to window.requestAnimationFrame()
    let loop = () => {
  
      // this block will run if the player chooses 'easy mode'
      if(this.level === 'easy'){
        if(this.gameOver === false){
          if(Math.random() > .96) {
            let randomY = (Math.random() * this.canvas.height);
            this.stars.push(new Star(this.canvas, randomY));
          }
          if(Math.random() > .99) {
            let randomY = (Math.random() * this.canvas.height);
            this.comets.push(new Comet(this.canvas, randomY));
          }
        }
      }
  
      // this block will run if the player chooses 'hard mode'
      if(this.level === 'hard'){
        if(this.gameOver === false){
          if(Math.random() > .97) {
            let randomY = (Math.random() * this.canvas.height);
            this.stars.push(new Star(this.canvas, randomY));
          }
          if(Math.random() > .96) {
            let randomY = (Math.random() * this.canvas.height);
            this.comets.push(new Comet(this.canvas, randomY));
          }
        }
      }
  
      // this block will run if the player chooses 'impossible mode'
      if(this.level === 'impossible'){
        if(this.gameOver === false){
          if(Math.random() > .97) {
            let randomY = (Math.random() * this.canvas.height);
            this.stars.push(new Star(this.canvas, randomY));
          }
          if(Math.random() > .94) {
            let randomY = (Math.random() * this.canvas.height);
            this.comets.push(new Comet(this.canvas, randomY));
          }
        }
      }
  
      // on every frame, the canvas will be cleared, the new positions will be checked, and then the items will be drawn in their new positions
  
      // we will also be checking for collisions, and to see if the time has run out or the user caught enough stars
        this.clearCanvas();
        this.updateCanvas();
        this.drawCanvas();
        this.checkIfStarsCaught();
        this.checkIfCometCollision();
        this.checkIfWin();
        this.checkIfGameOver();
  
      // updates the starCounter on the screen
      const starCounter = document.getElementById('star-counter');
      starCounter.innerHTML = this.rocket.starCounter;
  
      // continues the loop
      if (!this.gameOver) {
        window.requestAnimationFrame(loop);
      }
    }
  
    // starts the loop
    window.requestAnimationFrame(loop); 
  }

  drawCanvas = () => {
    this.background.draw();
    this.rocket.draw();
    this.moon.draw();
    this.comets.forEach(comet => comet.draw());
    this.stars.forEach(star => star.draw());
  }

  clearCanvas = () => this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
  
  updateCanvas = () => {
    this.background.move();
    // this.moveCanvas();
    this.rocket.update();
    this.comets.forEach(comet => comet.update());
    this.stars.forEach(star => star.update());
  }

  checkIfStarsCaught = () => {
    let bell = new Audio();
    bell.src = "./zapsplat_multimedia_notification_chime_bell_007_26407.mp3";
    this.stars.forEach((star, index) => {
      const isColliding = this.rocket.checkForStars(star);
      if(isColliding){
        bell.play();
        this.stars.splice(index, 1);
        this.rocket.countStarsCaught();
      }
    });
  }

  checkIfCometCollision = () => {
    let laser = new Audio();
    laser.src = "./sound_spark_Laser-Like_Synth_Basic_Laser2_09.mp3";
    this.comets.forEach((comet, index) => {
      const isColliding = this.rocket.checkForComets(comet);
      if(isColliding){
        laser.play();
        this.comets.splice(index, 1);
        this.rocket.countCometsStruck();
      }
    });
  }

  checkIfGameOver = () => {
    if(this.timeRemaining === 0){
      this.gameOver = true; 
      music.pause();
      music.currentTime = 0;
      this.onGameOver();
    }
  }

  checkIfWin = () => {
    if(this.rocket.starCounter === 20) {
      this.gameOver = true; 
      music.pause();
      music.currentTime = 0;
      this.onWin();
    }
  }

  callGameOverScreen = (callback) =>  this.onGameOver = callback;

  callWinScreen = (callback) => this.onWin = callback;

}

