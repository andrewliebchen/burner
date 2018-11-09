import {Canvases} from '../api/canvases';
import {createContainer} from 'react-meteor-data';
import {Flex, Text} from 'rebass';
import PropTypes from 'prop-types';
import React from 'react';
import CanvasListItem from './CanvasListItem';

const CanvasList = props => (
  <Flex flexDirection="column">
    {props.canvases.length > 0 ? (
      props.canvases.map(canvas => (
        <CanvasListItem key={canvas._id} {...canvas} />
      ))
    ) : (
      <Text>No Canvases</Text>
    )}
  </Flex>
);

CanvasList.propTypes = {
  canvases: PropTypes.array,
};

export default createContainer(() => {
  return {
    canvases: Canvases.find({}, {sort: {modifiedAt: -1}}).fetch(),
  };
}, CanvasList);
