const { html } = require('../libs/template');
const preview = require('./preview');

module.exports = articles => html`
    <section>
        ${articles.map(preview)}
    </section>
`;
