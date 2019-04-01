import css from 'styled-jsx/css'
import theme from '../../theme'

const getWidth = (size) => `calc(${(100 / theme.grid.columns) * size}% - ${theme.grid.gutter}rem)`

const generateColStyles = (breakpoint = 'default') => Array(theme.grid.columns)
    .fill(`.col.col-${breakpoint}`)
    .map((className, index) => `${className}-${index + 1}{width: ${getWidth(index + 1)};}`)
    .join('')

const generateColStylesForBreakpoints = () => Object.keys(theme.breakpoints)
    .map(breakpoint => `@media only screen and (min-width:${theme.breakpoints[breakpoint]}rem){${generateColStyles(breakpoint)}}`)
    .join('')

const style = css.global`
    .col {
        flex-grow: 0;
        flex-basis: auto;
        margin: ${theme.grid.gutter / 2}rem;
    }

    ${generateColStyles()}
    ${generateColStylesForBreakpoints()}

    @media only print {
        ${generateColStyles('print')}
    }
`

const getColClassNames = (props) => {
    const breakpoints = [
        'default',
        'print',
        ...Object.keys(theme.breakpoints)
    ]

    return breakpoints
        .filter(breakpoint => !!props[breakpoint])
        .map(breakpoint => `col-${breakpoint}-${props[breakpoint]}`)
        .join(' ')
}

export default ({ children, ...props }) => (
    <div className={`col ${getColClassNames(props)}`}>
        {children}
        <style jsx>{style}</style>
    </div>
)
