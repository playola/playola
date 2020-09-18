import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  margin: 0 8px;
`;

export const Item = styled.div`
  width: 10px;
  height: 20px;
  background-color: ${({ theme }) => theme.gray};
  border-radius: 2px;
  margin-right: 4px;
`;
