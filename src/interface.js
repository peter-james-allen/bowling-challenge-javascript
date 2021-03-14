$(document).ready(function() {
  let game = new Game;
  updateCurrentFrame();

  $('.roll').click(function() {
    game.roll(parseInt($(this).val()))
    if (game.currentRoll === 1) {
      enableButtons();
    } else {
      disableButtons(parseInt($(this).val()));
    }
    updateCurrentFrame();
    updateScores();
  });

  function updateScores() {
    updateFrameScore()
    updateRunningScore()
    updateFinalScore()
  }

  function updateRunningScore() {
    game.runningScore.forEach(setFrameTotals)
  }

  function setFrameTotals(total, index) {
    $(`#frame${index+1}`).children('.total').text(total)
  }

  function updateFrameScore() {
    game.frames.forEach(function(frame) {
      $(`#frame${frame.number}`).children('.score1').text(frame.score1)
      $(`#frame${frame.number}`).children('.score2').text(frame.score2)
    })
  }

  function updateFinalScore() {
    $('.final-score').text(game.runningScore.slice(-1)[0])
  }

  function updateCurrentFrame() {
    $('.scores').css('background-color', 'white')
    currentFrame = `#frame${game.currentFrame}`
    $(currentFrame).css('background-color', 'lightblue')
  }

  function enableButtons() {
    $('.roll').prop( "disabled", false )
  }

  function disableButtons(value) {
    if (value !== 10 || value !== 0) {
      for (i = 10; i > 10-value; i--) {
        $(`#roll${i}`).prop( "disabled", true )
      }
    }
  }

});

