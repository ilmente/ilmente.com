import css from 'styled-jsx/css'
import theme from '../theme'

const style = css`
    section {
        margin: ${theme.spacing()} 0;
        padding: 0 ${theme.spacing()};
    }

    div {
        max-width: ${theme.layout.maxWidth};
        margin: auto;
    }

    .is-wide {
        max-width: 100%;
    }
`

export default ({ isWide, children }) => {
    return (
        <section>
            <div className={isWide && 'is-wide'}>{children}</div>
            <style jsx>{style}</style>
        </section>
    )
}
