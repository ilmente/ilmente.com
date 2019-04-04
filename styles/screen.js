import { useContext } from 'react'
import css from 'styled-jsx/css'
import theme from '../theme'
import AccentContext from '../libs/accent-context'

export const animate = (name) => `animation: ${name} 1s linear forwards;`

const style = css.global`
    * {
        margin: 0;
        padding: 0;
        border: 0;
        box-sizing: border-box;
        font: inherit;
        line-height: inherit;
        color: inherit;

        -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    html {
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        font-size: 100%;
        overflow: hidden;
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
        margin: 1rem 0;
    }

    ul, ol {
        display: block;
        margin: 1rem 0;
    }

    li {
        list-style: none;
    }

    ol.numbers {
        counter-reset: li;
    }

    .bullet li,
    .number li {
        padding-left: 1.5rem;
    }

    ol.number li {
        counter-increment: li;
    }

    .bullet li::before,
    .number li::before {
        display: inline-block;
        margin-left: -1.5rem;
        width: 1.5rem;
    }

    ul.bullet li::before {
        content: '⎼';
        float: left;
        margin-top: -0.15rem;
    }

    ol.number li::before {
        content: counter(li);
    }

    h1, h2, h3, h4, h5, h6 {
        margin: 2rem 0 1rem 0;
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

    small {
        font-size: ${theme.layout.fontSizeSmall}rem;
    }

    a {
        text-decoration: none;
        cursor: pointer;
    }

    a:hover {
        text-decoration: underline;
    }

    .alt { color: ${theme.layout.colorAlt}; }

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
