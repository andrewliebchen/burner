import React from "react";
import { Flex, Text } from "rebass";
import PropTypes from "prop-types";
import styled from "styled-components";

const Element = styled.input`
  appearance: none;
  border: 0;
  border-bottom: 1px solid;
  padding: 0 0 0.5em 0;
  margin-bottom: -0.5em;
  font-size: 1em;

  &:focus {
    border-color: ${props => props.color};
    outline: 0;
  }
`;

const Input = props => (
  <Flex flexDirection="column" width={1}>
    <Text>{props.label}</Text>
    <Element type="text" {...props} />
  </Flex>
);

Input.defaultProps = {
  color: "blue"
};

Input.propTypes = {
  label: PropTypes.string,
  color: PropTypes.string
};

export default Input;
