import css from 'styled-jsx/css'
import theme from '../theme'
import Section from '../components/section'
import transition from './hoc/transition'

const defaultStyle = css`
    header {
        border-top: ${theme.spacing()} solid ${theme.layout.bgColor};
    }

    h1 {
        display: block;
        margin: 0;
        margin-top: -${theme.spacing()};
        padding-top: ${theme.spacing(13)};
        padding-bottom: ${theme.spacing()};
    }
`

export const Header = ({ title, style }) => (
    <header style={style}>
        <Section>
            <h1>{title || process.env.site.name}</h1>
        </Section>
        <style jsx>{defaultStyle}</style>
    </header>
)

export default (props) => transition(Header, ['borderTopColor'])(props)
