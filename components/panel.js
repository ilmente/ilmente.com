import css from 'styled-jsx/css'
import theme from '../theme'
import { animate } from '../styles/screen'

const defaultStyle = css`
    div {
        padding: 0 ${theme.spacing()};
        border-left: ${theme.spacing(0.25)} solid ${theme.layout.color};
        ${animate('fadeBorderColor')}
    }

    .align-right {
        border-left: none;
        border-right: ${theme.spacing(0.25)} solid ${theme.layout.color};
        text-align: right;
    }
`

export default ({ right, children }) => (
    <div className={right && 'align-right'}>
        {children}
        <style jsx>{defaultStyle}</style>
    </div>
)
