import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 600px;
  min-height: 300px;
  background-color: ${({ theme }) => theme.darkerGray};
  border-radius: 8px;
  font-family: monospace;
  margin: 16px 0;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.lighterGray};
  border-radius: 8px 8px 0 0;
  padding: 8px 16px;
`;

export const FilledCircle = styled.div`
  width: 16px;
  height: 16px;
  background-color: ${({ theme, color }) => theme[color] || 'black'};
  border-radius: 50%;
  margin-right: 8px;
`;

export const Title = styled.span`
  color: #555;
  font-size: 16px;
  margin-left: 16px;
  width: 65%;
  text-align: center;
`;

export const Content = styled.div`
  padding: 16px;
  color: #dadada;
  font-size: 16px;
`;

export const SkillWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 8px;
`;

export const SkillName = styled.span`
  min-width: 140px;
`;

export const Actions = styled.div`
  position: absolute;
  bottom: 32px;
  right: 16px;
  text-align: right;
`;
