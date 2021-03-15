describe('Frame', function() {

  beforeEach(function() {
    frame = new Frame(1,0);
  });

  it('should have a number', function() {
    expect(frame.number).toEqual(1);
  });

  it('should know what roll to start scoring', function() {
    expect(frame.startScore).toEqual(0);
  });

  it('should know what roll to finish scoring - default 2 rolls', function() {
    expect(frame.finishScore).toEqual(2);
  });

  it('should set the rolls', function() {
    frame.setScore(4);
    frame.setScore(5);
    expect(frame.roll1).toEqual(4);
    expect(frame.roll2).toEqual(5);
  });

  it('should increase roll to finish scoring if strike or spare (3 rolls)', function() {
    frame.setScore(10);
    expect(frame.finishScore).toEqual(3);
  });

  it('should calculate the frame total - no spare or strike', function() {
    frame.setScore(4)
    frame.setScore(5)
    expect(frame.score([4,5,6,4])).toEqual(9);
  });

  it('should calculate the frame total - spare', function() {
    frame.setScore(4)
    frame.setScore(6)
    expect(frame.score([4,6,6,4])).toEqual(16);
  });

  it('should calculate the frame total - strike', function() {
    frame.setScore(10)
    expect(frame.score([10,6,6,4])).toEqual(22);
  });

});