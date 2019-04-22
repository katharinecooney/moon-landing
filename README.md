# Moon Landing

## Description
Moon Landing is a game where the objective is to move the rocket so that it can catch 30 stars in 30 seconds. If the player can complete the challenge, the rocket can land on the moon.


## MVP (DOM - CANVAS)
CANVAS. The mvp is a game where the player can move the rocket vertically and horizontally.


## Backlog
- Multiple levels
- Obstacles

## Data structure


### game.js

``` javascript
function Game(canvas) {
  this.rocket;
  this.stars;
  this.canvas;
  this.ctx;
  this.countDown;
  this.gameOver;
}

Game.prototype.startLoop = function() {

}


Game.prototype.drawCanvas = function() {

}


Game.prototype.clearCanvas = function() {

}


Game.prototype.updateCanvas = function() {

}


Game.prototype.checkIfStarsCaught = function() {

}

Game.prototype.gameOverCallback = function() {

}
```

### main.js

``` javascript
function main() {

  function buildDom() {

  }


  function buildSplashScreen() {

  }


  function buildGameScreen() {

  }


  function buildGameOverScreen() {

  }

  function buildWinScreen() {

  }

}
```

## rocket.js

``` javascript
function Rocket() {
  this.x;
  this.y;
  this.size;
  this.speed;
  this.direction;
  this.canvas;
  this.ctx;
  this.starCounter;
}


Rocket.prototype.draw = function() {

}


Rocket.prototype.update = function() {

}


Rocket.prototype.setYdirection = function() {

}

Rocket.prototype.setXdirection = function() {

}


Rocket.prototype.countStarsCaught = function() {

}


Rocket.prototype.countCometsStruck = function() {

}


Rocket.prototype.checkForStars() = function() {

}


Rocket.prototype.checkForComets() = function() {

}
```

### star.js

``` javascript
function Star() {
  this.x;
  this.y;
  this.speed;
  this.direction;
  this.size;
  this.canvas; 
  this.ctx;
}


Star.prototype.draw = function() {
  
}


Star.prototype.update = function() {

}
```

### comet.js

``` javascript
function Comet() {
  this.canvas; 
  this.ctx;
  this.size;
  this.x;
  this.y;
  this.speed;
  this.direction;
  this.image;
  this.image.src;
}

Comet.prototype.draw = function() {
   
}

Comet.prototype.update = function() {
 
}
```

### moon.js

```javascript
function Moon() {
  this.canvas; 
  this.ctx;
  this.size;
}

Moon.prototype.draw = function() {
  
}
```

## States y States Transitions
Definition of the different states and their transition (transition functions)

- splashScreen
  - buildSplashScreen()
  - addEventListener(buildGameScreen)

- gameScreen
  - create new Game
  - startLoop()
  - addEventListener(game.rocket.setDirection)
  
- gameOverScreen
  - buildGameOverScreen()
  - buildSplashScreen(if replay)

- winScreen
  - buildWinScreen()
  - buildSplashSc


## Task
Task definition in order of priority

- Main - create buildDom() function
- Main - use buildDom() to build splash screen
- Main - use buildDom() to build game screen
- Main - use buildDom() to build gameOver screen
- Main - use buildDom() to build win screen
- Game - create Game constructor (properties - star, comet, rocket, level, timeRemaining, gameOver)
- Game - create startLoop() function 
- Game - nest loop function inside startLoop()
- Rocket - create Rocket constructor
- Rocket - create draw() method on Rocket's prototype
- Rocket - create update() method on Rocket's prototype
- Star - create Star constructor
- Star - create draw() method on Star's prototype
- Star - create update() method on Star's prototype
- Comet - create Comet constructor
- Comet - create draw() method on Comet's prototype
- Comet - create update() method on Comet's prototype
- Game - create clear() method on Game's prototype to clear canvas from last frame
- Game - create draw() method on Game's prototype to draw rocket, stars, and comets
- Game - create update() method on Game's prototype to update position of rocket, stars, and comets

## Links


### Trello
[Link url](https://trello.com/b/EWB9OtoX/moon-landing-game)


### Git
URls for the project repo and deploy
[Link Repo](https://github.com/katharinecooney/moon-landing-game)
[Link Deploy](https://katharinecooney.github.io/space-game/)


### Slides
URls for the project presentation (slides)
[Link Slides.com](https://docs.google.com/presentation/d/1mWXpsgZwPn2XqaXxkcVYCikIa7Y9EOQYFiVdjZb4xpY/edit?usp=sharing)