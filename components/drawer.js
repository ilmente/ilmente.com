import { useState } from 'react'
import css from 'styled-jsx/css'
import Menu from '../components/menu'
import Icon from '../components/icon'
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

    .is-open {
        transform: translateX(-${theme.layout.drawerWidth}rem);
    }

    aside {
        position: absolute;
        top: 0;
        bottom: 0;
        right: -${theme.layout.drawerWidth}rem;
        overflow-x: hidden;
        width: ${theme.layout.drawerWidth}rem;
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

    .is-open section {
        overflow-y: hidden;
    }

    a {
        position: absolute;
        top: 1.75rem;
        right: 1rem;
    }

    @media only print {
        aside, a {
            display: none;
        }

        .is-open {
            position: absolute;
            transform: 0;
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
                <a className="view-default" onClick={onClick}>
                    <Icon name="bars" />
                </a>
                {children}
            </section>
            <style jsx>{style}</style>
        </div>
    )
}
