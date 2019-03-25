import css from 'styled-jsx/css'

const style = css`
    .container {
        display: block;
        padding: 20px;
    }

    .loader {
        display: inline-block;
        position: relative;
        width: 32px;
        height: 32px;
    }

    .loader > span {
        position: absolute;
        border: 3px solid #aaa;
        opacity: 1;
        border-radius: 50%;
        animation: loader 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;
    }

    .loader > span:nth-child(2) {
        animation-delay: -0.5s;
    }

    @keyframes loader {
        0% {
            top: 12px;
            left: 12px;
            width: 0;
            height: 0;
            opacity: 1;
        }
        100% {
            top: -1px;
            left: -1px;
            width: 25px;
            height: 25px;
            opacity: 0;
        }
    }
`

export default ({ visible }) => visible && (
    <span className="container">
        <span className="loader">
            <span></span>
            <span></span>
        </span>
        <style jsx>{style}</style>
    </span>
)
