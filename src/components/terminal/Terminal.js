import React from 'react';
import PropTypes from 'prop-types';
import Progress from '../progress';
import Button from '../button';
import {
  Wrapper,
  Header,
  FilledCircle,
  Title,
  Content,
  SkillWrapper,
  SkillName,
  Actions,
} from './Terminal.styles';

const Terminal = ({ skills, action }) => (
  <Wrapper>
    <Header>
      <FilledCircle color="error" />
      <FilledCircle color="warning" />
      <FilledCircle color="success" />
      <Title><span role="img" aria-labelledby="Rocket">🚀</span> Skills</Title>
    </Header>
    <Content>
      {skills.map(({ id, name, value }) => (
        <SkillWrapper key={id}>
          <SkillName>{name}</SkillName>
          <Progress value={value} />
        </SkillWrapper>
      ))}
      <Actions>
        <Button onClick={action}>Work Experience</Button>
      </Actions>
    </Content>
  </Wrapper>
);

Terminal.propTypes = {
  skills: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    name: PropTypes.string,
    value: PropTypes.number,
  }).isRequired,
  action: PropTypes.func,
};

Terminal.defaultProps = {
  action: () => {},
};

export default Terminal;
