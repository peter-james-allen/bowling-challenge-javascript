class Frame {

  constructor(number, startScore) {
    this.number = number;
    this.startScore = startScore;
    this.finishScore = this.startScore + 2;
    this.total = 0;
    this.score1 = null;
    this.score2 = null;
  };

  isStrikeOrSpare() {
    if (this.score1 + this.score2 === 10) {
      this.finishScore++;
      return true;
    } else {
      return false;
    }
  };

  strikeOrSpare() {
    this.finishScore++;
  }

  setScore(value) {
    if (this.score1 === null) {
      this.score1 = value;
    } else {
      this.score2 = value;
    };
    return this.isStrikeOrSpare();
  };

  score(rollArray) {
    this.total = rollArray.slice(this.startScore,this.finishScore).reduce((a,b) => a + b);
    return this.total;
  };

}