'use_strict'

class Game {

  constructor() {
    this.FRAMES = 10;
    this.rolls = [];
    this.frames = [new Frame(1,0)];
    this.frameScore = [];
    this.runningScore = [];
    this.currentRoll = 1;
  }

  newFrame() {
    this.frames.push(new Frame(this.frames.length + 1, this.rolls.length))
  };

  isFrameFinished() {
    let isStrikeOrSpare = this.getCurrentFrame().setScore(this.getLastRoll());
    return (isStrikeOrSpare || this.currentRoll === 2);
  };

  roll(score) {
    this.rolls.push(score);
    this.updateScores();

    if (this.isFinalFrame()) {
      this.getCurrentFrame().setScoreFinal(this.getLastRoll())
      if (this.getCurrentFrame().finished) {
        return true;
      };
    } else if (this.isFrameFinished()) {
      this.currentRoll = 1;
      this.newFrame();
    } else {
      this.currentRoll = 2;
    };
 };

  totalScore() {
    return this.runningScore.slice(-1)[0]
  };

  updateScores() {
    let cumulativeSum = (sum => value => sum += value)(0);
    this.frameScore = [];
    this.frames.forEach(frame => this.frameScore.push(frame.score(this.rolls)));
    this.runningScore = this.frameScore.map(cumulativeSum);
  };

  getCurrentFrame() {
    return this.frames.slice(-1)[0];
  };

  getLastRoll() {
    return this.rolls.slice(-1)[0];
  };

  isFinalFrame() {
    return this.getCurrentFrame().number === this.FRAMES;
  };

}