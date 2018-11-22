init sync-file-cli app helper tools.

## Install

```bash
$ cd create-sync-app
$ sync file
```

## Config Description

```javascript
module.exports = {

    // source file, required
    source: '',

    // target file, required
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