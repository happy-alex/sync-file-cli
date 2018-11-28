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

## 命令说明

```bash
sync init <project-name>    # 初始化一个sync-file-cli的工作目录，如果未指定目录名，则默认为create-sync-app
sync file                   # 执行同步文件操作，支持配置文件和命令行参数两种配置方式
sync help, -h, --help       # 展示所有命令
sync version, -v            # 展示当前版本号
```

## sync file

sync file 命令用于执行文件处理，支持config.js和命令行参数两种配置方式

### config.js文件配置

cli默认在工作目录下寻找config.js文件作为sync file的配置项。

cli支持根据环境来加载配置。运行命令sync file时可以通过命令行参数env来指定环境。
```bash
sync file --env beta
```

可以定义多个环境的配置文件:
```
config.js
config.local.js
config.beta.js
```

当指定env时会直接加载对应的配置文件，如local环境会直接加载config.local.js作为配置文件，如果找不到config.local.js，则尝试降级寻找config.js。

该命令总是会尝试在当前目录下寻找config.js相关配置文件，如果找不到该文件，则会抛出错误。因此不推荐直接在终端使用这个命令。

如果你真的希望手动执行命令 sync file，请务必确保当前命令的工作目录下存在config.js文件，且该文件已正确配置。或者尝试下面的命令行操作。

### 命令行参数配置
sync file 支持通过简单的命令行参数执行。但仅仅限于简单文件替换操作，不支持运行自定义命令。

--source, --target 分别用来指定源文件地址和目标地址， 具体用法如下：

```bash
sync file --source <source file dir> --target <target file dir>
```

## 配置示例
```javascript
// config.js
module.exports = {
    source: 'https://www.qunar.com',
    target: '/Users/pengbo.guo/project/fe/bnbservice/index.html',
    cmds: [
        'git add .',
        'git commit -m "feat: update vm"',
        'git push'
    ],
    cwd: '/Users/pengbo.guo/project/fe/bnbservice',
};
```
上述配置表示，cli应该先从远程抓取www.qunar.com的文件, 然后替换本地目录bnbservice项目下的index.html文件，然后执行相关git操作


## TODO

sync-file-cli存在一个bug，如果替换后的文件相比之前没有改动，在执行git commit 时会抛出异常。待fix。

## 开源协议

[MIT](LICENSE)
