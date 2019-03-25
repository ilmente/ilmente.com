import { createContext } from 'react'

const spacingUnit = 16;
const maxWidth = 840;

const theme = {
    layout: {
        maxWidth: `${maxWidth}px`,
        fontFamilyDefault: "'Inconsolata', monospace",
        fontFamilyAlt: "'Pacifico', serif",
        fontSize: `${spacingUnit}px`,
        lineHeight: '1.5',
        color: '#333',
        colorAlt: '#bbb',
        bgColor: '#fff'
    },

    headings: {
        narrow: {
            h1: `${spacingUnit * 3.5}px`,
            h2: `${spacingUnit * 2.25}px`,
            h3: `${spacingUnit * 1.75}px`,
            h4: `${spacingUnit * 1.5}px`,
            h5: `${spacingUnit * 1.25}px`,
            h6: `${spacingUnit * 1}px`
        },

        wide: {
            h1: `${spacingUnit * 6}px`,
            h2: `${spacingUnit * 3}px`,
            h3: `${spacingUnit * 2.5}px`,
            h4: `${spacingUnit * 2}px`,
            h5: `${spacingUnit * 1.5}px`,
            h6: `${spacingUnit * 1}px`
        }
    },

    breakpoints: {
        wide: `${maxWidth}px`
    },

    spacing: (units = 1) => `${spacingUnit * units}px`
}

export default theme;

export const AccentContext = createContext({
    color: theme.layout.color,
    prevColor: theme.layout.color
})
