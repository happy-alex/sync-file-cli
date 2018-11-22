#!/usr/bin/env node

'use strict';

const chalk = require('chalk');
const currentNodeVersion = process.versions.node;
const semver = currentNodeVersion.split('.');
const major = +semver[0];

if (major < 8) {
    console.error(
        chalk.red(
            'You are running Node ' +
            currentNodeVersion +
            '.\r\n' +
            'sync-file-cli requires Node 8 or higher. \r\nPlease update your version of Node.'
        )
    );
    process.exit(1);
}

const handleError = e => {
    console.error('ERROR! An error was encountered while executing');
    console.error(e);
    console.log('Exiting with error.');
    console.log('This is probably a problem with sync-file-cli.');
    console.log('You can create an issue for sync-file-cli: https://github.com/happy-alex/sync-file-cli/issues.');
    process.exit(1);
};
process.on('uncaughtException', handleError);

require('../lib/index.js')();