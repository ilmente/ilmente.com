const { reduce } = require('ramda');
const config = require('../config');

const format = [
    config.article.path,
    new RegExp(/\/index/, 'gi'),
    new RegExp(`(${config.article.extension})$`, 'gi')
];

function createSlug(path) {
    const formatReducer = (slug, replace) => slug.replace(replace, '');
    return reduce(formatReducer, path, format) || '/';
}

function locate(path) {
    const slug = createSlug(path);

    return {
        path,
        slug
    }
}

module.exports = {
    locate
}
