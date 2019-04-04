import css from 'styled-jsx/css'

const style = css`
    small {
        display: block;
        padding-top: 0.15rem;
    }
`

const getTags = (names) => names.map(name => `#${name}`).join(', ')

export default ({ names }) => (
    <>
        <small className="alt" dangerouslySetInnerHTML={{ __html: getTags(names) }}></small>
        <style jsx>{style}</style>
    </>
)
