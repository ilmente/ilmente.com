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

    html {
        font-size: 100%;
    }

    body {
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background-color: ${theme.layout.bgColor};
        font-family: ${theme.layout.fontFamilyDefault};
        font-size: ${theme.layout.fontSize}rem;
        line-height: ${theme.layout.lineHeight};
        color: ${theme.layout.color};
        overflow: hidden;
    }

    p {
        margin: ${theme.spacing.containerTop}rem 0 ${theme.spacing.containerBottom}rem 0;
    }

    ul, ol {
        display: block;
        margin: ${theme.spacing.containerTop}rem 0 ${theme.spacing.containerBottom}rem 0;
    }

    ol {
        counter-reset: li;
    }

    li {
        list-style: none;
    }

    ol li {
        counter-increment: li;
    }

    li::before {
        display: inline-block;
        width: 1.5rem;
    }

    ul li::before {
        content: '●';
    }

    ol li::before {
        content: counter(li);
    }

    h1, h2, h3, h4, h5, h6 {
        margin: ${theme.spacing.headingTop}rem 0 ${theme.spacing.headingBottom}rem 0;
    }

    h2, h3, h4 {
        font-weight: bold;
    }

    h1 {
        font-family: ${theme.layout.fontFamilyAlt};
        font-size: ${theme.headings.default.h1}rem;
    }

    h2 { font-size: ${theme.headings.default.h2}rem; }
    h3 { font-size: ${theme.headings.default.h3}rem; }
    h4 { font-size: ${theme.headings.default.h4}rem; }

    h5 {
        font-size: ${theme.headings.default.h5}rem;
        font-style: italic;
    }

    h6 { font-size: ${theme.headings.default.h6}rem; }

    em, i {
        font-style: italic;
    }

    strong, b {
        font-weight: bold;
    }

    a {
        text-decoration: none;
        cursor: pointer;
    }

    a:hover {
        text-decoration: underline;
    }

    @media only screen and (max-width: ${theme.breakpoints.wide}rem) {
        .view-wide {
            display: none;
        }
    }

    @media only screen and (min-width: ${theme.breakpoints.wide}rem) {
        h1 { font-size: ${theme.headings.wide.h1}rem; }

        .view-default {
            display: none;
        }
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

                li::before {
                    ${animate('fadeColor')}
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
