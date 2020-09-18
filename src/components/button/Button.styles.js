import styled, { css } from 'styled-components';

export const ButtonWrapper = styled.button`${({ theme }) => 
  css`
    padding: 8px 16px;
    color: white;
    background-color: ${theme.gray};
    outline-color: ${theme.gray};
    border: none;
    border-radius: 24px;

    &:hover {
      cursor: pointer;
      background-color: ${theme.lighterGray};
    }
  `}
`;
