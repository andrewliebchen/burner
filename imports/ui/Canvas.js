import {Box, Flex, Text} from 'rebass';
import {Canvases} from '../api/canvases';
import {createContainer} from 'react-meteor-data';
import Block from './Block';
import ImpactsList from './ImpactsList';
import PropTypes from 'prop-types';
import React from 'react';
import Timer from './Timer';
import SuccessMeasuresList from './SuccessMeasuresList';

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
        <ImpactsList {...props} />
        <SuccessMeasuresList {...props} />
        <Block title="Scenarios">These are scenarios.</Block>
        {/* <Timer
          canvasId={props.canvas._id}
          timerStarted={props.canvas.timerStarted}
        /> */}
      </Flex>
    ) : (
      <div>Loading</div>
    )}
  </div>
);

Canvas.propTypes = {
  canvas: PropTypes.shape({
    _id: PropTypes.string,
    modifiedAt: PropTypes.number,
    problemStatement: PropTypes.string,
    // timerStarted: PropTypes.boolean,
    style: PropTypes.shape({
      base: PropTypes.string,
      color: PropTypes.string,
    }),
  }),
};

export default createContainer(props => {
  const canvasId = props.match.params.id;
  return {
    canvas: Canvases.findOne(canvasId),
  };
}, Canvas);
