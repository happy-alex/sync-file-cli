const minimist = require('minimist');
const { error } = require('./utils/log.js');

module.exports = () => {
    const args = minimist(process.argv.slice(2));
    let cmd = args._[0] || 'help';

    if (args.version || args.v) {
        cmd = 'version';
    }

    if (args.help || args.h) {
        cmd = 'help';
    }

    switch (cmd) {
        case 'init':
            require('./cmds/init')(args);
            break;
        case 'file':
            require('./cmds/sync')(args);
            break;
        case 'help':
            require('./cmds/help')(args);
            break;
        case 'version':
            require('./cmds/version')(args);
            break;
        default:
            const msg = `${cmd} is not a valid command.`;
            error(msg);
            break;
    }
}