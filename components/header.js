import css from 'styled-jsx/css'
import Section from '../components/section'
import theme from '../theme'
import { animate } from '../styles/screen'

const style = css`
    header {
        padding: ${theme.spacing(10)} 0 ${theme.spacing()} 0;
        border-top: ${theme.spacing()} solid ${theme.layout.bgColor};
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
