
# Simple IPC for PM2

Simple inter process communication for processes managed by PM2.
Require PM2 > 16.0.0.

```bash
$ pm2 install pm2-intercom
```

## Emit a message

To emit a message just use the builtin `process.send` function of Node.js.
pm2-intercom will then receive the message and will broadcast it to all processes.

```javascript
process.send({
  topic : 'cmd:topic',
  data  : {
    some : 'data'
  }
});
```

## Receive message

```javascript
process.on('message', function(packet) {
  if (packet.topic == 'cmd:topic') {
    console.log('Received packet', packet.data);
  }
});
```

## License

MIT
