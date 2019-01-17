const { readFile } = require('fs');
const { promisify } = require('util');
const fsReadFile = promisify(readFile);

async function readRawContent(path) {
    return await fsReadFile(path, 'utf8');
}

async function read(location) {
    const raw = await readRawContent(location.path);

    return {
        ...location,
        raw
    }
}

module.exports = {
    read
}
