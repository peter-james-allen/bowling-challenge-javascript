class Game {

  constructor() {
    this.rolls = [];
    this.frames = [new Frame(1,0)];
    this.frameScore = [];
    this.runningScore = [];
    this.currentRoll = 1;
    this.currentFrame = 1;
  }

  newFrame() {
    this.frames.push(new Frame(this.frames.length + 1, this.rolls.length))
    this.currentFrame++;
  };

  roll(score) {
    if (this.currentRoll === 2) {
      if (score + this.rolls.slice(-1)[0] === 10) {
        this.frames.slice(-1)[0].strikeOrSpare();
      }
      this.rolls.push(score);
      this.frames.slice(-1)[0].setScore = score
      this.currentRoll = 1;
      this.updateScores();
      this.newFrame();
    } else {
      this.rolls.push(score);
      this.frames.slice(-1)[0].setScore = score
      if (score === 10) {
        this.frames.slice(-1)[0].strikeOrSpare();
        this.updateScores();
        this.newFrame();
      } else {
        this.currentRoll = 2;
      }
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

}