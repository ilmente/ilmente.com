import { useContext } from 'react'
import NextLink from 'next/link'
import css from 'styled-jsx/css'
import theme from '../theme'
import Section from '../components/section'
import Panel from '../components/panel'
import AccentContext from '../context/accent'
import RoutingContext from '../context/routing'

const defaultStyle = css`
    ul {
        display: block;
    }

    li {
        display: inline-block;
        margin-right: ${theme.spacing()};
    }

    li:last-child {
        margin-right: 0;
    }

    .is-current {
        font-weight: bold;
    }
`

export default ({ menuId }) => {
    const { color } = useContext(AccentContext)
    const { path } = useContext(RoutingContext)
    const menu = process.env.menus[menuId];

    const to = (href) => ({
        pathname: href,
        query: { color }
    })

    const isCurrent = (href) => path === href

    return (
        <Section>
            <nav>
                <Panel>
                    <ul>
                        {menu.map(link => (
                            <li className={`${isCurrent(link.href) && 'is-current'}`} key={link.href}>
                                <NextLink href={to(link.href)} as={link.href}>
                                    <a>{link.label}</a>
                                </NextLink>
                            </li>
                        ))}
                    </ul>
                </Panel>
            </nav>
            <style jsx>{defaultStyle}</style>
        </Section>
    )
}
