init sync-file-cli app helper tools.

## Usage

The file of config.js is very important!

It is used to specify configuration items.

You should set options in config.js before starting;

```bash
$ cd create-sync-app
$ npm run start
```

## Config Description

```javascript
// config.js
module.exports = {

    // source file: local directory or url, required
    source: '',

    // target file: local directory, required
    target: '',

    // exec command after replace file
    cmds: [],

    // current working directory of exec cmds
    cwd: '',

    // instert content, before replace file
    fileHeaderExt: {},

    // instert content, after replace file
    fileFooterExt: {}
};
```

## LICENSE

[MIT](LICENSE)