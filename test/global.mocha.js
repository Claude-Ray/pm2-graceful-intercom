
var pm2 = require('pm2');

describe('Global behavior checking', function() {
  var pm2_bus;

  before(function(done) {
    pm2.connect(function() {
      pm2.launchBus(function(err, bus) {
        pm2_bus = bus;
        pm2.delete('all', function() {
          done();
        });
      });
    });
  });

  after(pm2.disconnect);

  it('should launch pm2-intercom', function(done) {
    pm2.start({
      script : './index.js',
      name : 'pm2-intercom'
    }, function(err, app) {
      done(err);
    });
  });

  it('should launch emitter', function(done) {
    pm2.start({
      script : './test/fixtures/emitter.js'
    }, function(err, app) {
      done(err);
    });
  });

  it('should launch receiver', function(done) {
    pm2.start({
      script : './test/fixtures/receiver.js'
    }, function(err, app) {
      done(err);
    });
  });

  it('should receiver emit success message', function(done) {
    pm2_bus.on('process:msg', function(data) {
      if (data.raw.topic == 'cmd:success') {
        done();
      }
    });
  });

});
