import React from 'react';
import {Box, Flex, Text} from 'rebass';
import {createContainer} from 'react-meteor-data';
import {Canvases} from '../api/canvases';
import {Elements} from '../api/elements';
import PropTypes from 'prop-types';

const Canvas = props => (
  <Flex flexDirection="column">
    <Flex width={1} p={3}>
      <Box>
        <Text mb={1}>Problem Statement</Text>
        <Text fontSize={4}>
          Exercitation incididunt est minim exercitation velit ipsum Lorem
          mollit qui consectetur quis.
        </Text>
      </Box>
    </Flex>
    <Flex width={1}>
      <Flex width={1 / 5} p={3} flexDirection="column">
        <Box p={2} bg="blue">
          <Text color="white">Impacts</Text>
        </Box>
        <Box p={2}>
          <Text>Success Measures</Text>
        </Box>
        <Box p={2}>
          <Text>Scenarios</Text>
        </Box>
      </Flex>
      <Flex width={4 / 5} p={3}>
        Main
      </Flex>
    </Flex>
  </Flex>
);

Canvas.propTypes = {
  id: PropTypes.number,
  canvases: PropTypes.array,
  elements: PropTypes.array,
};

export default createContainer(props => {
  const canvasId = props.match.params.id;
  return {
    canvas: Canvases.find({_id: canvasId}).fetch(),
    elements: Elements.find({canvas: canvasId}).fetch(),
  };
}, Canvas);
