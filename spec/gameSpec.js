describe('Game', function() {

  beforeEach(function() {
    game = new Game();
  });

  it('should save rolls', function() {
    [2,5,4,4].forEach(element => game.roll(element));
    expect(game.rolls).toEqual([2,5,4,4]);
  });

  it('should return the total score - no strikes or spares', function() {
    [2,5,4,4].forEach(element => game.roll(element));
    expect(game.totalScore()).toEqual(15);
  });

  it('should return the total score - spare', function() {
    [2,8,4,4].forEach(element => game.roll(element));
    expect(game.totalScore()).toEqual(22);
  });

  it('should return the total score - strike', function() {
    [10,8,1,4,4].forEach(element => game.roll(element));
    expect(game.totalScore()).toEqual(36);
  });

});