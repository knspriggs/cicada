var assert = require("assert");
var spawn = require('child_process').spawn;

//beforeEach(function() {
//  output = [];
//});


describe('Push', function() {
  this.timeout(120000);
  it('should run test and return PASSED', function(done) {
    var cmd = spawn(__dirname + '/push.sh', [
        'http://localhost:' + 5255 + '/beep.git'
    ]);
    cmd.on('close', function(code) {
      assert.equal(0, code);
      done();
    });
  });

  it('should run test 10 times and return PASSED each time', function(done) {
    setTimeout(done, 120000);
    var cmd = spawn(__dirname + '/push_10.sh', [
        'http://localhost:' + 5255 + '/beep.git'
    ]);
    cmd.on('close', function(code) {
      assert.equal(0, code);
      done();
    });
  });

});
