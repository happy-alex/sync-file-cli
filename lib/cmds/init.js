const fs = require('mz/fs');
const path = require('path');
const { template, appDefaultName } = require('../utils/const.js');
const { error } = require('../utils/log.js');
const templateDir = path.resolve(__dirname, '../../template');

module.exports = async function(args){
    const appName = args._[1] || appDefaultName;
    const cwd = process.cwd();
    const targetDir = `${cwd}/${appName}`;

    if (await fs.exists(targetDir)) {
        error(`init failed, ${targetDir} already exists`);
        return;
    }

    try {
        await fs.mkdir(targetDir, {recursive: true });

        const packagePath = path.join(templateDir, 'package.json');
        const json = require(packagePath);
        json.name = appName;
        fs.writeFileSync(packagePath, JSON.stringify(json, null, 2), 'utf8');

        for (let i = 0, len = template.length; i < len; i++) {
            const filePath = `${templateDir}/${template[i]}`;
            const targetPath = `${targetDir}/${template[i]}`;
            fs.createReadStream(filePath).pipe(fs.createWriteStream(targetPath));
        }
    } catch(err) {
        error(err);
    }
}