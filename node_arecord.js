var	spawn = require('child_process').spawn;
var events = require('events');
var util = require('util');

module.exports = function Sound(filename) {
  events.EventEmitter.call(this);
  
  this.filename = filename;
}

util.inherits(module.exports, events.EventEmitter);

module.exports.prototype.record = function () {
    this.process = spawn('arecord', ['-f', 'cd', this.filename]);
    
    var self = this;
    this.process.stdout.on('data', function(data) {
        console.log('stdout: ' + data)
    });
    
    this.process.stderr.on('data', function(data) {
        console.log('stdout: ' + data)
    });

    this.process.on('exit', function (code, sig) {
        if (code !== null && sig === null) {
            self.emit('complete');
        }
    });
    
}

module.exports.prototype.stop = function () {
    this.process.kill('SIGTERM');
}
