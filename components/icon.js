import css from 'styled-jsx/css';

const style = css`
  svg {
    display: inline-block;
    user-select: none;
    vertical-align: text-bottom;
  }
`;

export default ({ name, color, className, size = 1 }) => (
  <svg className={className}>
    <use xlinkHref={`#:${name}`} />
    <style jsx>{style}</style>
    <style jsx>{`
      svg {
        width: ${size}rem;
        height: ${size}rem;
        fill: ${color ? color : 'currentColor'};
      }
    `}</style>
  </svg>
);
