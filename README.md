[![Build Status](https://travis-ci.org/Claude-Ray/pm2-graceful-intercom.svg?branch=master)](https://travis-ci.org/Claude-Ray/pm2-graceful-intercom)

Yet another fork of pm2-intercom for [graceful starting](https://pm2.keymetrics.io/docs/usage/signals-clean-restart/#graceful-start).

- Fix the **Error: ID, DATA or TOPIC field is missing** when using `process.send('ready')` with pm2-intercom
- Avoid installing the pm2 dependency from git remote

# Simple IPC for PM2

Simple inter process communication for processes managed by PM2.
Require PM2 > 16.0.0.

```bash
$ pm2 install pm2-graceful-intercom
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
