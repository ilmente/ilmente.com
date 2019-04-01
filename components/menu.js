import { useContext } from 'react'
import NextLink from 'next/link'
import css from 'styled-jsx/css'
import theme from '../theme'
import AccentContext from '../context/accent'
import RoutingContext from '../context/routing'

const style = css`
    ul {
        padding-left: 0;
    }

    li {
        display: inline-block;
        margin: 0;
        margin-right: 1rem;
        padding: 0;
    }

    li::before {
        content: none;
    }

    li:last-child {
        margin-right: 0;
    }

    .is-current {
        font-weight: bold;
    }

    @media only screen and (max-width: ${theme.breakpoints.wide}rem) {
        ul {
            padding-top: 0.5rem;
            text-align: right;
        }

        li {
            display: block;
            margin: 0;
            padding: 0.5rem 1rem;
        }

        a {
            color: ${theme.layout.bgColor};
            animation: none;
        }
    }

    @media only print {
        nav {
            display: none;
        }
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
        <nav>
            <ul>
                {menu.map(link => (
                    <li className={`${isCurrent(link.href) && 'is-current'}`} key={link.href}>
                        <NextLink href={to(link.href)} as={link.href}>
                            <a>{link.label}</a>
                        </NextLink>
                    </li>
                ))}
            </ul>
            <style jsx>{style}</style>
        </nav>
    )
}
