import css from 'styled-jsx/css'
import theme from '../../theme'

const style = css.global`
    .row {
        display: flex;
        flex-flow: row wrap;
        align-items: flex-start;
        justify-content: flex-start;
        width: 100%;
        margin: -${theme.grid.gutter / 2}rem;
    }

    .top { align - items: flex - start; }
    .bottom { align - items: flex - end; }
    .left { justify - content: flex - start; }
    .right { justify - content: flex - end; }
    .center { justify - content: center; }
    .middle { align - items: center; }
    .justify { justify - content: space - between; }
    .stretch { align - items: stretch; }
    .nowrap { flex - wrap: nowrap; }
`

const getClassNames = (props) => {
    const modifiers = ['top', 'bottom', 'left', 'right', 'center', 'middle', 'justify', 'stretch', 'nowrap']

    return modifiers
        .filter(modifier => !!props[modifier])
        .join(' ')
}

export default ({ children, ...props }) => (
    <div className={`row ${getClassNames(props)}`}>
        {children}
        <style jsx>{style}</style>
    </div>
)
