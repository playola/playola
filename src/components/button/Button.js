import React from 'react';
import PropTypes from 'prop-types';
import { themeKeys } from '../../application/styles/theme';
import { ButtonWrapper } from './Button.styles';

const Button = ({ children, color, ...props }) => (
  <ButtonWrapper color={color} {...props}>{children}</ButtonWrapper>
);

Button.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.arrayOf(PropTypes.node)]).isRequired,
  color: PropTypes.oneOf(themeKeys),
};

Button.defaultProps = {
  color: 'primary',
};

export default Button;
