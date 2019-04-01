import css from 'styled-jsx/css'

const style = css`
    svg {
        display: inline-block;
        vertical-align: middle;
        user-select: none;
    }
`

export default ({ name, color, size = 1 }) => (
    <svg>
        <use xlinkHref={`#:${name}`} />
        <style jsx>{style}</style>
        <style jsx>{`
            svg {
                width: ${size}rem;
                height: ${size}rem;
                fill: ${color ? color : 'currentColor'};
            }
        `}</style>
    </svg>
)
