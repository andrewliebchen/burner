import React from 'react';
import {Box, Flex, Text} from 'rebass';
import {createContainer} from 'react-meteor-data';
import {Canvases} from '../api/canvases';
import {Elements} from '../api/elements';
import PropTypes from 'prop-types';
import Block from './Block';
import Impacts from './Impacts';

const Canvas = props => (
  <div>
    {props.canvas ? (
      <Flex flexDirection="column">
        <Block bg={props.canvas.style.base}>
          <Box>
            <Text mb={1} color={props.canvas.style.color} fontWeight="bold">
              Problem Statement
            </Text>
            <Text fontSize={4} color={props.canvas.style.color}>
              Exercitation incididunt est minim exercitation velit ipsum Lorem
              mollit qui consectetur quis.
            </Text>
          </Box>
        </Block>
        <Impacts {...props} />
        <Block title="Success Measures">These are success measures.</Block>
        <Block title="Scenarios">These are scenarios.</Block>
      </Flex>
    ) : (
      <div>Loading</div>
    )}
  </div>
);

Canvas.propTypes = {
  canvas: PropTypes.shape({
    modifiedAt: PropTypes.number,
    problemStatement: PropTypes.string,
    style: PropTypes.shape({
      base: PropTypes.string,
      color: PropTypes.string,
    }),
  }),
  elements: PropTypes.array,
};

export default createContainer(props => {
  const canvasId = props.match.params.id;
  return {
    canvas: Canvases.findOne(canvasId),
    elements: Elements.find({canvasId: canvasId}).fetch(),
  };
}, Canvas);
