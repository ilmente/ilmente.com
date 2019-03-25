import css from 'styled-jsx/css'
import Section from '../components/section'
import Panel from '../components/panel'
import theme from '../theme'

const style = css`
    footer {
        padding-top: ${theme.spacing(3)};
        color: ${theme.layout.colorAlt};
        text-align: right;
    }
`

export default ({ children }) => (
    <footer>
        <Section>
            <Panel right>{children}</Panel>
        </Section>
        <style jsx>{style}</style>
    </footer>
)
