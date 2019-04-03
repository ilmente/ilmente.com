import { withRouter } from 'next/router'
import Layout from '../templates/main'
import Section from '../components/section'
import Row from '../components/grid/row'
import Col from '../components/grid/col'
import Panel from '../components/panel'
import Tags from '../components/tags'
import { getQuery } from '../libs/location'

export default withRouter(({ router }) => {
    const { address, mobile, email } = getQuery()

    return (
        <Layout title="Resume" printTitle="Alessandro Bellini" color="#1780CC">
            <Section>
                <Row>
                    <Col wide="4" print="4">
                        <h2>Contacts</h2>
                        <ul className="bullet">
                            {process.browser && address && (<li>{address}</li>)}
                            {process.browser && mobile && (<li>{mobile}</li>)}
                            <li><a href="https://ilmente.com" taregt="_blank">ilmente.com</a></li>
                            {process.browser && email && (<li><a href={`mailto:${email}`} taregt="_blank">{email}</a></li>)}
                            <li><a href="https://www.linkedin.com/in/ilmente" target="_blank">linkedin.com/in/ilmente</a></li>
                            <li><a href="https://github.com/ilmente" target="_blank">github.com/ilmente</a></li>
                        </ul>
                    </Col>
                    <Col wide="8" print="8">
                        <Panel>
                            <h2>Profile</h2>
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
                        </Panel>
                    </Col>
                </Row>
                <Row>
                    <Col wide="4" print="4">
                        <h2>Feelings</h2>
                        <p>
                            <strong>In a strong and romantic relationship with</strong> HTML,
                            CSS (BEM, Sass, Less), Javascript (ES5.1, 6, 7 and counting),
                            Typescript, WebComponents, Twig, Git.
                    </p>
                        <p>
                            <strong>Having an affaire with</strong> React,
                            Redux, Mobx, CssNext, CssModules, styled-jsx, Next.js, GatsbyJS,
                            Jest, Ava, Node.
                    </p>
                        <p>
                            <strong>Had a couple of dates with</strong> PWA, Mobx State Tree,
                            RxJS, Emotion, GraphQL, Php.
                    </p>
                        <p>
                            <strong>Just met</strong> Vue, Functional Programming.
                    </p>

                        <h3>I am a&#8230;</h3>
                        <ul className="bullet">
                            <li>competitor with myself</li>
                            <li>good mediator</li>
                            <li>coffee maker</li>
                            <li>challenge accepter</li>
                            <li>user-group talker</li>
                            <li>hard worker</li>
                            <li>team worker</li>
                            <li>service worker</li>
                        </ul>
                    </Col>
                    <Col wide="8" print="8">
                        <Panel>
                            <h2>Experience</h2>
                            <h4 className="no-margin-y">Frontend Architect</h4>
                            <h5 className="alt no-margin-y">2016-2019, Spryker @ Berlin, DE</h5>

                            <p className="no-margin-top">
                                Started as developer in the core team,
                            I <em>grew up</em> architect in 2018,
                                becoming resposable for SprykerOS products
                                frontend architecture and providing tailored solutions
                                for customers.
                            <Tags names={['es6and7', 'typescript', 'webcomponents', 'reactdeepdive', 'webpack', 'jsthegoodpart', 'cleancode', 'backtostudy', 'backtobasics', 'fp']} />
                            </p>

                            <h4 className="no-margin-y">Frontend Developer</h4>
                            <h5 className="alt no-margin-y">2014-2016, Lutech Mobile @ Milano, IT</h5>

                            <p className="no-margin-top">
                                In this mobile oriented agency,
                                I was lead developer of a small team, mainly focused
                                on cross-platform and/or hybrid applications development.
                            <Tags names={['jquerydays', 'rafdays', 'angularone', 'cordova', 'ibm', 'worklight', 'ios', 'android', 'evenwindowsmobile']} />
                            </p>

                            <h4 className="no-margin-y">Web Developer</h4>
                            <h5 className="alt no-margin-y">2011-2013, Extra.it @ Milano, IT</h5>

                            <p className="no-margin-top">
                                Started as backend developer,
                                I soon switched and focused mainly on frontend.
                                My role in the agency was to implement UIs for customers' .net web applications.
                            <Tags names={['jquerydays', 'backbone', 'dotnet', 'frontendloveatfirstcode']} />
                            </p>

                            <h4 className="no-margin-y">And...</h4>
                            <h5 className="alt no-margin-y">2006-2010 @ Pistoia, IT</h5>

                            <p className="no-margin-top">
                                Web developer freelance, graphic designer in a printing factory,
                                "computer" teacher in a private primary school and tutor in
                                adult education programs (such as web development fundamentals and wordpress theming).
                            <Tags names={['jquerydays', 'spaghettidays', 'adobesuite', 'iloveteaching', 'onewordpresstorulethemall', 'jackofalltrades']} />
                            </p>
                        </Panel>
                    </Col>
                </Row>

                <Row>
                    <Col wide="4" print="4">
                        <h2>Expertise</h2>
                        <ul className="bullet">
                            <li>frontend development</li>
                            <li>frontend architecture design</li>
                            <li>agile team leading</li>
                            <li>italian food and wine</li>
                        </ul>
                    </Col>
                    <Col wide="8" print="8">
                        <Panel>
                            <h2>Education</h2>
                            <h4 className="no-margin-y">Bachelor in Sociology</h4>
                            <p className="no-margin-top">
                                <em>Università degli Studi di Firenze</em>, 2010.
                        </p>
                            <h3>Languages</h3>
                            <p>
                                Fluent Italian; good English.
                        </p>
                        </Panel>
                    </Col>
                </Row>
            </Section>
        </Layout>
    )
})
