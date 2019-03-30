import css from 'styled-jsx/css'
import theme from '../theme'
import { animate } from '../styles/screen'

const style = css`
    .hamburger {
        display: inline-block;
        position: relative;
        margin: 0 auto;
        cursor: pointer;
    }

    .bar {
        display: block;
        position: absolute;
        left: 0;
        width: 100%;
        opacity: 1;
        transform: rotate(0deg);
        transition: all 250ms ease-in-out;
        ${animate('fadeBgColor')}
    }

    .bar-1 {
        top: 0rem;
    }

    .bar-2,
    .bar-3 {
        top: 50%;
        bottom: 50%;
    }

    .bar-4 {
        bottom: 0rem;
    }

    .is-open .bar-1,
    .is-open .bar-4 {
        opacity: 0;
        width: 0%;
        left: 50%;
    }

    .is-open .bar-2 {
        transform: rotate(45deg);
    }

    .is-open .bar-3 {
        transform: rotate(-45deg);
    }
`

export default ({ open, size = 1.5 }) => (
    <span className={`hamburger ${open && 'is-open'}`}>
        <span className="bar bar-1"></span>
        <span className="bar bar-2"></span>
        <span className="bar bar-3"></span>
        <span className="bar bar-4"></span>
        <style jsx>{style}</style>
        <style jsx>{`
            .hamburger {
                width: ${size}rem;
                height: ${(size / 4) * 3}rem;
            }

            .bar {
                height: ${(size / 20) * 3}rem;
            }

            .bar-2,
            .bar-3 {
                margin-top: -${(size / 40) * 3}rem;
            }

            .is-open .bar-1 {
                top: ${(size / 4) * 1}rem;
            }

            .is-open .bar-4 {
                bottom: ${(size / 4) * 1}rem;
            }
        `}</style>
    </span>
)
