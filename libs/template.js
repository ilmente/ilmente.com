const { join } = require('path');
const config = require('../config');

function html(fragments, ...args) {
    return fragments.reduce((output, fragment, index) => {
        const arg = index > args.length ? '' : args[index - 1];
        return output + arg + fragment;
    });
}

function loadArticle(article) {
    if (!article.meta || !article.meta.template) {
        return require(join(config.template.path, config.template.defaultArticle))(article);
    }

    return require(join(config.template.path, article.meta.template))(article);
}

function loadLayout(...args) {
    return require(join(config.template.path, config.template.defaultLayout))(...args);
}

module.exports = {
    html,
    loadArticle,
    loadLayout
}
