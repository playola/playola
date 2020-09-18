import styled, { css } from 'styled-components';
import { lighten } from 'polished';

export const ButtonWrapper = styled.button`
  ${({ theme, color }) => {
    const selectedColor = theme[color] || theme.gray;
    return css`
      padding: 8px 16px;
      color: white;
      background-color: ${selectedColor};
      outline-color: ${selectedColor};
      border: none;
      border-radius: 24px;

      &:hover {
        cursor: pointer;
        background-color: ${lighten(0.05, selectedColor)};
      }
    `;
  }}
`;
