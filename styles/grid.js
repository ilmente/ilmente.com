import css from 'styled-jsx/css';
import theme from '../theme';

const getWidth = (size) =>
  `calc(${(100 / theme.grid.columns) * size}% - ${theme.grid.gutter}rem)`;

const generateColStyles = (breakpoint = 'default') =>
  Array(theme.grid.columns)
    .fill(`.col.col-${breakpoint}`)
    .map(
      (className, index) =>
        `${className}-${index + 1}{width: ${getWidth(index + 1)};}`
    )
    .join('');

const generateColStylesForBreakpoints = () =>
  Object.keys(theme.breakpoints)
    .map(
      (breakpoint) =>
        `@media only screen and (min-width:${
          theme.breakpoints[breakpoint]
        }rem){${generateColStyles(breakpoint)}}`
    )
    .join('');

const style = css.global`
  .row {
    display: flex;
    flex-flow: row wrap;
    align-items: flex-start;
    justify-content: flex-start;
    width: 100%;
    margin: -${theme.grid.gutter / 2}rem;
    clear: both;
  }

  .top {
    align-items: flex-start;
  }
  .bottom {
    align-items: flex-end;
  }
  .left {
    justify-content: flex-start;
  }
  .right {
    justify-content: flex-end;
  }
  .center {
    justify-content: center;
  }
  .middle {
    align-items: center;
  }
  .justify {
    justify-content: space-between;
  }
  .stretch {
    align-items: stretch;
  }
  .nowrap {
    flex-wrap: nowrap;
  }

  .col {
    flex-grow: 0;
    flex-basis: auto;
    margin: ${theme.grid.gutter / 2}rem;
  }

  ${generateColStyles()}
  ${generateColStylesForBreakpoints()}

    @media only print {
    ${generateColStyles('print')}
  }
`;

export default () => (
  <>
    <style jsx>{style}</style>
  </>
);
