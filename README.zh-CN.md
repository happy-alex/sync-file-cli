# sync-file-cli

一个简单工具，可从远程抓取文件到本地，并同步替换本地指定的文件。

替换后你还可以执行一些操作，比如提交git。

支持 Node.js 8.x 及以上版本。

## 快速开始

```bash
$ npm install sync-file-cli -g
$ sync init my-sync-app
$ cd my-sync-app
$ npm run start
```

## 说明

sync file 命令用于执行具体的文件替换操作。

该命令总是会尝试在当前目录下寻找config.js文件，如果找不到该文件，则会报错。因此请不要直接使用这个命令。

如果你真的希望手动执行命令 sync file，请务必确保当前工作目录下存在config.js文件，且该文件已正确配置。或者尝试下面的命令行操作。

sync file 支持通过简单的命令行参数执行。但仅仅限于替换文件，不支持自定义命令。用法如下：

```bash
sync file --source <source file dir> --target <target file dir>
```


## TODO

sync-file-cli存在一个bug，如果替换后的文件相比之前没有改动，在执行git commit 时会抛出异常。待fix。

## 开源协议

[MIT](LICENSE)
