import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 600px;
  min-height: 300px;
  background-color: ${({ theme }) => theme.darkerGray};
  border-radius: 8px;
  font-family: monospace;
  margin: 16px 0;
`;

export const Actions = styled.div`
  text-align: right;
`;
