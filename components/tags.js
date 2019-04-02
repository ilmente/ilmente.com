import css from 'styled-jsx/css'

const style = css`
    small {
        display: block;
        padding-top: 0.1rem;
    }
`

const getTags = (names) => names.map(name => `<em>#${name}</em>`).join(', ')

export default ({ names }) => (
    <>
        <small className="alt" dangerouslySetInnerHTML={{ __html: getTags(names) }}></small>
        <style jsx>{style}</style>
    </>
)
