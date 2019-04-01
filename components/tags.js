import css from 'styled-jsx/css'
import theme from '../theme'

const style = css`
    div {
        margin-top: 0.1rem;
        font-size: ${theme.layout.fontSizeSmall}rem;
        color: ${theme.layout.colorAlt};
    }
`

const getTags = (names) => names.map(name => `<em>#${name}</em>`).join(', ')

export default ({ names }) => (
    <>
        <div dangerouslySetInnerHTML={{ __html: getTags(names) }}></div>
        <style jsx>{style}</style>
    </>
)
