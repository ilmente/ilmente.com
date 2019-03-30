import css from 'styled-jsx/css'
import theme from '../theme'
import { animate } from '../styles/screen'

const style = css`
    svg {
        fill: currentColor;
        width: 1rem;
        height: 1rem;
        display: inline-block;
        vertical-align: middle;
        user-select: none;
    }
`

export default ({ name }) => (
    <svg>
        <use xlinkHref={`#:${name}`} />
        <style jsx>{style}</style>
    </svg>
)
