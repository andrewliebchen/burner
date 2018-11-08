import {Canvases} from '../api/canvases';
import {createContainer} from 'react-meteor-data';
import {Flex, Box, Text, Card} from 'rebass';
import {Link} from 'react-router-dom';
import {Trash} from 'react-feather';
import PropTypes from 'prop-types';
import React from 'react';
import TimeAgo from 'react-timeago';
import Block from './Block';

const CanvasList = props => (
  <Flex flexDirection="column">
    {props.canvases.length > 0 ? (
      props.canvases.map(canvas => (
        <Block key={canvas._id}>
          <Text>
            <TimeAgo date={canvas.modifiedAt} />
          </Text>
          <Link to={`canvases/${canvas._id}`}>
            <Text>{canvas.problemStatement}</Text>
          </Link>
          <Trash
            onClick={() =>
              window.confirm('Are you sure you want to delete this canvas?') &&
              Canvases.remove(canvas._id)
            }
          />
        </Block>
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
