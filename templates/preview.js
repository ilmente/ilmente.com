const { html } = require('../libs/template');

module.exports = article => html`
    <article>
        ${article.content}
        ---
        ${article.content}
        ---
    </article>
`;
