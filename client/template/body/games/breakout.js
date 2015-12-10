Template.breakout.onRendered (function(){

  //checks control buttons pressed
  var rightPressed = false;
  var leftPressed = false;

  document.addEventListener("keydown", keyDownHandler, false);
  document.addEventListener("keyup", keyUpHandler, false);


  // ball specs
  var canvas = document.getElementById("myCanvas");
  var ctx = canvas.getContext("2d");
  var ballRadius = 10;
  var x = canvas.width/2;
  var y = canvas.height/2;
  var dx = 2;
  var dy = -2;

  //paddle specs
  var paddleHeight = 10;
  var paddleWidth = 75;
  var paddleStart = (canvas.width-paddleWidth)/2;

  //generate random color
  function get_random_color() {
    function c() {
      return Math.floor(Math.random()*256).toString(16)
    }
    return "#"+c()+c()+c();
  }

  //keyboard events
  function keyDownHandler(e) {
    if(e.keyCode == 39) {
        rightPressed = true;
    }
    else if(e.keyCode == 37) {
        leftPressed = true;
    }
  }
  function keyUpHandler(e) {
    if(e.keyCode == 39) {
        rightPressed = false;
    }
    else if(e.keyCode == 37) {
        leftPressed = false;
    }
  }

  //shapes
  function Ball() {
      ctx.beginPath();
      ctx.fillStyle = "blue";
      ctx.arc(x, y, ballRadius, 0, Math.PI*2);
      ctx.fill();
      ctx.closePath();
  }

  function Paddle() {
    ctx.beginPath();
    ctx.fillSytle = "green";
    ctx.rect(paddleStart, canvas.height-paddleHeight, paddleWidth, paddleHeight);
    ctx.fill();
    ctx.closePath();
  }

  //draw shapes
  function draw() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      Ball();
      Paddle();

      //ball controller
      if(x + dx > canvas.width-ballRadius || x + dx < ballRadius) {
          dx = -dx;
      }
      if(y + dy > canvas.height-ballRadius || y + dy < ballRadius) {
          dy = -dy;
      }
      x += dx;
      y += dy;

      // paddle controller
      if(rightPressed && paddleStart < canvas.width-paddleWidth) {
        paddleStart += 4;
      }
      else if(leftPressed && paddleStart > 0) {
        paddleStart -= 4;
      }
  }



  setInterval(draw, 10);

})
