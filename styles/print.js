import { useContext } from 'react'
import css from 'styled-jsx/css'
import theme from '../theme'
import AccentContext from '../context/accent'

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
            min-height: 100%;
            font-size: 75%;
        }

        body {
            position: static;
            padding: 4rem 4rem 4rem 2rem;
            overflow: auto;
        }

        h2, h3 {
            font-family: ${theme.layout.fontFamilyDefault};
            font-weight: bold;
        }

        .only-screen {
            display: none;
        }
    }
`

export default () => {
    const { color } = useContext(AccentContext)

    return (
        <>
            <style jsx>{style}</style>
            <style jsx global>{`
                @media only print {
                    html {
                        border-left: 4rem solid ${color};
                    }
                }
            `}</style>
        </>
    )
}
