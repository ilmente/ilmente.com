const express = require('express');
const { info, log } = require('./logger');
const { scan } = require('./scanner');
const { locate } = require('./locator');
const { read } = require('./reader');
const { parse } = require('./parser');
const { loadArticle, loadLayout } = require('./template');
const config = require('../config');
const app = express();

async function loadData() {

}

function registerRoutes(location) {
    app.get(location.slug, createGetHandler(location));
    log('get', location.slug, 'registered');

    app.post(location.slug, createPostHandler(location));
    log('post', location.slug, 'registered');
}

function createGetHandler(location) {
    return async (request, response) => {
        const file = await read(location);
        const article = await parse(file);
        const template = loadLayout(article);
        response.send(template);
    }
}

function createPostHandler(location) {
    return async (request, response) => {
        const file = await read(location);
        const article = await parse(file);
        const template = loadArticle(article);
        response.send(template);
    }
}

function listen() {
    return new Promise((resolve, reject) => {
        app.listen(config.server.port, () => {
            info(`site running on port ${config.server.port}...`);
            resolve();
        });
    });
}

async function serve() {
    const paths = await scan();
    const locations = paths.map(locate);
    const files = await Promise.all(locations.map(read));
    const articles =await Promise.all(files.map(parse));
    log('found', paths.length, 'articles');

    paths
        .map(locate)
        .map(registerRoutes);

    return listen();
}

module.exports = {
    serve
}
