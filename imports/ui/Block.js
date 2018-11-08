import React from 'react';
import {Card} from 'rebass';
import PropTypes from 'prop-types';

const Block = props => (
  <Card width={1} border={1} p={3} mt={3} {...props}>
    {props.children}
  </Card>
);

Block.propTypes = {
  children: PropTypes.node,
};

export default Block;
