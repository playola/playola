import React from 'react';
import PropTypes from 'prop-types';
import Button from '../button';
import { Wrapper, Actions } from './WorkExperience.styles';

const WorkExperience = ({ action }) => (
  <Wrapper>
    <Actions>
      <Button onClick={action}>Skills</Button>
    </Actions>
  </Wrapper>
);

WorkExperience.propTypes = {
  action: PropTypes.func,
};

WorkExperience.defaultProps = {
  action: () => {},
};

export default WorkExperience;
