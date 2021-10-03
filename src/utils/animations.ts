import { css, keyframes } from "styled-components";

export const shake = keyframes`
  0% { transform: translate(1px, 1px) rotate(0deg); }
  10% { transform: translate(-1px, -2px) rotate(-1deg); }
  20% { transform: translate(-3px, 0px) rotate(1deg); }
  30% { transform: translate(3px, 2px) rotate(0deg); }
  40% { transform: translate(1px, -1px) rotate(1deg); }
  50% { transform: translate(-1px, 2px) rotate(-1deg); }
  60% { transform: translate(-3px, 1px) rotate(0deg); }
  70% { transform: translate(3px, 1px) rotate(-1deg); }
  80% { transform: translate(-1px, -1px) rotate(1deg); }
  90% { transform: translate(1px, 2px) rotate(0deg); }
  100% { transform: translate(1px, -2px) rotate(-1deg); }
`;

export const shaking = css`
  animation: ${shake} 0.5s;
`;

export const translate = keyframes`
  from {
    transform: translate(200px);
    transform-origin: right center;
  }
  to {
    transform: scale(1);
  }
`;

export const onHoverHighlight = css`
  filter: brightness(2);
  transform: scale(1.1);
  transition: ease-in 0.2s;
`;

export const spin = (init, final) => keyframes`
  from {
    transform: rotate(${init}deg);
  }
  to {
    transform: rotate(${final}deg);
  }
`;

export const blacked = css`
  filter: grayscale(0.9);
  transform: rotate(160deg);
`;
