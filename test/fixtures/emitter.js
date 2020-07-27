

setInterval(function() {

  process.send({
    topic : 'intercom:msg',
    data  : {
      some : 'data'
    }
  });

}, 100);
