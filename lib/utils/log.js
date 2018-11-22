const chalk = require('chalk');

function info(msg) {
    console.log(chalk.green(`INFO: ${msg}`));
}

function log(msg) {
    console.log(chalk.yellow(msg));
}

function error(msg) {
    console.log(chalk.red(`ERROR! ${msg}`));
    process.exit(1);
}

module.exports = {
    info,
    log,
    error
}