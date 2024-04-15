import css from 'styled-jsx/css';
import Section from '../components/section';
import theme from '../theme';
import { animate } from '../styles/animations';

const style = css`
  header {
    margin-bottom: 2rem;
    padding-top: 10rem;
    border-top: 1rem solid ${theme.layout.bgColor};
    ${animate('fadeBorderColor')}
  }

  @media only print {
    header {
      margin-bottom: 0rem;
      padding-top: 0rem;
      border-top: none;
    }
  }
`;

export default ({ children }) => (
  <header>
    <Section>{children}</Section>
    <style jsx>{style}</style>
  </header>
);
