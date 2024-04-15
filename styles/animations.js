import { useContext } from 'react';
import AccentContext from '../libs/accent-context';

export const animate = (name) => `animation: ${name} 1s linear forwards;`;

export default () => {
  const { color, prevColor } = useContext(AccentContext);
  return (
    <>
      <style jsx global>{`
        @keyframes fadeColor {
          0% {
            color: ${prevColor};
          }
          100% {
            color: ${color};
          }
        }

        @keyframes fadeBorderColor {
          0% {
            border-color: ${prevColor};
          }
          100% {
            border-color: ${color};
          }
        }

        @keyframes fadeBgColor {
          0% {
            background-color: ${prevColor};
          }
          100% {
            background-color: ${color};
          }
        }
      `}</style>
    </>
  );
};
