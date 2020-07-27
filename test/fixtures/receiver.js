
process.on('message', function(packet) {
  if (packet.topic == 'intercom:msg') {
    console.log('Received packet', packet.data);
    process.send({
      topic : 'cmd:success',
      data  : packet.data
    });
  }
});
