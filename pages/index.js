import Layout from '../templates/layout'
import Section from '../components/section'
import Link from '../components/link'

export default () => (
    <Layout color="#159192">
        <Section>
            <p>
                My name is <strong>Alessandro Bellini</strong>. Welcome.<br />
                <Link href="https://www.linkedin.com/in/ilmente" target="_blank">I'm a geek who does love "frontending"</Link> and
                air drumming while coding. I also like
                taking <Link href="https://www.instagram.com/ilmente" target="_blank">photographs here and there</Link>,
                cooking (and eating, probably even more),
                drinking way too much fine espresso coffee, singing out loud
                (even in my office, when alone),
                playing bass guitar, dancing like a fool, watching great animes,
                reading newspapers, travelling, meeting people and discovering stuff.
            </p>
        </Section>
    </Layout>
)
