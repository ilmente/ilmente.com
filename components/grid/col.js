import theme from '../../theme';

const breakpoints = ['default', 'print', ...Object.keys(theme.breakpoints)];

const getColClassNames = (props) =>
  breakpoints
    .filter((breakpoint) => !!props[breakpoint])
    .map((breakpoint) => `col-${breakpoint}-${props[breakpoint]}`)
    .join(' ');

export default ({ children, className, ...props }) => (
  <div className={`col ${getColClassNames(props)} ${className}`}>
    {children}
  </div>
);
