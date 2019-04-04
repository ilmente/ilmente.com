import css from 'styled-jsx/css'
import { animate } from '../styles/animations'

const style = css`
    .hamburger {
        display: inline-block;
        position: relative;
        width: 24px;
        height: 18px;
        margin: 0 auto;
        cursor: pointer;
    }

    .bar {
        display: block;
        position: absolute;
        left: 0;
        width: 100%;
        height: 4px;
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
        margin-top: -2px;
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

    .is-open .bar-1 {
        top: 50%;
    }

    .is-open .bar-2 {
        transform: rotate(45deg);
    }

    .is-open .bar-3 {
        transform: rotate(-45deg);
    }

    .is-open .bar-4 {
        bottom: 50%;
    }
`

export default ({ open }) => (
    <span className={`hamburger ${open && 'is-open'}`}>
        <span className="bar bar-1"></span>
        <span className="bar bar-2"></span>
        <span className="bar bar-3"></span>
        <span className="bar bar-4"></span>
        <style jsx>{style}</style>
    </span>
)
