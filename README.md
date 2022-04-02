# WhatsApp Bot ( Basic )
------
Whatsapp bot running using whatsapp web

------
# Setup & Tools

- `nodejs`
- `npm inital setup`
- `whatsapp-web.js`

-----
# How To Install Nodejs ?

install via the installer file :
1. [Download File Nodejs ( Arm64 / MSI / PKG)](https://nodejs.org/download/ "Download File")
2. Install Nodejs And Click Next Button
3. And Check Version In Terminal ( Requirements whatsapp-web.js 16.14.0 ! )

install via the terminal ( Termux ) file :
1. `` ~ $ pkg install nodejs ``
2. `` ~ $ node -v ``

![Show Terminal](/file/terminal.png "Show Terminal")

-----
# How To Create [Npm Package.json](https://docs.npmjs.com/cli/v8/commands/npm-init)

1. `` ~ $ cd /<direactory>/whatsapp-bot/ ``
2. `` /<diractory/whatsapp-bot/ $ npm init``

![Show Terminal](/file/terminal-1.png "Show Terminal")

-----
# Simple Code

```js
const { Client } = require('whatsapp-web.js');
const client = new Client();
client.on('qr', (qr) => {
    // Generate and scan this code with your phone
    console.log('QR RECEIVED', qr);
});
client.on('ready', () => {
    console.log('Client is ready!');
});
client.on('message', msg => {
    if (msg.body == '!ping') {
        msg.reply('pong');
    }
});
client.initialize();
```

# Run Script ?
- npm run start | test | dev
