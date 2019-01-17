
const fs = require('fs');
const { join } = require('path');
const { info, log } = require('./logger');
const { scan } = require('./scanner');
const { locate } = require('./locator');
const { read } = require('./reader');
const { parse } = require('./parser');
const { loadArticle, loadLayout } = require('./template');
const config = require('../config');

function getArticlePath(article) {
    return join(config.server.publicPath, 'articles', article.slug)
}

function getArticleFilename(article) {
    return join(getArticlePath(article), 'index.html')
}

function renderNavigation() {

}

function renderArticle(article) {
    fs.mkdir(getArticlePath(article), {
        recursive: true
    }, console.error);

    fs.writeFile(getArticleFilename(article), loadArticle(article), {
        encoding: 'utf8'
    }, console.error);
}

async function render() {
    const paths = await scan();

    paths
        .map(locate)
        .map(read)
        .map(async filePromise => parse(await filePromise))
        .map(async articlePromise => {
            const article = await articlePromise;
            renderArticle(article);
        });
}

module.exports = {
    render
}
