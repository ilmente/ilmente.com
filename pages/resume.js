import { useState, useEffect } from 'react'
import Layout from '../templates/main'
import Section from '../components/section'
import Row from '../components/grid/row'
import Col from '../components/grid/col'
import Panel from '../components/panel'
import Tags from '../components/tags'
import withLocation from '../components/hoc/location'
import Icon from '../components/icon'
import IconResume from '../components/sprites/icon-resume'

export default withLocation(({ location }) => {
    const [address, setAddress] = useState()
    const [mobile, setMobile] = useState()
    const [email, setEmail] = useState()

    useEffect(() => {
        const query = location.getQuery()
        if (process.browser && query.address) setAddress(query.address)
        if (process.browser && query.mobile) setMobile(query.mobile)
        if (process.browser && query.email) setEmail(query.email)
    })

    return (
        <Layout title="Resume" printTitle="Alessandro Bellini" color="#1780CC">
            <Section>
                <p className="only-screen">
                    This is my official <em>curriculum vitae</em>: it's printable and completely made with react.
                </p>
                <Row>
                    <Col wide="4" print="4">
                        <h2>Contacts</h2>
                        <ul>
                            {address && (
                                <li>
                                    <Icon name="marker" />
                                    <span className="margin-left">{address}</span>
                                </li>
                            )}
                            {mobile && (
                                <li>
                                    <Icon name="mobile" />
                                    <span className="margin-left">{mobile}</span>
                                </li>
                            )}
                            <li>
                                <Icon name="globe" />
                                <a className="margin-left" href="https://ilmente.com" taregt="_blank">ilmente.com</a>
                            </li>
                            {email && (
                                <li>
                                    <Icon name="paper-plane"/>
                                    <a className="margin-left" href={`mailto:${email}`} taregt="_blank">{email}</a>
                                </li>
                            )}
                            <li>
                                <Icon name="linkedin" />
                                <a className="margin-left" href="https://www.linkedin.com/in/ilmente" target="_blank">linkedin.com/in/ilmente</a>
                            </li>
                            <li>
                                <Icon name="github" />
                                <a className="margin-left" href="https://github.com/ilmente" target="_blank">github.com/ilmente</a>
                            </li>
                        </ul>
                    </Col>
                    <Col wide="8" print="8">
                        <Panel>
                            <h2>Profile</h2>
                            <p>
                                I could start by writing something like: <em>"Commited
                                application architect with almost 14 years of coding experience,
                                7 of which focused on frontend development..."</em>. Well, I just did.
                                But I'll skip the rest of my pro self-promotion intro as it's boring.
                            </p>
                            <p>
                                Let's focus on who I really am: a frontend lover, a nerd. I do enjoy coding:
                                the harder is the challenge, the more exiting is the persue
                                of the solution. And I strive to learn: I constantly do it by messing
                                with code on my own; but peers, colleagues
                                and customers sometimes are the best teachers. This is why the social aspect of
                                my work is tremendously valuable to me, and it gets the same effort as the coding one.
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
                            <li>knowledge consumer</li>
                            <li>coffee maker</li>
                            <li>challenge accepter</li>
                            <li>user-group talker</li>
                            <li>hard worker (cliqué)</li>
                            <li>team worker (cliqué)</li>
                            <li>service worker</li>
                        </ul>
                    </Col>
                    <Col wide="8" print="8">
                        <Panel>
                            <h2>Experience</h2>
                            <h4 className="no-margin-y">Application Architect</h4>
                            <h5 className="no-margin-y">2015-2019, Spryker @ Berlin, DE</h5>
                            <p className="no-margin-top">
                                Started as developer in the core team,
                                I <em>grew up</em> architect in 2018,
                                becoming resposable for SprykerOS products
                                frontend architecture and providing tailored solutions
                                for customers.
                                <Tags names={['es6and7', 'typescript', 'webcomponents', 'reactdeepdive', 'webpack', 'jsthegoodpart', 'cleancode', 'backtostudy', 'backtobasics', 'fp']} />
                            </p>

                            <h4 className="no-margin-bottom">Frontend Developer</h4>
                            <h5 className="no-margin-y">2013-2015, Lutech Mobile @ Milano, IT</h5>
                            <p className="no-margin-top">
                                In this mobile oriented agency,
                                I was lead developer of a small team, mainly focused
                                on cross-platform and/or hybrid applications development.
                                <Tags names={['jquerydays', 'rafdays', 'angularone', 'cordova', 'ibm', 'worklight', 'ios', 'android', 'evenwindowsmobile']} />
                            </p>

                            <h4 className="no-margin-bottom">Fullstack Developer</h4>
                            <h5 className="no-margin-y">2011-2012, Extra.it @ Milano, IT</h5>
                            <p className="no-margin-top">
                                Started as backend developer,
                                I soon switched and focused mainly on frontend.
                                My role in the agency was to implement UIs for customers' .net web applications.
                                <Tags names={['jquerydays', 'backbone', 'dotnet', 'frontendloveatfirstcode']} />
                            </p>

                            <h4 className="no-margin-bottom">And...</h4>
                            <h5 className="no-margin-y">2006-2015 @ Pistoia, IT</h5>
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
            <IconResume />
        </Layout>
    )
})
