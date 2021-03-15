'use_strict'

$(document).ready(function() {
  let game = new Game;
  updateCurrentFrame();

  $('.roll').click(function() {
    let roll = parseInt($(this).val())

    if (game.roll(roll)) {
      finishGame();
    };
    game.currentRoll === 1 ? enableButtons() : disableButtons(roll);
    updateCurrentFrame();
    updateScores();
  });

  function updateScores() {
    updateFrameScore()
    updateRunningScore()
    updateFinalScore()
  };

  function updateRunningScore() {
    game.runningScore.forEach(setFrameTotals)
  };

  function setFrameTotals(total, index) {
    $(`#frame${index+1}`).children('.total').text(total)
  };

  function updateFrameScore() {
    game.frames.forEach(function(frame) {
      $(`#frame${frame.number}`).children('.score1').text(frame.roll1)
      $(`#frame${frame.number}`).children('.score2').text(frame.roll2)
      if (frame.number === 10) {
        $(`#frame${frame.number}`).children('.score2-1').text(frame.roll2)
        $(`#frame${frame.number}`).children('.score2-2').text(frame.roll3)
      };
    });
  };

  function updateFinalScore() {
    $('.final-score').text(game.runningScore.slice(-1)[0])
  };

  function updateCurrentFrame() {
    $('.scores').css('background-color', 'white')
    currentFrame = `#frame${game.getCurrentFrame().number}`
    $(currentFrame).css('background-color', 'lightblue')
  };

  function enableButtons() {
    $('.roll').prop( "disabled", false )
  };

  function disableButtons(value) {
    if (value !== 10 || value !== 0) {
      for (i = 10; i > 10-value; i--) {
        $(`#roll${i}`).prop( "disabled", true )
      };
    };
  };

  function finishGame() {
    updateScores();
    $('.roll').prop( "disabled", true );
  };

});

