var equ = new ReactiveVar(0);
var youWon = new ReactiveVar(0);
var compWon = new ReactiveVar(0);

Template.rps.helpers({
  'equ': function(){
    return equ.get();
  },
  'youWon': function(){
    return youWon.get();
  },
  'compWon': function(){
    return compWon.get();
  }
});

Template.rps.events ({

  'click button': function (event, Template) {
    var evnt = event.currentTarget.id;
    var rand = Math.floor(Math.random()*3)+1;
    //rock = 1
    //paper = 2
    //scissors = 3
    switch (evnt){
      case 'rock':
      if (rand == 1) {
        $("#you").attr("src", "assets/rock.png");
        $("#comp").attr("src", "assets/rock.png");
        $('#board').attr("src", "assets/draw.png");
        equ.set(equ.get() + 1);
        break;
        }
      else if (rand == 2) {
        $("#you").attr("src", "assets/rock.png");
        $("#comp").attr("src", "assets/paper.png");
        $('#board').attr("src", "assets/lost.png");
        compWon.set(compWon.get() + 1);
        break;
        }
      else {
        $("#you").attr("src", "assets/rock.png");
        $("#comp").attr("src", "assets/scissors.png");
        $('#board').attr("src", "assets/win.png");
        youWon.set(youWon.get() + 1);
        break;
        }

      case 'paper':
      if (rand == 1) {
        $("#you").attr("src", "assets/paper.png");
        $("#comp").attr("src", "assets/rock.png");
        $("#board").attr("src", "assets/win.png");
        youWon.set(youWon.get() + 1);
        break;
        }
      else if (rand == 2) {
        $("#you").attr("src", "assets/paper.png");
        $("#comp").attr("src", "assets/paper.png");
        $("#board").attr("src", "assets/draw.png");
        equ.set(equ.get() + 1);
        break;
        }
      else {
        $("#you").attr("src", "assets/paper.png");
        $("#comp").attr("src", "assets/scissors.png");
        $("#board").attr("src", "assets/lost.png");
        compWon.set(compWon.get() + 1);
        break;
        }

      case 'scissors':
      if (rand == 1) {
        $("#you").attr("src", "assets/scissors.png");
        $("#comp").attr("src", "assets/rock.png");
        $("#board").attr("src", "assets/lost.png");
        compWon.set(compWon.get() + 1);
        break;
        }
      else if (rand == 2) {
        $("#you").attr("src", "assets/scissors.png");
        $("#comp").attr("src", "assets/paper.png");
        $("#board").attr("src", "assets/win.png");
        youWon.set(youWon.get() + 1);
        break;
        }
      else {
        $("#you").attr("src", "assets/scissors.png");
        $("#comp").attr("src", "assets/scissors.png");
        $("#board").attr("src", "assets/draw.png");
        equ.set(equ.get() + 1);
        break;
        }
    }
  },
});
