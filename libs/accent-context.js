import { createContext } from 'react';
import theme from '../theme';

export default createContext({
  color: theme.layout.color,
  prevColor: theme.layout.color,
});
