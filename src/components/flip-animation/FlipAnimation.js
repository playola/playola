import React from 'react';
import PropTypes from 'prop-types';
import { Transition } from 'react-transition-group';
import { duration } from './constants/animation';
import { Animation } from './FlipAnimation.styles';

const FlipAnimation = ({ children, in: inProp }) => (
  <Transition in={inProp} timeout={duration}>
    {state => <Animation state={state}>{children}</Animation>}
  </Transition>
);

FlipAnimation.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.arrayOf(PropTypes.node)]).isRequired,
  in: PropTypes.bool,
};

FlipAnimation.defaultProps = {
  in: false,
};

export default FlipAnimation;
