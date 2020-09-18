import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 600px;
  min-height: 300px;
  background-color: white;
  border-radius: 8px;
  font-family: monospace;
  margin: 16px 0;
  border: 1px solid ${({ theme }) => theme.primary};
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.primary};
  color: white;
  border-radius: 6px 6px 0 0;
  padding: 8px 16px;
`;

export const Title = styled.span`
  width: 100%;
  text-align: center;
  font-size: 16px;
`;

export const Content = styled.div`
  padding: 16px;
  font-size: 16px;
`;

export const JobContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 32px;
`;

export const Logo = styled.img`
  width: 100px;
  margin-right: 16px;
`;

export const JobInformation = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Actions = styled.div`
  position: absolute;
  bottom: 32px;
  right: 16px;
  text-align: right;
`;
