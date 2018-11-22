const path = require('path');
const fs = require('mz/fs');
const request = require('request-promise');
let config = require('../../config.js');
const { writeFile, execCmd } = require('../utils/_.js');
const { info, error } = require('../utils/log.js');

function mergeOptions(optionsPath) {
    const options = require(optionsPath);
    let { fileHeaderExt, fileFooterExt } = options;
    fileHeaderExt = fileHeaderExt || {};
    fileFooterExt = fileFooterExt || {};
    return Object.assign({
        ...config,
        ...options,
        fileHeaderExt: {
            ...config.fileHeaderExt,
            ...fileHeaderExt
        },
        fileFooterExt: {
            ...config.fileFooterExt,
            ...fileFooterExt
        }
    });
}

async function handle(args) {
    let body = null;

    setTimeout(_ => {
        error('response timeout!');
    }, 10000);

    const optionsPath = path.resolve(process.cwd(), 'config.js');
    if (!await fs.exists(optionsPath)) {
        error('required config.js, but it not exists');
        return;
    }
    
    // merge options
    config = mergeOptions(optionsPath);

    const source = args.source || config.source || '';
    const target = args.target || config.target || '';
    const cwdDir = args.cwd || config.cwd || '';
    if (!source || !target) {
        error('unspecified source or target file.');
        return;
    }

    if (!await fs.exists(target)) {
        error(`${target} not exists.`);
        return;
    }

    const stat = await fs.stat(target);
    if (!stat.isFile()){
        error(`${target} is not a file.`);
        return;
    }

    // fetch remote file
    try {
        info(`ready to fetch source file: ${source}.`);
        body = await request(source);
        info('fetch source file success.');
    } catch(err) {
        error(`fetch source file failed. Please check error info: \r\n${err}`);
        return;
    }

    // write target file
    const extname = path.extname(target).substr(1);
    const headerContent = config.fileHeaderExt[extname] || '';
    const footerContent = config.fileFooterExt[extname] || '';
    try {
        info(`ready to write target: ${target}.`);
        await writeFile(target, [`${headerContent}\r\n`, body, '\r\n', footerContent]);
        info(`write target, success.`);
    } catch(err) {
        error(`write target: ${target}, an error has occurred:\r\n${err.stack}`);
        return;
    }

    // exec cmd
    try {
        await execCmd(config.cmds, cwdDir);
    } catch(err) {
        error(`exec cmd error:\r\n${err.stack}`);
        return;
    }

    info('all operations finished!');
    process.exit(0);
};


module.exports = handle;