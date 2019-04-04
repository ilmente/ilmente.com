import css from 'styled-jsx/css'

const style = css.global`
    @media only screen {
        .only-print {
            display: none;
        }
    }

    @media only print {
        * {
            transition: none;
        }

        html {
            position: static;
            min-height: 100%;
            font-size: 70%;
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
