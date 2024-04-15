import css from 'styled-jsx/css';
import theme from '../theme';

const style = css`
  small {
    display: block;
    padding-top: 0.15rem;
    color: ${theme.layout.colorAlt};
  }
`;

const getTags = (names) => names.map((name) => `#${name}`).join(', ');

export default ({ names }) => (
  <>
    <small dangerouslySetInnerHTML={{ __html: getTags(names) }}></small>
    <style jsx>{style}</style>
  </>
);
