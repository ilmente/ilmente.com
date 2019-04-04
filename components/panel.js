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

    @media only print {
        div {
            border-left-width: 2px;
        }
    }
`

export default ({ right, children }) => (
    <div className={right && 'align-right'}>
        {children}
        <style jsx>{style}</style>
    </div>
)
