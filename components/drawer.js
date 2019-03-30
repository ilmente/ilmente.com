import { useState } from 'react'
import css from 'styled-jsx/css'
import Menu from '../components/menu'
import Hamburger from '../components/hamburger'
import theme from '../theme'
import { animate } from '../styles/screen'

const style = css`
    div {
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        transition: transform 500ms;
    }

    aside {
        position: absolute;
        top: 0;
        bottom: 0;
        right: -${theme.layout.drawerWidth}rem;
        overflow-x: hidden;
        width: ${theme.layout.drawerWidth}rem;
        overflow-y: auto;
        ${animate('fadeBgColor')}
    }

    section {
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        overflow-y: auto;
    }

    a {
        position: absolute;
        top: 2rem;
        right: 1rem;
    }

    @media only screen and (max-width: ${theme.breakpoints.wide}rem) {
        .is-open {
            transform: translateX(-${theme.layout.drawerWidth}rem);
        }

        .is-open section {
            overflow-y: hidden;
        }
    }

    @media only screen and (min-width: ${theme.breakpoints.wide}rem) {
        a {
            display: none;
        }
    }

    @media only print {
        div {
            position: static;
            transition: none;
        }

        section {
            position: static;
            overflow: initial;
        }

        aside, a {
            display: none;
        }

        .is-open {
            position: static;
            transform: none;
        }
    }
`

export default ({ children }) => {
    const [isOpen, setOpen] = useState(false)
    const onClick = () => setOpen(!isOpen)

    return (
        <div className={isOpen ? 'is-open' : ''}>
            <aside>
                <Menu menuId="main" />
            </aside>
            <section>
                <a onClick={onClick}>
                    <Hamburger open={isOpen} />
                </a>
                {children}
            </section>
            <style jsx>{style}</style>
        </div>
    )
}
