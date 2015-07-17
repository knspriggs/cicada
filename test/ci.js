// simple server setup
var http = require('http');
var cicada = require('../');

var ci = cicada('/tmp/beep');
ci.on('commit', function (commit) {
    console.log('Received commit');
    commit.run('test').on('exit', function (code) {
        var status = code === 0 ? 'PASSED' : 'FAILED';
        console.log(commit.hash + ' '+ commit.repo + ':' + commit.branch + ' ' + status);
    });
});
var server = http.createServer(ci.handle);
server.listen(5255);
