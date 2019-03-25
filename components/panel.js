import css from 'styled-jsx/css'
import theme from '../theme'
import transition from './hoc/transition'

const defaultStyle = css`
    div {
        padding: 0 ${theme.spacing()};
        border-left: ${theme.spacing(0.25)} solid ${theme.layout.color};
    }

    .align-right {
        border-left: none;
        border-right: ${theme.spacing(0.25)} solid ${theme.layout.color};
        text-align: right;
    }
`

const Panel = ({ style, right, children }) => (
    <div style={style} className={right && 'align-right'}>
        {children}
        <style jsx>{defaultStyle}</style>
    </div>
)

export default (props) => transition(Panel, ['borderColor'])(props)
