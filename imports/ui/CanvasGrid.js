import React from 'react';
import PropTypes from 'prop-types';
import {createContainer} from 'react-meteor-data';
import {Canvases} from '../api/canvases';
import {Link} from 'react-router-dom';
import {Flex, Box, Text} from 'rebass';

const CanvasGrid = props => (
  <Flex>
    {props.canvases.length > 0 ? (
      props.canvases.map(canvas => (
        <Link key={canvas._id} to={`canvases/${canvas._id}`}>
          <Box>
            <Text>{canvas._id}</Text>
          </Box>
        </Link>
      ))
    ) : (
      <Text>No Canvases</Text>
    )}
  </Flex>
);

CanvasGrid.propTypes = {
  canvases: PropTypes.array,
};

export default createContainer(() => {
  return {
    canvases: Canvases.find({}).fetch(),
  };
}, CanvasGrid);
