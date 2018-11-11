import React from 'react';
import {Card, Text} from 'rebass';
import PropTypes from 'prop-types';

const Block = props => (
  <Card
    width={1}
    p={3}
    borderRadius={4}
    mt={2}
    border={props.bg ? 0 : 1}
    {...props}>
    <Text fontWeight="bold" mb={1}>
      {props.title}
    </Text>
    {props.children}
  </Card>
);

Block.propTypes = {
  children: PropTypes.node,
  bg: PropTypes.string,
  title: PropTypes.string,
};

export default Block;
