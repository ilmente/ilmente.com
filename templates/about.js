const { html } = require('../libs/template');

module.exports = () => html`
    <main class="content">
        <h2 class="here">ilmente.com</h2>
        <h1>Alessandro Bellini</h1>
        <p>
            <a href="https://www.linkedin.com/in/ilmente" target="_blank">I'm a geek</a>
            who does love "<a href="https://github.com/ilmente" target="_blank">frontending</a>" and air drumming
            while <a href="https://github.com/abelspry" target="_blank">coding</a>.
            I also like taking <a href="https://www.instagram.com/ilmente" target="_blank">photographs</a> here and
            there,
            cooking (and eating, probably even more), drinking way too much fine espresso
            coffee, singing out loud (even in <a href="https://spryker.com" target="_blank">my office</a>, when
            alone),
            playing bass guitar, <a href="https://www.youtube.com/watch?v=Eth2_klojYQ" target="_blank">dancing like
                a fool</a>,
            watching great animes, reading newspapers, travelling, meeting people and discovering stuff.
        </p>
    </main>
`;
