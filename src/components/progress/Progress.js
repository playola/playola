import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper, Item } from './Progress.styles';

const Progress = ({ value }) => (
  <Wrapper>
    {[...Array(value).keys()].map((key, index) => (
      <Item key={index} />
    ))}
  </Wrapper>
);

Progress.propTypes = {
  value: PropTypes.number,
};

Progress.defaultProps = {
  value: 10,
};

export default Progress;
