import styled, { css, keyframes } from 'styled-components';
import { duration } from './constants/animation';

const BaseItem = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const rotateIn = keyframes`
  100% { transform: translate(-50%, -50%) rotateY(360deg); }
`;

const rotateOut = keyframes`
  100% { transform: translate(-50%, -50%) rotateY(-360deg); }
`;

const flipIn = css`
  visibility: visible;
  animation: ${rotateIn} ${duration}ms linear;
`;

const flipOut = css`
  visibility: hidden;
  animation: ${rotateOut} ${duration}ms linear;
`;

export const Animation = styled(BaseItem)`
  ${({ state }) => (state === 'entering' || state === 'entered') ? flipIn : flipOut};
`;
