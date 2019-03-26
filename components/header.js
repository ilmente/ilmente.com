import css from 'styled-jsx/css'
import Section from '../components/section'
import theme from '../theme'
import { animate } from '../styles/screen'

const style = css`
    header {
        padding-top: 10rem;
        margin-bottom: 2rem;
        border-top: 1rem solid ${theme.layout.bgColor};
        ${animate('fadeBorderColor')}
    }
`

export default ({ children }) => (
    <header>
        <Section>
            {children}
        </Section>
        <style jsx>{style}</style>
    </header>
)
