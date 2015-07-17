var assert = require("assert");
var spawn = require('child_process').spawn;

describe('Push', function() {
  this.timeout(180000);
  it('should push repo and return code 0', function(done) {
    var cmd = spawn(__dirname + '/push.sh', [
        'http://localhost:' + 5255 + '/beep.git'
    ]);
    cmd.on('close', function(code) {
      assert.equal(0, code);
      done();
    });
  });

  it('should push repo and return code 0 10 times', function(done) {
    setTimeout(done, 180000);
    var cmd = spawn(__dirname + '/push_10.sh', [
        'http://localhost:' + 5255 + '/beep.git'
    ]);
    cmd.on('close', function(code) {
      assert.equal(0, code);
      done();
    });
  });
});
