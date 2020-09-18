import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import Terminal from '../components/terminal';
import WorkExperience from '../components/work-experience';
import FlipAnimation from '../components/flip-animation';
import { skills } from './constants/skills';
import { jobs } from './constants/jobs';
import { theme } from './styles/theme';

const Application = () => {
  const [animate, setAnimate] = useState(false);

  const doAnimate = () => setAnimate(!animate);

  return (
    <ThemeProvider theme={theme}>
      <FlipAnimation in={!animate}>
        <Terminal skills={skills} action={doAnimate} />
      </FlipAnimation>
      <FlipAnimation in={animate}>
        <WorkExperience jobs={jobs} action={doAnimate} />
      </FlipAnimation>
    </ThemeProvider>
  );
};

export default Application;
