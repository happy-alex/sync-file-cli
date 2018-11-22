const package = require('../../package.json');
module.exports = () => {
    console.log('');
    console.log(`===================== sync-file-cli ${package.version} ====================`);
    console.log('');
    console.log('usage: sync [options] <command>');
    console.log('');
    console.log('sync init <project-name>          # init sync-file-cli app');
    console.log('sync file                         # fetch remote file and replace locally');
    console.log('sync help, -h, --help             # display all available commands');
    console.log('sync version, -v                  # version of sync-file-cli');
    console.log('');
}