import React from 'react';
import { theme } from '../../common/theme';
import Progress from '../progress';
import { Wrapper, Header, FilledCircle, Title, Content, SkillWrapper, SkillName } from './Terminal.styles';

const Terminal = ({ skills }) => (
  <Wrapper>
    <Header>
      <FilledCircle color={theme.error} />
      <FilledCircle color={theme.warning} />
      <FilledCircle color={theme.success} />
      <Title><span role="img" aria-labelledby="Rocket">🚀</span> Skills</Title>
    </Header>
    <Content>
      {skills.map(({ id, name, value }) => (
        <SkillWrapper key={id}>
          <SkillName>{name}</SkillName>
          <Progress value={value} />
        </SkillWrapper>
      ))}
    </Content>
  </Wrapper>
);

export default Terminal;
