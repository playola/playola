import React from 'react';
import { skills } from '../common/constants';
import Terminal from '../components/terminal';

const Application = () => (
  <div>
    <Terminal skills={skills} />
  </div>
);

export default Application;
