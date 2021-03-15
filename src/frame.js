class Frame {

  constructor(number, startScore) {
    this.FRAMES = 10;
    this.number = number;
    this.startScore = startScore;
    this.finishScore = this.startScore + 2;
    this.total = 0;
    this.roll1 = null;
    this.roll2 = null;
    this.roll3 = null;
  };

  isStrikeOrSpare() {
    if (this.roll1 + this.roll2 === 10) {
      this.finishScore++;
      this.roll2 === null ? this.roll1 = 'X' : this.roll2 = '/';
      return true;
    } else {
      return false;
    }
  };

  setScore(value) {
    // (this.roll1 !== null && this.roll2 !== null) ? this.roll3 = value :
    this.roll1 === null ? this.roll1 = value : this.roll2 = value;
    return this.isStrikeOrSpare();
  };

  score(rollArray) {
    this.total = rollArray.slice(this.startScore,this.finishScore).reduce((a,b) => a + b);
    return this.total;
  };

};