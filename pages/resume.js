import Layout from '../templates/main'
import Section from '../components/section'
import Row from '../components/grid/row'
import Col from '../components/grid/col'
import Panel from '../components/panel';
import Tags from '../components/tags';

export default () => (
    <Layout title="Resume" printTitle="Alessandro Bellini" color="#007acc">
        <Section>
            <p>
                I'm a geek who
                does love "frontending" and air drumming while coding. I also like
                taking photographs here and there,
                cooking (and eating, probably even more),
                drinking way too much fine espresso coffee, singing out loud
                (even in my office, when alone),
                playing bass guitar, dancing like a fool, watching great animes,
                reading newspapers and distopic books, travelling, meeting people and discovering stuff.
            </p>

            <h2>Experience</h2>
            <Row stretch>
                <Col wide="6" print="6">
                    <Panel>
                        <h4 className="flat">Frontend Architect</h4>
                        <h5 className="sub flat">2016-2019, Spryker @ Berlin, DE</h5>
                        Started as developer in the core team,
                        I <em>grew up</em> architect in 2018,
                        becoming resposable for SprykerOS products
                        frontend architecture and providing tailored solutions
                        for customers.
                        <Tags names={['typescript', 'webcomponents', 'react', 'webpack', 'jsthegoodpart', 'cleancode', 'backtostudy']} />
                    </Panel>
                </Col>
                <Col wide={6} print={6}>
                    <Panel>
                        <h4 className="flat">Frontend Developer</h4>
                        <h5 className="sub flat">2014-2016, Lutech Mobile @ Milano, IT</h5>
                        In this mobile oriented agency,
                        I was lead developer of a small team, mainly focused
                        on cross-platform and/or hybrid applications development.
                        <Tags names={['jquerydays', 'angularone', 'cordova', 'ibm', 'worklight', 'android', 'ios', 'windowsmobile']} />
                    </Panel>
                </Col>
                <Col wide={6} print={6}>
                    <Panel>
                        <h4 className="flat">Web Developer</h4>
                        <h5 className="sub flat">2011-2013, Extra.it @ Milano, IT</h5>
                        Started as backend developer,
                        I soon switched and focused mainly on frontend.
                        My role in the agency was to implement UIs for customers' .net web applications.
                        <Tags names={['jquerydays', 'backbone', 'dotnet', 'frontendloveatfirstcode']} />
                    </Panel>
                </Col>
                <Col wide={6} print={6}>
                    <Panel>
                        <h4 className="flat">And...</h4>
                        <h5 className="sub flat">2006-2010 @ Pistoia, IT</h5>
                        Freelancer, graphic designer in a typography,
                        "computer" teacher in a primary school and tutor for
                        adult education programs.
                        <Tags names={['jquerydays', 'adobesuite', 'tutorforwordpress', 'tutorforwebdev', 'fullstackdevwonnabe']} />
                    </Panel>
                </Col>
            </Row>
            <p className="only-screen">
                For more detailed info, take a look at
                my <a href="https://www.linkedin.com/in/ilmente" target="_blank">linkedin profile</a>.
            </p>

            <h2>Feelings</h2>
            <ul className="space">
                <li>
                    <strong>In a long and stable relation</strong> <em className="alt">(daily used)</em>:<br />
                    HTML, CSS (Sass, Less), Javascript, Typescript, WebComponents, Twig, Git
                </li>
                <li>
                    <strong>Having an affaire</strong> <em className="alt">(extensively used)</em>:<br />
                    React, Redux, Mobx, CssNext, styles-jsx, Node
                </li>
                <li>
                    <strong>Had a couple of dates so far</strong> <em className="alt">(used for fun and/or curiosity)</em>:<br />
                    Mobx State Tree, RxJS, Emotion, Php
                </li>
                <li>
                    <strong>Just met</strong> <em className="alt">(studing and exploring)</em>:<br />
                    Vue, Functional Programming
                </li>
            </ul>

            <h2>Education</h2>
            <p>
                I graduated in Sociology at <em>Univerità degli Studi di Firenze</em> in 2010.<br/>
                Why? Because I like it, and I think that back then I wanted a deeper grasp on humanity.
                Just consider that, as a developer, I spend most of my time in front of a screen...
            </p>

            <h2>About me</h2>
            <p>
                I'm a geek who
                does love "frontending" and air drumming while coding. I also like
                taking photographs here and there,
                cooking (and eating, probably even more),
                drinking way too much fine espresso coffee, singing out loud
                (even in my office, when alone),
                playing bass guitar, dancing like a fool, watching great animes,
                reading newspapers and distopic books, travelling, meeting people and discovering stuff.
            </p>
        </Section>
    </Layout>
)
