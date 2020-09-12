import React from 'react';
import { Wrapper, Item } from './Progress.styles';

const Progress = ({ value }) => (
  <Wrapper>
    {[...Array(value).keys()].map((key, index) => (
      <Item key={index} />
    ))}
  </Wrapper>
);

export default Progress;
