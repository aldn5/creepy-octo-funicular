Template.breakout.onRendered (function(){

  //checks control buttons pressed
  var rightPressed = false;
  var leftPressed = false;

  document.addEventListener("keydown", keyDownHandler, false);
  document.addEventListener("keyup", keyUpHandler, false);

  var score = 0;

  // ball specs
  var canvas = document.getElementById("myCanvas");
  var ctx = canvas.getContext("2d");
  var ballRadius = 10;
  var x = canvas.width/2;
  var y = canvas.height/2;
  var dx = 2;
  var dy = -2;
  var speed = 40;

  //paddle specs
  var paddleHeight = 10;
  var paddleWidth = 75;
  var paddleStart = (canvas.width-paddleWidth)/2;

  // brick specs
  var brickRowCount = 3;
  var brickColumnCount = 8;
  var brickWidth = 75;
  var brickHeight = 20;
  var brickPadding = 10;
  var brickOffsetTop = 30;
  var brickOffsetLeft = 45;
  var bricks = [];
  for(c=0; c<brickColumnCount; c++) {
      bricks[c] = [];
      for(r=0; r<brickRowCount; r++) {
          bricks[c][r] = { x: 0, y: 0, status: 1 };
      }
  }

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

  function drawScore() {
      ctx.font = "16px Arial";
      ctx.fillStyle = "#0095DD";
      ctx.fillText("Score: "+score, 8, 20);
  }

  //shapes
  function Ball() {
      ctx.beginPath();
      ctx.arc(x, y, ballRadius, 0, Math.PI*2);
      ctx.fill();
      ctx.closePath();
  }

  function Paddle() {
    ctx.beginPath();
    ctx.rect(paddleStart, canvas.height-paddleHeight, paddleWidth, paddleHeight);

    ctx.fill();
    ctx.closePath();
  }

  function Bricks() {
    for(c=0; c<brickColumnCount; c++) {
        for(r=0; r<brickRowCount; r++) {
          if(bricks[c][r].status == 1) {
            var brickX = (c*(brickWidth+brickPadding))+brickOffsetLeft;
            var brickY = (r*(brickHeight+brickPadding))+brickOffsetTop;
            bricks[c][r].x = brickX;
            bricks[c][r].y = brickY;
            ctx.beginPath();
            ctx.rect(brickX, brickY, brickWidth, brickHeight);
            ctx.fillStyle = "#0095DD";
            ctx.fill();
            ctx.closePath();
          }
        }
    }
  }

  //bricks collision detection
  function collisionDetection() {
    for(c=0; c<brickColumnCount; c++) {
        for(r=0; r<brickRowCount; r++) {
            var b = bricks[c][r];
            if(b.status == 1) {
                if(x > b.x && x < b.x+brickWidth && y > b.y && y < b.y+brickHeight) {
                    dy = -dy;
                    b.status = 0;
                    score ++;
                    if(score == brickRowCount*brickColumnCount) {
                      alert("YOU WIN, CONGRATULATIONS!");
                      document.location.reload();
                    }
                }
            }
        }
    }
  }

  //draw shapes
  function draw() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      Ball();
      Paddle();
      collisionDetection();
      Bricks();
      drawScore();

      //ball and wall collision detection
      if(x + dx > canvas.width-ballRadius || x + dx < ballRadius) {
          dx = -dx;
      }
      //ball and paddle collision detection
      if(y + dy < ballRadius) {
        dy = -dy;
      } else if(y + dy > canvas.height-ballRadius*3/2) {
        if(x > paddleStart && x < paddleStart + paddleWidth) {
          dy = -dy;
          //speed of ball controller
          if(speed >= 35)
            calll(speed -= 1);
        }
        else {
          alert("GAME OVER");
          document.location.reload();
        }
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


  setInterval(draw, speed);
  function calll() {
    setInterval(draw, speed);
  }


})
