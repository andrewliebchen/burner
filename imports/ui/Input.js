import React from 'react';
import {Flex, Text} from 'rebass';
import PropTypes from 'prop-types';

const Input = props => (
  <Flex>
    <Text>{props.label}</Text>
    <input type="text" {...props} />
  </Flex>
);

Input.propTypes = {
  label: PropTypes.string,
};

export default Input;
