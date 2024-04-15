const modifiers = [
  'top',
  'bottom',
  'left',
  'right',
  'center',
  'middle',
  'justify',
  'stretch',
  'nowrap',
];

const getClassNames = (props) =>
  modifiers.filter((modifier) => !!props[modifier]).join(' ');

export default ({ children, className, ...props }) => (
  <div className={`row ${getClassNames(props)} ${className}`}>{children}</div>
);
