import css from 'styled-jsx/css'
import theme from '../theme'
import { animate } from '../styles/animations'

const style = css`
    div {
        padding-left: 1rem;
        border-left: 0.25rem solid ${theme.layout.color};
        ${animate('fadeBorderColor')}
    }

    .align-right {
        padding-left: 0;
        padding-right: 1rem;
        border-left: none;
        border-right: 0.25rem solid ${theme.layout.color};
        text-align: right;
    }

    @media only screen and (max-width: ${theme.breakpoints.wide}rem) {
        .only-wide {
            padding-left: 0;
            padding-right: 0;
            border-left: none;
            border-right: none;
        }
    }

    @media only print {
        div {
            border-left-width: 2px;
        }
    }
`

export default ({ right, onlyWide, children }) => (
    <div className={`${right && 'align-right'} ${onlyWide && 'only-wide'}`}>
        {children}
        <style jsx>{style}</style>
    </div>
)
