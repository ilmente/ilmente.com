const { readdir } = require('fs');
const { promisify } = require('util');
const { extname, join } = require('path');
const { flatten, isEmpty } = require('ramda');
const config = require('../config');

const fsReadDir = promisify(readdir);
const isFile = (path) => extname(path) === config.article.extension;
const isDir = (path) => isEmpty(extname(path));
const getFiles = (paths) => paths.filter(isFile);
const getDirs = (paths) => paths.filter(isDir);

async function readDir(path) {
    const children = await fsReadDir(path);
    return children.map(child => join(path, child));
}

async function readDirs(paths) {
    return Promise.all(paths.map(readDir));
}

async function crawl(dirs, files) {
    if (dirs.length === 0) {
        return files;
    }

    const children = flatten(await readDirs(dirs));
    return crawl(getDirs(children), [...files, ...getFiles(children)]);
}

async function scan() {
    return crawl([config.article.path], []);
}

module.exports = {
    scan
}
