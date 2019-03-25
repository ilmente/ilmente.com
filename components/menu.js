import { useContext } from 'react'
import NextLink from 'next/link'
import css from 'styled-jsx/css'
import theme, { AccentContext } from '../theme'
import Section from '../components/section'
import Panel from '../components/panel'
import Link from './link'

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

export default ({ currentPath, menuId }) => {
    const { color } = useContext(AccentContext)
    const menu = process.env.menus[menuId];

    const to = (href) => ({
        pathname: href,
        query: { color }
    })

    const isCurrent = (href) => currentPath === href

    return (
        <Section>
            <nav>
                <Panel>
                    <ul>
                        {menu.map(link => (
                            <li className={`${isCurrent(link.href) && 'is-current'}`} key={link.href}>
                                <NextLink href={to(link.href)} as={link.href}>
                                    <Link>
                                        {link.label}
                                    </Link>
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
