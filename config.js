module.exports = {
    site: {
        name: 'ilmente.com',
        author: 'Alessandro Bellini'
    },

    server: {
        port: 3300,
        publicPath: __dirname + '/public',
        blogFolderName: 'blog',
        assetsFolderName: 'assets'
    },

    blog: {
        sourcePath: __dirname + '/articles',
        extension: '.md'
    },

    template: {
        path: __dirname + '/templates',
        defaultLayout: 'layout',
        defaultArticle: 'article'
    },

    grayMatter: {
        excerpt: true
    },

    showdown: {
        tables: true,
        openLinksInNewWindow: true,
        strikethrough: true,
        simplifiedAutoLink: true
    }
}
