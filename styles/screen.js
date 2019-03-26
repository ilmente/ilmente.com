import { useContext } from 'react'
import css from 'styled-jsx/css'
import theme from '../theme'
import AccentContext from '../context/accent'

export const animate = (name) => `animation: ${name} 1s linear forwards;`

const style = css.global`
    * {
        margin: 0;
        padding: 0;
        border: 0;
        box-sizing: border-box;
        font: inherit;
        color: inherit;

        -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    body {
        background-color: ${theme.layout.bgColor};
        font-family: ${theme.layout.fontFamilyDefault};
        font-size: ${theme.layout.fontSize};
        line-height: ${theme.layout.lineHeight};
        color: ${theme.layout.color};
        overflow-x: hidden;
    }

    h1, h2, h3, h4, h5, h6 {
        margin: ${theme.spacing(3)} 0 ${theme.spacing()} 0;
    }

    h1, h2, h3 {
        font-family: ${theme.layout.fontFamilyAlt};
    }

    h4, h5, h6 {
        font-family: ${theme.layout.fontFamilyDefault};
        font-weight: bold;
    }

    h1 { font-size: ${theme.headings.narrow.h1}; }
    h2 { font-size: ${theme.headings.narrow.h2}; }
    h3 { font-size: ${theme.headings.narrow.h3}; }
    h4 { font-size: ${theme.headings.narrow.h4}; }
    h5 { font-size: ${theme.headings.narrow.h5}; }
    h6 { font-size: ${theme.headings.narrow.h6}; }

    em, i {
        font-style: italic;
    }

    strong, b {
        font-weight: bold;
    }

    p {
        margin: ${theme.spacing()} 0;
    }

    a {
        text-decoration: none;
        cursor: pointer;
    }

    a:hover {
        text-decoration: underline;
    }

    @media (min-width: ${theme.breakpoints.wide}) {
        h1 { font-size: ${theme.headings.wide.h1}; }
        h2 { font-size: ${theme.headings.wide.h2}; }
        h3 { font-size: ${theme.headings.wide.h3}; }
        h4 { font-size: ${theme.headings.wide.h4}; }
        h5 { font-size: ${theme.headings.wide.h5}; }
        h6 { font-size: ${theme.headings.wide.h6}; }
    }
`

export default () => {
    const { color, prevColor } = useContext(AccentContext)

    return (
        <>
            <style jsx>{style}</style>
            <style jsx global>{`
                ::selection {
                    background-color: ${color};
                    color: ${theme.layout.bgColor};
                }

                a {
                    ${animate('fadeColor')}
                }

                @keyframes fadeColor {
                    0% { color: ${prevColor}; }
                    100% { color: ${color}; }
                }

                @keyframes fadeBorderColor {
                    0% { border-color: ${prevColor}; }
                    100% { border-color: ${color}; }
                }

                @keyframes fadeBgColor {
                    0% { background-color: ${prevColor}; }
                    100% { background-color: ${color}; }
                }
            `}</style>
        </>
    )
}
