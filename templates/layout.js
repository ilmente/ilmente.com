const { html, loadArticle } = require('../libs/template');
const aboutTemplate = require('./about');
const navigationTemplate = require('./navigation');

module.exports = (articles, currentArticle = null) => html`
    <!doctype html>
    <html lang="en">
        <head>
            <meta charset="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no" />
            <meta name="title" content="ilmente.com" />
            <meta name="description" content="Alessandro Bellini: frontend dev, amateur protographer and professional procrastinator." />
            <meta name="keywords" content="alessandro bellini, ilmente, frontend, development, photography, procrastination" />
            <meta name="generator" content="hand made by me" />
            <link href="//fonts.googleapis.com/css?family=Lora:400,400i,700,700i" rel="stylesheet" />
            <link href="./public/style.css" rel="stylesheet" />
            <title>ilmente.com</title>
        </head>
        <body>
            <div class="frame">
                ${aboutTemplate()}
                ${navigationTemplate(articles)}
                ${!!currentArticle ? loadArticle(currentArticle) : ''}
            </div>

            <script src="./public/script.js" async></script>
        </body>
    </html>
`;
