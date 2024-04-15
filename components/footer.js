import css from 'styled-jsx/css';
import Section from '../components/section';
import Panel from '../components/panel';
import theme from '../theme';

const style = css`
  footer {
    padding-top: 4rem;
    color: ${theme.layout.colorAlt};
    text-align: right;
  }

  @media only print {
    footer {
      display: none;
    }
  }
`;

export default ({ children }) => (
  <footer>
    <Section>
      <Panel right>{children}</Panel>
    </Section>
    <style jsx>{style}</style>
  </footer>
);
