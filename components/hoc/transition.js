import { useState, useContext } from 'react'
import { AccentContext } from '../../theme'

const createStyle = (rules, color) => rules.reduce((style, rule) => {
    style[rule] = color
    return style
}, {})

export default (WrappedComponent, rules) => {
    const { color, prevColor } = useContext(AccentContext)
    const fromStyle = createStyle(rules, prevColor)
    const toStyle = createStyle(rules, color)

    const [isChanged, setIsChanged] = useState(false)
    const [style, setStyle] = useState(fromStyle)

    if (process.browser && !isChanged) {
        setTimeout(() => {
            setIsChanged(true)
            setStyle(toStyle)
        })
    }

    return ({ originalStyle, ...props }) => (
        <WrappedComponent {...props} style={{
            ...originalStyle,
            ...style,
            transition: 'all 500ms'
        }} />
    )
}
