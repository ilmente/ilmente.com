const { mkdir, writeFile } = require('fs');
const { promisify } = require('util');
const { dirname } = require('path');
const fsMakeDir = promisify(mkdir);
const fsWriteFile = promisify(writeFile);

async function write(fileName, fileContent) {
    await fsMakeDir(dirname(fileName), {
        recursive: true
    });

    await fsWriteFile(fileName, fileContent, {
        encoding: 'utf8'
    });
}

module.exports = {
    write
}
