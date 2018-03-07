import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-md';

const Nav = ({ className }) => <Button icon className={className}>menu</Button>;
Nav.propTypes = {
  className: PropTypes.string,
};

export default Nav;
