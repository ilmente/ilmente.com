const grayMatter = require('gray-matter');
const showdown = require('showdown');
const config = require('../config');
const showdownConverter = new showdown.Converter(config.showdown);

function parseFrontMatter(text) {
    return grayMatter(text, config.grayMatter);
}

function parseMarkdown(text) {
    return showdownConverter.makeHtml(text);
}

async function parse(file, omitContent = false) {
    const parsedFile = parseFrontMatter(file.raw);
    const meta = parsedFile.data;
    const excerpt = parseMarkdown(parsedFile.excerpt);

    if (omitContent) {
        return {
            ...file,
            meta,
            excerpt
        }
    }

    const content = parseMarkdown(parsedFile.content);

    return {
        ...file,
        meta,
        content,
        excerpt
    }
}

module.exports = {
    parse
}
