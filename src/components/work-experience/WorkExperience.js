import React from 'react';
import PropTypes from 'prop-types';
import Button from '../button';
import {
  Wrapper,
  Header,
  Title,
  Content,
  JobContainer,
  Logo,
  JobInformation,
  Actions,
} from './WorkExperience.styles';

const WorkExperience = ({ jobs, action }) => (
  <Wrapper>
    <Header>
      <Title><span role="img" aria-labelledby="Nerd">🤓</span> Work experience</Title>
    </Header>
    <Content>
      {jobs.map(({ id, name, position, period, location, logo }) => (
        <JobContainer key={id}>
          <Logo src={logo} alt={name} />
          <JobInformation>
            <span>{position}</span>
            <span>{period} ({location})</span>
          </JobInformation>
        </JobContainer>
      ))}
    </Content>
    <Actions>
      <Button onClick={action}>Skills</Button>
    </Actions>
  </Wrapper>
);

WorkExperience.propTypes = {
  jobs: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    name: PropTypes.string,
    logo: PropTypes.string,
  })).isRequired,
  action: PropTypes.func,
};

WorkExperience.defaultProps = {
  action: () => {},
};

export default WorkExperience;
