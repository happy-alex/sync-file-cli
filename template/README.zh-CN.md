sync-file-cli 具体执行工具，所有同步文件相关任务都必须在本项目下进行。

## 安装

```bash
$ cd create-sync-app
$ sync file
```

## 配置说明

```javascript
module.exports = {

    // 源文件地址，必填
    source: '',

    // 目标替换文件地址，必填
    target: '',

    // 替换完成后，指定要执行的命令，可选
    cmds: [],

    // 执行上述cmds命令的当前工作目录
    cwd: '',

    // 在拷贝文件之前插入目标文件内容key-value，key为目标文件后缀，value为插入内容
    fileHeaderExt: {},

    // 在拷贝文件之后插入目标文件内容
    fileFooterExt: {}
};
```

## TODO

目前存在一个bug，如果替换后的文件相比之前没有改动，在执行git commit 时会抛出异常。待fix。

## 开源协议

[MIT](LICENSE)