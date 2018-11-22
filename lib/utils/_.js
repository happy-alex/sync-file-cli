const fs = require('mz/fs');
const { exec } = require('child_process');
const { info, log, error } = require('./log.js');

function writeFile(target, list = []) {
    return new Promise((resolve, reject) => {
        const writeStream = fs.createWriteStream(target);
        list.forEach(item => {
            writeStream.write(item, 'utf-8');
        });
        writeStream.end();

        writeStream.on('error', err => {
            reject(err);
        });
        writeStream.on('finish', _ => {
            resolve();
        })
    });
}

function _exec(cmd, cwd) {
    return new Promise((resolve, reject) => {
        exec(cmd, { cwd }, function(err, stdout, stderr) {
            if (err) {
                reject(err, cmd);
                return;
            }
            log(stdout);
            log(stderr);
            resolve();
        })
    });
}

async function execCmd(cmds = [], cwd) {
    if (!Array.isArray(cmds)) {
        error('error params! you may only set cmds array.');
        return;
    }
    for (let i = 0, len = cmds.length; i < len; i++) {
        info(`executing command: '${cmds[i]}'`);
        await _exec(cmds[i], cwd);
        info(`execute command: '${cmds[i]}' success!`);
    }
}

module.exports = {
    writeFile,
    execCmd
}