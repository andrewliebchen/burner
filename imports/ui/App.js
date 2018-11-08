import React from 'react';
import {createContainer} from 'react-meteor-data';
import {Canvases} from '../api/canvases';
import {Elements} from '../api/elements';
import PropTypes from 'prop-types';
import {Box, Button, Flex, Text} from 'rebass';
import {ChevronRight} from 'react-feather';

const App = props => (
  <Flex flexDirection="column">
    <Flex width={1} p={2} alignItems="center">
      <Text p={2}>Projects</Text>
      <ChevronRight />
      <Text p={2}>Canvases</Text>
      <ChevronRight />
      <Text p={2}>Canvas</Text>
      <Text p={2}>Workshop</Text>
      <Text p={2}>Pair & Share</Text>
    </Flex>
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

App.propTypes = {
  canvases: PropTypes.array,
  elements: PropTypes.array,
};

export default createContainer(() => {
  return {
    canvases: Canvases.find({}).fetch(),
    elements: Elements.find({}).fetch(),
  };
}, App);
