import { useState, useEffect } from 'react';
import Layout from '../templates/main';
import Section from '../components/section';
import Row from '../components/grid/row';
import Col from '../components/grid/col';
import Panel from '../components/panel';
import Tags from '../components/tags';
import withLocation from '../components/hoc/location';
import Icon from '../components/icon';
import IconResume from '../components/sprites/icon-resume';

export default withLocation(({ location }) => {
  const [address, setAddress] = useState();
  const [mobile, setMobile] = useState();
  const [email, setEmail] = useState();

  useEffect(() => {
    const query = location.getQuery();
    if (process.browser && query.address) setAddress(query.address);
    if (process.browser && query.mobile) setMobile(query.mobile);
    if (process.browser && query.email) setEmail(query.email);
  }, []);

  return (
    <Layout title="Resume" printTitle="Alessandro Bellini" color="#1780CC">
      <Section>
        <p className="only-screen">
          This is my official <em>curriculum vitae</em>: it's printable and
          completely made with react.
        </p>
        <Row>
          <Col default="12" wide="4" print="3">
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
                <a
                  className="margin-left"
                  href="https://ilmente.com"
                  taregt="_blank"
                >
                  ilmente.com
                </a>
              </li>
              {email && (
                <li>
                  <Icon name="paper-plane" />
                  <a
                    className="margin-left"
                    href={`mailto:${email}`}
                    taregt="_blank"
                  >
                    {email}
                  </a>
                </li>
              )}
              <li>
                <Icon name="linkedin" />
                <a
                  className="margin-left"
                  href="https://www.linkedin.com/in/ilmente"
                  target="_blank"
                >
                  linkedin.com/in/ilmente
                </a>
              </li>
              <li>
                <Icon name="github" />
                <a
                  className="margin-left"
                  href="https://github.com/ilmente"
                  target="_blank"
                >
                  github.com/ilmente
                </a>
              </li>
            </ul>
          </Col>
          <Col default="12" wide="8" print="9">
            <Panel onlyWide>
              <h2>Profile</h2>
              <p>
                I'm a frontend enthusiast and a proper nerd. I do enjoy coding.
                <br />
                In recent years I focused mainly on frontend architecture
                design for ecommerce platforms. I love data flow and state managements,
                when thoroughly thought; functional and smooth UIs; solid testing,
                especialy when made easy to maintain.
                <br />
                When leading, I do invest time in building cohesive teams where
                everyone - me included - should have the time and opportunity to grow (*) as professional.
              </p>
              <p>
                <small className="text-alt">
                  * Sourceability supported me in creating a program where the team
                  read and presented one book a month, during dedicated working hours.
                  Getting paid to learn: how cool is that?
                </small>
              </p>
            </Panel>
          </Col>
        </Row>

        <Row>
          <Col default="12" wide="4" print="3">
            <h2>Feelings</h2>
            <p>
              <strong>In a strong and romantic relationship with</strong> HTML
              (and Twig), CSS (BEM, Sass, Less), Javascript (ES5.1, 6, 7 and
              counting), Typescript, React, Vue, Webpack, Vite, Cypress,
              Jest, Git.
            </p>
            <p>
              <strong>Having an affaire with</strong> PWA, Svelte, NextJs, Functional Programming.
            </p>
            <p>
              <strong>Had a couple of dates with</strong> RxJS, GraphQL, Php.
            </p>

            <h3>I am a&#8230;</h3>
            <ul className="bullet">
              <li>competitor with myself</li>
              <li>good mediator</li>
              <li>knowledge consumer</li>
              <li>coffee maker</li>
              <li>challenge accepter</li>
              <li>uncoordinated dancer</li>
              <li>
                hard worker <small className="text-alt">#cliché</small>
              </li>
              <li>
                team worker <small className="text-alt">#cliché</small>
              </li>
              <li>service worker</li>
            </ul>
          </Col>
          <Col default="12" wide="8" print="9">
            <Panel onlyWide>
              <h2>Experience</h2>

              <h4 className="no-margin-y">Co-Founder, Chief Clock Architect</h4>
              <h5 className="no-margin-y">
                2022-*, hTime.io @ remotely, mostly Berlin, DE
              </h5>
              <p className="no-margin-top">
                As Chief Clock Architect (read "developer") my main goal is to design, implement and
                maintain the code behind{' '}
                <a href="https://hTime.io" target="_blank">
                  hTime.io
                </a>
                .
                <Tags
                  names={[
                    'sidehustle',
                    'everybodyisacofindertoday',
                    'typescript',
                    'react',
                    'nextjs',
                  ]}
                />
              </p>

              <h4 className="no-margin-y">Frontend Architect</h4>
              <h5 className="no-margin-y">
                2019-2023, Sourceability @ remotely, mostly Berlin, DE
              </h5>
              <p className="no-margin-top">
                My main responsibility was to (re)design the frontend architecture and maintain{' '}
                <a href="https://sourcengine.com" target="_blank">
                  sourcengine.com
                </a>{' '}
                B2B ecommerce platform and other internal projects.
                Particularly interesting was co-designing the BDD inspired,
                E2E testing suite using Cypress and Cucumber.
                To achieve that, I could count on a small amazing team of engineers and designers.
                <Tags
                  names={[
                    'dream-team',
                    'typescript',
                    'vue',
                    'pinia',
                    'cypress',
                    'cucumber',
                    'bdd',
                  ]}
                />
              </p>

              <h4 className="no-margin-bottom">Frontend Architect</h4>
              <h5 className="no-margin-y">2015-2019, Spryker @ Berlin, DE</h5>
              <p className="no-margin-top">
                Started as developer in the core team, I <em>grew up</em>{' '}
                architect in 2018, becoming responsible for SprykerOS vast and highly modular
                frontend architecture and providing tailored solutions for
                customers.
                <Tags
                  names={[
                    'typescript',
                    'webcomponents',
                    'reactdeepdive',
                    'webpack',
                    'jsthegoodpart',
                    'cleancode',
                    'backtostudy',
                    'backtobasics',
                  ]}
                />
              </p>

              <h4 className="no-margin-bottom">Frontend Developer</h4>
              <h5 className="no-margin-y">
                2013-2015, Lutech Mobile @ Milano, IT
              </h5>
              <p className="no-margin-top">
                In this mobile oriented agency, I was lead developer of a small
                team, mainly focused on cross-platform and/or hybrid
                applications development.
                <Tags
                  names={[
                    'jquerydays',
                    'rafdays',
                    'angularone',
                    'cordova',
                    'ibm',
                    'worklight',
                    'ios',
                    'android',
                    'evenwindowsmobile',
                  ]}
                />
              </p>

              <h4 className="no-margin-bottom">Fullstack Developer</h4>
              <h5 className="no-margin-y">2011-2012, Extra.it @ Milano, IT</h5>
              <p className="no-margin-top">
                Started as backend developer, I soon switched and focused mainly
                on frontend. My role in the agency was to implement UIs for
                customers' .net web applications.
                <Tags
                  names={[
                    'jquerydays',
                    'backbone',
                    'dotnet',
                    'frontendloveatfirstcode',
                  ]}
                />
              </p>

              <h4 className="no-margin-bottom">And...</h4>
              <h5 className="no-margin-y">2006-2010 @ Pistoia, IT</h5>
              <p className="no-margin-top">
                Web developer freelance, graphic designer in a printing factory,
                "computer" teacher in a private primary school and tutor in
                adult education programs (such as web development fundamentals
                and wordpress theming).
                <Tags
                  names={[
                    'jquerydays',
                    'spaghettidays',
                    'adobesuite',
                    'iloveteaching',
                    'onewordpresstorulethemall',
                    'jackofalltrades',
                  ]}
                />
              </p>
            </Panel>
          </Col>
        </Row>

        <Row>
          <Col default="12" wide="4" print="3">
            <h2>Expertise</h2>
            <ul className="bullet">
              <li>frontend development</li>
              <li>frontend architecture design</li>
              <li>team leading</li>
              <li>italian food and wine</li>
            </ul>
          </Col>
          <Col default="12" wide="8" print="9">
            <Panel onlyWide>
              <h2>Education</h2>
              <h4 className="no-margin-y">Bachelor in Sociology</h4>
              <p className="no-margin-top">
                <em>Università degli Studi di Firenze</em>, 2010.
              </p>
              <h3>Languages</h3>
              <p>Fluent Italian; good English.</p>
            </Panel>
          </Col>
        </Row>
      </Section>
      <IconResume />
    </Layout>
  );
});
