import css from 'styled-jsx/css'
import theme from '../theme'

const style = css.global`
    .text-alt { color: ${theme.layout.colorAlt}; }
    .text-center { text-align: center; }
    .text-left { text-align: left; }
    .text-right { text-align: right; }
    .text-justify { text-align: justify; }

    .margin { margin: 1rem; }
    .margin-x { margin-left: 1rem; margin-right: 1rem; }
    .margin-y { margin-top: 1rem; margin-bottom: 1rem; }
    .margin-left { margin-left: 1rem; }
    .margin-right { margin-right: 1rem; }
    .margin-top { margin-top: 1rem; }
    .margin-bottom { margin-bottom: 1rem; }

    .no-margin { margin: 0; }
    .no-margin-x { margin-left: 0; margin-right: 0; }
    .no-margin-y { margin-top: 0; margin-bottom: 0; }
    .no-margin-left { margin-left: 0; }
    .no-margin-right { margin-right: 0; }
    .no-margin-top { margin-top: 0; }
    .no-margin-bottom { margin-bottom: 0; }

    .float-left { float: left; }
    .float-right { float: right; }

    @media only screen {
        .only-print {
            display: none;
        }
    }

    @media only screen and (max-width: ${theme.breakpoints.wide}rem) {
        .view-wide {
            display: none;
        }
    }

    @media only screen and (min-width: ${theme.breakpoints.wide}rem) {
        .view-default {
            display: none;
        }
    }

    @media only print {
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
