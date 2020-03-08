import React from 'react';
import PropTypes from 'prop-types';
import icons from './icons';

const Icon = ({ icon, onClick = null, className, colour = '', ...rest }) => (
  <i
    className={`icon ${colour && `icon--${colour}`} ${className ||
      ''} ${(icon && `fa fa-${icon.toLowerCase()}`) || ''} ${(icons[
      icon.toLowerCase()
    ] &&
      `icon__custom icon__custom--${icon.toLowerCase()}`) ||
      ''}`}
    onClick={onClick}
    {...rest}
  >
    {icons[icon.toLowerCase()] && icons[icon.toLowerCase()]}
  </i>
);

Icon.propTypes = {
  /** icon string  */
  icon: PropTypes.string.isRequired,
  /** colour string */
  colour: PropTypes.string,
  /** className string */
  className: PropTypes.string,
  /** onClick function */
  onClick: PropTypes.func,
};

Icon.defaultProps = {
  onClick: () => {},
  colour: '',
  className: '',
};

export default Icon;
