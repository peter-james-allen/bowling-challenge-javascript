'use_strict'

class Frame {

  constructor(number, startScore) {
    this.number = number;
    this.startScore = startScore;
    this.finishScore = this.startScore + 2;
    this.total = 0;
    this.roll1 = null;
    this.roll2 = null;
    this.roll3 = null;
    this.finished = false;
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
    this.roll1 === null ? this.roll1 = value : this.roll2 = value;
    return this.isStrikeOrSpare();
  };

  setScoreFinal(value) {
    this.roll1 === null ? this.roll1 = value :
    this.roll2 === null ? this.roll2 = value :
    this.roll3 !== null ? this.finished = true : this.roll3 = value

    if (this.roll2 !== null && this.roll1 + this.roll2 < 10) {
      this.finished = true;
    }

    if (this.roll1 + this.roll2 === 10) {
      this.finishScore++;
    }
    
  };

  score(rollArray) {
    this.total = rollArray.slice(this.startScore,this.finishScore).reduce((a,b) => a + b);
    return this.total;
  };

};