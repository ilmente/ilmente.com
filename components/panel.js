import css from 'styled-jsx/css'
import theme from '../theme'
import { animate } from '../styles/screen'

const style = css`
    div {
        padding: 0 1rem;
        border-left: 0.25rem solid ${theme.layout.color};
        ${animate('fadeBorderColor')}
    }

    .align-right {
        border-left: none;
        border-right: 0.25rem solid ${theme.layout.color};
        text-align: right;
    }
`

export default ({ right, children }) => (
    <div className={right && 'align-right'}>
        {children}
        <style jsx>{style}</style>
    </div>
)
