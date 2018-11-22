# sync-file-cli

一个简单工具，可从远程抓取文件到本地，并同步替换本地指定的文件。

替换后你还可以执行一些操作，比如提交git。

支持 Node.js 8.x 及以上版本。

## 快速开始

```bash
$ npm install sync-flie-cli -g
$ sync init my-sync-app
$ cd my-sync-app
$ npm run start
```

## TODO

sync-file-cli存在一个bug，如果替换后的文件相比之前没有改动，在执行git commit 时会抛出异常。待fix。

## 开源协议

[MIT](LICENSE)
