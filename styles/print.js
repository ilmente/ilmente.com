import css from 'styled-jsx/css'

const style = css.global`
    @media only screen {
        .only-print {
            display: none;
        }
    }

    @media only print {
        * {
            text-rendering: optimizeLegibility;
        }

        html {
            position: static;
            min-height: 100%;
            font-size: 72%;
            overflow: initial;

        }

        body {
            position: static;
            overflow: auto;
        }

        .only-screen {
            display: none;
        }
    }
`

export default () => (
    <>
        <style jsx>{style}</style>
    </>
)
