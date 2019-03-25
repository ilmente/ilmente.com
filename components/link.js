import transition from './hoc/transition'

export const Address = ({ children, ...props }) => (
    <a {...props}>{children}</a>
)

export default (props) => transition(Address, ['color'])(props)
