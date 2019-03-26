import { createContext } from 'react'

const maxWidth = 840;

const theme = {
    layout: {
        maxWidth: `${maxWidth}px`,
        fontFamilyDefault: "'Inconsolata', monospace",
        fontFamilyAlt: "'Pacifico', serif",
        fontSize: '1rem',
        lineHeight: '1.5',
        color: '#333',
        colorAlt: '#bbb',
        bgColor: '#fff'
    },

    headings: {
        narrow: {
            h1: '3.5rem',
            h2: '2.25rem',
            h3: '1.75rem',
            h4: '1.5rem',
            h5: '1.25rem',
            h6: '1rem'
        },

        wide: {
            h1: '6rem',
            h2: '3rem',
            h3: '2.5rem',
            h4: '2rem',
            h5: '1.5rem',
            h6: '1rem'
        }
    },

    breakpoints: {
        wide: `${maxWidth}px`
    }
}

export default theme;

export const AccentContext = createContext({
    color: theme.layout.color,
    prevColor: theme.layout.color
})
