import {Canvases} from '../api/canvases';
import {createContainer} from 'react-meteor-data';
import {Flex, Box, Text, Card} from 'rebass';
import {Link} from 'react-router-dom';
import {Trash} from 'react-feather';
import PropTypes from 'prop-types';
import React from 'react';
import TimeAgo from 'react-timeago';

const CanvasGrid = props => (
  <Flex flexDirection="column">
    {props.canvases.length > 0 ? (
      props.canvases.map(canvas => (
        <Card key={canvas._id} width={1} border={1} p={3} mt={3}>
          <Text>
            <TimeAgo date={canvas.modifiedAt} />
          </Text>
          <Link to={`canvases/${canvas._id}`}>
            <Text>{canvas._id}</Text>
          </Link>
          <Trash
            onClick={() =>
              window.confirm('Are you sure you want to delete this canvas?') &&
              Canvases.remove(canvas._id)
            }
          />
        </Card>
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
    canvases: Canvases.find({}, {sort: {modifiedAt: -1}}).fetch(),
  };
}, CanvasGrid);
